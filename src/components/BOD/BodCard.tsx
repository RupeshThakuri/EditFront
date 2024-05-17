"use client";

import React from 'react';
import Image from 'next/image';
import { Members } from '@/types/members';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa6";
import { useRouter } from 'next/navigation';

const BodCard = ({ member }: { member: Members }) => {
  const { id, name, detail, position, image } = member;
  const router = useRouter();
  const handleClick = (redirect:string) =>{
    router.push(redirect);
  }

  return (
    <div className="rounded overflow-hidden shadow-lg flex flex-col cursor-pointer">
      <Image
        className="w-full"
        src={image}
        alt={name}
        width={200}
        height={200}
      />
      <div className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25"></div>
      <div className="px-6 py-4 mb-auto">
        <div className="font-medium text-lg inline-block hover:text-indigo-600 transition duration-500 ease-in-out mb-2 text-amber-600">
        <a
          onClick={()=>handleClick('/Members')}
          className="font-medium text-lg inline-block hover:text-indigo-600 transition duration-500 ease-in-out mb-2 text-amber-600 hover:cursor-pointer" 
        >
          {name}
          </a>
        </div>
        <h3>{position}</h3>
        <p className="text-gray-500 text-sm">
          {detail}
        </p>
      </div>
      <div className="px-8 py-3 flex flex-row items-center justify-center bg-gray-100">
        <span className="py-1 text-xl mr-5 font-regular text-gray-900 flex flex-row items-center">
          <FaFacebookF />
        </span>
        <span className="py-1 text-xl mr-5 font-regular text-gray-900 flex flex-row items-center">
          <FaInstagram />
        </span>
        <span className="py-1 text-xl mr-5 font-regular text-gray-900 flex flex-row items-center">
          <FaLinkedinIn />
        </span>
      </div>
    </div>
  );
};

export default BodCard;

