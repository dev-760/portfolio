"use client";

import { useRef, useEffect, useState, useCallback } from 'react';
import './GooeyNav.css';

export interface GooeyNavItem {
  label: string;
  href: string;
}

export interface GooeyNavProps {
  items: GooeyNavItem[];
  animationTime?: number;
  particleCount?: number;
  particleDistances?: [number, number];
  particleR?: number;
  timeVariance?: number;
  colors?: number[];
  initialActiveIndex?: number;
  activeIndex?: number;
  onItemClick?: (e: React.MouseEvent<HTMLAnchorElement>, item: GooeyNavItem, index: number) => void;
}

const noise = (n = 1) => n / 2 - Math.random() * n;

const getXY = (distance: number, pointIndex: number, totalPoints: number): [number, number] => {
  const angle = ((360 + noise(8)) / totalPoints) * pointIndex * (Math.PI / 180);

  return [distance * Math.cos(angle), distance * Math.sin(angle)];
};

const createParticle = (
  i: number,
  t: number,
  d: [number, number],
  r: number,
  particleCount: number,
  colors: number[]
) => {
  const rotate = noise(r / 10);

  return {
    start: getXY(d[0], particleCount - i, particleCount),
    end: getXY(d[1] + noise(7), particleCount - i, particleCount),
    time: t,
    scale: 1 + noise(0.2),
    color: colors[Math.floor(Math.random() * colors.length)],
    rotate: rotate > 0 ? (rotate + r / 20) * 10 : (rotate - r / 20) * 10
  };
};

export const GooeyNav = ({
  items,
  animationTime = 400,
  particleCount = 0,
  particleDistances = [15, 5],
  particleR = 60,
  timeVariance = 150,
  colors = [1, 2, 3, 1, 2, 3, 1, 4],
  initialActiveIndex = 0,
  activeIndex: activeIndexProp,
  onItemClick
}: GooeyNavProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLUListElement>(null);
  const filterRef = useRef<HTMLSpanElement>(null);
  const [internalActiveIndex, setInternalActiveIndex] = useState(initialActiveIndex);
  const activeIndex = activeIndexProp !== undefined ? activeIndexProp : internalActiveIndex;

  const makeParticles = useCallback((element: HTMLElement) => {
    if (particleCount <= 0) return;

    const d = particleDistances;
    const r = particleR;
    const bubbleTime = animationTime * 2 + timeVariance;
    element.style.setProperty('--time', `${bubbleTime}ms`);

    for (let i = 0; i < particleCount; i++) {
      const t = animationTime * 2 + noise(timeVariance * 2);
      const p = createParticle(i, t, d, r, particleCount, colors);

      const timerId = window.setTimeout(() => {
        const particle = document.createElement('span');
        const point = document.createElement('span');
        particle.classList.add('particle');
        particle.style.setProperty('--start-x', `${p.start[0]}px`);
        particle.style.setProperty('--start-y', `${p.start[1]}px`);
        particle.style.setProperty('--end-x', `${p.end[0]}px`);
        particle.style.setProperty('--end-y', `${p.end[1]}px`);
        particle.style.setProperty('--time', `${p.time}ms`);
        particle.style.setProperty('--scale', `${p.scale}`);
        particle.style.setProperty('--color', `var(--color-${p.color}, currentColor)`);
        particle.style.setProperty('--rotate', `${p.rotate}deg`);

        point.classList.add('point');
        particle.appendChild(point);
        element.appendChild(particle);

        window.setTimeout(() => {
          try {
            if (element.contains(particle)) {
              element.removeChild(particle);
            }
          } catch {
            // Ignore removal errors
          }
        }, t);
      }, 20);

      // Clean up timer on unmount
      return () => clearTimeout(timerId);
    }
  }, [animationTime, colors, particleCount, particleDistances, particleR, timeVariance]);

  const updateEffectPosition = useCallback((element: HTMLElement) => {
    if (!containerRef.current || !filterRef.current) return;
    const containerRect = containerRef.current.getBoundingClientRect();
    const pos = element.getBoundingClientRect();

    const styles = {
      left: `${pos.x - containerRect.x}px`,
      top: `${pos.y - containerRect.y}px`,
      width: `${pos.width}px`,
      height: `${pos.height}px`
    };

    Object.assign(filterRef.current.style, styles);
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, index: number) => {
    if (onItemClick) {
      onItemClick(e, items[index], index);
    }

    setInternalActiveIndex(index);

    const target = e.currentTarget;
    const liEl = target.closest('li');

    if (liEl) {
      updateEffectPosition(liEl);
    }

    if (filterRef.current && particleCount > 0) {
      const existingParticles = filterRef.current.querySelectorAll('.particle');
      existingParticles.forEach(p => p.remove());
      makeParticles(filterRef.current);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLAnchorElement>) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      e.currentTarget.click();
    }
  };

  useEffect(() => {
    if (!navRef.current || !containerRef.current) return;

    const update = () => {
      if (!filterRef.current) return;

      if (activeIndex < 0) {
        filterRef.current.style.opacity = '0';
        filterRef.current.style.visibility = 'hidden';
        return;
      }

      const lis = navRef.current?.querySelectorAll('li');
      const activeLi = lis?.item(activeIndex);

      if (activeLi) {
        updateEffectPosition(activeLi);
        filterRef.current.style.opacity = '1';
        filterRef.current.style.visibility = 'visible';
      } else {
        filterRef.current.style.opacity = '0';
        filterRef.current.style.visibility = 'hidden';
      }
    };

    update();
    const raf = requestAnimationFrame(update);
    const timer = setTimeout(update, 50);

    const resizeObserver = new ResizeObserver(() => {
      update();
    });

    resizeObserver.observe(containerRef.current);

    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(timer);
      resizeObserver.disconnect();
    };
  }, [activeIndex, updateEffectPosition]);

  return (
    <div className="gooey-nav-container" ref={containerRef}>
      <nav aria-label="Desktop Navigation">
        <ul ref={navRef}>
          {items.map((item, index) => {
            const isActive = activeIndex === index;

            return (
              <li key={index} className={isActive ? 'active' : ''}>
                <a
                  href={item.href}
                  onClick={e => handleClick(e, index)}
                  onKeyDown={handleKeyDown}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {item.label}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
      {/* Sliding active pill indicator behind links */}
      <span className="effect filter" ref={filterRef} aria-hidden="true" />

      {/* SVG Gooey Filter - Alpha-channel thresholding */}
      <svg
        style={{ position: 'absolute', width: 0, height: 0, pointerEvents: 'none' }}
        aria-hidden="true"
      >
        <defs>
          <filter id="gooey-nav-filter">
            <feGaussianBlur in="SourceGraphic" stdDeviation="4" result="blur" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8"
              result="goo"
            />
            <feBlend in="SourceGraphic" in2="goo" />
          </filter>
        </defs>
      </svg>
    </div>
  );
};

export default GooeyNav;
