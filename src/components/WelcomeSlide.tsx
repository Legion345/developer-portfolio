import { useState, useEffect } from "react";

/**
 * WelcomeSlide Component
 *
 * Displays a fullscreen welcome message on initial page load with a shimmer effect.
 * After a brief display, slides upward to reveal the main portfolio content.
 *
 * Animation Timeline:
 * - 0-1s: Royal blue screen displayed (text hidden)
 * - 1s: Text fades in
 * - 1-3s: Display "Welcome, friend" with shimmer effect
 * - 3-4s: Slide up animation
 * - 4s+: Component removed from DOM, scroll unlocked
 */
export function WelcomeSlide() {
  const [isTextVisible, setIsTextVisible] = useState(false);
  const [isSliding, setIsSliding] = useState(false);
  const [isTextHit, setIsTextHit] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    // Lock body scroll immediately to prevent scrolling during animation
    document.body.style.overflow = 'hidden';

    // Show text after 1 second
    const textTimer = setTimeout(() => {
      setIsTextVisible(true);
    }, 300);

    // Start slide-up animation after 3 seconds (1s delay + 2s display)
    const slideTimer = setTimeout(() => {
      setIsSliding(true);
    }, 2000);

    // Hide component completely after 4 seconds (1s delay + 2s display + 1s animation)
    const hideTimer = setTimeout(() => {
      setIsHidden(true);
      // Restore scroll functionality
      document.body.style.overflow = 'unset';
    }, 4000);

    // Cleanup function: clear timers and restore scroll on unmount
    return () => {
      clearTimeout(textTimer);
      clearTimeout(slideTimer);
      clearTimeout(hideTimer);
      document.body.style.overflow = 'unset';
    };
  }, []);

  // Remove component from DOM after animation completes
  if (isHidden) return null;

  return (
    <>
      {/* Background layer that slides up */}
      <div
        className={`
          fixed inset-0 z-[100]
          bg-royal-blue
          transition-transform duration-1000 ease-in-out
          ${isSliding ? '-translate-y-full' : 'translate-y-0'}
        `}
        style={{ willChange: 'transform' }}
        aria-live="polite"
        aria-label="Welcome message"
      />

      {/* Text layer that stays centered and fades out */}
      <div
        className={`
          fixed inset-0 z-[101]
          flex items-center justify-center
          pointer-events-none
          transition-opacity duration-500
          ${isSliding ? 'opacity-0' : 'opacity-100'}
        `}
      >
        <h1
          className={`
            text-5xl md:text-3xl font-bold text-white shimmer-text
            transition-opacity duration-500
            ${isTextVisible ? 'opacity-100' : 'opacity-0'}
          `}
        >
          Welcome, friend
        </h1>
      </div>
    </>
  );
}
