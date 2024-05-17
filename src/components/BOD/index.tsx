"use client"
import { useState } from 'react';
import Link from 'next/link';
import blogData from "./blogData";

const Blog = () => {
  const initialMember = blogData.find(blog => blog.id === 1);
  const [displayedMember, setDisplayedMember] = useState(initialMember);

  const handleShowAll = () => {
    // Logic to navigate to another page to show other board members
    // Replace '/blog' with the actual path of the page
    // where you want to display other board members
    window.location.href = "/blog";
  };

  return (
    <section
      id="blog"
      className="bg-gradient-to-b from-gray-light to-gray-dark dark:bg-gradient-to-b from-bg-color-light to-bg-color-dark py-16 md:py-20 lg:py-28 rounded-t-3xl"
    >
      <div className="container flex flex-col justify-center items-center">

        <div className="w-full">
          {/* Display nice dive and CEO and Co-founder image */}
          <div className="flex justify-center mb-8">
            <div className="w-32 h-32 bg-gray-200 rounded-full overflow-hidden flex items-center justify-center">
              {/* Replace the image source with the actual path to the CEO and Co-founder image */}
              <img className="object-cover w-full h-full" src="/images/logo/logo.png" alt="CEO and Co-founder" />
            </div>
          </div>
          <div className="text-center">
            <h3 className="text-xl font-semibold text-blue-600 animate-fade-in">
              CEO and Co-founder
            </h3>
            {/* Replace with actual CEO and Co-founder name */}
            <p className="text-orange-500 animate-fade-in-delay">
              John Doe
            </p>
            <p className="text-gray-300 mt-4 animate-fade-in-delay-2">
              Bringing visionary leadership and strategic guidance to our team.
            </p>
          </div>
        </div>

        <div className="text-center mt-8">
          <Link href="/blog" passHref>
            <span className="text-primary font-medium underline cursor-pointer inline-block animate-pulse">
              See other Board of Directors
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Blog;




