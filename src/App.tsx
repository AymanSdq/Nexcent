
import { motion, useSpring, useScroll } from "motion/react"
import Header from "./components/Header"
import HeroSection from "./components/HeroSection"
import OurClient from "./components/OurClient"
import SingleSystem from "./components/SingleSystem"
import Unseen from "./components/Unseen"
import Helping from "./components/Helping"


function App() {

  const { scrollYProgress } = useScroll()
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001,
    })


  return (
    <>
      <motion.div
                id="scroll-indicator"
                style={{
                    scaleX,
                    position: "fixed",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: 10,
                    originX: 0,
                    backgroundColor: "#4CAF4F",
                    zIndex : 9999,
                }}
          />
        <Header />
        <HeroSection />
        <OurClient />
        <SingleSystem />
        <Unseen />
        <Helping />
    </>
  )
}

export default App
