export const site = {
  name: "Foundry & Loop",
  shortName: "Foundry & Loop",
  url: "https://foundryandloop.com",
  description: "Foundry & Loop is a technology company building software that matters.",
  tagline: "Built with purpose.",
  email: "hello@foundryandloop.com",
  location: "Global / Remote-first",
  copyright: "© 2026 Foundry & Loop",
} as const;

export const navigation = [
  { label: "About", href: "/about" },
  { label: "Products", href: "/products" },
  { label: "News", href: "/news" },
  { label: "Careers", href: "/careers" },
] as const;

export const pageMeta = {
  home: { title: "Built with purpose.", description: site.description },
  about: { title: "About", description: "Foundry & Loop builds companies through thoughtful products." },
  products: { title: "Products", description: "Purposeful AI, SaaS and developer products from Foundry & Loop." },
  news: { title: "News", description: "Updates, product notes and ideas from Foundry & Loop." },
  careers: { title: "Careers", description: "Help build thoughtful software that matters at Foundry & Loop." },
  contact: { title: "Contact", description: "Start a conversation with Foundry & Loop." },
  privacy: { title: "Privacy", description: "The Foundry & Loop privacy policy." },
  terms: { title: "Terms", description: "The Foundry & Loop terms of use." },
} as const;

export const homeContent = {
  hero: {
    eyebrow: "Independent technology company",
    title: "Building software",
    emphasis: "that matters.",
    description: "Foundry & Loop is a technology company that designs, builds and scales software products across artificial intelligence, SaaS, developer tools and future technologies.",
    image: { src: "/images/foundry-loop-hero.jpg", alt: "Foundry & Loop's blue sculptural loop artwork" },
    primaryCta: { label: "Explore products", href: "/products" },
    secondaryCta: { label: "About us", href: "/about" },
    card: "Build with purpose",
    caption: "Where ideas become useful.",
  },
  areas: ["Artificial intelligence", "Software", "Developer tools", "Future technologies"],
  intro: {
    eyebrow: "What we do",
    title: "We build companies",
    emphasis: "through products.",
    description: "Instead of focusing on one application, we create an ecosystem of thoughtful software designed to solve meaningful problems. Each product is built with careful engineering, exceptional design and long-term thinking.",
    cta: { label: "Meet Foundry & Loop", href: "/about" },
  },
  products: { eyebrow: "Our products", title: "One ecosystem.", emphasis: "Many possibilities.", aside: "Ideas worth building are ideas worth building well." },
  values: [
    { number: "01", title: "Purpose", text: "Everything begins with solving a real problem.", accent: "accent-blue" },
    { number: "02", title: "Simplicity", text: "Technology should feel effortless to use.", accent: "accent-purple" },
    { number: "03", title: "Quality", text: "Craftsmanship over speed. Every detail matters.", accent: "accent-green" },
    { number: "04", title: "Long-term thinking", text: "Build products that last beyond the moment.", accent: "accent-orange" },
  ],
  story: {
    eyebrow: "The long view",
    title: "Make the complex feel",
    emphasis: "clear.",
    description: "Our best work sits at the intersection of deep technology and human simplicity. We obsess over the details that make powerful tools feel natural.",
    image: { src: "/images/collaboration.jpg", alt: "Two engineers collaborating around a laptop" },
    cta: { label: "Our approach", href: "/about" },
    label: "Engineering for humans",
  },
  capabilities: [
    { title: "Artificial intelligence", text: "Intelligence that helps people do their best work.", icon: "brain" },
    { title: "Software systems", text: "Tools and infrastructure that turn complexity into momentum.", icon: "layers" },
    { title: "Future technologies", text: "Exploring the ideas that will define the next decade.", icon: "compass" },
  ],
  vision: { eyebrow: "Our vision", title: "A world where", emphasis: "technology feels human.", description: "To become one of the world's most trusted technology companies by building software people genuinely love.", cta: { label: "Read our story", href: "/about" } },
  timeline: [
    { step: "The conviction", title: "Start with a meaningful problem.", text: "Every Foundry & Loop product begins with a question worth answering." },
    { step: "The craft", title: "Make it simple, then make it better.", text: "We combine thoughtful product design with rigorous engineering." },
    { step: "The horizon", title: "Build for the long term.", text: "A growing ecosystem of products that earn their place in people’s lives." },
  ],
  stats: [
    { value: "01", label: "product in the world", detail: "Chameleon" },
    { value: "∞", label: "problems worth solving", detail: "Always looking" },
    { value: "100%", label: "built with purpose", detail: "No shortcuts" },
  ],
  cta: { eyebrow: "Let’s build what matters", title: "Have a good", emphasis: "problem?", action: { label: "Start a conversation", href: "/contact" } },
} as const;

