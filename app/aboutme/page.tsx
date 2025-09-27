import React from 'react'
import ProfileCard from '../components/ProfileCard/page';
import RightNavbar from '../components/RightNavbar/page';

export default function page() {
  return (
      <div className="relative min-h-screen  flex justify-center items-center gap-12">
  
        <ProfileCard />
  
  
        <div className="bg-[bg-gray-200] p-8   w-[1000px] h-[650px] ">
          <h1 className="text-4xl text-white font-bold  mb-4">About Me !</h1>
          <h1 className="text-4xl text-white font-bold  mb-2">I find fulfillment in blending
          </h1>
          <h1 className="text-4xl font-bold text-white  mb-2">visual design with the power of
          </h1>
          <h1 className="text-4xl font-bold text-white mb-2">coding to create meaningful </h1>
          <h1 className="text-4xl font-bold text-white mb-8">experiences. </h1>

  
          <p className="text-2xl text-gray-400 mb-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse quae laudantium temporibus nobis? Porro laudantium, enim repudiandae adipisci maiores voluptates aspernatur quidem similique officiis. Ducimus numquam dicta fugiat repellat dolore, aspernatur harum blanditiis veniam distinctio voluptatum quo assumenda enim quasi mollitia, voluptate inventore commodi rem! Tempora nihil dolorem ab perferendis!</p>
  
        </div>
        <RightNavbar />
      </div>
    );
}
