"use client";
import Nav from "../components/Nav";
import ExpertiseList from "../components/ExpertiseList";
import PortfolioList from "../components/PortfolioList";
import Contact from "../components/Contact";
import Home from "../components/Home";
import { Provider, useAtomValue } from "jotai";
import {
  mobileNavAtom,
  scrollAtom,
  activeAtom,
  inMobileAtom,
  portfolioOpacityAtom,
  expertiseAtom,
  portfolioAtom,
} from "../jotai/index";
import { useEffect, useState } from "react";
import Head from "next/head";

export default function App() {
  const Preloader = () => {
    useAtomValue(mobileNavAtom);
    useAtomValue(scrollAtom);
    useAtomValue(activeAtom);
    useAtomValue(inMobileAtom);
    useAtomValue(portfolioOpacityAtom);
    useAtomValue(expertiseAtom);
    useAtomValue(portfolioAtom);
    return null;
  };

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <Provider>
        <main className="flex min-h-screen flex-col items-center justify-between">
          {/* <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex"> */}
          <Preloader />
          <Nav />
          <Home />
          <ExpertiseList />
          <PortfolioList />
          <Contact />
          {/* </div> */}
        </main>
      </Provider>
    </>
  );
}
