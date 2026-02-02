# SafeBand Header Component

## Overview
The Header component is a fixed navigation bar that provides consistent navigation across the SafeBand website.

## Features

### Layout
- **Fixed positioning**: Stays at the top of the viewport as users scroll
- **Responsive design**: Adapts seamlessly from mobile to desktop
- **Transparent background**: Starts transparent, becomes solid white with blur on scroll
- **Smooth transitions**: All interactions are animated for a polished feel

### Left Side - Logo
- SafeBand brand logo image (optimized with Next.js Image)
- Responsive sizing: 40px × 40px on mobile, 48px × 48px on desktop
- Gradient text treatment for "SafeBand" brand name
- Links to homepage

### Center Navigation
Desktop navigation links (hidden on mobile):
- Products
- Community
- Use Cases
- Docs

Each link has:
- Hover effect with color change
- Animated underline on hover
- Smooth transitions

### Right Side Utilities

#### Login Button
- Visible on tablets and desktop
- Text link with hover effect
- Links to `/login` route

#### Shopping Cart
- Cart icon with badge showing item count (currently shows "0")
- Interactive hover states
- Badge uses secondary color for visibility
- Icons from lucide-react library

#### Mobile Menu Button
- Hamburger menu icon on mobile/tablet
- Transforms to X icon when menu is open
- Triggers mobile navigation drawer

### Mobile Menu
- Slide-down menu with backdrop blur
- Contains all navigation links
- Includes Login option
- Auto-closes when link is clicked
- Smooth height and opacity transitions

## Technical Details

### State Management
- `isScrolled`: Tracks scroll position to trigger header background change
- `isMobileMenuOpen`: Controls mobile menu visibility

### Styling
- Uses Tailwind CSS utility classes
- Custom gradients from theme (primary and secondary colors)
- Shadow effects on scroll
- Backdrop blur for modern glass-morphism effect

### Accessibility
- Proper ARIA labels on icon buttons
- Semantic HTML structure
- Keyboard navigation support

## Usage

```tsx
import Header from '@/components/layout/Header'

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <Header />
        {children}
      </body>
    </html>
  )
}
```

## Dependencies
- `next/link`: For client-side navigation
- `lucide-react`: For icons (ShoppingCart, Menu, X)
- `framer-motion`: Could be added for enhanced animations

## Customization

### Update Navigation Items
Edit the `navigation` array in `Header.tsx`:

```tsx
const navigation = [
  { name: 'Products', href: '#products' },
  { name: 'Community', href: '#community' },
  // Add more items...
]
```

### Update Cart Count
The cart badge currently shows "0". To make it dynamic, pass a cart count prop or use a state management solution:

```tsx
// Future implementation
<span className="...">
  {cartItemCount}
</span>
```

### Styling Changes
- Logo gradient: Update classes on the logo div
- Colors: Use Tailwind's primary/secondary colors from theme
- Spacing: Adjust `h-16 md:h-20` for header height

## Browser Support
- Modern browsers with CSS Grid and Flexbox support
- Backdrop blur supported in Safari 14+, Chrome 76+, Firefox 103+
- Graceful fallback for older browsers

## Performance
- Fixed positioning with GPU acceleration
- Minimal re-renders using React hooks
- Smooth 60fps animations
- Lightweight dependencies
