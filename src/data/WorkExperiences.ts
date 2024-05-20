import { Bitcoin, ServerCog, Store } from 'lucide-react';

// TODO(hmny): Would be nice to use LinkedIn APIs and populate this content dynamically
// TODO(hmny): Use 'use server' directive for this to allow for static generation
export default [
  {
    icon: Bitcoin,
    role: 'Backend Developer',
    period: ['October 2022', 'Present'],
    company: { name: 'BKN301', website: 'https://bkn301.com/' },
    skills: ['Golang', 'C#', 'Python', 'Stellar', 'Docker', 'Terraform'],
    description:
      "Designed and implemented '301chain': a scalable Closed Payment Circuit (CPC), based on Stellar blockchain, capable of handling 2+ Mln dollars in daily transactions. Contributed to the design and development of BKN301's core banking system ('301core') as well as the backend of '301wallet', the company instant card issuing product.",
  },

  {
    icon: ServerCog,
    role: 'Fullstack Developer',
    period: ['February 2022', 'October 2022'],
    company: { name: 'Moonia', website: 'https://www.moonia.it/' },
    skills: ['Solidity', 'Typescript', 'Ethereum', 'Solana', 'Hardhat'],
    description:
      "Developed, tested and released two NFT collections on both Ethereum and Solana with special focus on maximizing cost efficiency. Designed and developed the MVP for 'Moonium': a SaaS product that aimed to simplify the management, discovery and interaction of Web3 communities (especially the ones spanning across multiple blockchains).",
  },

  {
    icon: Store,
    role: 'Fullstack Developer',
    period: ['March 2021', 'October 2022'],
    company: { name: 'Botika', website: 'https://botika.ai/' },
    skills: ['Golang', 'Typescript', 'Next.js', 'Nest.js', 'Python'],
    description:
      "Developed 'Meeters', a webapp for the organization, management and participation to virtual fairs/expositions during the Covid-19 pandemic. The platform has been used by national and international fairs with up-to 7.000+ online simultaneous users.",
  },
] as const;
