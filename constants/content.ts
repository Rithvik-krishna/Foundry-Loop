export const site = {
  name: "Foundry & Loop",
  shortName: "Foundry & Loop",
  url: "https://foundrynloop.in",
  description: "Foundry & Loop is an independent technology company building AI-powered software and SaaS products designed to solve real-world problems.",
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
  { label: "Products", href: "/products" },
  { label: "News", href: "/news" },
  { label: "Careers", href: "/careers" },
] as const;

export const pageMeta = {
  home: {
    title: "Foundry & Loop | Building Software That Matters",
    description: "Foundry & Loop is an independent technology company building AI-powered software and SaaS products designed to solve real-world problems.",
  },
  about: {
    title: "About Foundry & Loop | Independent Technology Company",
    description: "Learn about Foundry & Loop, an independent technology company building AI-powered software and SaaS products focused on solving meaningful problems.",
  },
  products: {
    title: "Products | Foundry & Loop",
    description: "Explore software and AI products built by Foundry & Loop, including tools and SaaS platforms designed to solve real-world problems.",
  },
  chameleon: {
    title: "Chameleon | AI Agent Platform | Foundry & Loop",
    description: "Chameleon is an AI-powered agent platform built by Foundry & Loop to help users automate tasks, interact with intelligent agents, and get more done with AI.",
  },
  news: {
    title: "News & Insights | Foundry & Loop",
    description: "Product notes, articles, and insights from Foundry & Loop on AI software, SaaS, automation, and technology.",
  },
  careers: {
    title: "Careers at Foundry & Loop | Build the Future",
    description: "Explore careers at Foundry & Loop and join a technology company building AI-powered software and SaaS products from the ground up.",
  },
  contact: {
    title: "Contact Foundry & Loop | Get in Touch",
    description: "Get in touch with Foundry & Loop about our products, partnerships, careers, business opportunities, or other inquiries.",
  },
  privacy: {
    title: "Privacy Policy | Foundry & Loop",
    description: "Learn how Foundry & Loop handles information and protects your privacy.",
  },
  terms: {
    title: "Terms of Use | Foundry & Loop",
    description: "The terms of use for spending time with Foundry & Loop online.",
  },
} as const;

