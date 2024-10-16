import { type Contact, type Job } from '@hmny.dev/lib/types';
import { Bitcoin, Network, ServerCog, Store } from 'lucide-react';

export const Jobs: Job[] = [
  {
    icon: Network,
    role: 'Team Leader - Core System Team',
    period: { start: 'December 2023', end: 'Present' },
    company: { name: 'BKN301', website: 'https://bkn301.com/' },
    skills: ['C#', '.NET Core', 'Playwright', 'Docker', 'Kubernetes'],
    description:
      "Contributed to the design and development of '301core': BKN301's Core Banking systems and foundation of BKN301's flagship product: the Banking-as-a-Service suite. Managed priorities and business requirements for the whole development team, while enabling quick iteration on the product itself. Worked in tight loop with compliance, administrative and technical offices of multiple international banking institutions.",
  },

  {
    icon: Bitcoin,
    role: 'Backend Developer - Blockchain Team',
    period: { start: 'October 2022', end: 'December 2023' },
    company: { name: 'BKN301', website: 'https://bkn301.com/' },
    skills: ['Golang', 'Python', 'Terraform', 'Stellar', 'Docker'],
    description:
      "Designed and implemented '301chain': a scalable and robust Closed Payment Circuit (CPC), based on the Stellar blockchain, capable of handling millions of dollars in daily transactions. Worked on R&D project '301stablecoin' aimed at releasing the first stablecoin based on a basket of multiple FIAT currencies as collateral to the token value.",
  },

  {
    icon: ServerCog,
    role: 'Fullstack Developer - Web3',
    period: { start: 'February 2022', end: 'October 2022' },
    company: { name: 'Moonia', website: 'https://www.moonia.it/' },
    skills: ['Solidity', 'Typescript', 'Hardhat', 'Ethereum', 'Solana'],
    description:
      "Developed, tested and released two NFT collections on Ethereum and Solana blockchains with special focus on maximizing cost efficiency. Designed and developed the MVP for 'Moonium': a SaaS product that aimed to simplify the management, discovery and interaction of Web3 communities (especially the ones spanning across multiple blockchains).",
  },

  {
    icon: Store,
    role: 'Fullstack Developer',
    period: { start: 'March 2021', end: 'October 2022' },
    company: { name: 'Botika', website: 'https://botika.ai/' },
    skills: ['Golang', 'Typescript', 'Next.js', 'Nest.js', 'Python'],
    description:
      "Developed 'Meeters', a webapp for the organization, management and participation to virtual fairs and expositions during the Covid-19 pandemic. The platform has been utilized by both national and international fairs with up-to 10.000+ online simultaneous users. Developed custom products for international companies based on their requirements and with a special focus on speed, stability and cost-efficiency.",
  },
];

export const Contacts: Contact[] = [
  {
    size: 'small',
    icon: '/socials/Resume.svg',
    link: '/Resume.pdf',
    description: 'Download my resume',
  },
  {
    size: 'medium',
    icon: '/socials/GitHub.svg',
    link: 'https://www.github.com/its-hmny',
    description: 'Enough talk! Let me see the code',
  },
  {
    size: 'small',
    icon: '/socials/LinkedIn.svg',
    link: 'https://www.linkedin.com/in/enea-guidi',
    description: "Let's connect",
  },
  {
    size: 'small',
    icon: '/socials/Twitter.svg',
    link: 'https://twitter.com/its_hmny',
    description: 'Posts & discussions',
  },
  {
    size: 'small',
    icon: '/socials/Telegram.svg',
    link: 'https://t.me/its_hmny',
    description: 'Private message',
  },
  {
    size: 'medium',
    icon: '/socials/Medium.svg',
    link: '/blog',
    description: 'Read my articles and blogposts',
  },
  {
    size: 'small',
    icon: '/socials/Email.svg',
    link: 'mailto:guidi.enea@gmail.com',
    description: 'Send business enquiries',
  },
];
