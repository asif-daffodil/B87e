import Link from 'next/link';
import React from 'react';

const page = () => {
    return (
        <div>
            <h1 className='text-3xl font-bold text-sky-500 m-3'>
                This is yourApp page
            </h1>
            <Link href="/myApp" className='border-2 border-sky-500 px-5 py-3 block w-max m-3 rounded-full text-sky-500 font-bold hover:bg-sky-500 hover:text-white hover:shadow-md hover:shadow-sky-500'>
                My App
            </Link>
        </div>
    );
};

export default page;