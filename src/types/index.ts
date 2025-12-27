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
  images: string[];
}

export interface EventsSectionProps {
  images: string[];
}

export interface LayoutProps {
  children: React.ReactNode;
}