export const chameleon = {
  eyebrow: "Product / 01",
  name: "Chameleon",
  description: "AI-powered conversational experiences for modern businesses.",
  image: { src: "/images/chameleon-art.jpg", alt: "Original Chameleon product artwork: an adaptive chameleon-inspired symbol around a display" },
  action: { label: "Explore Chameleon", href: "/products" },
  category: "Artificial intelligence",
  status: "In development",
} as const;

export const pagesContent = {
  about: {
    header: { eyebrow: "About Foundry & Loop", title: "Technology with a point of view.", description: "Foundry & Loop builds companies through products. We make thoughtful software for meaningful problems — and take the long view on both." },
    image: { src: "/images/collaboration.jpg", alt: "Team collaborating in a bright studio" },
    belief: "Great technology disappears into the way people live and work.",
    mission: { eyebrow: "Mission", title: "Build technology", emphasis: "that is useful.", lead: "Purposeful, accessible, and made to last.", description: "We are building an ecosystem of AI and SaaS products used around the world. Not for the sake of more software, but to make the important things easier, clearer and more human.", cta: { label: "See what we’re building", href: "/products" } },
    values: [
      { number: "01", title: "Purpose", text: "Everything begins with solving a real problem.", accent: "accent-blue" },
      { number: "02", title: "Quality", text: "Craftsmanship over speed. Details compound.", accent: "accent-green" },
      { number: "03", title: "Innovation", text: "Always improving, always asking what’s next.", accent: "accent-purple" },
      { number: "04", title: "Simplicity", text: "Technology should feel effortless.", accent: "accent-orange" },
      { number: "05", title: "Long-term thinking", text: "Build products that last.", accent: "accent-red" },
    ],
    culture: ["Curiosity", "Ownership", "Craftsmanship", "Continuous learning"],
  },
  products: {
    header: { eyebrow: "Products", title: "Useful by design.", description: "We build products for the moments where technology can make a real difference. One thoughtful release at a time." },
    coming: { eyebrow: "The next chapter", title: "More good ideas", emphasis: "in progress.", description: "We’re exploring new products across AI, SaaS and developer tools. The work is quiet for now. The ambition is not." },
    principles: [
      { number: "01", title: "Meaningful", text: "It solves a problem that matters to someone." },
      { number: "02", title: "Durable", text: "It compounds value over time, not attention." },
      { number: "03", title: "Beautiful", text: "It respects people enough to make the details count." },
    ],
  },
  news: { header: { eyebrow: "News & notes", title: "A quiet place for updates.", description: "Product launches, ideas we’re exploring and the occasional look behind the scenes. Check back soon." }, state: { eyebrow: "Coming soon", title: "We’ll have something", emphasis: "good to share.", description: "For now, follow along as we build.", cta: "Follow on LinkedIn" } },
  careers: { header: { eyebrow: "Careers", title: "Do the best work of your life.", description: "We’re assembling a small, ambitious team to build products with purpose. If that sounds like you, we’d love to hear from you." }, culture: { eyebrow: "Why Foundry & Loop", title: "Work that feels", emphasis: "worth doing.", description: "We believe great teams are built on trust, autonomy and a shared standard for quality. You’ll have room to think deeply, move quickly and take real ownership.", perks: ["Small, senior teams", "Meaningful ownership", "Flexible by design"] }, roles: { eyebrow: "Open roles", title: "Nothing open", emphasis: "just yet.", description: "We’re not hiring for a specific role today, but we’re always open to thoughtful introductions.", cta: "Send an introduction" } },
  contact: { header: { eyebrow: "Contact", title: "Let’s make something useful.", description: "Have a problem worth solving, a product idea or simply want to say hello? We’d like to hear from you." }, title: "Good things", emphasis: "start with a note.", fields: { name: "Name", email: "Email", message: "How can we help?", namePlaceholder: "Your name", emailPlaceholder: "you@company.com", messagePlaceholder: "A few words about your idea…" } },
  privacy: { header: { eyebrow: "Legal", title: "Privacy, plainly stated.", description: "A short overview of how we think about the information you share with Foundry & Loop." } },
  terms: { header: { eyebrow: "Legal", title: "Terms of use.", description: "The simple rules for spending time with Foundry & Loop online." } },
} as const;

export const footerContent = {
  statement: "Building software that matters.",
  contact: "Start a conversation",
  explore: ["About", "Products", "News"],
  company: ["Careers", "Contact"],
  elsewhere: ["LinkedIn", "GitHub"],
  note: "Purposeful technology for the long term.",
  legal: ["Privacy", "Terms"],
} as const;
