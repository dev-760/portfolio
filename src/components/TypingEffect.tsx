"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { MOTION_EASINGS } from "@/motion/tokens";

interface TypingEffectProps {
  words: string[];
  className?: string;
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseDuration?: number;
}

export function TypingEffect({
  words,
  className = "",
  typingSpeed = 120,
  deletingSpeed = 50,
  pauseDuration = 10000, // At least 10 seconds per word
}: TypingEffectProps) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [phase, setPhase] = useState<"typing" | "pausing" | "deleting">("typing");

  useEffect(() => {
    if (!words || words.length === 0) return;

    const currentWord = words[currentWordIndex];
    let timer: NodeJS.Timeout;

    if (phase === "typing") {
      if (currentText.length < currentWord.length) {
        timer = setTimeout(() => {
          const nextText = currentWord.slice(0, currentText.length + 1);
          setCurrentText(nextText);
          if (nextText.length === currentWord.length) {
            setPhase("pausing");
          }
        }, typingSpeed);
      }
    } else if (phase === "pausing") {
      // Hold the full word for at least 10 seconds
      timer = setTimeout(() => {
        setPhase("deleting");
      }, pauseDuration);
    } else if (phase === "deleting") {
      if (currentText.length > 0) {
        timer = setTimeout(() => {
          const nextText = currentWord.slice(0, currentText.length - 1);
          setCurrentText(nextText);
          if (nextText.length === 0) {
            setPhase("typing");
            setCurrentWordIndex((prev) => (prev + 1) % words.length);
          }
        }, deletingSpeed);
      }
    }

    return () => clearTimeout(timer);
  }, [currentText, phase, currentWordIndex, words, typingSpeed, deletingSpeed, pauseDuration]);

  return (
    <motion.span
      className={className}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, ease: MOTION_EASINGS.system }}
    >
      <span>{currentText}</span>
      <motion.span
        className="inline-block w-0.5 h-5 bg-primary ml-1 align-middle"
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.8, repeat: Infinity, repeatDelay: 0.2 }}
        aria-hidden="true"
      />
    </motion.span>
  );
}