import { useState, useEffect } from 'react';

interface UseScrollAnimationOptions {
  threshold?: number;
  triggerOnce?: boolean;
}

export const useScrollAnimation = (
  elementId: string,
  options: UseScrollAnimationOptions = {}
) => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasTriggered, setHasTriggered] = useState(false);

  const {
    threshold = 0.8,
    triggerOnce = true
  } = options;

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById(elementId);
      if (!element) return;

      const rect = element.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const elementTop = rect.top;
      
      // Calculate visibility threshold
      const visibilityThreshold = windowHeight * threshold;
      const isElementVisible = elementTop < visibilityThreshold;

      if (isElementVisible && (!triggerOnce || !hasTriggered)) {
        setIsVisible(true);
        if (triggerOnce) {
          setHasTriggered(true);
        }
      } else if (!triggerOnce && !isElementVisible) {
        setIsVisible(false);
      }
    };

    // Initial check
    handleScroll();

    // Add scroll listener
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Add resize listener for responsive behavior
    window.addEventListener('resize', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, [elementId, threshold, triggerOnce, hasTriggered]);

  return isVisible;
};

// Hook for staggered animations
export const useStaggeredAnimation = (
  elementId: string,
  itemCount: number,
  staggerDelay: number = 100
) => {
  const isVisible = useScrollAnimation(elementId);
  const [staggeredItems, setStaggeredItems] = useState<boolean[]>([]);

  useEffect(() => {
    if (isVisible) {
      const delays = Array.from({ length: itemCount }, (_, index) => 
        setTimeout(() => {
          setStaggeredItems(prev => {
            const newItems = [...prev];
            newItems[index] = true;
            return newItems;
          });
        }, index * staggerDelay)
      );

      return () => {
        delays.forEach(clearTimeout);
      };
    } else {
      setStaggeredItems(Array(itemCount).fill(false));
    }
  }, [isVisible, itemCount, staggerDelay]);

  return staggeredItems;
};

// Hook for intersection observer with more control
export const useIntersectionObserver = (
  elementId: string,
  options: IntersectionObserverInit = {}
) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [entry, setEntry] = useState<IntersectionObserverEntry | null>(null);

  useEffect(() => {
    const element = document.getElementById(elementId);
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
        setEntry(entry);
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -10% 0px',
        ...options
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [elementId, options]);

  return { isIntersecting, entry };
};

// Hook for smooth entrance animations
export const useEntranceAnimation = (
  elementId: string,
  animationType: 'fadeIn' | 'slideUp' | 'slideLeft' | 'slideRight' | 'scaleIn' = 'fadeIn',
  delay: number = 0
) => {
  const [shouldAnimate, setShouldAnimate] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShouldAnimate(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  const getAnimationClasses = () => {
    if (!shouldAnimate) return 'opacity-0';

    const baseClasses = 'transition-all duration-1000 ease-out transform';
    
    switch (animationType) {
      case 'fadeIn':
        return `${baseClasses} opacity-100`;
      case 'slideUp':
        return `${baseClasses} opacity-100 translate-y-0`;
      case 'slideLeft':
        return `${baseClasses} opacity-100 translate-x-0`;
      case 'slideRight':
        return `${baseClasses} opacity-100 translate-x-0`;
      case 'scaleIn':
        return `${baseClasses} opacity-100 scale-100`;
      default:
        return `${baseClasses} opacity-100`;
    }
  };

  const getInitialClasses = () => {
    switch (animationType) {
      case 'fadeIn':
        return 'opacity-0';
      case 'slideUp':
        return 'opacity-0 translate-y-8';
      case 'slideLeft':
        return 'opacity-0 -translate-x-8';
      case 'slideRight':
        return 'opacity-0 translate-x-8';
      case 'scaleIn':
        return 'opacity-0 scale-95';
      default:
        return 'opacity-0';
    }
  };

  return {
    shouldAnimate,
    animationClasses: getAnimationClasses(),
    initialClasses: getInitialClasses()
  };
}; 