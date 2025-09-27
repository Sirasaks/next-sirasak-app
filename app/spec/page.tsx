import React from 'react'
import ProfileCard from '../components/ProfileCard/page';
import RightNavbar from '../components/RightNavbar/page';

export default function page() {
  return (
    <div className="relative min-h-screen  flex justify-center items-center gap-12">

      <ProfileCard />


      <div className="bg-[#1d1c1d] p-8 w-[1000px] h-[650px] rounded-lg ">
        <h1 className="text-4xl text-white font-bold mb-6">My Specializations</h1>


        <div className="bg-[#1d1c1d] w-160 p-6 rounded-lg border border-orange-600 mb-10">
          <h1 className="text-2xl text-orange-600 font-semibold mb-2">Front-end Developer</h1>
          <p className="text-white text-lg">
            Front-end is where I weave code and creativity to shape 
          </p>
          <p className="text-white text-lg">captivating and user-centric digital experiences.</p>
        </div>
        <div className="bg-[#1d1c1d] w-160 p-6 rounded-lg border border-orange-600 mb-10">
          <h1 className="text-2xl text-orange-600 font-semibold mb-2">UI/UX Designer</h1>

          <p className="text-white text-lg">UI/UX design is my palette for blending art and user psychology </p>
          <p className="text-white text-lg">
            into seamless and delightful interactions.
          </p>
        </div>
        <div className="bg-[#1d1c1d] w-160 p-6 rounded-lg border border-orange-600 mb-10">
          <h1 className="text-2xl text-orange-600 font-semibold mb-2">Graphic designer</h1>
          <p className="text-white text-lg">
            As a graphic designer, I transform ideas into visually striking and
          </p>
          <p className="text-white text-lg"> impactful designs..</p>
        </div>
      </div>

      <RightNavbar />
    </div>
  );
}
