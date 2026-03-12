import { useState, useEffect, useRef } from "react";

/**
 * WelcomeSlide Component
 *
 * Displays a fullscreen BSOD-style welcome message on initial page load.
 * After a brief display, slides upward to reveal the main portfolio content.
 *
 * Animation Timeline:
 * - 0-1s:  BSOD screen displayed (text hidden)
 * - 1s:    Text fades in, progress counter starts (sputters to 100%)
 * - 100%:  Slide-up animation fires 500ms after counter completes
 * - +1s:   Component removed from DOM, scroll unlocked
 */
export function WelcomeSlide() {
  const [isTextVisible, setIsTextVisible] = useState(false);
  const [isSliding, setIsSliding] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [progress, setProgress] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const stallTicksRef = useRef(0);

  // Trigger slide-up once counter hits 100%
  useEffect(() => {
    if (progress < 100) return;

    const slideTimer = setTimeout(() => setIsSliding(true), 500);
    const hideTimer = setTimeout(() => {
      setIsHidden(true);
      document.body.style.overflow = 'unset';
    }, 1500);

    return () => {
      clearTimeout(slideTimer);
      clearTimeout(hideTimer);
    };
  }, [progress]);

  useEffect(() => {
    // Lock body scroll immediately to prevent scrolling during animation
    document.body.style.overflow = 'hidden';

    // Show text and start progress counter after 1 second
    const textTimer = setTimeout(() => {
      setIsTextVisible(true);
      intervalRef.current = setInterval(() => {
        setProgress(prev => {
          if (prev >= 100) {
            clearInterval(intervalRef.current!);
            return 100;
          }
          // Count down an active stall
          if (stallTicksRef.current > 0) {
            stallTicksRef.current -= 1;
            return prev;
          }
          // Randomly start a new stall (freeze for 3–8 ticks = 150–400ms)
          if (Math.random() < 0.06) {
            stallTicksRef.current = Math.floor(Math.random() * 6) + 3;
            return prev;
          }
          // Occasionally jump +2 after moving freely
          return prev + (Math.random() < 0.2 ? 2 : 1);
        });
      }, 50);
    }, 1000);

    // Cleanup function: clear timers and restore scroll on unmount
    return () => {
      clearTimeout(textTimer);
      if (intervalRef.current) clearInterval(intervalRef.current);
      document.body.style.overflow = 'unset';
    };
  }, []);

  // Remove component from DOM after animation completes
  if (isHidden) return null;

  return (
    <div
      className={`
        fixed inset-0 z-[100]
        bg-[#0078D4]
        transition-transform duration-1000 ease-in-out
        ${isSliding ? '-translate-y-full' : 'translate-y-0'}
        flex items-center justify-center
      `}
      style={{ willChange: 'transform' }}
      aria-live="polite"
      aria-label="Welcome message"
    >
      <div
        className={`
          text-white font-mono
          transition-opacity duration-500
          ${isTextVisible ? 'opacity-100' : 'opacity-0'}
          w-full max-w-xl px-8
          text-center md:text-left
        `}
      >
        <div className="text-8xl font-bold mb-6">:)</div>
        <div className="text-2xl font-semibold mb-6">Welcome, friend.</div>
        <p className="text-base leading-relaxed mb-6">
          A developer built this instead of touching grass.
          We&apos;re just tidying up, and then we&apos;ll
          pretend this was intentional the whole time.
        </p>
        <p className="text-base mb-8">{progress}% complete</p>
        <p className="text-sm leading-relaxed mb-8">
          Stack trace successfully ignored:<br />
          Normal programming will now resume.
        </p>
        <p className="text-xs tracking-widest uppercase">
          PORTFOLIO_INITIALIZATION_COMPLETE
        </p>
      </div>
    </div>
  );
}
