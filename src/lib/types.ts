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

export type Contact = {
  name: string;
  icon: string;
  link: string;
};

export type Article = {
  date: Date;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  author: { name: string; picture: string };
  images: { og: string; cover_small: string; cover_large: string };
};
