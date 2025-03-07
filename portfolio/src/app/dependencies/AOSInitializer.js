"use client";

import { useEffect } from "react";
import Script from "next/script";

export default function AOSInitializer() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      const AOS = require("aos");
      AOS.init();
    }
  }, []);

  return (
    <>
      {/* AOS Script */}
      <Script
        src="https://unpkg.com/aos@2.3.1/dist/aos.js"
        strategy="afterInteractive"
      />
    </>
  );
}
