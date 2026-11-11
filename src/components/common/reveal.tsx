import React, { FC, ReactNode, useEffect, useRef, useState } from 'react'
import Box from '@mui/material/Box'
import { Theme } from '@mui/material/styles'
import { SystemStyleObject } from '@mui/system'

interface Props {
  children: ReactNode
  delay?: number
  y?: number
  sx?: SystemStyleObject<Theme>
}

const Reveal: FC<Props> = ({ children, delay = 0, y = 28, sx }) => {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return undefined
    if (typeof IntersectionObserver === 'undefined') {
      setVisible(true)
      return undefined
    }
    // threshold 0 so very tall sections still reveal on small screens
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0 }
    )
    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return (
    <Box
      ref={ref}
      sx={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'none' : `translateY(${y}px)`,
        transition: `opacity 0.7s ease ${delay}ms, transform 0.7s cubic-bezier(0.2, 0.7, 0.2, 1) ${delay}ms`,
        '@media (prefers-reduced-motion: reduce)': {
          opacity: 1,
          transform: 'none',
          transition: 'none',
        },
        ...sx,
      }}
    >
      {children}
    </Box>
  )
}

export default Reveal
