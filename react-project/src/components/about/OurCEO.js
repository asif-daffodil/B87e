import React from 'react';
import asif from '../../assets/images/profiles/asif.jpg';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons';

const OurCEO = () => {
    return (
        <div className="grid md:grid-cols-2 items-center gap-12 font-[sans-serif] max-w-5xl max-md:max-w-md mx-auto p-4 mt-7 py-6">
                        <div className="bg-gray-50">
                            <Image src={asif} alt='CEO' className="w-full aspect-[7/7] object-contain" />
                        </div>
        
                        <div>
                            <h3 className="text-xl md:text-2xl font-bold text-gray-800">Message From CEO</h3>
                            <p className="mt-4 text-sm text-gray-800 leading-relaxed">The service was amazing. I never had to wait that long for my food. The staff was friendly and attentive, and the delivery was impressively prompt.</p>
                            <div className="mt-8 text-left">
                                <h4 className="text-base font-bold">Asif Abir</h4>
                                <p className="text-xs text-gray-500 mt-0.5">asif.abir@hotmail.com</p>
                            </div>
        
                            <div className="space-x-3 mt-6">
                                <a href="javascript:void(0)"
                                    className="w-7 h-7 inline-flex items-center justify-center rounded-full border-none outline-none bg-blue-600 hover:bg-blue-700 active:bg-blue-600 text-white">
                                    <FontAwesomeIcon icon={faFacebook} width="14" />
                                </a>
                                <a href="javascript:void(0)"
                                    className="w-7 h-7 inline-flex items-center justify-center rounded-full border-none outline-none bg-[#03a9f4] hover:bg-[#03a1f4] active:bg-[#03a9f4] text-white">
                                    <FontAwesomeIcon icon={faTwitter} width="14" />
                                </a>
                                <a href="javascript:void(0)"
                                    className="w-7 h-7 inline-flex items-center justify-center rounded-full border-none outline-none bg-[#0077b5] hover:bg-[#0055b5] active:bg-[#0077b5] text-white">
                                    <FontAwesomeIcon icon={faLinkedinIn} width="14" />
                                </a>
                            </div>
                        </div>
                    </div>
    );
};

export default OurCEO;