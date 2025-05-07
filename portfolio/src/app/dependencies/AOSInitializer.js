"use client";

import { useEffect } from "react";

export default function AOSInitializer() {
  useEffect(() => {
    import("../dependencies/aos.js").then((AOS) => {
      AOS.init();
    });
  }, []);

  return null;
}
