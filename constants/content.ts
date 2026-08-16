export const site = {
  name: "Foundry & Loop",
  shortName: "Foundry & Loop",
  url: "https://foundrynloop.in",
  description: "Foundry & Loop is an independent technology company building software and SaaS products designed to solve real-world problems.",
  tagline: "Building software that matters.",
  email: "contact@foundrynloop.in",
  location: "Global / Remote-first",
  copyright: "© 2026 Foundry & Loop",
  socials: {
    linkedin: "https://www.linkedin.com/company/foundrynloop/",
    github: "https://github.com/Rithvik-krishna/Foundry-Loop",
  },
} as const;

export const navigation = [
  { label: "About", href: "/about" },
  { label: "Company", href: "/company" },
  { label: "Products", href: "/products" },
  { label: "News", href: "/news" },
  { label: "Careers", href: "/careers" },
] as const;

export const pageMeta = {
  home: {
    title: "Foundry & Loop | Building Software That Matters",
    description: "Foundry & Loop is an independent technology company building software and SaaS products designed to solve real-world problems.",
  },
  company: {
    title: "Foundry & Loop | Company",
    description: "Learn about Foundry & Loop, an independent technology company building software and SaaS products designed to solve real-world problems.",
  },
  about: {
    title: "About Foundry & Loop | Independent Technology Company",
    description: "Learn about Foundry & Loop, an independent technology company building software and SaaS products focused on solving meaningful problems.",
  },
  products: {
    title: "Products | Foundry & Loop",
    description: "Explore software and platforms built by Foundry & Loop, including tools and SaaS platforms designed to solve real-world problems.",
  },
  chameleon: {
    title: "Chameleon | Secure Remote Access & Remote Desktop | Foundry & Loop",
    description: "Chameleon is a secure remote access platform for controlling your computer from anywhere. Connect through encrypted peer-to-peer networking with QR-based pairing and low-latency streaming.",
  },
  news: {
    title: "News & Insights | Foundry & Loop",
    description: "Product notes, articles, and insights from Foundry & Loop on software engineering, remote infrastructure, SaaS, and technology.",
  },
  careers: {
    title: "Careers at Foundry & Loop | Build the Future",
    description: "Explore careers at Foundry & Loop and join an independent technology company building software and SaaS products from the ground up.",
  },
  contact: {
    title: "Contact Foundry & Loop | Get in Touch",
    description: "Get in touch with Foundry & Loop about our products, partnerships, careers, business opportunities, or other inquiries.",
  },
  privacy: {
    title: "Privacy Policy | Foundry & Loop",
    description: "Learn how Foundry & Loop collects, uses, protects and manages personal information.",
  },
  terms: {
    title: "Terms of Service | Foundry & Loop",
    description: "Terms of Service governing the use of Foundry & Loop services and website.",
  },
  refund: {
    title: "Cancellation & Refund Policy | Foundry & Loop",
    description: "Cancellation and refund terms for Foundry & Loop website development, SEO and lead-generation services.",
  },
} as const;

export const faqItems = [
  {
    question: "What is Foundry & Loop?",
    answer: "Foundry & Loop is an independent technology company building software and SaaS products designed to solve real-world problems."
  },
  {
    question: "What does Foundry & Loop do?",
    answer: "Foundry & Loop designs, develops, and scales software products across secure remote access, SaaS platforms, and developer infrastructure."
  },
  {
    question: "What products does Foundry & Loop build?",
    answer: "Foundry & Loop develops and operates Chameleon, an ultra-low latency secure remote desktop platform, alongside new software products currently in development."
  },
  {
    question: "What is Chameleon?",
    answer: "Chameleon is an ultra-low latency secure remote access platform developed by Foundry & Loop that enables users to connect to and control their computers from anywhere with QR-based pairing and WebRTC peer-to-peer encryption."
  },
  {
    question: "Is Chameleon a Foundry & Loop product?",
    answer: "Yes. Chameleon is a product developed and operated by Foundry & Loop."
  },
  {
    question: "What is the official Foundry & Loop website?",
    answer: "The official website for Foundry & Loop is https://foundrynloop.in/."
  }
] as const;

