# 🤝 Contributing to SafeBand Website

Thank you for your interest in contributing to SafeBand! This document provides guidelines and instructions for contributing.

## 📋 Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [Development Workflow](#development-workflow)
- [Coding Standards](#coding-standards)
- [Commit Guidelines](#commit-guidelines)
- [Pull Request Process](#pull-request-process)
- [Component Guidelines](#component-guidelines)

---

## 📜 Code of Conduct

### Our Pledge
- Be respectful and inclusive
- Welcome newcomers
- Focus on constructive feedback
- Prioritize the community's best interest

### Unacceptable Behavior
- Harassment or discrimination
- Trolling or insulting comments
- Publishing private information
- Unprofessional conduct

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18 or higher
- npm or yarn
- Git
- Code editor (VS Code recommended)

### Setup Development Environment

1. **Fork the repository**
   ```bash
   # Click "Fork" on GitHub, then clone your fork
   git clone https://github.com/YOUR_USERNAME/SafeBandWeb.git
   cd SafeBandWeb
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.local.example .env.local
   # Edit .env.local with your keys
   ```

4. **Run development server**
   ```bash
   npm run dev
   ```

5. **Create a branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

---

## 🔄 Development Workflow

### Branch Naming Convention
- `feature/` - New features (e.g., `feature/add-product-reviews`)
- `fix/` - Bug fixes (e.g., `fix/cart-calculation`)
- `docs/` - Documentation (e.g., `docs/update-readme`)
- `refactor/` - Code refactoring (e.g., `refactor/simplify-checkout`)
- `style/` - Style changes (e.g., `style/update-button-colors`)
- `test/` - Adding tests (e.g., `test/add-cart-tests`)

### Development Process
1. Pull latest changes from main
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Commit with clear messages
6. Push to your fork
7. Create a Pull Request

---

## 💻 Coding Standards

### TypeScript
- Use TypeScript for all files
- Define types/interfaces for props
- Avoid `any` type
- Use strict mode

```typescript
// Good
interface ButtonProps {
  label: string
  onClick: () => void
  variant?: 'primary' | 'secondary'
}

// Bad
function Button(props: any) { ... }
```

### React Components
- Use functional components with hooks
- Keep components small and focused
- Use meaningful component names (PascalCase)
- Add JSDoc comments for complex components

```typescript
/**
 * ProductCard displays a single product with image, price, and CTA
 * @param product - Product data object
 */
export function ProductCard({ product }: ProductCardProps) {
  // ...
}
```

### File Organization
```
component/
├── ComponentName.tsx       # Main component
├── ComponentName.test.tsx  # Tests (future)
└── index.ts                # Exports
```

### Styling
- Use Tailwind CSS utility classes
- Follow mobile-first approach
- Use theme tokens from `lib/theme.ts`
- Avoid inline styles unless necessary

```tsx
// Good
<button className="px-4 py-2 bg-primary-600 hover:bg-primary-700 rounded-lg">
  Click Me
</button>

// Avoid
<button style={{ padding: '8px 16px', backgroundColor: '#0284c7' }}>
  Click Me
</button>
```

### Performance
- Lazy load images
- Use `next/image` for images
- Implement code splitting for large components
- Memoize expensive calculations
- Use dynamic imports when appropriate

```typescript
// Lazy loading a component
const HeavyComponent = dynamic(() => import('./HeavyComponent'), {
  loading: () => <LoadingSpinner />,
})
```

---

## 📝 Commit Guidelines

### Commit Message Format
```
<type>(<scope>): <subject>

<body>

<footer>
```

### Types
- `feat` - New feature
- `fix` - Bug fix
- `docs` - Documentation changes
- `style` - Code style changes (formatting)
- `refactor` - Code refactoring
- `test` - Adding tests
- `chore` - Maintenance tasks

### Examples
```bash
feat(products): add product filtering functionality

- Add filter by category
- Add filter by price range
- Add sort options
- Update UI with filter controls

Closes #123
```

```bash
fix(cart): correct total calculation when applying discounts

The cart total was not updating correctly when discount codes
were applied. This fixes the calculation logic.

Fixes #456
```

### Commit Best Practices
- Write clear, concise commit messages
- Use present tense ("add" not "added")
- Reference issue numbers
- Keep commits focused on single changes
- Don't commit build files or node_modules

---

## 🔀 Pull Request Process

### Before Submitting
1. **Update your branch**
   ```bash
   git checkout main
   git pull upstream main
   git checkout your-branch
   git rebase main
   ```

2. **Run tests and linting**
   ```bash
   npm run lint
   npm run type-check
   npm run build
   ```

3. **Test manually**
   - Test in multiple browsers
   - Check mobile responsiveness
   - Verify no console errors

### PR Template
```markdown
## Description
Brief description of changes

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Breaking change
- [ ] Documentation update

## Testing
- [ ] Tested on Chrome
- [ ] Tested on Firefox
- [ ] Tested on Safari
- [ ] Tested on mobile
- [ ] No console errors

## Screenshots
[Add screenshots if applicable]

## Related Issues
Closes #123
```

### PR Review Process
- PRs require at least one approval
- Address all review comments
- Keep PRs focused and manageable
- Update documentation if needed
- Squash commits before merging (if requested)

---

## 🎨 Component Guidelines

### Component Structure
```typescript
'use client' // Only if using client-side features

import { motion } from 'framer-motion'
import { ComponentProps } from './types'

/**
 * Component description
 */
export function ComponentName({ prop1, prop2 }: ComponentProps) {
  // Hooks first
  const [state, setState] = useState()
  const ref = useRef(null)

  // Event handlers
  const handleClick = () => { ... }

  // Render
  return (
    <div className="...">
      {/* Component content */}
    </div>
  )
}
```

### Props Interface
```typescript
interface ComponentProps {
  // Required props first
  title: string
  id: string
  
  // Optional props
  description?: string
  className?: string
  
  // Event handlers
  onClick?: () => void
  onChange?: (value: string) => void
  
  // Children
  children?: React.ReactNode
}
```

### Animation Guidelines
- Use Framer Motion for animations
- Keep animations subtle (300-500ms)
- Use theme animation values
- Add prefers-reduced-motion support

```typescript
const variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

<motion.div
  initial="hidden"
  animate="visible"
  variants={variants}
  transition={{ duration: 0.3 }}
>
  Content
</motion.div>
```

### Accessibility
- Use semantic HTML
- Add ARIA labels where needed
- Ensure keyboard navigation
- Test with screen readers
- Maintain color contrast ratios (4.5:1 minimum)

```tsx
<button
  aria-label="Add to cart"
  onClick={handleAddToCart}
  className="..."
>
  <ShoppingCartIcon aria-hidden="true" />
  Add to Cart
</button>
```

---

## 🧪 Testing (Future)

### Unit Tests
```typescript
import { render, screen } from '@testing-library/react'
import { ProductCard } from './ProductCard'

describe('ProductCard', () => {
  it('renders product name', () => {
    render(<ProductCard product={mockProduct} />)
    expect(screen.getByText('SafeBand Pro')).toBeInTheDocument()
  })
})
```

### E2E Tests
```typescript
test('user can complete checkout', async ({ page }) => {
  await page.goto('/products')
  await page.click('[data-testid="add-to-cart"]')
  await page.click('[data-testid="checkout"]')
  // ... complete checkout flow
})
```

---

## 🐛 Reporting Bugs

### Bug Report Template
```markdown
**Describe the bug**
A clear description of the bug

**To Reproduce**
1. Go to '...'
2. Click on '...'
3. See error

**Expected behavior**
What should happen

**Screenshots**
If applicable

**Environment**
- OS: [e.g., Windows 11]
- Browser: [e.g., Chrome 120]
- Device: [e.g., iPhone 12]
```

---

## 💡 Feature Requests

### Feature Request Template
```markdown
**Feature Description**
Clear description of the feature

**Use Case**
Why is this feature needed?

**Proposed Solution**
How should it work?

**Alternatives Considered**
Other approaches you've thought about
```

---

## 📚 Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Framer Motion Docs](https://www.framer.com/motion/)

---

## ❓ Questions?

- Open a [Discussion](https://github.com/yourusername/SafeBandWeb/discussions)
- Join our [Discord](https://discord.gg/safeband)
- Email: dev@safeband.com

---

Thank you for contributing to SafeBand! 🎉
