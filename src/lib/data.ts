import { type Experience, type Contact, type Job } from '@hmny.dev/lib/types';
import { Bitcoin, Network, ServerCog, Store } from 'lucide-react';

export const Jobs: Job[] = [
  {
    icon: Network,
    role: 'Team Leader - Core System Team',
    period: { start: 'December 2023', end: 'Present' },
    company: { name: 'BKN301', website: 'https://bkn301.com/' },
    skills: ['C#', '.NET Core', 'Playwright', 'Docker', 'Kubernetes'],
    description:
      "Contributed to the design and development of 301core: the company's Core Banking systems and foundational services of BKN301's flagship product: the Banking-as-a-Service (BaaS) suite. I managed priorities and business requirements for the entire development team, enabling quick iteration and scaling the product with the time. I worked in tight loop with compliance, administrative and other non-technical department of multiple international banking institutions.",
  },

  {
    icon: Bitcoin,
    role: 'Backend Developer - Blockchain Team',
    period: { start: 'October 2022', end: 'December 2023' },
    company: { name: 'BKN301', website: 'https://bkn301.com/' },
    skills: ['Golang', 'Python', 'Terraform', 'Stellar', 'Docker'],
    description:
      "Designed and implemented 301chain: a scalable and robust Closed Payment Circuit (CPC) based on the Stellar blockchain. Capable of handling millions of dollars in daily transactions, with fast settlements times and high availability in mind. I also worked on an R&D project named 301stablecoin: aiming at producing the first algorithmic stablecoin based on a basket diverse, regional FIAT currencies as collateral to the token value.",
  },

  {
    icon: ServerCog,
    role: 'Fullstack Developer - Web3',
    period: { start: 'February 2022', end: 'October 2022' },
    company: { name: 'Moonia', website: 'https://www.moonia.it/' },
    skills: ['Solidity', 'Typescript', 'Hardhat', 'Ethereum', 'Solana'],
    description:
      "Developed, tested and released NFT collections on Ethereum and Solana with special focus on maximizing cost efficiency. I also designed and developed the MVP of Moonium, a SaaS product that aimed to simplify the management, discovery and interaction of Web3 communities with a multichain approach in mind.",
  },

  {
    icon: Store,
    role: 'Fullstack Developer',
    period: { start: 'March 2021', end: 'October 2022' },
    company: { name: 'Botika', website: 'https://botika.ai/' },
    skills: ['Golang', 'Typescript', 'Next.js', 'Nest.js', 'Python'],
    description:
      "Developed Meeters, a platform for the organization and management of virtual fairs and expositions during the Covid-19 pandemic. The platform has been utilized by both national and international players with up-to 10.000+ online simultaneous users. I also developed custom products for international companies based on their business requirements and with a special focus on speed, stability and cost-efficiency.",
  },
];

