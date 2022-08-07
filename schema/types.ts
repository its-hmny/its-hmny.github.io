import type { Icon } from 'grommet-icons';
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
 * Custom data to be passed to 3D model component.
 * @type @alias Model3DProps
 * @param position- The coordinates of the Model
 * @param onModelClick - The callback for when a model is clicked
 */
export type Model3DProps = {
  position: [number, number, number];
  onModelClick: () => void;
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
 * Describes the data to be retrieved from Dev.to public REST API.
 * Most aer basic informmations such as the title, the first extract of the article
 * and the tags related to it. Other details information are the publishing date and
 * the estimated time to read the full article that are showed as asdditional details.
 * ! This interface only annotates the currently used subset of the fields received from GitHub API.
 * @type @alias Article
 * @param url - The full article page url
 * @param title - The article title
 * @param description - A trimmed version of the article's content
 * @param tag_list - Tags/Topics touched by the article
 * @param published_at - ISO string/timestamp of publication
 * @param reading_time_minutes - Estimated reading time
 * #
 */
export type Article = {
  url: string;
  title: string;
  description: string;
  tag_list: Array<string>;
  published_at: string;
  reading_time_minutes: number;
};

/**
 * Describes the needed data to visualize a full-fledged contact button in the website UI.
 * @type @alias Contact
 * @param name - Social name or contact type (Email, Facebook, GitHub, Phone Number, ...)
 * @param icon - Desired grommet-icon React component to be rendered
 * @param url - New page/redirect URL
 */
export type Contact = { name: string; icon: Icon; url: string };

/**
 * Describes the needed data to be retrieved from GitHub public REST API.
 * Apart from obviously name, description and URL we fetch also other fields such as:
 * the predominant language, the license and the tags/keyword/topics.
 * ! This interface only annotates the currently used subset of the fields received from GitHub API.
 * @type @alias Repository
 * @param name - GitHub repo name
 * @param html_url - The full URL to GitHub's repository detail page
 * @param language - The mainly used programming language
 * @param description - The description/helper text related to the repo
 * @param topics - Tags/Keywords related to the repo
 * @param license - The repository open source license
 */
export type Repository = {
  name: string;
  html_url: string;
  language?: string;
  description: string;
  topics: Array<string>;
  license?: { spdx_id: string };
};
