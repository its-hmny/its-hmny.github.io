import { getArticlesList } from '@hmny.dev/lib/blog';

export default function Blog() {
  const [main, ...others] = getArticlesList();

  return (
    <main>
      <div className='container mx-auto px-5'>
        <section className='mb-16 mt-16 flex flex-col items-center md:mb-12 md:flex-row md:justify-between'>
          <h1 className='text-5xl font-bold leading-tight tracking-tighter md:pr-8 md:text-8xl'>Blog.</h1>
          <h4 className='mt-5 text-center text-lg md:pl-8 md:text-left'>
            A statically generated blog example using{' '}
            <a
              href='https://nextjs.org/'
              className='hover:text-theme_secondary-500 underline transition-colors duration-200'
            >
              Next.js
            </a>
            and something else.
          </h4>
        </section>

        <h3 className='text-theme_primary-300 text-xl'>Main article</h3>
        <pre className='m-8 mb-16'>{JSON.stringify(main, null, 2)}</pre>

        <h3 className='text-theme_primary-300 text-xl'>Other articles</h3>
        <pre>{JSON.stringify(others, null, 2)}</pre>

        {/* <Article.Hero post={main} /> */}
        {/* {others.length > 0 && <MoreStories posts={others} />} */}
      </div>
    </main>
  );
}