export const homeContent = {
  hero: {
    eyebrow: "Independent technology company",
    title: "Building software",
    emphasis: "that matters.",
    description: "Foundry & Loop is an independent technology company building AI-powered software and SaaS products for modern businesses. We turn complex problems into purposeful, reliable products designed to make work simpler, faster, and more effective.",
    image: { src: "/images/foundry-loop-hero.jpg", alt: "Foundry & Loop's blue sculptural loop artwork representing purposeful software craftsmanship" },
    primaryCta: { label: "Explore products", href: "/products" },
    secondaryCta: { label: "About us", href: "/about" },
    card: "Build with purpose",
    caption: "Where ideas become useful.",
  },
  areas: ["Artificial intelligence", "Software", "Developer tools", "Future technologies"],
  intro: {
    eyebrow: "What we do",
    title: "We build technology",
    emphasis: "with purpose.",
    description: "Foundry & Loop is an independent technology company focused on building software products that solve meaningful problems. From AI-powered applications to SaaS platforms, we design, develop, and scale products with a focus on usability, reliability, and long-term value.",
    cta: { label: "Meet Foundry & Loop", href: "/about" },
  },
  products: {
    eyebrow: "Our products",
    title: "Products built",
    emphasis: "to matter.",
    aside: "Ideas worth building are ideas worth building well.",
    description: "We build and scale software products across artificial intelligence, SaaS, automation, and emerging technologies."
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
  slug: "chameleon",
  eyebrow: "Product / 01",
  name: "Chameleon",
  title: "Chameleon | AI Agent Platform | Foundry & Loop",
  description: "Chameleon is an AI-powered agent platform built by Foundry & Loop to help users automate tasks, interact with intelligent agents, and get more done with AI.",
  lead: "AI-powered conversational experiences and autonomous agent workflows for modern businesses.",
  image: { src: "/images/chameleon-art.jpg", alt: "Original Chameleon product artwork by Foundry & Loop" },
  action: { label: "Explore Chameleon", href: "/products/chameleon" },
  category: "Artificial Intelligence",
  status: "In Development",
  href: "/products/chameleon",
  features: [
    { title: "Autonomous Workflows", text: "Intelligent agents that execute multi-step business tasks with precision." },
    { title: "Context-Aware Intelligence", text: "Adapts dynamically to conversation tone, business domain, and user intent." },
    { title: "Enterprise Reliability", text: "Built with high uptime, audit trails, and strict data privacy standards." }
  ]
} as const;

export const articles = [
  {
    slug: "how-ai-agents-are-changing-business-workflows",
    title: "How AI Agents Are Changing Business Workflows",
    description: "An in-depth look at how autonomous AI agents are moving beyond chat to execute complex end-to-end business workflows.",
    date: "2026-08-01",
    author: "Foundry & Loop Team",
    category: "AI & Automation",
    readTime: "5 min read",
    content: [
      "Artificial intelligence is undergoing a fundamental shift from reactive chat interfaces to proactive autonomous agents.",
      "Rather than simply answering questions, modern AI agents observe state, make multi-step decisions, and call tools to complete actual business tasks.",
      "At Foundry & Loop, we build software like Chameleon around this exact paradigm: empowering teams to delegate repetitive operations to reliable software systems.",
      "As businesses integrate intelligent agents into their daily operations, the focus moves from prompt engineering to system reliability, context preservation, and security."
    ]
  },
  {
    slug: "building-ai-products-that-people-actually-use",
    title: "Building AI Products That People Actually Use",
    description: "Why usability, simplicity, and trust matter more than raw parameter count when creating enduring AI software.",
    date: "2026-07-15",
    author: "Foundry & Loop Team",
    category: "Product Design",
    readTime: "4 min read",
    content: [
      "The most common failure mode in modern AI software is prioritizing technical novelty over human utility.",
      "Great software feels effortless. When AI is integrated thoughtfully, the technology disappears into the background while the user gets momentum.",
      "Our product engineering philosophy centers on craftsmanship, fast feedback loops, and long-term durability over short-lived trends."
    ]
  },
  {
    slug: "what-is-an-ai-agent",
    title: "What Is an AI Agent? A Plain-English Explanation",
    description: "Understanding the difference between large language models, chatbots, and true autonomous AI agents.",
    date: "2026-06-28",
    author: "Foundry & Loop Team",
    category: "AI Foundations",
    readTime: "6 min read",
    content: [
      "To understand AI agents, it helps to distinguish them from basic language models.",
      "A language model predicts the next token. A chatbot formats text. An AI agent, by contrast, possesses goal perception, memory, tool access, and an execution loop.",
      "This distinction transforms AI from a novel drafting tool into core enterprise infrastructure."
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
      "The next decade of SaaS belongs to adaptive software systems that handle edge cases gracefully.",
      "By combining flexible AI reasoning with deterministic software APIs, modern businesses can achieve true operational momentum."
    ]
  }
] as const;

export const pagesContent = {
  about: {
    header: {
      eyebrow: "About Foundry & Loop",
      title: "We build technology with purpose.",
      description: "Foundry & Loop is an independent technology company focused on building software products that solve meaningful problems. From AI-powered applications to SaaS platforms, we design, develop, and scale products with a focus on usability, reliability, and long-term value."
    },
    image: { src: "/images/collaboration.jpg", alt: "Foundry & Loop team collaborating on software product design" },
    belief: "Great technology disappears into the way people live and work.",
    mission: {
      eyebrow: "Mission",
      title: "Build technology",
      emphasis: "that is useful.",
      lead: "Purposeful, accessible, and made to last.",
      description: "Our products are built independently under the Foundry & Loop ecosystem, with each product designed around a specific problem, audience, and opportunity. From AI-powered conversational tools to SaaS platforms, we make software that matters.",
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
      eyebrow: "Products",
      title: "Products built to matter.",
      description: "Explore software and AI products built by Foundry & Loop, including tools and SaaS platforms designed to solve real-world problems."
    },
    coming: {
      eyebrow: "The next chapter",
      title: "More good ideas",
      emphasis: "in progress.",
      description: "We’re exploring new products across AI, SaaS, automation and developer tools. The work is quiet for now. The ambition is not."
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
      description: "Product launches, articles on AI software, SaaS trends, and thoughts on building software that matters."
    },
    state: {
      eyebrow: "Insights & Articles",
      title: "Thoughts on software,",
      emphasis: "AI & building.",
      description: "Read our latest articles on AI agents, product craftsmanship, and modern business software.",
      cta: "Explore articles below"
    }
  },
  careers: {
    header: {
      eyebrow: "Careers",
      title: "Do the best work of your life.",
      description: "Explore careers at Foundry & Loop and join a technology company building AI-powered software and SaaS products from the ground up."
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
  explore: ["About", "Products", "News"],
  company: ["Careers", "Contact"],
  elsewhere: ["LinkedIn"],
  note: "Purposeful technology for the long term.",
  legal: ["Privacy", "Terms"],
} as const;
