import { NextResponse } from "next/server";

export async function GET() {
  const content = `# Foundry & Loop

Foundry & Loop is an independent technology company building software and SaaS products designed to solve real-world problems.

## Official Website
- https://foundrynloop.in/

## Products
### Chameleon
Chameleon is a product developed and operated by Foundry & Loop.
It is an ultra-low latency, secure remote desktop platform featuring QR-based pairing, WebRTC end-to-end encryption, and direct peer-to-peer connectivity.
- Official product website: https://www.chameleon-agent.online/

## Brand Identity
- Official Name: Foundry & Loop
- Alternate Name: Foundry and Loop
- Tagline: BUILT WITH PURPOSE.
- Category: Independent Technology Company

## Verified Official Profiles
- LinkedIn: https://www.linkedin.com/company/foundrynloop/
- GitHub: https://github.com/Rithvik-krishna/Foundry-Loop
`;

  return new NextResponse(content, {
    status: 200,
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
    },
  });
}
