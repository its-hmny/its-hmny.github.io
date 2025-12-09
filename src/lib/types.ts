import { LucideIcon } from 'lucide-react';
import { ReactNode } from 'react';

export type Job = {
  role: string;
  icon: LucideIcon;
  skills: string[];
  description: ReactNode;
  company: { name: string; website: string };
  period: { start: string | Date; end: string | Date };
};

export type Technology = {
  name: string;
  logo: string;
};

export type PersonalProject = {
  name: string;
  logo: string;
  github: string;
  excerpt: string;
  type: 'personal_project';
};

export type EnterpriseProduct = {
  name: string;
  logo: string;
  excerpt: string;
  type: 'enterprise_product';
};

export type Project = PersonalProject | EnterpriseProduct;

export type Contact = {
  name: string;
  icon: string;
  link: string;
};

export type Article = {
  date: Date;
  slug: string;
  title: string;
  subtitle: string;
  excerpt: string;
  content: string;
  author: { name: string; picture: string };
  images: { og: string; cover_small: string; cover_large: string };
};
