"use client"
import React, { useState } from 'react';
import Link from 'next/link';

const Blog = () => {
  const [showMembers, setShowMembers] = useState(false);

  // Function to toggle the visibility of member cards
  const handleToggleMembers = () => {
    setShowMembers(!showMembers);
  };

  return (
    <section
      id="blog"
      className="bg-gradient-to-b from-gray-light to-gray-dark dark:bg-gradient-to-b from-bg-color-light to-bg-color-dark py-16 md:py-20 lg:py-28 rounded-t-3xl"
    >
      <div className="container flex flex-col justify-center items-center">
        <div className="w-full">
          <div className="flex justify-center mb-8">
            <div className="w-32 h-32 bg-gray-200 rounded-full overflow-hidden flex items-center justify-center">
              <img className="object-cover w-full h-full" src="/images/logo/logo.png" alt="CEO and Co-founder" />
            </div>
          </div>
          <div className="text-center">
            <h3 className="text-xl font-semibold text-blue-600 animate-fade-in">
              CEO and Co-founder
            </h3>
            <p className="text-orange-500 animate-fade-in-delay">
              John Doe
            </p>
            <p className="text-gray-300 mt-4 animate-fade-in-delay-2">
              Bringing visionary leadership and strategic guidance to our team.
            </p>
          </div>
        </div>

        {/* Conditionally render the member cards */}
        {showMembers && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 mt-10">
            {/* Render member cards here */}
          </div>
        )}

        {/* Render the link to toggle member visibility */}
        <div className="text-center mt-8">
          <Link href="/blog" passHref>
            <span
              className="text-primary font-medium underline cursor-pointer inline-block animate-pulse"
              onClick={handleToggleMembers}
            >
              {showMembers ? 'Hide Board of Directors' : 'See other Board of Directors'}
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Blog;







