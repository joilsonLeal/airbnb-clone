import Image from 'next/image'
import { SearchIcon } from '@heroicons/react/solid'

export default function Header(props: any) {
  return (
    <header className='stick top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10'>
    <div className='relative flex items-center h-10 cursor-pointer my-auto'>
      <Image 
        src="https://links.papareact.com/qd3" 
        fill={true} 
        style={{ objectFit: 'contain', objectPosition: 'left' }}
        alt="airbnb logo" />
    </div>

    <div>
      <input type="text" placeholder='Start your search'/>
      <SearchIcon className='h-8'/>
    </div>

    {/* right */}
    <div></div>

    </header>
  )
}
