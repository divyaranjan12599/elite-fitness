import ImageSliderUi from "./Ui/imageSliderUi";
import { motion } from "framer-motion";
import Navbar from "../components/navbar"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function ImageSlider() {
const images = ["https://images.unsplash.com/photo-1483721310020-03333e577078?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGZpdG5lc3N8ZW58MHx8MHx8fDA%3D", "https://images.unsplash.com/photo-1513351974182-1f36b4d965d8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTEyfHxmaXRuZXNzfGVufDB8fDB8fHww", "https://images.unsplash.com/photo-1532029837206-abbe2b7620e3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTIwfHxmaXRuZXNzfGVufDB8fDB8fHww"];

return(
<ImageSliderUi className="lg:h-[65rem] h-[38rem]"   images={images}>
        <motion.div
          initial={{
            opacity: 0,
            y: 70,
          }}
          animate={{
            opacity: 1,
            y: 0.5,
            animationDelay: 0.2
          }}
          transition={{
            duration: 1,
          }}
          className="w-screen z-50
           flex flex-col"
        >
          <div className="md:-translate-y-72 p-6">
          <Navbar />  
          </div>
          <motion.p className="flex justify-center text-start md:text-3xl bg-clip-text text-transparent bg-gradient-to-b from-orange-50 to-orange-300 py-1">
            Shape Your Body
          </motion.p>
          <motion.p className="font-bold text-xl md:text-6xl text-center bg-clip-text text-transparent bg-gradient-to-t from-orange-50 to-orange-300 py-4">
            Be Strong <br /> Training Hard
          </motion.p>
          <button className="group px-4 py-2 mb-2 text-white text-xl mx-auto text-center relative mt-4">
            <span className="group-hover:text-2xl md:text-xl text-sm duration-500"> Join now </span>
            <FontAwesomeIcon className="group-hover:translate-x-3 text-sm duration-500" icon={faArrowRight} />
            {/* <div className="absolute inset-x-0  h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-orange-500 to-transparent" /> */}
          </button>
        </motion.div>
      </ImageSliderUi>
      )
      }