export const Experiences: Experience[] = [
  {
    type: 'tech',
    name: 'C# and .NET',
    logo: '/tech/csharp.svg',
  },
  {
    type: 'tech',
    name: 'Python',
    logo: '/tech/python.svg',
  },
  {
    type: 'tech',
    name: 'Terraform & IaC',
    logo: '/tech/terraform.svg',
  },
  {
    type: 'project',
    name: 'Choreia',
    github: 'https://github.com/its-hmny/Choreia',
    excerpt: 'A static analyzer to generate Choreography Automata from Go source',
    logo: 'https://raw.githubusercontent.com/egonelbre/gophers/master/vector/science/scientist.svg',
  },

  {
    type: 'project',
    name: '3D Cellular Automata',
    github: 'https://github.com/its-hmny/3D-Cellular-Automata',
    excerpt: 'A Three.js webapp to simulate cellular automata in 3D',
    logo: 'https://raw.githubusercontent.com/its-hmny/3D-Cellular-Automata/main/public/logo.png',
  },
  {
    type: 'product',
    name: '301core',
    logo: '/tech/bank.svg',
    excerpt: 'A suite of services designed to manage multiple financial core system through an abstracted and unified interface, enabling seamless integration across multiple service providers, facilitating flexibility and business continuity when migrating from one to the other for both my company and other financial institutions',
  },

  {
    type: 'tech',
    name: 'Golang',
    logo: '/tech/golang.svg',
  },
  {
    type: 'project',
    name: 'ChimeraScript',
    github: 'https://github.com/its-hmny/ChimeraScript',
    excerpt: 'A suit of Python scripts for my everyday usage',
    logo: 'https://raw.githubusercontent.com/its-hmny/ChimeraScript/main/assets/ChimeraScript.png',
  },
  {
    type: 'tech',
    name: 'GitHub Actions',
    logo: '/tech/github-actions.svg',
  },
  {
    type: 'tech',
    name: 'Node.js',
    logo: '/tech/node-js.svg',
  },

  {
    type: 'product',
    name: '301stablecoin',
    logo: '/tech/libra.svg',
    excerpt: 'A PoC for a multi-pegged algorithmic stablecoin where the value of the token is backed by a basket of regional FIAT currencies. The weight of each currency is determined by an algorithmically by leveraging real-time and historical data. Specifically designed and tested for emerging markets (MENA, LATAM, ASEAN)',
  },
  {
    type: 'project',
    name: 'its-hmny.github.io',
    github: 'https://github.com/its-hmny/its-hmny.github.io',
    excerpt: 'My personal website, hosted at https://its-hmny.github.io',
    logo: 'https://raw.githubusercontent.com/its-hmny/its-hmny.github.io/main/public/PenroseTriangle.png',
  },

  {
    type: 'tech',
    name: 'React & Next.js',
    logo: '/tech/react.svg',
  },
  {
    type: 'tech',
    name: 'Docker',
    logo: '/tech/docker.svg',
  },
  {
    type: 'product',
    name: '301chain',
    logo: '/tech/stellar.svg',
    excerpt: 'A Closed Payment Circuit (CPC) based on the Stellar blockchain that allows users to manage multiple digital tokens and enabled fast settlement and exchange of value within the CPC. Designed to handle over $500 million in annual transaction volume, with ensure reliability and performance',
  },

  {
    type: 'project',
    name: 'MyPantryPal',
    github: 'https://github.com/its-hmny/MyPantryPal',
    excerpt: 'Mobile app to keep track of your grocery list via barcode',
    logo: 'https://raw.githubusercontent.com/its-hmny/MyPantryPal/refs/heads/main/public/assets/icon/icon.png',
  },
  // {
  //   type: 'project',
  //   name: 'nand2tetris',
  //   github: 'https://github.com/its-hmny/its-hmny.github.io',
  //   excerpt: 'Collection of projects for the nand2tetris course',
  //   logo: 'https://raw.githubusercontent.com/its-hmny/nand2tetris/refs/heads/main/assets/Tetris.png',
  // },
  {
    type: 'tech',
    name: 'Nest.js',
    logo: '/tech/nest-js.svg',
  },
  {
    type: 'tech',
    name: 'PostgreSQL',
    logo: '/tech/postgresql.svg',
  },
  {
    type: 'tech',
    name: 'Typescript',
    logo: '/tech/typescript.svg',
  },
];

export const Contacts: Contact[] = [
  {
    name: 'Mail',
    icon: '/socials/gmail.png',
    link: 'mailto:guidi.enea@gmail.com',
  },
  {
    name: 'GitHub',
    icon: '/socials/github.png',
    link: 'https://www.github.com/its-hmny',
  },
  {
    name: 'LinkedIn',
    icon: '/socials/linkedin.png',
    link: 'https://www.linkedin.com/in/enea-guidi',
  },
  {
    name: 'X',
    icon: '/socials/x.png',
    link: 'https://twitter.com/its_hmny',
  },
  {
    name: 'Telegram',
    icon: '/socials/telegram.png',
    link: 'https://t.me/its_hmny',
  },
  {
    name: 'Medium',
    icon: '/socials/medium.png',
    link: '/blog',
  },
  {
    name: 'Resume',
    icon: '/socials/files.png',
    link: '/Enea Guidi - Resume.pdf',
  },
];
