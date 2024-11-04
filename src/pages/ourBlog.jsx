import React from "react";
import Footer from "../components/footer";
import FloatingNav from "../components/floatingNav";
import { TracingBeam } from "../components/tracingBeam";
import Comment from "../components/comment";
import Vimeo from "../components/vimeo";
import Hero from "../components/hero";

export default function OurBlog() {
  return (
    <>
      <FloatingNav />
      <Hero />
      <TracingBeam />
      <Vimeo />
      <Comment />
      <Footer />
    </>
  );
}
