import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import video from "../../assets/Wide Horizons- intro.mp4";

gsap.registerPlugin(ScrollTrigger);

const VideoShrinkScroll = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const audioUnlocked = useRef(false);

  useEffect(() => {
    if (!sectionRef.current || !wrapperRef.current || !videoRef.current) return;

    const video = videoRef.current;

    /* --------------------------------
       AUDIO UNLOCK (SAFE)
    --------------------------------- */
    const unlockAudio = () => {
      if (audioUnlocked.current) return;

      audioUnlocked.current = true;
      video.muted = false;
      video.volume = 1;

      window.removeEventListener("click", unlockAudio);
      window.removeEventListener("touchstart", unlockAudio);
      window.removeEventListener("wheel", unlockAudio);
    };

    window.addEventListener("click", unlockAudio, { once: true });
    window.addEventListener("touchstart", unlockAudio, { once: true });
    window.addEventListener("wheel", unlockAudio, { once: true });

    /* --------------------------------
       RESPONSIVE SMALL SIZE
    --------------------------------- */
    const getSmallSize = () => {
      const isMobile = window.innerWidth < 768;
      return {
        width: isMobile ? 280 : 360,
        height: isMobile ? 500 : 580,
        radius: isMobile ? 28 : 36,
      };
    };

    const ctx = gsap.context(() => {
      const small = getSmallSize();

      // START SMALL
      gsap.set(wrapperRef.current, {
        width: small.width,
        height: small.height,
        borderRadius: small.radius,
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=200%",
          scrub: true,
          pin: true,
          pinSpacing: false,
          invalidateOnRefresh: true,

          // ✅ ALWAYS PLAY MUTED
          onEnter: () => {
            video.muted = true;
            video.play().catch(() => {});
          },

          onEnterBack: () => {
            video.muted = true;
            video.play().catch(() => {});
          },

          onLeave: () => {
            video.pause();
            video.muted = true;
          },

          onLeaveBack: () => {
            video.pause();
            video.muted = true;
          },
        },
      });

      // EXPAND (ALWAYS FULL WIDTH)
      tl.to(wrapperRef.current, {
        width: "100vw",
        height: "100vh",
        borderRadius: 0,
        ease: "none",
        duration: 1,
      });

      // SHRINK BACK
      tl.to(wrapperRef.current, {
        width: () => getSmallSize().width,
        height: () => getSmallSize().height,
        borderRadius: () => getSmallSize().radius,
        ease: "none",
        duration: 1,
      });
    });

    const onResize = () => ScrollTrigger.refresh();
    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
      ctx.revert();
    };
  }, []);

  return (
    <div className="bg-white">
      <section
        ref={sectionRef}
        style={{
          height: "300vh",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            height: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div ref={wrapperRef} style={{ overflow: "hidden" }}>
            <video
              ref={videoRef}
              loop
              playsInline
              preload="auto"
              muted // 🔑 MUST start muted
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            >
              <source src={video} type="video/mp4" />
            </video>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VideoShrinkScroll;
