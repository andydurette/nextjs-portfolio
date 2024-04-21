import { atom } from "jotai";
import { portfolioData } from "../json/portfolioData.js";
import { expertiseData } from "../json/expertiseData.js";

const portfolioAtom = atom(portfolioData);
const expertiseAtom = atom(expertiseData);
const mobileNavAtom = atom<boolean>(false);
const scrollAtom = atom<boolean>(false);
const activeAtom = atom<string>("home");
const inMobileAtom = atom<boolean>(false);
const navInMobileAtom = atom<boolean>(false);
const portfolioOpacityAtom = atom<string>("ALL");

export {
  portfolioAtom,
  expertiseAtom,
  mobileNavAtom,
  scrollAtom,
  activeAtom,
  inMobileAtom,
  navInMobileAtom,
  portfolioOpacityAtom,
};
