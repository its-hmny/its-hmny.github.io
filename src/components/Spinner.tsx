export default function Spinner() {
  return (
    <div className='flex h-full w-full items-center justify-center bg-theme_bg'>
      <div className='h-[250px] w-[250px] rounded-full border-8 border-solid border-theme_fg'>
        <div className='circle h-10 w-10 animate-spin-fast rounded-full bg-theme_secondary-500' />
        <div className='circle h-10 w-10 animate-spin-slow rounded-full bg-theme_primary-500' />
      </div>
    </div>
  );
}
