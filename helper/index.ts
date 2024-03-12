export interface ButtonProps {
  type: "submit" | "button";
  title: string;
  icon?: string;
  variant: string;
  full?: boolean;
}

export interface CampSiteProps {
  backgroundImage: string;
  title: string;
  subtitle: string;
  peopleJoined: string;
}

export interface FeatureItem {
  title: string;
  icon: string;
  description: string;
}

export interface FooterLinks {
  title: string;
  links: string[];
}

export interface FooterContactLinks {
  label: string;
  value: string;
}

export interface FooterLinksProps {
  title: string;
  children: React.ReactNode;
}

export interface NavLinksDto {
    href: string;
    key: string;
    label: string;
  }