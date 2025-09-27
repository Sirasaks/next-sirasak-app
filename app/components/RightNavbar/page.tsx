import Link from "next/link";
import { BicepsFlexedIcon } from "@/components/ui/BicepsFlexedIcon";
import { BookOpenIcon } from "@/components/ui/BookOpenIcon";
import { ContactIcon } from "@/components/ui/ContactIcon";
import { FolderIcon } from "@/components/ui/FolderIcon";
import { HouseIcon } from "@/components/ui/HouseIcon";
import { UserIcon } from "@/components/ui/UserIcon";
import { UserStarIcon } from "@/components/ui/UserStarIcon";

export default function page() {
  return (
    <div className="fixed top-1/2 -translate-y-1/2 right-10 bg-[#1d1c1d] text-white shadow-lg flex flex-col p-2 rounded-full h-[370px] border border-gray-500">
      <ul className="flex flex-col justify-between h-full">
        <li>
          <Link href="/" className="flex items-center justify-center p-2 rounded-full text-white hover:text-orange-500 transition-colors">
            <HouseIcon className="w-6 h-6" />
          </Link>
        </li>
        <li>
          <Link href="/aboutme" className="flex items-center justify-center p-2 rounded-full text-white hover:text-orange-500 transition-colors">
            <UserIcon className="w-6 h-6" />
          </Link>
        </li>
        <li>
          <Link href="/eduexp" className="flex items-center justify-center p-2 rounded-full text-white hover:text-orange-500 transition-colors">
            <BookOpenIcon className="w-6 h-6" />
          </Link>
        </li>
        <li>
          <Link href="/spec" className="flex items-center justify-center p-2 rounded-full text-white hover:text-orange-500 transition-colors">
            <UserStarIcon className="w-6 h-6" />
          </Link>
        </li>
        <li>
          <Link href="/projects" className="flex items-center justify-center p-2 rounded-full text-white hover:text-orange-500 transition-colors">
            <FolderIcon className="w-6 h-6" />
          </Link>
        </li>
        <li>
          <Link href="/skills" className="flex items-center justify-center p-2 rounded-full text-white hover:text-orange-500 transition-colors">
            <BicepsFlexedIcon className="w-6 h-6" />
          </Link>
        </li>
        <li>
          <Link href="/contact" className="flex items-center justify-center p-2 rounded-full text-white hover:text-orange-500 transition-colors">
            <ContactIcon className="w-6 h-6" />
          </Link>
        </li>
      </ul>
    </div>
  );
}
