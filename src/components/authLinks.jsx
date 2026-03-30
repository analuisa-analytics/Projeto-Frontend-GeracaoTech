import {Link} from 'react-router-dom';

const AuthLinks = () => {
    return (
        <div className='flex items-center gap-4'>
            <Link
                to='register' 
                className='text-[14px], text-dark-gray-2, hover:text-primary, underline'
                >
                Cadrastre-se
            </Link>

            <Link
                to='login' 
                className='py-2 px-4 border border-transparent text-[14px], text-dark-gray-2, hover:text-primary, rounded-md text-white bg-primary focus:outline-none'
                >
                Entrar
            </Link>
        </div>
    );
};

export default AuthLinks
