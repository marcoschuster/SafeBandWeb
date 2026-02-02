# 🚀 SafeBand Website - Marketing & E-Commerce Platform

A modern, responsive, and animated marketing website built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion.

## ✨ Features

- **🎨 Modern Design**: Beautiful, responsive UI with smooth animations
- **⚡ Fast Performance**: Built with Next.js 14 App Router for optimal speed
- **🛒 E-Commerce Ready**: Stripe integration for seamless checkout
- **📱 Fully Responsive**: Perfect on all devices from mobile to desktop
- **♿ Accessible**: WCAG 2.1 compliant with semantic HTML
- **🎭 Animated**: Smooth animations with Framer Motion
- **📊 Analytics Ready**: Google Analytics & Plausible integration
- **🔍 SEO Optimized**: Meta tags, OpenGraph, and Twitter Cards
- **🎯 TypeScript**: Fully typed for better development experience

## 🛠️ Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animation**: [Framer Motion](https://www.framer.com/motion/)
- **Payments**: [Stripe](https://stripe.com/)
- **Deployment**: [Vercel](https://vercel.com/)

## 📦 Project Structure

```
SafeBandWeb/
├── app/                    # Next.js 14 App Router
│   ├── layout.tsx         # Root layout with metadata
│   ├── page.tsx           # Homepage
│   └── globals.css        # Global styles
├── components/
│   ├── sections/          # Page sections
│   │   ├── HeroSection.tsx
│   │   ├── FeaturesSection.tsx
│   │   ├── ProductsSection.tsx
│   │   └── CTASection.tsx
│   ├── layout/            # Layout components (Header, Footer)
│   └── ui/                # Reusable UI components
├── lib/
│   ├── theme.ts           # Design system tokens
│   └── utils.ts           # Utility functions
├── types/
│   └── index.ts           # TypeScript type definitions
├── public/                # Static assets
├── content/               # MDX content for docs/blog
└── styles/                # Additional CSS if needed
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn
- Stripe account (for payments)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/safeband-web.git
   cd SafeBandWeb
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.local.example .env.local
   ```
   
   Edit `.env.local` and add your keys:
   - `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`
   - `STRIPE_SECRET_KEY`
   - Analytics keys (optional)

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📜 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript type checking

## 🎨 Customization

### Theme Configuration

Edit `lib/theme.ts` to customize colors, spacing, typography, etc.

### Adding Pages

Create new pages in the `app/` directory:
```tsx
// app/about/page.tsx
export default function AboutPage() {
  return <div>About Page</div>
}
```

### Adding Components

Create reusable components in `components/ui/`:
```tsx
// components/ui/Button.tsx
export function Button({ children }) {
  return <button className="...">{children}</button>
}
```

## 💳 Stripe Integration

1. Create a Stripe account at [stripe.com](https://stripe.com)
2. Get your API keys from the [Dashboard](https://dashboard.stripe.com/apikeys)
3. Add keys to `.env.local`
4. Create products in Stripe Dashboard
5. Implement checkout flow (see docs in `/docs/stripe-setup.md`)

## 📊 Analytics Setup

### Google Analytics
1. Create a GA4 property
2. Add your Measurement ID to `.env.local`
3. Analytics will auto-track pageviews

### Plausible (Privacy-friendly alternative)
1. Sign up at [plausible.io](https://plausible.io)
2. Add your domain to `.env.local`

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project on [Vercel](https://vercel.com)
3. Add environment variables
4. Deploy!

### Other Platforms

- **Netlify**: Use `npm run build` and deploy `out/` folder
- **AWS Amplify**: Follow their Next.js guide
- **DigitalOcean**: Use App Platform with Next.js preset

## 🔐 Environment Variables

Required:
```env
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...
STRIPE_SECRET_KEY=sk_test_...
```

Optional:
```env
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-...
NEXT_PUBLIC_PLAUSIBLE_DOMAIN=yourdomain.com
SENDGRID_API_KEY=SG....
```

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [Stripe](https://stripe.com/)

## 📞 Support

- Documentation: [docs.safeband.com](https://docs.safeband.com)
- Email: support@safeband.com
- Discord: [Join our community](https://discord.gg/safeband)

## 🗺️ Roadmap

- [ ] Add product pages
- [ ] Implement shopping cart
- [ ] Set up Stripe checkout
- [ ] Add blog/docs with MDX
- [ ] Build community section
- [ ] Add user dashboard
- [ ] Implement email notifications
- [ ] Add multi-language support
- [ ] Create mobile app integration

---

Made with ❤️ by the SafeBand Team
