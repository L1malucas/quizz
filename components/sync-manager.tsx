"use client"

import { useState, useEffect } from "react"
import { saveScore } from "@/lib/actions"
import { Button } from "@/components/ui/button"

export default function OfflineSyncManager() {
  const [pendingScores, setPendingScores] = useState<any[]>([])
  const [isSyncing, setIsSyncing] = useState(false)
  const [syncStatus, setSyncStatus] = useState<string | null>(null)
  const [showManager, setShowManager] = useState(false)

  useEffect(() => {
    const storedPendingScores = JSON.parse(localStorage.getItem("pendingScores") || "[]")
    setPendingScores(storedPendingScores)
    setShowManager(storedPendingScores.length > 0)
  }, [])

  const syncPendingScores = async () => {
    if (pendingScores.length === 0) return

    setIsSyncing(true)
    setSyncStatus("Sincronizando pontuações pendentes...")

    const failedScores: any[] = []
    let syncedCount = 0

    for (const scoreData of pendingScores) {
      try {
        const scoreToSync = {
          ...scoreData,
          date: new Date(scoreData.date)
        }

        const result = await saveScore(scoreToSync)

        if (result.success) {
          syncedCount++
        } else {
          failedScores.push(scoreData)
        }
      } catch (error) {
        failedScores.push(scoreData)
      }

      await new Promise(resolve => setTimeout(resolve, 300))
    }

    localStorage.setItem("pendingScores", JSON.stringify(failedScores))
    setPendingScores(failedScores)

    if (failedScores.length === 0) {
      localStorage.removeItem("pendingScores")
      setSyncStatus(`Todas as ${syncedCount} pontuações foram sincronizadas com sucesso!`)
      setTimeout(() => setShowManager(false), 3000)
    } else {
      setSyncStatus(`${syncedCount} pontuações sincronizadas. ${failedScores.length} pendentes.`)
    }

    setIsSyncing(false)
  }

  if (!showManager) return null

  return (
    <div className="fixed bottom-4 right-4 bg-zinc-900 border border-purple-500 p-4 rounded-lg shadow-lg z-40 max-w-xs">
      <div className="flex justify-between items-center mb-2">
        <h3 className="font-medium text-purple-400">Pontuações Offline</h3>
        <button
          onClick={() => setShowManager(false)}
          className="text-zinc-400 hover:text-white"
        >
          ✕
        </button>
      </div>

      <p className="text-sm mb-3">
        {pendingScores.length} pontuação(ões) ainda não sincronizada(s) com o servidor.
      </p>

      {syncStatus && (
        <p className="text-xs mb-3 text-amber-300">
          {syncStatus}
        </p>
      )}

      <Button
        onClick={syncPendingScores}
        disabled={isSyncing || pendingScores.length === 0}
        className="w-full bg-purple-500 hover:bg-purple-600 text-sm"
      >
        {isSyncing ? "Sincronizando..." : "Tentar Sincronizar Agora"}
      </Button>
    </div>
  )
}