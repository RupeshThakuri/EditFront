import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Blog from "@/components/Blog";
import BOD from "@/components/BOD";
import Brands from "@/components/Brands";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Gallery from "@/components/Gallery";
import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials";
import Video from "@/components/Video";
import NoticeModal from "@/components/NoticeModal"; // Updated import statement
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Edit UI",
  description: "This is Home ",
  // other metadata
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <Video />
      <Features />
      <Brands />
      <AboutSectionOne />
      <AboutSectionTwo />
      <Blog />
      <Testimonials />
      <Gallery/>
      <BOD/>
      <Contact />
      <NoticeModal /> {/* Added NoticeModal component */}
    </>
  );
}
