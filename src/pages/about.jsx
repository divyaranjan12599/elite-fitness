import React from "react"
import Footer from "../components/footer"
import FeaturesSection from "../components/featuresSection"
import TeamSection from "../components/teamSection"
import Banner from "../components/banner"
import FlipWords from "../components/flipWords"
import { FloatingNav } from "../components/floatingNav"
import Hero from "../components/hero"

export default function About() {
    return (
      <>
      <FloatingNav />
      <Hero />
      <FlipWords />
      <FeaturesSection />
      <TeamSection />
      <Banner />
      <Footer />
      </>
    )
  }