import { Kanit } from "next/font/google";
import Image from "next/image";
import React, { useCallback, useRef, useState } from "react";

import styles from "@/styles/Home.module.css";

import Fitness from "../../public/fitness/fitness1.png";
import Travel from "../../public/travel.png";
import Work from "../../public/work.png";
import Link from "next/link";

const lato = Kanit({ weight: "600", subsets: ["latin"] });

const Main = () => {
  // Draggable state
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [dragging, setDragging] = useState(false);
  const dragStart = useRef({ x: 0, y: 0 });
  const mouseStart = useRef({ x: 0, y: 0 });
  const overlayRef = useRef<HTMLDivElement>(null);

  const handleMouseDown = (e: React.MouseEvent) => {
    setDragging(true);
    dragStart.current = { ...position };
    mouseStart.current = { x: e.clientX, y: e.clientY };
    document.body.style.userSelect = "none";
  };

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (!dragging) return;
      const dx = e.clientX - mouseStart.current.x;
      const dy = e.clientY - mouseStart.current.y;
      // Clamp logic
      const overlay = overlayRef.current;
      if (overlay) {
        const overlayRect = overlay.getBoundingClientRect();
        const overlayWidth = overlayRect.width;
        const overlayHeight = overlayRect.height;
        const winWidth = window.innerWidth;
        const winHeight = window.innerHeight;
        // Calculate new center position
        let newX = dragStart.current.x + dx;
        let newY = dragStart.current.y + dy;
        // Clamp X: overlay center must stay within [overlayWidth/2, winWidth - overlayWidth/2]
        // The overlay's center is at: winWidth/2 + newX
        const minX = -winWidth / 2 + overlayWidth / 2;
        const maxX = winWidth / 2 - overlayWidth / 2;
        newX = Math.max(minX, Math.min(maxX, newX));
        // Clamp Y: overlay bottom must stay within [0, winHeight - overlayHeight]
        const minY = -winHeight * 0.9 + overlayHeight; // bottom:10%
        const maxY = winHeight * 0.1; // bottom:10%
        newY = Math.max(minY, Math.min(maxY, newY));
        setPosition({ x: newX, y: newY });
      }
    },
    [dragging]
  );

  const handleMouseUp = () => {
    setDragging(false);
    document.body.style.userSelect = "";
  };

  // Attach/detach listeners
  React.useEffect(() => {
    if (dragging) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
    } else {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    }
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [dragging, handleMouseMove]);

  return (
    <section className={styles.heroSection}>
      <div className={styles.heroImagesRow}>
        {[Fitness, Work, Travel].map((img, i) => (
          <div
            key={i}
            className={styles.heroImageWrapper}
            style={{ animationDelay: `${i * 0.2 + 0.2}s` }}
          >
            <Image
              src={img}
              alt={`hero-image-${i}`}
              className={styles.heroImage}
              priority={i === 1}
              fill={false}
              width={500}
              height={500}
            />
          </div>
        ))}
        <div
          ref={overlayRef}
          className={styles.heroOverlay}
          style={{
            left: `calc(50% + ${position.x}px)`,
            bottom: `calc(10% - ${position.y}px)`,
            cursor: dragging ? "grabbing" : "grab",
          }}
          onMouseDown={handleMouseDown}
        >
          <div className={styles.glassFilter}></div>
          <div className={styles.glassOverlay}></div>
          <div className={styles.glassSpecular}></div>
          <div className={styles.glassContent}>
            <div className={styles.heroNameBlock}>
              <span className={styles.heroNameMain}>Aviral</span>
              <span className={styles.heroNameSub}>Srivastava</span>
            </div>
            <div className={styles.heroTitle}>
              <span className={lato.className}>
                <Link
                  href="/fitness"
                  className={styles.heroNavBtn}
                  tabIndex={0}
                  aria-label="Go to Fitness"
                >
                  Train
                </Link>
                <span className={styles.heroTitleSeparator}>|</span>
                <Link
                  href="/work"
                  className={styles.heroNavBtn}
                  tabIndex={0}
                  aria-label="Go to Work"
                >
                  Tech
                </Link>

                <span className={styles.heroTitleSeparator}>|</span>
                <span className={styles.heroNavStatic}>Travel</span>
              </span>
            </div>
            <div className={styles.heroIntro}>
              Hi, I&apos;m Aviral, a self-motivated &rdquo;Tech driven wellness
              nomad&rdquo;
            </div>
            <div className={styles.heroDesc}>
              Master coder by day, fitness enthusiast by night, and globetrotter
              by nature. Eager to master the art of coding, defy physical
              limitations, and uncover the wonders of the globe.
            </div>
            <div className={styles.heroFooter}>
              Welcome to my portfolio. Feel free to browse my website, connect
              on any social media or directly book a 1 on 1. Thank you for
              visiting!
            </div>
          </div>
          {/* SVG filter for glass effect */}
          <svg style={{ display: "none" }}>
            <filter id="lg-dist" x="0%" y="0%" width="100%" height="100%">
              <feTurbulence
                type="fractalNoise"
                baseFrequency="0.008 0.008"
                numOctaves="2"
                seed="92"
                result="noise"
              />
              <feGaussianBlur in="noise" stdDeviation="2" result="blurred" />
              <feDisplacementMap
                in="SourceGraphic"
                in2="blurred"
                scale="70"
                xChannelSelector="R"
                yChannelSelector="G"
              />
            </filter>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Main;
