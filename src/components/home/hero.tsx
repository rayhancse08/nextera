import React, { FC } from 'react'
import Image from 'next/image'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'
import Chip from '@mui/material/Chip'
import { Link as ScrollLink } from 'react-scroll'
import { StyledButton } from '@/components/styled-button'

const HomeHero: FC = () => {
  return (
    <Box
      id="hero"
      sx={{
        position: 'relative',
        overflow: 'hidden',
        pt: { xs: 6, md: 10 },
        pb: { xs: 8, md: 12 },
        backgroundColor: '#f0f4f8',
        backgroundImage: `
          radial-gradient(ellipse 80% 55% at 50% -20%, rgba(13, 148, 136, 0.22), transparent 55%),
          radial-gradient(ellipse 60% 40% at 100% 0%, rgba(59, 130, 246, 0.12), transparent 50%),
          radial-gradient(ellipse 50% 35% at 0% 20%, rgba(13, 148, 136, 0.08), transparent 45%)
        `,
        '&::before': {
          content: '""',
          position: 'absolute',
          inset: 0,
          backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(15, 23, 42, 0.03) 1px, transparent 1px)`,
          backgroundSize: '48px 48px',
          maskImage: 'linear-gradient(to bottom, black 0%, transparent 85%)',
          WebkitMaskImage: 'linear-gradient(to bottom, black 0%, transparent 85%)',
          pointerEvents: 'none',
        },
      }}
    >
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Grid container spacing={{ xs: 4, md: 6 }} alignItems="center">
          <Grid item xs={12} md={6}>
            <Stack spacing={3} sx={{ textAlign: { xs: 'center', md: 'left' } }}>
              <Stack direction="row" flexWrap="wrap" gap={1} justifyContent={{ xs: 'center', md: 'flex-start' }}>
                {['Custom software', 'Cloud & APIs', 'AI-ready products'].map((label) => (
                  <Chip
                    key={label}
                    label={label}
                    size="small"
                    sx={{
                      fontWeight: 600,
                      letterSpacing: 0.3,
                      borderRadius: 2,
                      bgcolor: 'rgba(255,255,255,0.85)',
                      border: '1px solid',
                      borderColor: 'rgba(13, 148, 136, 0.25)',
                      color: 'primary.dark',
                      backdropFilter: 'blur(8px)',
                    }}
                  />
                ))}
              </Stack>

              <Typography
                component="h1"
                sx={{
                  fontSize: { xs: '2.25rem', sm: '2.75rem', md: '3.25rem' },
                  fontWeight: 800,
                  lineHeight: 1.15,
                  letterSpacing: -0.5,
                  color: 'text.primary',
                }}
              >
                Software that moves{' '}
                <Box
                  component="span"
                  sx={{
                    background: (theme) =>
                      `linear-gradient(120deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  your business forward
                </Box>
              </Typography>

              <Typography
                sx={{
                  color: 'text.secondary',
                  fontSize: { xs: '1rem', md: '1.125rem' },
                  lineHeight: 1.65,
                  maxWidth: 520,
                  mx: { xs: 'auto', md: 0 },
                }}
              >
                Nextera designs and ships reliable web platforms, integrations, and intelligent tools—so your team can
                focus on growth while we handle the engineering.
              </Typography>

              <Stack
                direction={{ xs: 'column', sm: 'row' }}
                spacing={2}
                sx={{ pt: 1, justifyContent: { xs: 'center', md: 'flex-start' } }}
              >
                <ScrollLink to="services" spy smooth offset={-72} duration={400}>
                  <StyledButton color="primary" size="large" variant="contained">
                    Explore services
                  </StyledButton>
                </ScrollLink>
                <ScrollLink to="portfolio" spy smooth offset={-72} duration={400}>
                  <StyledButton color="dark" size="large" variant="outlined">
                    View portfolio
                  </StyledButton>
                </ScrollLink>
                <ScrollLink to="contact" spy smooth offset={-72} duration={400}>
                  <StyledButton color="primary" size="large" variant="text" disableHoverEffect={false}>
                    Contact us
                  </StyledButton>
                </ScrollLink>
              </Stack>

              <Stack
                direction={{ xs: 'column', sm: 'row' }}
                spacing={{ xs: 2, sm: 4 }}
                sx={{
                  pt: 2,
                  borderTop: '1px solid',
                  borderColor: 'rgba(15, 23, 42, 0.08)',
                  justifyContent: { xs: 'center', md: 'flex-start' },
                }}
              >
                {[
                  { value: '2024', label: 'Founded' },
                  { value: 'End-to-end', label: 'Delivery' },
                  { value: 'Quality-first', label: 'Engineering' },
                ].map((stat) => (
                  <Box key={stat.label} sx={{ textAlign: { xs: 'center', md: 'left' } }}>
                    <Typography sx={{ fontWeight: 800, fontSize: '1.25rem', color: 'primary.dark' }}>
                      {stat.value}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ fontWeight: 500 }}>
                      {stat.label}
                    </Typography>
                  </Box>
                ))}
              </Stack>
            </Stack>
          </Grid>

          <Grid item xs={12} md={6}>
            <Box
              sx={{
                position: 'relative',
                borderRadius: 4,
                p: { xs: 1.5, md: 2 },
                background: 'linear-gradient(135deg, rgba(13, 148, 136, 0.15) 0%, rgba(59, 130, 246, 0.12) 100%)',
                boxShadow: '0 24px 48px -12px rgba(15, 23, 42, 0.18)',
              }}
            >
              <Box
                sx={{
                  borderRadius: 3,
                  overflow: 'hidden',
                  bgcolor: 'background.paper',
                  lineHeight: 0,
                  border: '1px solid',
                  borderColor: 'rgba(255,255,255,0.8)',
                }}
              >
                <Image src="/images/banner.png" width={1056} height={821} alt="Nextera product and engineering" priority />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default HomeHero
