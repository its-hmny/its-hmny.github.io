import { ReactNode } from 'react';

/**
 * Describes the required data for each macro/section in the homepage interactive playground.
 * Each section has its own titles and subtitle that briefs the user about what to expect
 * or explains some kind of notions to him. The 'content' field instead is though to be a
 * standalone custom component that will implement some kind of interactivity.
 * The 'content' field is the most important since it creates a specific UI/UX for each section.
 * @type @alias Section
 * @param title - The section name/title
 * @param subtitle - A brief description or further elaboration about it
 * @param content - Custom or built-in React component with self-contained logic
 */
export type Section = { title: string; subtitle: string; content: ReactNode };
