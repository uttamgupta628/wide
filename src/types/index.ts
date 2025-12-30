export interface Client {
  name: string;
  img: string;
}

export interface HeroSectionProps {
  heroImg: string;
}

export interface ClientsSectionProps {
  clients: Client[];
}

export interface TeamsSectionProps {
  images: {
    src: string;
    name: string;
    role: string;
  }[];
}


export interface EventsSectionProps {
  images: string[];
}

export interface LayoutProps {
  children: React.ReactNode;
}