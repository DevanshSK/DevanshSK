"use client";
import styles from './page.module.scss'
import Index from "@/components/header/header";
import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const HomePage = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (
      async () => {
        const LocomotiveScroll = (await import("locomotive-scroll")).default;
        const locomotiveScroll = new LocomotiveScroll(); 

        setTimeout(() => {
          document.body.style.cursor = 'default';
          window.scrollTo(0,0);
        }, 2000)
      }
    )()
  }, []);

  return (
    <main>
      <AnimatePresence mode="wait">
        <Index />
      </AnimatePresence>
    </main>
  )
}

export default HomePage