export const homeContent = {
  hero: {
    eyebrow: "Independent technology company",
    title: "Building software",
    emphasis: "that matters.",
    description: "Foundry & Loop is an independent technology company building software and SaaS products for modern businesses. We turn complex problems into purposeful, reliable products designed to make work simpler, faster, and more effective.",
    image: { src: "/images/foundry-loop-hero.jpg", alt: "Foundry & Loop 3D sculptural metallic loop artwork with electric blue edge illumination" },
    primaryCta: { label: "Explore products", href: "/products" },
    secondaryCta: { label: "About us", href: "/about" },
    card: "Build with purpose",
    caption: "Where ideas become useful.",
  },
  areas: ["Secure remote access", "Software systems", "SaaS platforms", "Emerging technologies"],
  intro: {
    eyebrow: "What we do",
    title: "We build technology",
    emphasis: "with purpose.",
    description: "Foundry & Loop is an independent technology company focused on building software products that solve meaningful problems. From secure remote access infrastructure to SaaS platforms, we design, develop, and scale products with a focus on usability, reliability, and long-term value.",
    cta: { label: "Meet Foundry & Loop", href: "/about" },
  },
  products: {
    eyebrow: "Our products",
    title: "Products built",
    emphasis: "to matter.",
    aside: "Ideas worth building are ideas worth building well.",
    description: "We build and scale software products across secure remote access, SaaS, developer infrastructure, and emerging technologies."
  },
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
    image: { src: "/images/collaboration.jpg", alt: "Engineers collaborating around software product architecture at Foundry & Loop" },
    cta: { label: "Our approach", href: "/about" },
    label: "Engineering for humans",
  },
  capabilities: [
    { title: "Remote Infrastructure", text: "Secure, low-latency peer-to-peer connectivity platforms.", icon: "layers" },
    { title: "Software Systems", text: "Tools and infrastructure that turn complexity into momentum.", icon: "brain" },
    { title: "Future Technologies", text: "Exploring the ideas that will define the next decade.", icon: "compass" },
  ],
  vision: { eyebrow: "Our vision", title: "A world where", emphasis: "technology feels human.", description: "To become one of the world's most trusted technology companies by building software people genuinely love.", cta: { label: "Read our story", href: "/about" } },
  timeline: [
    { step: "The conviction", title: "Start with a meaningful problem.", text: "Every Foundry & Loop product begins with a question worth answering." },
    { step: "The craft", title: "Make it simple, then make it better.", text: "We combine thoughtful product design with rigorous engineering." },
    { step: "The horizon", title: "Build for the long term.", text: "A growing ecosystem of products that earn their place in people’s lives." },
  ],
  stats: [
    { value: "01", label: "product in market", detail: "Chameleon" },
    { value: "∞", label: "problems worth solving", detail: "Always looking" },
    { value: "100%", label: "built with purpose", detail: "No shortcuts" },
  ],
  cta: { eyebrow: "Let’s build what matters", title: "Have a good", emphasis: "problem?", action: { label: "Start a conversation", href: "/contact" } },
} as const;

export const chameleon = {
  slug: "chameleon",
  eyebrow: "Product / 01",
  name: "Chameleon",
  subtitle: "Secure Remote Access Platform",
  title: "Chameleon | Secure Remote Access & Remote Desktop | Foundry & Loop",
  description: "Control your computer from anywhere through a secure, low-latency peer-to-peer connection. Pair instantly with a QR code and connect without complicated network configuration.",
  lead: "Chameleon gives you secure, low-latency control of your computer from anywhere. Connect in seconds using QR-based pairing, with encrypted peer-to-peer communication and no IP addresses to configure.",
  image: { src: "/images/chameleon-art.jpg", alt: "Chameleon Secure Remote Access Platform artwork by Foundry & Loop" },
  action: { label: "Explore Chameleon", href: "/products/chameleon" },
  category: "Secure Remote Access · Remote Desktop · P2P Connectivity",
  status: "Active Release",
  href: "/products/chameleon",
  externalUrl: "https://www.chameleon-agent.online",
  features: [
    { title: "QR Instant Pairing", text: "Connect devices without entering IP addresses, configuring ports, or manually exchanging credentials using ephemeral pairing tokens." },
    { title: "End-to-End Encryption", text: "Remote sessions are protected using WebRTC security mechanisms (DTLS/SRTP) for video, audio, and input data." },
    { title: "Peer-to-Peer Architecture", text: "Direct P2P connectivity without routing your remote desktop session through centralized cloud relay bottlenecks." },
    { title: "Ultra-Low Latency", text: "Optimized for responsive remote control using direct UDP streaming and hardware-accelerated video encoding." },
    { title: "Clipboard Sync", text: "Copy and paste text seamlessly across connected devices through WebRTC DataChannels." },
    { title: "Adaptive Bitrate", text: "Dynamically adjusts streaming characteristics when network conditions change to maintain session quality." },
    { title: "Hardware Encoding", text: "Utilizes NVENC/QuickSync hardware acceleration where available to reduce CPU overhead." },
    { title: "60 FPS Remote Streaming", text: "Targets a stable 60 FPS remote desktop experience with input throttling and WebRTC optimization." }
  ]
} as const;

