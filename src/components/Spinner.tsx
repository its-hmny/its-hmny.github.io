export default function Spinner() {
  return (
    <div className='flex h-full w-full items-center justify-center bg-black'>
      <div className='h-[250px] w-[250px] rounded-full border-8 border-solid border-gray-300'>
        <div className='circle h-10 w-10 animate-spin-fast rounded-full bg-lime-500' />
        <div className='circle h-10 w-10 animate-spin-slow rounded-full bg-orange-500' />
      </div>
    </div>
  );
}
