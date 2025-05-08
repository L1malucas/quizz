"use client"

import { FaGithub, FaLinkedinIn  } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 w-full bg-black text-white py-4 border-t border-gray-800 z-10">
      <div className="max-w-6xl mx-auto px-4 flex flex-col items-center md:flex-row md:justify-between gap-4">
        <div className="text-center md:text-left">
          <p className="text-lg font-bold text-purple-500">[Lucas Lima]</p>
          <p className="text-sm text-gray-400 max-w-md">
            Software Engineer | Ts | Python | Docker | Azure Cloud          </p>
        </div>
        <div className="flex items-center gap-6">
          <a
            href="https://www.linkedin.com/in/lucaslimacoder/"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 text-gray-400 hover:text-purple-500 transition-colors"
          >
            <FaLinkedinIn  className="h-5 w-5 text-gray-400 group-hover:text-purple-500 transition-colors" />
            <span className="text-sm">LinkedIn</span>
          </a>
          <a
            href="https://github.com/L1malucas"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 text-gray-400 hover:text-purple-500 transition-colors"
          >
            <FaGithub className="h-5 w-5 text-gray-400 group-hover:text-purple-500 transition-colors" />
            <span className="text-sm">GitHub</span>
          </a>
        </div>
      </div>
    </footer>
  )
}