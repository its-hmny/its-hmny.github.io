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
 * Contains the base URL for the public all the public APIs used in the project
 * @constant
 */
export const APIs = { DevTo: 'https://dev.to/api', GitHub: 'https://api.github.com' } as const;

/**
 * The desired contacts infos and socials to be rendered in the MyContacts component
 * @constant
 */
export const Contacts: Array<Contact> = [
  { icon: Mail, name: 'Email', url: 'mailto:guidienea@gmail.com?subject=Hi' },
  { icon: Github, name: 'GitHub', url: 'https://github.com/its-hmny' },
  { icon: Twitter, name: 'Twitter', url: 'https://twitter.com/its_hmny' },
  { icon: Linkedin, name: 'LinkedIn', url: 'https://www.linkedin.com/in/enea-guidi' },
];

/**
 * The webapp metadata for SEO optimization and Social Link Preview
 * @constant
 */
export const Metadata = {
  Title: 'Enea Guidi',
  TwitterHandle: '@its-hmny',
  Author: 'Enea Guidi (its-hmny)',
  SiteUrl: 'http://its-hmny.github.io',
  Image: 'http://its-hmny.github.io/logo.png',
  Description: 'My personal website, with a 3D spin on it',
  Keywords: ['portfolio', '3D', 'personal', 'website', 'professional', 'developer'],
};
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
