import React from "react";
import RightNavbar from "./components/RightNavbar/page";
import ProfileCard from "./components/ProfileCard/page";

export default function Page() {
  return (
    <div className="relative min-h-screen  flex justify-center items-center gap-12">

      <ProfileCard />


      <div className="bg-[bg-gray-200] p-8   w-[1000px] h-[650px] ">
        <h1 className="text-4xl text-white font-bold  mb-4">Lets Work  Together !</h1>
        <h1 className="text-4xl text-white font-bold  mb-2">Hi From  Sirasak ,
        </h1>
        <h1 className="text-4xl font-bold text-white  mb-2">Interactive Designer & Fullstack
        </h1>
        <h1 className="text-4xl font-bold text-white mb-8">Web Developer</h1>

        <p className="text-2xl text-gray-400 mb-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse quae laudantium temporibus nobis? Porro laudantium, enim repudiandae adipisci maiores voluptates aspernatur quidem similique officiis. Ducimus numquam dicta fugiat repellat dolore, aspernatur harum blanditiis veniam distinctio voluptatum quo assumenda enim quasi mollitia, voluptate inventore commodi rem! Tempora nihil dolorem ab perferendis!</p>

        <div className="flex justify-start items-center gap-12">
          <div className="flex flex-col items-center">
            <h1 className="text-5xl text-orange-600 font-bold">3+</h1>
            <p className="text-sm text-gray-500 mt-1">Years of Experience</p>
          </div>

          <div className="flex flex-col items-center">
            <h1 className="text-5xl text-orange-600 font-bold">10+</h1>
            <p className="text-sm text-gray-500 mt-1">Projects Completed</p>
          </div>
        </div>
      </div>
      <RightNavbar />
    </div>
  );
}
