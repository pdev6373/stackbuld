"use client";
import { ServicesWrapperType } from "@/types";
import { motion, useInView, useAnimation } from "framer-motion";
import { useRef, useEffect } from "react";

export default function SectionWrapper({
  children,
  width = "fit-content",
  // margin = "0px 0px -5% 0px",
  margin = "0px 0px 0px 0px",
  type = "cover",
  amount = "all",
  duration = 0.5,
  nodelay = false,
}: ServicesWrapperType) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin,
    amount,
  });

  const mainControls = useAnimation();
  const slideControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
      slideControls.start("visible");
    }
  }, [isInView]);

  return (
    <div
      ref={ref}
      style={{
        position: "relative",
        width,
        overflow: "hidden",
      }}
    >
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: {
            opacity: 1,
            y: 0,
          },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration, delay: nodelay ? 0 : 0.3 }}
        style={{ height: "100%" }}
      >
        {children}
      </motion.div>
      {type === "cover" && (
        <motion.div
          variants={{
            hidden: { top: 0 },
            visible: { top: "100%" },
          }}
          initial="hidden"
          animate={slideControls}
          transition={{
            duration,
            ease: "easeIn",
          }}
          style={{
            position: "absolute",
            top: 4,
            bottom: 4,
            left: 0,
            right: 0,
            zIndex: 20,
            background: "#17c2c2",
          }}
        />
      )}
    </div>
  );
}
