# Assets Directory

This directory contains static assets for the portfolio website, organized by type.

## Directory Structure

- **`images/`** - Project screenshots, hero images, and general imagery
- **`icons/`** - Custom icon assets (SVG, PNG)
- **`og/`** - Open Graph preview images for social media sharing

## Usage Guidelines

### Importing Assets in Components

Use TypeScript imports for type safety and Vite optimization:

```typescript
import projectImage from '@/assets/images/project-screenshot.png'

function ProjectCard() {
  return <img src={projectImage} alt="Project screenshot" />
}
```

### Dynamic Imports

For dynamic asset loading:

```typescript
const imagePath = new URL(`../assets/images/${imageName}.png`, import.meta.url).href
```

## Image Guidelines

### Naming Conventions
- Use kebab-case: `project-name-screenshot.png`
- Be descriptive: `ecommerce-dashboard-mobile.png`
- Include variant suffixes: `logo-dark.png`, `logo-light.png`

### Recommended Sizes
- **Project Screenshots**: 1200x800px (3:2 aspect ratio)
- **Hero Images**: 1920x1080px (16:9 aspect ratio)
- **OG Preview Images**: 1200x630px (1.91:1 aspect ratio)
- **Icons**: 512x512px (square)

### Optimization
- Use PNG for images requiring transparency
- Consider WebP/AVIF formats for better compression
- Optimize images before committing (use tools like TinyPNG, ImageOptim)
- Keep file sizes under 500KB when possible

## Vite Asset Handling

Assets in this directory are processed by Vite's build pipeline:
- **Content hashing** for cache busting
- **Automatic optimization** during build
- **TypeScript support** for imports
- **Path alias support** via `@/assets/*`

## Adding New Assets

1. Place assets in the appropriate subdirectory
2. Import in your component using the `@/assets/*` path alias
3. Commit both the asset and updated component code
4. Verify the asset loads correctly in dev mode before committing

## Future Enhancements

Consider adding:
- `vite-plugin-image-optimizer` for automatic image optimization
- WebP/AVIF variants for modern browsers
- Lazy loading for images below the fold
- Responsive image sets with `srcset`
