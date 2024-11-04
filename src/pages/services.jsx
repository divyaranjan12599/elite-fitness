import React from "react"
import Footer from "../components/footer"
import AnimatedCard from "../components/animatedCard"
import Banner from "../components/banner"
import { FloatingNav } from "../components/floatingNav"
import Hero from "../components/hero"

export default function Services() {
    return (
        <>
        <FloatingNav />
        <Hero />
        <Banner />
        <AnimatedCard />
        <Footer />
        </>
    )
  }
