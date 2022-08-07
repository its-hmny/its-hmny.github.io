import { Github, Linkedin, Mail, Twitter } from 'grommet-icons';

import MyArticles from '../components/contents/MyArticles';
import MyContacts from '../components/contents/MyContacts';
import MyInfos from '../components/contents/MyInfos';
import MyRepositories from '../components/contents/MyRepositories';

import Drawer from '../components/scaffold/Drawer';
import Popup from '../components/scaffold/Popup';

import t from '../public/translations.json';
import type { Article, Contact, Section } from './types';

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
  { icon: Twitter, name: 'Twitter', url: 'https://twitter.com/its_hmny' },
  { icon: Mail, name: 'Email', url: 'mailto:guidienea@gmail.com?subject=Hi' },
  { icon: Github, name: 'GitHub', url: 'https://github.com/its-hmny' },
  { icon: Linkedin, name: 'LinkedIn', url: 'https://www.linkedin.com/in/enea-guidi' },
];

/**
 * Array of mock articles object for testing/rendering purposes.
 * TODO: Remove this one when data fetching from GitHUb will be available.
 * @constant
 */
export const Articles: Array<Article> = [
  {
    title: 'Blog title 1',
    subtitle: 'A Three.js webapp to simulate cellular automata in 3D',
    content: 'Typescript',
    url: 'https://www.google.com',
  },
  {
    title: 'Blog title 2',
    subtitle: 'A Three.js webapp to simulate cellular automata in 3D',
    content: 'Typescript',
    url: 'https://www.google.com',
  },
  {
    title: 'Blog title 3',
    subtitle: 'A Three.js webapp to simulate cellular automata in 3D',
    content: 'Typescript',
    url: 'https://www.google.com',
  },
  {
    title: 'Blog title 4',
    subtitle: 'A Three.js webapp to simulate cellular automata in 3D',
    content: 'Typescript',
    url: 'https://www.google.com',
  },
];
