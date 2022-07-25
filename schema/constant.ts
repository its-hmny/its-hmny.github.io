import { Github, Linkedin, Mail, Twitter } from 'grommet-icons';

import MyArticles from '../components/contents/MyArticles';
import MyContacts from '../components/contents/MyContacts';
import MyInfos from '../components/contents/MyInfos';
import MyRepositories from '../components/contents/MyRepositories';

import Drawer from '../components/scaffold/Drawer';
import Popup from '../components/scaffold/Popup';

import t from '../public/translations.json';
import type { Article, Contact, Repository, Section } from './types';

/**
 * The desired sections to be rendered in the homepage interactive playground.
 * @constant
 */
export const Sections: Array<Section> = [
  {
    title: t.pages.home.sections.about_me.title,
    subtitle: t.pages.home.sections.about_me.description,
    scaffold: Popup,
    content: MyInfos,
  },
  {
    title: t.pages.home.sections.projects.title,
    subtitle: t.pages.home.sections.projects.description,
    scaffold: Drawer,
    content: MyRepositories,
  },
  {
    title: t.pages.home.sections.blog.title,
    subtitle: t.pages.home.sections.blog.description,
    scaffold: Drawer,
    content: MyArticles,
  },
  {
    title: t.pages.home.sections.contacts.title,
    subtitle: t.pages.home.sections.contacts.description,
    scaffold: Popup,
    content: MyContacts,
  },
];

/**
 * The desired contacts infos and socials to be rendered in the MyContacts component
 * @constant
 */
export const Contacts: Array<Contact> = [
  {
    icon: Twitter,
    name: 'Twitter',
    raw: 'https://twitter.com/its_hmny',
    url: 'https://twitter.com/its_hmny',
  },
  {
    icon: Mail,
    name: 'Email',
    raw: 'guidienea@gmail.com',
    url: 'mailto:guidienea@gmail.com?subject=Yo, wassup??',
  },
  {
    icon: Github,
    name: 'GitHub',
    raw: 'https://www.google.com',
    url: 'https://www.google.com',
  },
  {
    icon: Linkedin,
    name: 'LinkedIn',
    raw: 'https://www.google.com',
    url: 'https://www.google.com',
  },
];

/**
 * Array of mock articles object for testing/rendering purposes.
 * TODO: Remove this one when data fetching from GitHUb will be available.
 * @constant
 */
export const Articles: Array<Article> = [
  {
    title: '3D-Cellular-Automata',
    subtitle: 'A Three.js webapp to simulate cellular automata in 3D',
    content: 'Typescript',
    url: 'https://www.google.com',
  },
  {
    title: '3D-Cellular-Automata',
    subtitle: 'A Three.js webapp to simulate cellular automata in 3D',
    content: 'Typescript',
    url: 'https://www.google.com',
  },
  {
    title: '3D-Cellular-Automata',
    subtitle: 'A Three.js webapp to simulate cellular automata in 3D',
    content: 'Typescript',
    url: 'https://www.google.com',
  },
  {
    title: '3D-Cellular-Automata',
    subtitle: 'A Three.js webapp to simulate cellular automata in 3D',
    content: 'Typescript',
    url: 'https://www.google.com',
  },
];

/**
 * Array of mock repositories object for testing/rendering purposes.
 * TODO: Remove this one when data fetching from GitHub will be available.
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
