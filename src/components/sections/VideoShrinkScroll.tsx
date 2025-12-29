import { useEffect, useRef } from "react";
import video from "../../assets/Wide Horizons- intro.mp4";

const VideoShrinkScroll = () => {
  const videoSectionRef = useRef<HTMLDivElement | null>(null);
  const videoWrapperRef = useRef<HTMLDivElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const scrollProgress = useRef(0);
  const targetScrollProgress = useRef(0);
  const isMobile = useRef(false);
  const animationFrame = useRef<number | null>(null);

  /* ---------------------------
     Inject styles (unchanged)
  ---------------------------- */
  useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = `
      body {
        margin: 0;
        padding: 0;
        background-color: white;
      }

      .video-section {
        position: relative;
        height: 200vh;
      }

      .sticky-container {
        position: sticky;
        top: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: white;
        overflow: hidden;
        height: 100vh;
        width: 100%;
      }

      .video-wrapper {
        position: relative;
        overflow: hidden;
        will-change: transform;
      }

      .video-wrapper video {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  /* ---------------------------
     Helpers
  ---------------------------- */
  const checkMobile = () => {
    isMobile.current = window.innerWidth < 768;
  };

  const lerp = (start: number, end: number, factor: number) =>
    start + (end - start) * factor;

  /* ---------------------------
     Scroll logic (unchanged)
  ---------------------------- */
  const handleScroll = () => {
    if (!videoSectionRef.current) return;

    const rect = videoSectionRef.current.getBoundingClientRect();
    const sectionHeight = videoSectionRef.current.offsetHeight;
    const windowHeight = window.innerHeight;

    if (rect.top <= 0 && rect.bottom >= windowHeight) {
      const scrolled = Math.abs(rect.top);
      const maxScroll = sectionHeight - windowHeight;
      const rawProgress = Math.min(scrolled / maxScroll, 1);

      const animationDuration = 0.7;
      targetScrollProgress.current =
        rawProgress <= animationDuration
          ? rawProgress / animationDuration
          : 1;
    } else if (rect.top > 0) {
      targetScrollProgress.current = 0;
    } else {
      targetScrollProgress.current = 1;
    }
  };

  /* ---------------------------
     Animation loop (unchanged)
  ---------------------------- */
  const animate = () => {
    scrollProgress.current = lerp(
      scrollProgress.current,
      targetScrollProgress.current,
      0.1
    );

    const w = window.innerWidth;
    const h = window.innerHeight;

    let videoWidth: number;
    let videoHeight: number;
    let borderRadius: number;

    if (isMobile.current) {
      const targetWidth = 280;
      const targetHeight = 500;

      videoWidth = w - scrollProgress.current * (w - targetWidth);
      videoHeight = h - scrollProgress.current * (h - targetHeight);
      borderRadius = scrollProgress.current * 32;
    } else {
      const targetWidth = w < 1024 ? 400 : 320;
      const targetHeight = w < 1024 ? 600 : 580;

      videoWidth = w - scrollProgress.current * (w - targetWidth);
      videoHeight = h - scrollProgress.current * (h - targetHeight);
      borderRadius = scrollProgress.current * 40;
    }

    if (videoWrapperRef.current) {
      videoWrapperRef.current.style.width = `${videoWidth}px`;
      videoWrapperRef.current.style.height = `${videoHeight}px`;
      videoWrapperRef.current.style.borderRadius = `${borderRadius}px`;
    }

    animationFrame.current = requestAnimationFrame(animate);
  };

  /* ---------------------------
     Intersection Observer
     (play/pause only)
  ---------------------------- */
  useEffect(() => {
    if (!videoRef.current || !videoSectionRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          videoRef.current
            ?.play()
            .catch(() => {});
        } else {
          videoRef.current?.pause();
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(videoSectionRef.current);

    return () => observer.disconnect();
  }, []);

  /* ---------------------------
     Lifecycle
  ---------------------------- */
  useEffect(() => {
    checkMobile();
    handleScroll();
    animate();

    window.addEventListener("resize", checkMobile);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", checkMobile);
      window.removeEventListener("scroll", handleScroll);
      if (animationFrame.current) {
        cancelAnimationFrame(animationFrame.current);
      }
    };
  }, []);

  /* ---------------------------
     JSX
  ---------------------------- */
  return (
    <div className="bg-white">
      <div className="video-section" ref={videoSectionRef}>
        <div className="sticky-container">
          <div className="video-wrapper" ref={videoWrapperRef}>
            <video
              ref={videoRef}
              loop
              playsInline
              
            >
              <source src={video} type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoShrinkScroll;
