export default function LandingSection() {
  return (
    <div className='flex h-screen items-center justify-evenly bg-black align-middle text-white'>
      <div className='w-1/3'>
        <img src='http://picsum.photos/200' className='h-full w-full rounded-full object-cover' />
      </div>

      <div className='w-1/2 p-8'>
        <div className='mb-3'>
          <h1 className='mb-3 text-4xl font-bold'>👋 Hi there! I'm Enea</h1>
          <h4 className='font-italic mb-3 text-2xl text-orange-400'>Fullstack Developer & Blockchain Specialist</h4>
          <p className='text-lg text-gray-500'>
            I architect and deliver unique digital experiences on the Frontend while implementing robust and extensible
            programs the Backend. In order to deliver a reliable solution in the least amount of time I adopt already
            established tech stacks and mix it with some of the most cutting-edge solutions available on the market.
            {/* TODO (Enea): Integrate the one above w/ this one
            <br />
            As a developer, my skill set spans a broad spectrum, showcasing adaptability and versatility. From delving
            into the intricacies of blockchain technology to exploring the creative realms of 3D development, I bring a
            diverse range of expertise to the table. Professionally navigating both established and cutting-edge
            frameworks, I am committed to crafting solutions that seamlessly blend innovation with reliability.
            */}
          </p>
        </div>

        <div className='mb-4 mt-8 '>
          <button className='rounded-full bg-orange-400 px-4 py-2 text-lg text-white'>💼 See some of my work</button>
        </div>
      </div>
    </div>
  );
}
