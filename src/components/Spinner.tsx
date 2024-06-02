export default function Spinner() {
  return (
    <div className='bg-theme_bg flex h-full w-full items-center justify-center'>
      <div className='border-theme_fg h-[250px] w-[250px] rounded-full border-8 border-solid'>
        <div className='circle bg-theme_secondary-500 h-10 w-10 animate-spin-fast rounded-full' />
        <div className='circle bg-theme_primary-500 h-10 w-10 animate-spin-slow rounded-full' />
      </div>
    </div>
  );
}
