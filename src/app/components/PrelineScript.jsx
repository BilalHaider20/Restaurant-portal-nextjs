"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

// Global declaration for HSStaticMethods to avoid TypeScript errors
/* global window */
  
export default function PrelineScript() {
  const path = usePathname();

  useEffect(() => {
    const loadPreline = async () => {
      await import("preline/preline");

      if (window.HSStaticMethods) {
        window.HSStaticMethods.autoInit();
      }
    };

    loadPreline();
  }, [path]);

  return null;
}
