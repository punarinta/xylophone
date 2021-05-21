import { useState, useCallback } from 'react'

/**
 * @returns {() => void}
 */
export function useRender () {
  // noinspection JSUnusedLocalSymbols
  const [_, update] = useState(0)

  return useCallback(() => update(Math.random()), [])
}
