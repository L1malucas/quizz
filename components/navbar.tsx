"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Home, Brain, BarChart, Trophy } from "lucide-react"
import { Alert } from "./ui/alert"
export default function Navbar() {
  const pathname = usePathname()

  return (
    <nav className="fixed top-0 left-0 right-0 bg-zinc-950/80 backdrop-blur-sm border-b border-zinc-800 z-10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-xl font-bold text-purple-500">
            Quiz Central
          </Link>

          <div className="flex space-x-1">
            <Link href="/">
              <Button variant={pathname === "/" ? "secondary" : "ghost"} size="sm" className="flex items-center">
                <Home className="h-4 w-4 mr-2" />
                <span className="hidden sm:inline">Início</span>
              </Button>
            </Link>

            {/* <Link href="/ai-quiz"> */}
            <Button variant={pathname === "/ai-quiz" ? "secondary" : "ghost"} size="sm" className="flex items-center">
              <Brain className="h-4 w-4 mr-2" />
              <span className="hidden sm:inline">Desafio IA</span>
            </Button>
            {/* </Link> */}

            {/* <Link href="/ai-scores"> */}
            <Button
              variant={pathname === "/ai-scores" ? "secondary" : "ghost"}
              size="sm"
              className="flex items-center"
            >
              <BarChart className="h-4 w-4 mr-2" />
              <span className="hidden sm:inline">Pontuações de IA</span>
            </Button>
            {/* </Link> */}

            <Link href="/ranking">
              <Button variant={pathname === "/ranking" ? "secondary" : "ghost"} size="sm" className="flex items-center">
                <Trophy className="h-4 w-4 mr-2" />
                <span className="hidden sm:inline">Ranking</span>
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
