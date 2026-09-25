"use client";

import React from "react";
import { useTheme } from "@/context/ThemeContext";
import "./ThemeToggle.css";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <label
      className="theme-toggle-switch cursor-pointer"
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
      title={`Switch to ${isDark ? "light" : "dark"} mode`}
    >
      <input
        type="checkbox"
        className="toggle-input"
        checked={isDark}
        onChange={toggleTheme}
        aria-label="Toggle theme"
      />
      <span className="theme-toggle-slider">
        <span className="sun-moon">
          <span className="light-ray" id="light-ray-1" />
          <span className="light-ray" id="light-ray-2" />
          <svg id="moon-dot-1" className="moon-dot" viewBox="0 0 10 10" aria-hidden="true">
            <circle cx="5" cy="5" r="5" />
          </svg>
          <svg id="moon-dot-2" className="moon-dot" viewBox="0 0 10 10" aria-hidden="true">
            <circle cx="5" cy="5" r="5" />
          </svg>
          <svg id="moon-dot-3" className="moon-dot" viewBox="0 0 10 10" aria-hidden="true">
            <circle cx="5" cy="5" r="5" />
          </svg>
        </span>
        <span className="stars">
          <svg id="star-1" className="star" viewBox="0 0 20 20" aria-hidden="true">
            <path d="M10 0 C10 6 6 10 0 10 C6 10 10 14 10 20 C10 14 14 10 20 10 C14 10 10 6 10 0 Z" />
          </svg>
          <svg id="star-2" className="star" viewBox="0 0 20 20" aria-hidden="true">
            <circle cx="10" cy="10" r="8" />
          </svg>
          <svg id="star-3" className="star" viewBox="0 0 20 20" aria-hidden="true">
            <path d="M10 0 C10 6 6 10 0 10 C6 10 10 14 10 20 C10 14 14 10 20 10 C14 10 10 6 10 0 Z" />
          </svg>
          <svg id="star-4" className="star" viewBox="0 0 20 20" aria-hidden="true">
            <path d="M10 0 C10 6 6 10 0 10 C6 10 10 14 10 20 C10 14 14 10 20 10 C14 10 10 6 10 0 Z" />
          </svg>
        </span>
        <svg id="cloud-1" className="cloud-dark" viewBox="0 0 100 50" aria-hidden="true">
          <path d="M20,40 Q25,20 45,25 Q60,10 75,25 Q90,20 95,40 Z" />
        </svg>
        <svg id="cloud-2" className="cloud-light" viewBox="0 0 100 50" aria-hidden="true">
          <path d="M20,40 Q25,20 45,25 Q60,10 75,25 Q90,20 95,40 Z" />
        </svg>
        <svg id="cloud-3" className="cloud-light" viewBox="0 0 100 50" aria-hidden="true">
          <path d="M20,40 Q25,20 45,25 Q60,10 75,25 Q90,20 95,40 Z" />
        </svg>
      </span>
    </label>
  );
}