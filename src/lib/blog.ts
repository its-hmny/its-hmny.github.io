import { type Article } from '@hmny.dev/lib/types';
import { readdir, readFile } from 'fs/promises';
import matter from 'gray-matter';
import { join } from 'path';

const ArticlesDirectory = join(process.cwd(), 'articles');

export async function getArticleBySlug(slug: string) {
  const unescapedPath = decodeURI(slug).replace(/\.mdx$/, '');
  const fileContent = await readFile(join(ArticlesDirectory, `${unescapedPath}.mdx`), 'utf8');

  // Extracts the metadata in the .md header from the articles content
  const { data: metadata, content } = matter(fileContent);
  return { ...metadata, date: new Date(metadata.date), slug: unescapedPath, content } as Article;
}

export async function getArticlesList(): Promise<Article[]> {
  const slugs = await readdir(ArticlesDirectory);
  const posts = await Promise.all(slugs.map(slug => getArticleBySlug(slug)));

  // Before returning sorts the posts by date in descending order
  return posts.sort((a, b) => (a.date > b.date ? -1 : 1));
}
