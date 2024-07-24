import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { navItems } from "@/data";
import dynamic from "next/dynamic";
import { FaHome } from "react-icons/fa";

// import RecentProjects from "@/components/RecentProjects";
const RecentProjects = dynamic(() => import('@/components/RecentProjects'), { ssr: false })

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav
          navItems={navItems} 
        />
        <Hero />
        
        <RecentProjects />
      </div>
    </main>
  );
}
