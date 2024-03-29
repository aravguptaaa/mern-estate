import {FaSearch} from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className='bg-slate-200 shadow-md'>
        <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
        

        <h1 className='font-bold text-sm sm:text-xl flex flex-wrap'>
            <span className='text-slate-500'>Av</span>
            <span className='text-slate-700'>Estate</span>
        </h1>

       

        <form className='bg-slate-50 p-3 rounded-lg flex items-cente'>
            <input type='text' 
            placeholder='Search...'
            className='bg-transparent focus:outline-none w-24 sm:w-64'/>
            <FaSearch className='text-slate-600'/>
        </form>

        <ul className='flex gap-4'>

            <Link to='/'>
            <li className='hidden sm:inline hover:underline'>Home</li>
            </Link>

            <Link to='/about'>
            <li className='hidden sm:inline hover:underline'>About</li>
            </Link>

            <Link to='/sign-in'>   
            <li className='hover:underline'>Sign in</li>     
            </Link>       

        </ul>

        </div>

    </header>
  );
}
