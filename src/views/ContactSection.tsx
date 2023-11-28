export default function ContactSection() {
  return (
    <section className='flex h-screen w-screen items-center justify-evenly bg-black align-middle text-white max-lg:h-auto max-lg:min-h-screen max-lg:flex-col'>
      <div className='h-screen w-5/12 max-lg:h-[40vh] max-lg:w-screen'>
      </div>

      <div className='w-6/12 p-8 max-lg:h-auto max-lg:w-screen'>
        <h3 className='font-italic mb-3 text-3xl text-orange-400'>Let's keep in touch!</h3>
        <p className='text-md mb-10 text-justify text-gray-500'>
          Don't let my young age fool you! In my previous work experiences I was fortunate enough to explore and broaden
          my skillset: from delving into the intricacies of blockchain technology to exploring the creative realms of 3D
          development, I bring a diverse range of expertise to the table.
        </p>
        {/* One big box: The link to my GitHub profile */}
        <div className='grid auto-rows-[192px] grid-cols-3 gap-4'>
          <div className='col-span-3 row-span-1 flex flex-col justify-center rounded-xl border-2 border-slate-400/10 bg-neutral-100 p-4 align-middle dark:bg-neutral-900'>
            <h1 className='font-italic mb-3 text-center text-xl text-lime-400'>Enough talk! Let me see the code</h1>
            <img src='/socials/GitHub.svg' className='h-20 w-20 self-center dark:invert' />
          </div>

          {/* Three small boxes: LinkedIn, Twitter, and Telegram */}
          <div className='row-span-1 flex flex-col justify-center rounded-xl border-2 border-slate-400/10 bg-neutral-100 p-4 align-middle dark:bg-neutral-900'>
            <h1 className='font-italic mb-3 text-center text-xl text-lime-400'>Work, skills and past experiences</h1>
            <img src='/socials/LinkedIn.svg' className='h-20 w-20 self-center' />
          </div>
          <div className='row-span-1 flex flex-col justify-center rounded-xl border-2 border-slate-400/10 bg-neutral-100 p-4 align-middle dark:bg-neutral-900'>
            {/* TODO (Enea): Find new X.com SVG logo */}
            <h1 className='font-italic mb-3 text-center text-xl text-lime-400'>See my posts and discussions</h1>
            <img src='/socials/Twitter.svg' className='h-20 w-20 self-center' />
          </div>
          <div className='row-span-1 flex flex-col justify-center rounded-xl border-2 border-slate-400/10 bg-neutral-100 p-4 align-middle dark:bg-neutral-900'>
            <h1 className='font-italic mb-3 text-center text-xl text-lime-400'>Have a private chat with me</h1>
            <img src='/socials/Telegram.svg' className='h-20 w-20 self-center' />
          </div>
          
          {/* One medium, one small box: Personal blog and e-mail for business enquiries */}
          <div className='col-span-2 row-span-1 flex flex-col justify-center rounded-xl border-2 border-slate-400/10 bg-neutral-100 p-4 align-middle dark:bg-neutral-900'>
            <h1 className='font-italic mb-3 text-center text-xl text-lime-400'>Read my articles and blogposts</h1>
            <img src='/socials/Medium.svg' className='h-20 w-20 self-center dark:invert' />
          </div>
          <div className='row-span-1 flex flex-col justify-center rounded-xl border-2 border-slate-400/10 bg-neutral-100 p-4 align-middle dark:bg-neutral-900'>
            <h1 className='font-italic mb-3 text-center text-xl text-lime-400'>Send your business enquiries</h1>
            <img src='/socials/Email.svg' className='h-20 w-20 self-center' />
          </div>
        </div>
      </div>
    </section>
  );
}
