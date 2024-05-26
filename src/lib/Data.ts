import { Bitcoin, ServerCog, Store, type LucideIcon } from 'lucide-react';

export type Job = {
  role: string;
  icon: LucideIcon;
  skills: string[];
  description: string;
  company: { name: string; website: string };
  period: { start: string | Date; end: string | Date };
};

export const Jobs: Job[] = [
  {
    icon: Bitcoin,
    role: 'Backend Developer (Blockchain)',
    period: { start: 'October 2022', end: 'Present' },
    company: { name: 'BKN301', website: 'https://bkn301.com/' },
    skills: ['Golang', 'C#', 'Python', 'Stellar', 'Docker', 'Terraform'],
    description:
      "Designed and implemented '301chain': a scalable Closed Payment Circuit (CPC), based on Stellar blockchain, capable of handling 2+ Mln dollars in daily transactions. Contributed to the design and development of BKN301's core banking system ('301core') as well as the backend of '301wallet', the company instant card issuing product.",
  },

  {
    icon: ServerCog,
    role: 'Fullstack Developer (Web3)',
    period: { start: 'February 2022', end: 'October 2022' },
    company: { name: 'Moonia', website: 'https://www.moonia.it/' },
    skills: ['Solidity', 'Typescript', 'Hardhat', 'Ethereum', 'Solana'],
    description:
      "Developed, tested and released two NFT collections on both Ethereum and Solana with special focus on maximizing cost efficiency. Designed and developed the MVP for 'Moonium': a SaaS product that aimed to simplify the management, discovery and interaction of Web3 communities (especially the ones spanning across multiple blockchains).",
  },

  {
    icon: Store,
    role: 'Fullstack Developer',
    period: { start: 'March 2021', end: 'October 2022' },
    company: { name: 'Botika', website: 'https://botika.ai/' },
    skills: ['Golang', 'Typescript', 'Next.js', 'Nest.js', 'Python'],
    description:
      "Developed 'Meeters', a webapp for the organization, management and participation to virtual fairs/expositions during the Covid-19 pandemic. The platform has been used by national and international fairs with up-to 7.000+ online simultaneous users.",
  },
];

export const Contacts = [
  {
    size: 'col-span-1',
    icon: '/socials/Resume.svg',
    href: '/Resume.pdf',
    description: 'Download my resume',
  },
  {
    size: 'col-span-2',
    icon: '/socials/GitHub.svg',
    href: 'https://www.github.com/its-hmny',
    description: 'Enough talk! Let me see the code',
  },
  {
    size: 'col-span-1',
    icon: '/socials/LinkedIn.svg',
    href: 'https://www.linkedin.com/in/enea-guidi',
    description: "let's connect",
  },
  {
    size: 'col-span-1',
    icon: '/socials/Twitter.svg',
    href: 'https://twitter.com/its_hmny',
    description: 'See my posts and discussions',
  },
  {
    size: 'col-span-1',
    icon: '/socials/Telegram.svg',
    href: 'https://t.me/its_hmny',
    description: 'Have a private chat',
  },
  {
    size: 'col-span-2',
    icon: '/socials/Medium.svg',
    href: 'https://dev.to/its_hmny',
    description: 'Read my articles and blogposts',
  },
  {
    size: 'col-span-1',
    icon: '/socials/Email.svg',
    href: 'mailto:guidi.enea@gmail.com',
    description: 'Send business enquiries',
  },
] as const;
