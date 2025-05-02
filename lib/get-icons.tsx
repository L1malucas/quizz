import React from 'react';
import { FaAngular, FaReact, FaHtml5, FaCss3 } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiTypescript, SiMongodb, SiDotnet } from "react-icons/si";
import { TbFileTypeSql, TbLogicXnor } from "react-icons/tb";
import { Code, CodeXml } from "lucide-react"

export const getQuizIcon = (slug: string) => {
  switch (slug) {
    case "mongodb":
      return <SiMongodb className="h-8 w-8 text-purple-500" />
    case "html":
      return <FaHtml5 className="h-8 w-8 text-purple-500" />
    case "css":
      return <FaCss3 className="h-8 w-8 text-purple-500" />
    case "logic":
      return <TbLogicXnor className="h-8 w-8 text-purple-500" />
    case "dom":
      return <Code className="h-8 w-8 text-purple-500" />
    case "js":
      return <IoLogoJavascript className="h-8 w-8 text-purple-500" />
    case "csharp-dotnet":
      return <SiDotnet className="h-8 w-8 text-purple-500" />
    case "typescript":
      return <SiTypescript className="h-8 w-8 text-purple-500" />
    case "sql":
      return <TbFileTypeSql className="h-8 w-8 text-purple-500" />
    case "react":
      return <FaReact className="h-8 w-8 text-purple-500" />
    case "angular":
      return <FaAngular className="h-8 w-8 text-purple-500" />
    case "frameworks":
      return <CodeXml className="h-8 w-8 text-purple-500" />
    default:
      return <CodeXml className="h-8 w-8 text-purple-500" />
  }
}