import React, { FC } from 'react'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { data } from './portfolio.data'

const ProjectMarquee: FC = () => {
  const items = data.map(({ id, title, category }) => ({ id, title, category }))
  const loop = [...items, ...items]

  return (
    <Box
      component="section"
      aria-label="Products we have built"
      sx={{
        bgcolor: '#0b1120',
        borderTop: '1px solid rgba(255, 255, 255, 0.06)',
        py: { xs: 3.5, md: 4.5 },
        overflow: 'hidden',
      }}
    >
      <Container maxWidth="lg">
        <Typography
          sx={{
            textAlign: 'center',
            color: '#64748b',
            fontSize: '0.75rem',
            fontWeight: 700,
            letterSpacing: 2,
            textTransform: 'uppercase',
            mb: 2.5,
          }}
        >
          Products we&apos;ve designed, built &amp; shipped
        </Typography>
      </Container>
      <Box
        sx={{
          maskImage: 'linear-gradient(90deg, transparent, black 10%, black 90%, transparent)',
          WebkitMaskImage: 'linear-gradient(90deg, transparent, black 10%, black 90%, transparent)',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            width: 'max-content',
            animation: 'nx-marquee 45s linear infinite',
            '&:hover': { animationPlayState: 'paused' },
          }}
        >
          {loop.map((item, index) => (
            <Stack
              key={`${item.id}-${index}`}
              direction="row"
              alignItems="center"
              spacing={1.5}
              aria-hidden={index >= items.length}
              // Padding instead of gap keeps the -50% loop seamless
              sx={{ pr: { xs: 5, md: 8 } }}
            >
              <Box
                sx={{
                  width: 8,
                  height: 8,
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #14b8a6, #3b82f6)',
                }}
              />
              <Typography
                sx={{ fontWeight: 800, fontSize: { xs: '1.1rem', md: '1.4rem' }, color: '#cbd5e1', whiteSpace: 'nowrap' }}
              >
                {item.title}
              </Typography>
              <Typography sx={{ fontSize: '0.75rem', color: '#64748b', whiteSpace: 'nowrap' }}>{item.category}</Typography>
            </Stack>
          ))}
        </Box>
      </Box>
    </Box>
  )
}

export default ProjectMarquee
