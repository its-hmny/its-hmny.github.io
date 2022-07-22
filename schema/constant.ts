import Drawer from '../components/Drawer';
import MyContacts from '../components/MyContacts';
import MyRepositories from '../components/MyRepositories';
import Popup from '../components/Popup';
import type { Contact, Repository, Section } from './types';

/**
 * The desired sections to be rendered in the homepage interactive playground.
 * @constant
 */
export const Sections: Array<Section> = [
  {
    title: 'About Me',
    subtitle: 'Mock test description 1',
    scaffold: Drawer,
    content: MyRepositories,
  },
  {
    title: 'Projects',
    subtitle:
      "Here's a list of my most recent Open Source projects. I'm currently experimenting with 3D rendering on the web, static analysis and Go.",
    scaffold: Drawer,
    content: MyRepositories,
  },
  {
    title: 'Blog',
    subtitle: 'Mock test description 3',
    scaffold: Drawer,
    content: MyRepositories,
  },
  {
    title: 'Contacts',
    subtitle: "Want to chat? Here's a diverse list of methods you can reach me with.",
    scaffold: Popup,
    content: MyContacts,
  },
];

/**
 * Array of mock repositories object for testing/rendering purposes.
 * TODO: Remove this one when data fetching from GitHUb is available.
 * @constant
 */
export const Repositories: Array<Repository> = [
  {
    name: '3D-Cellular-Automata',
    description: 'A Three.js webapp to simulate cellular automata in 3D',
    language: 'Typescript',
    n_commit: 100,
    license: 'GPLv3.0',
    tags: ['test1', 'test2', 'test3'],
    url: 'https://www.google.com',
  },
  {
    name: 'Choreia',
    description: 'A static analyzer to generate Choreography Automata from Go source',
    language: 'Go',
    n_commit: 100,
    license: 'GPLv3.0',
    tags: ['test1', 'test2', 'test3'],
    url: 'https://www.google.com',
  },
  {
    name: 'ChimeraScript',
    description: 'A suit of Python scripts for my everyday usage',
    language: 'Python',
    n_commit: 100,
    license: 'GPLv3.0',
    tags: ['test1', 'test2', 'test3'],
    url: 'https://www.google.com',
  },
  {
    name: 'MyPantryPal',
    description: 'Mobile app to keep track of your grocery list via barcode',
    language: 'Typescript',
    n_commit: 100,
    license: 'GPLv3.0',
    tags: ['test1', 'test2', 'test3'],
    url: 'https://www.google.com',
  },
];
