import type { ReactNode } from 'react';

/**
 * Custom data to be rendered inside the a <Layout /> component.
 * @type @alias ScaffoldProps
 * @param title - The header/title content of the layout
 * @param subtitle - A subtitle to introduce what is shown in the drawer
 * @param onClose -  Callback for when the user wants to exit/close the current layout
 * @param children - The "injectable" dynamic content.
 */
export type ScaffoldProps = {
  title: string;
  subtitle: string;
  onClose: () => void;
  children: ReactNode;
};

/**
 * Describes the required data for each macro/section in the homepage interactive playground.
 * Each section has its own titles and subtitle that briefs the user about what to expect
 * or explains some kind of notions to him. The 'content' field instead is though to be a
 * standalone custom component that will implement some kind of interactivity.
 * The 'content' field is the most important since it creates a specific UI/UX for each section.
 * @type @alias Section
 * @param title - The section name/title
 * @param subtitle - A brief description or further elaboration about it
 * @param scaffold - The "scaffold" component to be used as parent to the 'content' component
 * @param content - Custom or built-in React component with self-contained logic
 */
export type Section = {
  title: string;
  subtitle: string;
  scaffold: (props: ScaffoldProps) => JSX.Element;
  content: () => JSX.Element;
};

/**
 * Describes the needed data to be retrieved from GitHub public GraphQL/REST API server.
 * Apart from obviously name, description and URL we fetch also other 'interesting' fields
 * such as the predominant language of the project, the number of commits, the license and
 * the tags/keyword (used to provide to the user a quick context about the repo).
 * @type @alias Repository
 * @param url - The full URL to GitHub's repository detail page
 * @param name - GitHub repo name
 * @param description - The description/helper text related to the repo
 * @param license - The repository open source license
 * @param language - The mainly used programming language
 * @param n_commit - The number of active commit on the 'main' branch
 * @param tags - Tags/Keywords related to the repo
 */
export type Repository = {
  url: string;
  name: string;
  description: string;
  license: string;
  language: string;
  n_commit: number;
  tags: Array<string>;
};
