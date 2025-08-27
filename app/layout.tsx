import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Ideas from: AI-Powered Screenshot to Text',
  description: '[
  {
    "title": "Textify: Instant Screenshot Insights",
    "one_liner": "Turn screenshots into actionable insights with a single click.",
    "why_now": "With remote work and digital collaboration on the rise, quick information access is essential.",
    "novel_mechanism": "Combine OCR with AI-driven context analysis to provide not just text, but summarized insights.",
    "ai_stack": [
      "GPT-4",
      "RAG",
      "Vision",
      "Agents"
    ],
    "edge_use_cases": [
      "Team collaboration enhancement",
      "AI-assisted research",
      "Snapshot-based learning modules"
    ],
    "blue_ocean": true,
    "execution_72h": {
      "mvp_scope": [
        "Screenshot upload",
        "Text extraction",
        "Contextual insight generation"
      ],
      "tools": [
        "Next.js",
        "Firebase",
        "OpenAI API"
      ],
      "data_bootstrap": [
        "utilize free public datasets for training",
        "generate synthetic queries via LLM"
      ],
      "risk": [
        "possible inaccuracies in context interpretation",
        "over-reliance on AI insights"
      ],
      "mitigation": [
        "user feedback loops for continual improvement",
        "fallback to original text for clarification"
      ]
    },
    "go_to_market": {
      "hooks": [
        "Show before/after capability on social media",
        "demo with increased productivity metrics"
      ],
      "channels": [
        "ProductHunt",
        "Twitter",
        "LinkedIn"
      ],
      "pricing": {
        "free": "2 uploads/day",
        "pro": "$4.99/month for unlimited use",
        "business": "$29.99/month with team features"
      }
    },
    "moat": [
      "first-mover advantage in AI insights from images",
      "data accumulation from user-generated queries",
      "API integration into existing workflows"
    ],
    "scores": {
      "novelty": 8,
      "72h_feasibility": 9,
      "revenue_potential": 7,
      "defensibility": 8
    },
    "total_score": 32,
    "reasoning": "By offering more than just OCR, Textify positions itself as an AI-enhanced productivity tool, differentiating itself from basic thumbnail analyzers."
  }
]',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ar" dir="rtl">
      <body className={inter.className}>{children}</body>
    </html>
  )
}