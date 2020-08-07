import React, { useEffect } from 'react';
import { useInView } from "react-intersection-observer"
import { motion, useAnimation } from "framer-motion"


const TimelineItem = ({ title, subtitle, date, content, image, imageAlt, reverse }) => {

  const controls = useAnimation()
  const [ref, inView] = useInView({
    threshold: 0.1,
  })
  const [refMobile, inViewMobile] = useInView({
    threshold: 0.1,
  })

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
    if (inViewMobile) {
      controls.start("visible")
    }
  }, [controls, inView, inViewMobile])

  return (
    <div>

      {/* FOR MORE THAN MD SCREENS */}
      <motion.div 
        ref={ref}
        animate={controls}
        initial="hidden"
        variants={{
          visible: { opacity: 1, y: 0 },
          hidden: { opacity: 0, y: 25 },
        }}
        transition={{ ease: "easeOut", duration: 0.75, delay: 0.35 }} 
        className="hidden md:flex md:flex-row"
      >
        <div className="flex-1">
          {!reverse &&
            <div className="flex justify-end -mr-16 pt-8">
              <div className="text-right mr-4">
                <p className="text-2xl">{title}</p>
                <p className="text-xl">{subtitle}</p>
                <p className="text-lg">{date}</p>
                <p>{content}</p>
              </div>
              <img 
                src={image} 
                alt="Café" 
                className="w-32 h-32 rounded-full border-2 border-gray-600 z-40" 
              />
            </div>
          }
        </div>

        <div className="bg-gray-500 w-1 z-10 h-auto" style={{ minWidth: '5px' }} />

        <div className="flex-1">
          {reverse && 
            <div className="flex flex-row-reverse justify-end -ml-16 pt-8">
              <div className="text-left ml-4">
                <p className="text-2xl">{title}</p>
                <p className="text-xl">{subtitle}</p>
                <p className="text-lg">{date}</p>
                <p>{content}</p>
              </div>
              <img 
                src={image} 
                alt="Café" 
                className="w-32 h-32 rounded-full border-2 border-gray-600 z-40" 
              />
            </div>
          }
        </div>
      </motion.div>

      {/* FOR LESS THAN MD SCREENS */}
      <motion.div
        ref={refMobile}
        animate={controls}
        initial="hidden"
        variants={{
          visible: { opacity: 1, y: 0 },
          hidden: { opacity: 0, y: 25 },
        }}
        transition={{ ease: "easeOut", duration: 0.75, delay: 0.35 }}  
        className="flex ml-8 md:hidden"
      >
        <div className="bg-gray-500 z-10 w-1 h-auto" style={{ minWidth: '5px', marginRight: '-3.2rem' }} />
        <div className="flex justify-start pt-8">
          <img 
            src={image} 
            alt="Café" 
            className="w-24 h-24 rounded-full border-2 border-gray-600 z-40" 
          />
          <div className="text-left ml-4">
            <p className="text-2xl">{title}</p>
            <p className="text-xl">{subtitle}</p>
            <p className="text-lg">{date}</p>
            <p>{content}</p>
          </div>
        </div>
      </motion.div>

    </div>
  )
}

export default TimelineItem
