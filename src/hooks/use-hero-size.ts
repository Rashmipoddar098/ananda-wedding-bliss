import { useState, useEffect } from "react";

interface HeroSizes {
  containerSize: number;
  outerRing: number;
  shineRing: number;
  innerRing: number;
  bouquetRadius: number;
  bouquetSize: number;
  useMobileBouquets: boolean;
  coupleWidth: string;
  nameSize: string;
  scriptSize: string;
  dateSize: string;
}

export function useHeroSize(): HeroSizes {
  const [width, setWidth] = useState(typeof window !== "undefined" ? window.innerWidth : 1024);

  useEffect(() => {
    const onResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // Scale everything based on viewport width with min/max clamping
  const vw = width;

  if (vw < 375) {
    // Very small phones
    return {
      containerSize: 280,
      outerRing: 220,
      shineRing: 190,
      innerRing: 160,
      bouquetRadius: 96,
      bouquetSize: 22,
      useMobileBouquets: true,
      coupleWidth: "w-20",
      nameSize: "text-lg",
      scriptSize: "text-base",
      dateSize: "text-xs",
    };
  }
  if (vw < 480) {
    // Small phones (375-479)
    const t = (vw - 375) / 105;
    return {
      containerSize: Math.round(280 + t * 80),
      outerRing: Math.round(220 + t * 80),
      shineRing: Math.round(190 + t * 70),
      innerRing: Math.round(160 + t * 60),
      bouquetRadius: Math.round(96 + t * 40),
      bouquetSize: Math.round(22 + t * 10),
      useMobileBouquets: true,
      coupleWidth: "w-24",
      nameSize: "text-xl",
      scriptSize: "text-lg",
      dateSize: "text-xs",
    };
  }
  if (vw < 640) {
    // Large phones (480-639)
    const t = (vw - 480) / 160;
    return {
      containerSize: Math.round(360 + t * 100),
      outerRing: Math.round(300 + t * 80),
      shineRing: Math.round(260 + t * 70),
      innerRing: Math.round(220 + t * 60),
      bouquetRadius: Math.round(136 + t * 40),
      bouquetSize: Math.round(32 + t * 10),
      useMobileBouquets: true,
      coupleWidth: "w-32",
      nameSize: "text-2xl",
      scriptSize: "text-xl",
      dateSize: "text-sm",
    };
  }
  if (vw < 768) {
    // Small tablets (640-767)
    const t = (vw - 640) / 128;
    return {
      containerSize: Math.round(460 + t * 140),
      outerRing: Math.round(380 + t * 120),
      shineRing: Math.round(330 + t * 110),
      innerRing: Math.round(280 + t * 100),
      bouquetRadius: Math.round(176 + t * 60),
      bouquetSize: Math.round(42 + t * 15),
      useMobileBouquets: false,
      coupleWidth: "w-44",
      nameSize: "text-4xl",
      scriptSize: "text-2xl",
      dateSize: "text-base",
    };
  }
  if (vw < 1024) {
    // Tablets (768-1023)
    const t = (vw - 768) / 256;
    return {
      containerSize: Math.round(600 + t * 200),
      outerRing: Math.round(500 + t * 180),
      shineRing: Math.round(440 + t * 160),
      innerRing: Math.round(380 + t * 140),
      bouquetRadius: Math.round(236 + t * 80),
      bouquetSize: Math.round(57 + t * 20),
      useMobileBouquets: false,
      coupleWidth: "w-56",
      nameSize: "text-5xl",
      scriptSize: "text-3xl",
      dateSize: "text-lg",
    };
  }
  if (vw < 1280) {
    // Desktop (1024-1279)
    const t = (vw - 1024) / 256;
    return {
      containerSize: Math.round(800 + t * 100),
      outerRing: Math.round(680 + t * 100),
      shineRing: Math.round(600 + t * 100),
      innerRing: Math.round(520 + t * 90),
      bouquetRadius: Math.round(316 + t * 50),
      bouquetSize: Math.round(77 + t * 10),
      useMobileBouquets: false,
      coupleWidth: "w-72",
      nameSize: "text-6xl",
      scriptSize: "text-3xl",
      dateSize: "text-xl",
    };
  }
  // Large desktop (1280+)
  return {
    containerSize: 900,
    outerRing: 800,
    shineRing: 720,
    innerRing: 620,
    bouquetRadius: 362,
    bouquetSize: 85,
    useMobileBouquets: false,
    coupleWidth: "w-80",
    nameSize: "text-7xl",
    scriptSize: "text-3xl",
    dateSize: "text-xl",
  };
}
