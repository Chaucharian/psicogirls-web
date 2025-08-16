# Smooth Motion Animations Guide

This guide explains how to use the smooth motion animations implemented throughout the psicogirls-web application.

## Overview

The application now includes comprehensive smooth motion animations that enhance user experience with:
- Scroll-triggered animations
- Staggered entrance effects
- Smooth hover transitions
- Custom CSS animations
- Reusable animation hooks and components

## Features

### 1. Scroll-Triggered Animations
- Elements animate in as they come into view
- Configurable threshold and trigger options
- Smooth fade-in, slide-up, and scale effects

### 2. Staggered Animations
- Multiple elements animate in sequence
- Configurable delays between elements
- Perfect for lists, grids, and card layouts

### 3. Hover Effects
- Smooth scale and shadow transitions
- Enhanced button interactions
- Card lift effects

### 4. Custom CSS Animations
- Predefined keyframe animations
- Utility classes for common effects
- Smooth easing functions

## Usage

### Basic Scroll Animation

```tsx
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const MyComponent = () => {
  const isVisible = useScrollAnimation('my-section');
  
  return (
    <section 
      id="my-section"
      className={`transition-all duration-1000 ease-out transform ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
      }`}
    >
      Content here
    </section>
  );
};
```

### Staggered Animations

```tsx
import { useStaggeredAnimation } from '@/hooks/useStaggeredAnimation';

const MyList = () => {
  const staggeredItems = useStaggeredAnimation('my-list', 5, 100);
  
  return (
    <div id="my-list">
      {items.map((item, index) => (
        <div 
          key={index}
          className={`transition-all duration-700 ease-out transform ${
            staggeredItems[index] ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}
          style={{ transitionDelay: `${index * 100}ms` }}
        >
          {item}
        </div>
      ))}
    </div>
  );
};
```

### Using Animated Components

```tsx
import { AnimatedSection, AnimatedCard, AnimatedButton } from '@/components/ui';

const MyPage = () => {
  return (
    <AnimatedSection 
      id="hero" 
      animationType="slideUp" 
      delay={200}
    >
      <h1>Welcome</h1>
      <p>This content will animate in smoothly</p>
    </AnimatedSection>
    
    <AnimatedCard hoverEffect={true} delay={400}>
      <h2>Card Title</h2>
      <p>This card will lift on hover</p>
    </AnimatedCard>
    
    <AnimatedButton variant="primary" size="lg">
      Click Me
    </AnimatedButton>
  </AnimatedSection>
  );
};
```

## Available Animation Types

### Scroll Animations
- `fadeIn` - Simple opacity transition
- `slideUp` - Slide up from bottom
- `slideLeft` - Slide in from left
- `slideRight` - Slide in from right
- `scaleIn` - Scale up from smaller size

### Hover Effects
- `hover:scale-105` - Subtle scale on hover
- `hover:scale-110` - More pronounced scale
- `hover:shadow-lg` - Enhanced shadow
- `hover:shadow-xl` - Large shadow effect

### Transition Durations
- `duration-300` - Fast (300ms)
- `duration-500` - Medium (500ms)
- `duration-700` - Slow (700ms)
- `duration-1000` - Very slow (1000ms)

## CSS Classes

### Animation Utilities
```css
.animate-fade-in          /* Fade in animation */
.animate-fade-in-delay    /* Fade in with delay */
.animate-slide-in-up      /* Slide up animation */
.animate-scale-in         /* Scale in animation */
.hover-lift              /* Lift effect on hover */
.card-hover              /* Card hover effects */
.btn-animate             /* Button animations */
```

### Transition Utilities
```css
.transition-all          /* All properties */
.transition-transform    /* Transform only */
.transition-opacity      /* Opacity only */
.transition-colors       /* Colors only */
```

## Custom Hooks

### useScrollAnimation
```tsx
const isVisible = useScrollAnimation('element-id', {
  threshold: 0.8,        // Trigger when 80% visible
  rootMargin: '0px',     // No margin
  triggerOnce: true      // Only trigger once
});
```

### useStaggeredAnimation
```tsx
const staggeredItems = useStaggeredAnimation(
  'container-id',         // Container element ID
  5,                      // Number of items
  100                     // Delay between items (ms)
);
```

### useEntranceAnimation
```tsx
const { shouldAnimate, animationClasses } = useEntranceAnimation(
  'element-id',           // Element ID
  'slideUp',              // Animation type
  200                     // Initial delay (ms)
);
```

## Best Practices

### 1. Performance
- Use `transform` and `opacity` for animations (GPU accelerated)
- Avoid animating `width`, `height`, or `margin` properties
- Use `will-change: transform` sparingly

### 2. Accessibility
- Respect `prefers-reduced-motion` media query
- Ensure animations don't interfere with functionality
- Provide alternative states for animated elements

### 3. User Experience
- Keep animations subtle and purposeful
- Use consistent timing and easing
- Don't over-animate - less is often more

### 4. Mobile Considerations
- Reduce animation complexity on mobile devices
- Use shorter durations for mobile
- Test performance on various devices

## Examples

### Hero Section
```tsx
const Hero = () => {
  const { shouldAnimate, animationClasses } = useEntranceAnimation('hero', 'slideUp', 100);
  
  return (
    <section 
      id="hero" 
      className={`${animationClasses} transition-all duration-1000 ease-out`}
    >
      <h1 className="animate-fade-in">Welcome</h1>
      <p className="animate-fade-in-delay">Subtitle</p>
    </section>
  );
};
```

### Card Grid
```tsx
const CardGrid = () => {
  const staggeredItems = useStaggeredAnimation('card-grid', 6, 150);
  
  return (
    <div id="card-grid" className="grid grid-cols-3 gap-6">
      {cards.map((card, index) => (
        <AnimatedCard 
          key={index}
          hoverEffect={true}
          delay={index * 150}
        >
          <h3>{card.title}</h3>
          <p>{card.description}</p>
        </AnimatedCard>
      ))}
    </div>
  );
};
```

### Form Elements
```tsx
const ContactForm = () => {
  const isVisible = useScrollAnimation('contact-form');
  
  return (
    <form 
      id="contact-form"
      className={`transition-all duration-1000 ease-out transform ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
      }`}
    >
      <input 
        type="text" 
        className="form-input-animate focus-ring"
        placeholder="Name"
      />
      <AnimatedButton variant="primary" type="submit">
        Send Message
      </AnimatedButton>
    </form>
  );
};
```

## Troubleshooting

### Common Issues

1. **Animations not triggering**
   - Check that element IDs match
   - Verify scroll event listeners are working
   - Ensure elements are in the DOM

2. **Performance issues**
   - Reduce animation complexity
   - Use `transform` instead of layout properties
   - Limit concurrent animations

3. **Mobile problems**
   - Test on actual devices
   - Reduce animation durations
   - Simplify hover effects

### Debug Mode

Enable debug logging by setting:
```tsx
const isVisible = useScrollAnimation('element-id', { debug: true });
```

## Future Enhancements

- Intersection Observer API optimization
- CSS-in-JS animation library integration
- Advanced easing functions
- Animation orchestration tools
- Performance monitoring

## Resources

- [Tailwind CSS Transitions](https://tailwindcss.com/docs/transition-property)
- [CSS Animations](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Animations)
- [Intersection Observer API](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API)
- [Web Animation API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Animations_API) 