export const articles = [
  {
    slug: "how-ai-agents-are-changing-business-workflows",
    title: "How AI Agents Are Changing Business Workflows",
    description: "An in-depth look at how autonomous AI systems and tools are moving beyond chat to execute complex end-to-end workflows.",
    date: "2026-08-01",
    author: "Foundry & Loop Team",
    category: "Automation & Infrastructure",
    readTime: "5 min read",
    content: [
      "Software is undergoing a fundamental shift from static tools to responsive, automated execution systems.",
      "Rather than manually configuring networks, IP addresses, or complex setups, modern software observes state and executes seamless connections.",
      "At Foundry & Loop, we build software like Chameleon around this exact paradigm: empowering users and teams to connect and operate without friction."
    ]
  },
  {
    slug: "building-software-that-people-actually-use",
    title: "Building Software That People Actually Use",
    description: "Why usability, simplicity, and security matter more than unnecessary complexity when creating enduring software products.",
    date: "2026-07-15",
    author: "Foundry & Loop Team",
    category: "Product Design",
    readTime: "4 min read",
    content: [
      "The most common failure mode in modern software is prioritizing technical bloat over human utility.",
      "Great software feels effortless. When complex networking or security is handled thoughtfully, the infrastructure disappears into the background while the user gets momentum.",
      "Our product engineering philosophy centers on craftsmanship, fast feedback loops, and long-term durability over short-lived trends."
    ]
  },
  {
    slug: "the-future-of-secure-remote-access",
    title: "The Future of Secure Remote Access & P2P Networking",
    description: "How peer-to-peer WebRTC connections, ephemeral QR pairing, and end-to-end encryption are redefining remote desktop access.",
    date: "2026-06-28",
    author: "Foundry & Loop Team",
    category: "Remote Infrastructure",
    readTime: "6 min read",
    content: [
      "Traditional remote desktop access required static IP addresses, port forwarding, or heavy cloud relays that compromised both latency and privacy.",
      "By combining WebRTC DTLS/SRTP encryption with ephemeral QR-based token pairing, modern remote access can occur directly peer-to-peer between devices.",
      "This architecture eliminates central cloud relay bottlenecks and provides responsive, low-latency control with zero network exposure."
    ]
  },
  {
    slug: "the-future-of-business-automation",
    title: "The Future of Business Automation",
    description: "How SaaS platforms and intelligent systems are combining to create frictionless operations for modern companies.",
    date: "2026-06-10",
    author: "Foundry & Loop Team",
    category: "SaaS Trends",
    readTime: "5 min read",
    content: [
      "Traditional business automation relied on rigid, rule-based scripts that broke whenever inputs deviated slightly.",
      "The next decade belongs to adaptive software systems that handle edge cases gracefully.",
      "By combining flexible software reasoning with deterministic APIs, modern businesses can achieve true operational momentum."
    ]
  }
] as const;

