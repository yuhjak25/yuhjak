import { useEffect, useState } from 'react'

const TextScramble = () => {
  const originalText = 'Infinito'
  const [scrambledText, setScrambledText] = useState<string>(originalText)

  const scramble = (txt: string) => {
    const chars =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    return txt
      .split('')
      .map(() => chars.charAt(Math.floor(Math.random() * chars.length)))
      .join('')
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setScrambledText(scramble(originalText))
    }, 100)

    return () => {
      clearInterval(interval)
    }
  }, [])
  return <p>{scrambledText} </p>
}

export default TextScramble
