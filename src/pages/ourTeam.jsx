import React from "react"
import Footer from "../components/footer"
import OurTeamPage from "../components/ourTeamPage"
import { FloatingNav } from "../components/floatingNav"
import Hero from "../components/hero"

export default function OurTeam() {
    return (
        <>
        <FloatingNav />
        <Hero />
        <OurTeamPage />
        <Footer />
        </>
    )
  }