export const pagesContent = {
  company: {
    header: {
      eyebrow: "Foundry & Loop",
      title: "Foundry & Loop | Company",
      description: "Learn about Foundry & Loop, an independent technology company building software and SaaS products designed to solve real-world problems."
    },
    overview: "Foundry & Loop is an independent technology company building software and SaaS products designed to solve real-world problems.",
    buildText: "We design, develop, and scale software products with a focus on usability, reliability, and long-term value. Our work spans secure remote access infrastructure, SaaS platforms, and developer tools.",
    chameleonText: "Chameleon is a product developed and operated by Foundry & Loop. It provides ultra-low latency, end-to-end encrypted remote desktop access through peer-to-peer WebRTC connectivity and QR-based instant pairing."
  },
  about: {
    header: {
      eyebrow: "About Foundry & Loop",
      title: "We build technology with purpose.",
      description: "Foundry & Loop is an independent technology company building software and SaaS products focused on solving meaningful problems."
    },
    image: { src: "/images/collaboration.jpg", alt: "Foundry & Loop team collaborating on software product design" },
    belief: "Great technology disappears into the way people live and work.",
    mission: {
      eyebrow: "Mission",
      title: "Build technology",
      emphasis: "that is useful.",
      lead: "Purposeful, accessible, and made to last.",
      description: "Foundry & Loop is an independent technology company focused on building software products that solve meaningful problems. From secure remote access tools like Chameleon to SaaS platforms, we design, develop, and scale products with a focus on usability, reliability, and long-term value.",
      cta: { label: "See what we’re building", href: "/products" }
    },
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
    header: {
      eyebrow: "Products by Foundry & Loop",
      title: "Products built to matter.",
      description: "Explore software and platforms developed and operated by Foundry & Loop, built to solve real-world problems."
    },
    coming: {
      eyebrow: "The next chapter",
      title: "More good ideas",
      emphasis: "in progress.",
      description: "We’re exploring new products across secure infrastructure, SaaS, and developer tools. The work is quiet for now. The ambition is not."
    },
    principles: [
      { number: "01", title: "Meaningful", text: "It solves a problem that matters to someone." },
      { number: "02", title: "Durable", text: "It compounds value over time, not attention." },
      { number: "03", title: "Beautiful", text: "It respects people enough to make the details count." },
    ],
  },
  news: {
    header: {
      eyebrow: "News & Insights",
      title: "A place for ideas and updates.",
      description: "Product launches, articles on software engineering, remote infrastructure, SaaS trends, and thoughts on building software that matters."
    },
    state: {
      eyebrow: "Insights & Articles",
      title: "Thoughts on software,",
      emphasis: "infrastructure & building.",
      description: "Read our latest articles on remote desktop technology, product craftsmanship, and modern software platforms.",
      cta: "Explore articles below"
    }
  },
  careers: {
    header: {
      eyebrow: "Careers",
      title: "Do the best work of your life.",
      description: "Explore careers at Foundry & Loop and join an independent technology company building software and SaaS products from the ground up."
    },
    culture: {
      eyebrow: "Why Foundry & Loop",
      title: "Work that feels",
      emphasis: "worth doing.",
      description: "We believe great teams are built on trust, autonomy and a shared standard for quality. You’ll have room to think deeply, move quickly and take real ownership.",
      perks: ["Small, senior teams", "Meaningful ownership", "Flexible by design"]
    },
    roles: {
      eyebrow: "Open roles",
      title: "Nothing open",
      emphasis: "just yet.",
      description: "We’re not hiring for a specific role today, but we’re always open to thoughtful introductions.",
      cta: "Send an introduction"
    }
  },
  contact: {
    header: {
      eyebrow: "Contact",
      title: "Contact Foundry & Loop",
      description: "Get in touch with Foundry & Loop about our products, partnerships, careers, business opportunities, or other inquiries."
    },
    title: "Good things",
    emphasis: "start with a note.",
    fields: {
      name: "Name",
      email: "Email",
      message: "How can we help?",
      namePlaceholder: "Your name",
      emailPlaceholder: "you@company.com",
      messagePlaceholder: "A few words about your idea…"
    }
  },
  privacy: {
    header: {
      eyebrow: "Legal",
      title: "Privacy, plainly stated.",
      description: "A short overview of how we think about the information you share with Foundry & Loop."
    }
  },
  terms: {
    header: {
      eyebrow: "Legal",
      title: "Terms of use.",
      description: "The simple rules for spending time with Foundry & Loop online."
    }
  },
} as const;

export const footerContent = {
  statement: "Building software that matters.",
  contact: "Start a conversation",
  explore: ["About", "Company", "Products", "News"],
  company: ["Careers", "Contact"],
  elsewhere: ["LinkedIn"],
  note: "Purposeful technology for the long term.",
  legal: ["Privacy Policy", "Terms of Service", "Cancellation & Refund Policy"],
} as const;
