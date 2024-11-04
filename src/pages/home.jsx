
import React from "react";
import FeaturesSection from "../components/featuresSection";
import HoverCards from "../components/hovercards";
import Footer from "../components/footer";
import ImageSlider from "../components/imageSlider.jsx";
import Banner from "../components/banner.jsx";
import AnimatedCard from "../components/animatedCard.jsx"
import ImageLayout from "../components/imageLayout.jsx";
import TeamSection from "../components/teamSection.jsx";
import { FloatingNav } from "../components/floatingNav.jsx";

export default function Home() {
  return (
    <>
      <FloatingNav />
      <ImageSlider />
      <FeaturesSection />
      <HoverCards />
      <Banner />
      <AnimatedCard />
      <ImageLayout />
      <TeamSection />
      <Footer />
    </>
  );
}
