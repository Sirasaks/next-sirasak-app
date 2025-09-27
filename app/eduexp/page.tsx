import React from 'react'
import ProfileCard from '../components/ProfileCard/page';
import RightNavbar from '../components/RightNavbar/page';

export default function page() {
    return (
        <div className="relative min-h-screen  flex justify-center items-center gap-12">
            <ProfileCard />
            <div className="bg-[#1d1c1d] p-8 w-[1000px] h-[650px] rounded-lg ">
  <h1 className="text-4xl text-white font-bold mb-6 ">
    Education & Experience
  </h1>

  {/* Experience */}
  <div className="mb-8">
    <h2 className="text-2xl text-orange-600 font-semibold mb-1">2022 - Present</h2>
    <p className="text-white text-xl font-medium mb-0.5">UI/UX Designer</p>
    <p className="text-gray-400 text-lg mb-2">Freelance</p>

    <p className="text-white text-xl font-medium mb-0.5">Fullstack Web Developer</p>
    <p className="text-gray-400 text-lg mb-2">Freelance</p>
  </div>

  {/* Education */}
  <div className="mb-8">
    <h2 className="text-2xl text-orange-600 font-semibold mb-1">2022 - 2025</h2>
    <p className="text-white text-xl font-medium mb-0.5">
      Bachelor Degree in Technology Digital and Innovation
    </p>
    <p className="text-gray-400 text-lg mb-2">Southeast Asia University</p>

    <h2 className="text-2xl text-orange-600 font-semibold mb-1">2015 - 2020</h2>
    <p className="text-white text-xl font-medium mb-0.5">High School</p>
    <p className="text-gray-400 text-lg mb-2">Wisetschool</p>
  </div>
</div>

            <RightNavbar />
        </div>
    );
}
