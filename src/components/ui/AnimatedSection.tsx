'use client'

import React, { ReactNode } from 'react';
import Image from 'next/image';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

interface AnimatedSectionProps {
  id: string;
  children: ReactNode;
  className?: string;
  animationType?: 'fadeIn' | 'slideUp' | 'slideLeft' | 'slideRight' | 'scaleIn';
  delay?: number;
  threshold?: number;
  triggerOnce?: boolean;
  staggerChildren?: boolean;
  staggerDelay?: number;
}

export const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  id,
  children,
  className = '',
  animationType = 'slideUp',
  delay = 0,
  threshold = 0.8,
  triggerOnce = true,
  staggerChildren = false,
  staggerDelay = 100
}) => {
  const isVisible = useScrollAnimation(id, { threshold, triggerOnce });

  const getAnimationClasses = () => {
    const baseClasses = 'transition-all duration-1000 ease-out transform';
    
    if (!isVisible) {
      switch (animationType) {
        case 'fadeIn':
          return `${baseClasses} opacity-0`;
        case 'slideUp':
          return `${baseClasses} opacity-0 translate-y-8`;
        case 'slideLeft':
          return `${baseClasses} opacity-0 -translate-x-8`;
        case 'slideRight':
          return `${baseClasses} opacity-0 translate-x-8`;
        case 'scaleIn':
          return `${baseClasses} opacity-0 scale-95`;
        default:
          return `${baseClasses} opacity-0`;
      }
    }

    return `${baseClasses} opacity-100 translate-y-0 translate-x-0 scale-100`;
  };

  return (
    <section 
      id={id} 
      className={`${className} ${getAnimationClasses()}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {staggerChildren && isVisible ? (
        <div className="space-y-4">
          {React.Children.map(children, (child, index) => (
            <div 
              key={index}
              className="transition-all duration-700 ease-out transform opacity-0 translate-y-4"
              style={{ 
                transitionDelay: `${delay + (index * staggerDelay)}ms`,
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(1rem)'
              }}
            >
              {child}
            </div>
          ))}
        </div>
      ) : (
        children
      )}
    </section>
  );
};

// Animated card component
interface AnimatedCardProps {
  children: ReactNode;
  className?: string;
  hoverEffect?: boolean;
  delay?: number;
}

export const AnimatedCard: React.FC<AnimatedCardProps> = ({
  children,
  className = '',
  hoverEffect = true,
  delay = 0
}) => {
  return (
    <div 
      className={`transition-all duration-500 ease-out transform ${
        hoverEffect ? 'hover:scale-105 hover:shadow-lg' : ''
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

// Animated text component
interface AnimatedTextProps {
  children: ReactNode;
  className?: string;
  animationType?: 'fadeIn' | 'slideUp' | 'slideLeft' | 'slideRight';
  delay?: number;
}

export const AnimatedText: React.FC<AnimatedTextProps> = ({
  children,
  className = '',
  animationType = 'fadeIn',
  delay = 0
}) => {
  const [isVisible, setIsVisible] = React.useState(false);

  React.useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  const getAnimationClasses = () => {
    const baseClasses = 'transition-all duration-700 ease-out transform';
    
    if (!isVisible) {
      switch (animationType) {
        case 'fadeIn':
          return `${baseClasses} opacity-0`;
        case 'slideUp':
          return `${baseClasses} opacity-0 translate-y-4`;
        case 'slideLeft':
          return `${baseClasses} opacity-0 -translate-x-4`;
        case 'slideRight':
          return `${baseClasses} opacity-0 translate-x-4`;
        default:
          return `${baseClasses} opacity-0`;
      }
    }

    return `${baseClasses} opacity-100 translate-y-0 translate-x-0`;
  };

  return (
    <div className={`${className} ${getAnimationClasses()}`}>
      {children}
    </div>
  );
};

// Animated button component
interface AnimatedButtonProps {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
}

export const AnimatedButton: React.FC<AnimatedButtonProps> = ({
  children,
  onClick,
  className = '',
  variant = 'primary',
  size = 'md'
}) => {
  const getVariantClasses = () => {
    switch (variant) {
      case 'primary':
        return 'bg-secondary text-white hover:bg-secondary/80';
      case 'secondary':
        return 'bg-accent text-gray-700 hover:bg-accent/80';
      case 'outline':
        return 'bg-transparent border-2 border-secondary text-secondary hover:bg-secondary hover:text-white';
      default:
        return 'bg-secondary text-white hover:bg-secondary/80';
    }
  };

  const getSizeClasses = () => {
    switch (size) {
      case 'sm':
        return 'px-4 py-2 text-sm';
      case 'md':
        return 'px-6 py-3 text-base';
      case 'lg':
        return 'px-8 py-4 text-lg';
      default:
        return 'px-6 py-3 text-base';
    }
  };

  return (
    <button
      onClick={onClick}
      className={`
        ${getVariantClasses()}
        ${getSizeClasses()}
        rounded-lg font-semibold
        transition-all duration-300 ease-out transform
        hover:scale-105 hover:shadow-lg
        focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2
        ${className}
      `}
    >
      {children}
    </button>
  );
};

// Animated image component
interface AnimatedImageProps {
  src: string;
  alt: string;
  className?: string;
  delay?: number;
  width?: number;
  height?: number;
}

export const AnimatedImage: React.FC<AnimatedImageProps> = ({
  src,
  alt,
  className = '',
  delay = 0,
  width = 400,
  height = 300
}) => {
  const [isLoaded, setIsLoaded] = React.useState(false);

  return (
    <div 
      className={`transition-all duration-700 ease-out transform ${
        isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className="w-full h-full object-cover"
        onLoad={() => setIsLoaded(true)}
      />
    </div>
  );
}; 