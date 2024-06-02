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
  size: string;
  icon: string;
  link: string;
  description: string;
};

export type Article = {
  slug: string;

  title: string;
  date: string;
  coverImage: string;
  //   ogImage: { url: string };

  author: { name: string; picture: string };

  excerpt: string;
  content: string;
  //   preview?: boolean;
};
