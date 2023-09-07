import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
export default function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const { ref, inView } = useInView({ threshold: 1 });

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  }, [inView]);
  return (
    <div ref={ref}>
      <motion.video
        ref={videoRef}
        className="pointer-events-none mx-auto h-fit w-[720px] max-w-[90%] rounded-xl md:mr-0"
        muted
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <source src="/hero-section.mp4" type="video/mp4" />
      </motion.video>
    </div>
  );
}
