const { createCanvas } = require('canvas')
const fs = require('fs')
const path = require('path')

// Ensure images directory exists
const imagesDir = path.join(process.cwd(), 'public/images')
if (!fs.existsSync(imagesDir)) {
  fs.mkdirSync(imagesDir, { recursive: true })
}

// Helper function to create gradient background
function createGradientBackground(ctx, width, height, colorStart, colorEnd) {
  const gradient = ctx.createLinearGradient(0, 0, width, height)
  gradient.addColorStop(0, colorStart)
  gradient.addColorStop(1, colorEnd)
  ctx.fillStyle = gradient
  ctx.fillRect(0, 0, width, height)
}

// Helper function to add texture overlay
function addTextureOverlay(ctx, width, height) {
  ctx.globalAlpha = 0.1
  for (let i = 0; i < width; i += 4) {
    for (let j = 0; j < height; j += 4) {
      if (Math.random() > 0.5) {
        ctx.fillStyle = '#ffffff'
        ctx.fillRect(i, j, 2, 2)
      }
    }
  }
  ctx.globalAlpha = 1
}

// Create image with text
function createImageWithText(filename, text, width = 800, height = 800) {
  const canvas = createCanvas(width, height)
  const ctx = canvas.getContext('2d')

  createGradientBackground(ctx, width, height, '#2a2a2a', '#1a1a1a')
  addTextureOverlay(ctx, width, height)

  ctx.font = 'bold 40px serif'
  ctx.textAlign = 'center'
  ctx.textBaseline = 'middle'
  ctx.fillStyle = '#c8aa6e'
  ctx.fillText(text, width / 2, height / 2)

  const buffer = canvas.toBuffer('image/jpeg')
  fs.writeFileSync(path.join(imagesDir, filename), buffer)
  console.log(`Created: ${filename}`)
}

// Generate all images
async function generatePlaceholders() {
  console.log('Generating placeholder images...')

  // Hero images
  createImageWithText('home-hero.jpg', 'AUREMIO', 1920, 1080)
  createImageWithText('shop-hero.jpg', 'SHOP', 1920, 1080)
  createImageWithText('collections-hero.jpg', 'COLLECTIONS', 1920, 1080)
  createImageWithText('about-hero.jpg', 'ABOUT', 1920, 1080)
  createImageWithText('contact-hero.jpg', 'CONTACT', 1920, 1080)

  // Product images
  createImageWithText('product-cohiba-behike.jpg', 'COHIBA BEHIKE')
  createImageWithText('product-st-dupont-lighter.jpg', 'ST DUPONT LIGHTER')
  createImageWithText('product-elie-bleu-humidor.jpg', 'ELIE BLEU HUMIDOR')
  createImageWithText('product-davidoff-dragon.jpg', 'DAVIDOFF DRAGON')
  createImageWithText('product-montecristo.jpg', 'MONTECRISTO')
  createImageWithText('product-padron.jpg', 'PADRON')
  createImageWithText('product-cartier-cutter.jpg', 'CARTIER CUTTER')
  createImageWithText('product-dunhill-ashtray.jpg', 'DUNHILL ASHTRAY')
  createImageWithText('product-davidoff-case.jpg', 'DAVIDOFF CASE')
  createImageWithText('product-davidoff-cabinet.jpg', 'DAVIDOFF CABINET')
  createImageWithText('product-dunhill-travel.jpg', 'DUNHILL TRAVEL')
  createImageWithText('product-daniel-marshall.jpg', 'DANIEL MARSHALL')

  // Category images
  createImageWithText('category-cigars.jpg', 'CIGARS', 1200, 800)
  createImageWithText('category-accessories.jpg', 'ACCESSORIES', 1200, 800)
  createImageWithText('category-humidors.jpg', 'HUMIDORS', 1200, 800)

  // Collection images
  createImageWithText('collection-limited.jpg', 'LIMITED EDITION', 1200, 800)
  createImageWithText('collection-vintage.jpg', 'VINTAGE', 1200, 800)
  createImageWithText('collection-gifts.jpg', 'GIFT SETS', 1200, 800)

  // Menu images
  createImageWithText('menu-cigars.jpg', 'CIGARS', 600, 400)
  createImageWithText('menu-accessories.jpg', 'ACCESSORIES', 600, 400)
  createImageWithText('menu-humidors.jpg', 'HUMIDORS', 600, 400)
  createImageWithText('menu-gifts.jpg', 'GIFTS', 600, 400)

  // Other images
  createImageWithText('luxury-lounge.jpg', 'LUXURY LOUNGE', 1200, 800)
  createImageWithText('about-legacy.jpg', 'LEGACY', 1200, 800)
  createImageWithText('featured-collection.jpg', 'FEATURED', 1200, 800)

  // Team images
  createImageWithText('team-alessandro.jpg', 'ALESSANDRO', 400, 400)
  createImageWithText('team-isabella.jpg', 'ISABELLA', 400, 400)
  createImageWithText('team-james.jpg', 'JAMES', 400, 400)

  // Logo
  const logoCanvas = createCanvas(200, 200)
  const logoCtx = logoCanvas.getContext('2d')
  createGradientBackground(logoCtx, 200, 200, '#c8aa6e', '#a88d5c')
  logoCtx.font = 'bold 40px serif'
  logoCtx.textAlign = 'center'
  logoCtx.textBaseline = 'middle'
  logoCtx.fillStyle = '#ffffff'
  logoCtx.fillText('A', 100, 100)
  fs.writeFileSync(path.join(imagesDir, 'logo-mark.png'), logoCanvas.toBuffer('image/png'))
  console.log('Created: logo-mark.png')

  console.log('All placeholder images generated successfully!')
}

generatePlaceholders().catch(console.error)
