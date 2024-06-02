import { type Article } from '@hmny.dev/lib/types';
import fs from 'fs';
import matter from 'gray-matter';
import { join } from 'path';

const ArticlesDirectory = join(process.cwd(), 'articles');

export function getArticleBySlug(slug: string) {
  const realSlug = decodeURI(slug).replace(/\.md$/, '');
  const fullPath = join(ArticlesDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  const { data, content } = matter(fileContents);

  return { ...data, slug: realSlug, content } as Article;
}

export function getArticlesList(): Article[] {
  const slugs = fs.readdirSync(ArticlesDirectory);
  
  return slugs
    .map(slug => getArticleBySlug(slug))
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
}
