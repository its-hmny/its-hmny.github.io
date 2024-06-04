import { type Article } from '@hmny.dev/lib/types';
import { readdir, readFile } from 'fs/promises';
import matter from 'gray-matter';
import { join } from 'path';

const ArticlesDirectory = join(process.cwd(), 'articles');

export async function getArticleBySlug(slug: string) {
  const realSlug = decodeURI(slug).replace(/\.md$/, '');
  const fullPath = join(ArticlesDirectory, `${realSlug}.md`);
  const fileContents = await readFile(fullPath, 'utf8');

  const { data, content } = matter(fileContents);

  return { ...data, slug: realSlug, content } as Article;
}

export async function getArticlesList(): Promise<Article[]> {
  const slugs = await readdir(ArticlesDirectory);
  const posts = await Promise.all(slugs.map(slug => getArticleBySlug(slug)));

  // Before returning sorts the posts by date in descending order
  return posts.sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
}
