import React, { useEffect } from 'react'
import Lenis from 'lenis'
import { time } from 'motion/react';

const LeniScroll = () => {

    useEffect(() => {
        const lenis = new Lenis ({
            duration: 1.2,
            smoothWheel: true,
            syncTouch: false,
            anchors: {
                offset : -120
        },
        });

        const raf = (time) => {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf)

        return () => {
            lenis.destroy()
        }
    }, [])
    
  return null
}

export default LeniScroll