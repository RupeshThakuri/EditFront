import React from 'react';
import MemberCards from './MemberCards';
import members from './MembersData';

const Members = () => {
  return (
    <>
      <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">
        <div className="border-b mb-5 flex justify-between text-sm">
          <div className="text-indigo-600 flex items-center pb-2 pr-2 border-b-2 border-indigo-600 uppercase">
            <svg className="h-6 mr-3" viewBox="0 0 455.005 455.005">
              <g>
              </g>
            </svg>
            <a href="#" className="font-semibold inline-block">Our Members</a>
          </div>
          <a href="#">See All</a>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {members.map((member) => (
            <MemberCards members={member} key={member.id} />
          ))}
        </div>
      </div>
    </>
  )
}

export default Members
