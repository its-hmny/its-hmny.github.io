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

