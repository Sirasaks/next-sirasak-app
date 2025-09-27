import React from "react";
import { FacebookIcon } from "@/components/ui/FacebookIcon";
import { InstagramIcon } from "@/components/ui/InstagramIcon";
import { LinkedInIcon } from "@/components/ui/LinkedinIcon";
import { TwitterIcon } from "@/components/ui/TwitterIcon";
import Image from "next/image";


export default function page() {
  return (
    <div className="w-[400px] h-[650px] bg-[#1d1c1d] shadow-lg rounded-lg flex flex-col p-6 border border-gray-500">
      <p className="text-2xl mb-2 text-white">
        <span className="text-orange-600">S</span>irasak
      </p>
      <div className="h-[350px] bg-white rounded-lg mb-4 overflow-hidden">
  <Image
    src="/images/profile.jpg"
    alt="Profile"
    width={400}        // กำหนดขนาดจริงหรือขนาด container
    height={350}
    className="object-cover w-full h-full"
  />
</div>
      <p className="text-lg text-center text-white mb-2">STU ID : 6652410001</p>
      <p className="text-sm text-center mb-4 text-gray-500">Fullstack Web Developer</p>
      <div className="flex justify-center gap-6 mt-4 mb-4">
        <a href="#" className="text-white hover:text-orange-600"><FacebookIcon /></a>
        <a href="#" className="text-white hover:text-orange-600"><TwitterIcon /></a>
        <a href="#" className="text-white hover:text-orange-600"><LinkedInIcon /></a>
        <a href="#" className="text-white hover:text-orange-600"><InstagramIcon /></a>
      </div>
      <button className="bg-orange-600 py-2 rounded-2xl hover:text-white transition">
        HIRE ME!
      </button>
    </div>
  );
}
