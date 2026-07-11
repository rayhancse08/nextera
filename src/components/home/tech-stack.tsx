import React, { FC } from 'react'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'
import Chip from '@mui/material/Chip'

const stackGroups = [
  {
    title: 'Frontend',
    items: ['Next.js', 'React', 'TypeScript', 'Material UI', 'Tailwind CSS'],
  },
  {
    title: 'Backend',
    items: ['Django', 'Django REST', 'Python', 'PostgreSQL', 'Redis'],
  },
  {
    title: 'AI & integrations',
    items: ['OpenAI API', 'Claude', 'Stripe', 'WebSockets', 'Third-party APIs'],
  },
  {
    title: 'Cloud & DevOps',
    items: ['Docker', 'Nginx', 'AWS', 'GCP', 'Azure', 'CI/CD'],
  },
]

const TechStack: FC = () => {
  return (
    <Box
      component="section"
      sx={{
        py: { xs: 6, md: 8 },
        bgcolor: '#0f172a',
        color: 'primary.contrastText',
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          inset: 0,
          backgroundImage: `radial-gradient(circle at 20% 50%, rgba(13, 148, 136, 0.15) 0%, transparent 50%),
            radial-gradient(circle at 80% 50%, rgba(59, 130, 246, 0.12) 0%, transparent 45%)`,
          pointerEvents: 'none',
        },
      }}
    >
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Stack spacing={1} sx={{ mb: 4, textAlign: { xs: 'center', md: 'left' } }}>
          <Typography variant="overline" sx={{ color: 'secondary.light', fontWeight: 800, letterSpacing: 2, fontSize: '0.7rem' }}>
            Technology
          </Typography>
          <Typography variant="h2" sx={{ fontWeight: 800, letterSpacing: -0.5, fontSize: { xs: '1.5rem', md: '2rem' } }}>
            Built with proven, modern tools
          </Typography>
          <Typography variant="body2" sx={{ opacity: 0.8, maxWidth: 560 }}>
            We pick stacks that balance speed, maintainability, and hiring—so your product is not locked to obscure tech.
          </Typography>
        </Stack>

        <Stack spacing={3}>
          {stackGroups.map(({ title, items }) => (
            <Box key={title}>
              <Typography variant="caption" sx={{ fontWeight: 700, letterSpacing: 1.5, opacity: 0.65, display: 'block', mb: 1.5 }}>
                {title.toUpperCase()}
              </Typography>
              <Stack direction="row" flexWrap="wrap" gap={1}>
                {items.map((tech) => (
                  <Chip
                    key={tech}
                    label={tech}
                    size="medium"
                    sx={{
                      fontWeight: 600,
                      bgcolor: 'rgba(255,255,255,0.08)',
                      color: '#f8fafc',
                      border: '1px solid rgba(255,255,255,0.12)',
                      '&:hover': { bgcolor: 'rgba(255,255,255, 0.14)' },
                    }}
                  />
                ))}
              </Stack>
            </Box>
          ))}
        </Stack>
      </Container>
    </Box>
  )
}

export default TechStack
