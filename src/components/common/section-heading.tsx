import React, { FC, ReactNode } from 'react'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'

interface Props {
  eyebrow: string
  title: ReactNode
  description?: ReactNode
  align?: 'left' | 'center'
  tone?: 'light' | 'dark'
}

export const GradientText: FC<{ children: ReactNode }> = ({ children }) => (
  <Box
    component="span"
    sx={{
      background: 'linear-gradient(110deg, #14b8a6 0%, #3b82f6 55%, #8b5cf6 100%)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
    }}
  >
    {children}
  </Box>
)

const SectionHeading: FC<Props> = ({ eyebrow, title, description, align = 'left', tone = 'light' }) => {
  const dark = tone === 'dark'
  const centered = align === 'center'

  return (
    <Stack
      spacing={2}
      sx={{
        maxWidth: centered ? 760 : 640,
        mx: centered ? 'auto' : 0,
        textAlign: centered ? 'center' : { xs: 'center', md: 'left' },
        alignItems: centered ? 'center' : { xs: 'center', md: 'flex-start' },
      }}
    >
      <Box
        sx={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: 1,
          px: 1.5,
          py: 0.5,
          borderRadius: '999px',
          fontSize: '0.72rem',
          fontWeight: 800,
          letterSpacing: 1.5,
          textTransform: 'uppercase',
          color: dark ? '#5eead4' : 'primary.dark',
          bgcolor: dark ? 'rgba(45, 212, 191, 0.1)' : 'rgba(13, 148, 136, 0.08)',
          border: '1px solid',
          borderColor: dark ? 'rgba(45, 212, 191, 0.25)' : 'rgba(13, 148, 136, 0.18)',
        }}
      >
        <Box sx={{ width: 6, height: 6, borderRadius: '50%', bgcolor: 'currentColor' }} />
        {eyebrow}
      </Box>
      <Typography
        component="h2"
        sx={{
          fontWeight: 800,
          letterSpacing: '-1px',
          lineHeight: 1.15,
          fontSize: { xs: '1.9rem', md: '2.6rem' },
          color: dark ? '#fff' : 'text.primary',
        }}
      >
        {title}
      </Typography>
      {description ? (
        <Typography
          sx={{
            color: dark ? '#94a3b8' : 'text.secondary',
            fontSize: { xs: '1rem', md: '1.08rem' },
            lineHeight: 1.7,
          }}
        >
          {description}
        </Typography>
      ) : null}
    </Stack>
  )
}

export default SectionHeading
