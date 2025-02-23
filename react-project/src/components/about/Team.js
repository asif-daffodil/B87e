import Image from 'next/image';
import React from 'react';
import iftekher from '../../assets/images/profiles/iftekher.jpg';
import moni from '../../assets/images/profiles/moni.jpg';
import hamza from '../../assets/images/profiles/hamza.jpg';

const Team = () => {
    return (
        <div className="font-sans my-6 py-6">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center">
                        <h2 className="text-gray-800 text-4xl font-extrabold">Meet our team</h2>
                    </div>

                    <div className="grid sm:grid-cols-3 gap-8 max-sm:justify-center mt-12 max-sm:max-w-xs mx-auto">
                        <div className="bg-gray-800 p-4 border rounded-lg">
                            <Image src={iftekher} alt='Iftekher' className='h-60 w-full object-cover' />

                            <div className="text-center mt-4">
                                <h4 className="text-base font-semibold text-white">Software Engineer</h4>
                                <p className="text-xs mt-2 text-white">Iftekher Chowdhury</p>
                            </div>
                        </div>

                        <div className="bg-gray-800 p-4 border rounded-lg">
                            <Image src={moni} alt='Moni' className='h-60 w-full object-cover' />

                            <div className="text-center mt-4">
                                <h4 className="text-base font-semibold text-white">Web Developer</h4>
                                <p className="text-xs mt-2 text-white">Tahmina Moni</p>
                            </div>
                        </div>

                        <div className="bg-gray-800 p-4 border rounded-lg">
                            <Image src={hamza} alt='hamza' className='h-60 w-full object-cover' />

                            <div className="text-center mt-4">
                                <h4 className="text-base font-semibold text-white">Web Designer</h4>
                                <p className="text-xs mt-2 text-white">Amir Hamza</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    );
};

export default Team;