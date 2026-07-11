import React from 'react'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'
import Chip from '@mui/material/Chip'
import { Link as ScrollLink } from 'react-scroll'
import PortfolioCardItem from '@/components/portfolio'
import { data } from './portfolio.data'
import { StyledButton } from '@/components/styled-button'

const showcaseStats = [
  { value: '10+', label: 'Live products' },
  { value: '3', label: 'SaaS demos' },
  { value: '100%', label: 'Production code' },
]

const HomePortfolio = (): JSX.Element => {
  const featured = data.filter((item) => item.featured)
  const saasDemos = data.filter((item) => item.isDemo)
  const rest = data.filter((item) => !item.featured && !item.isDemo)

  return (
    <Box
      id="portfolio"
      component="section"
      sx={{
        scrollMarginTop: '80px',
        pt: { xs: 8, md: 10 },
        pb: { xs: 10, md: 14 },
        position: 'relative',
        overflow: 'hidden',
        background: '#0f172a',
        color: 'primary.contrastText',
        '&::before': {
          content: '""',
          position: 'absolute',
          inset: 0,
          backgroundImage: `
            radial-gradient(ellipse 70% 50% at 20% 0%, rgba(13, 148, 136, 0.2) 0%, transparent 55%),
            radial-gradient(ellipse 60% 45% at 90% 80%, rgba(59, 130, 246, 0.15) 0%, transparent 50%)
          `,
          pointerEvents: 'none',
        },
      }}
    >
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        {/* Header */}
        <Grid container spacing={4} alignItems="flex-end" sx={{ mb: { xs: 4, md: 6 } }}>
          <Grid item xs={12} md={7}>
            <Stack spacing={1.5}>
              <Typography
                variant="overline"
                sx={{ color: 'secondary.light', fontWeight: 800, letterSpacing: 2.5, fontSize: '0.7rem' }}
              >
                Work showcase
              </Typography>
              <Typography
                variant="h2"
                sx={{
                  fontWeight: 800,
                  letterSpacing: -0.5,
                  fontSize: { xs: '2rem', md: '2.75rem' },
                  lineHeight: 1.15,
                }}
              >
                Products we&apos;ve{' '}
                <Box
                  component="span"
                  sx={{
                    background: 'linear-gradient(120deg, #2dd4bf 0%, #60a5fa 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  shipped to production
                </Box>
              </Typography>
              <Typography sx={{ opacity: 0.82, maxWidth: 560, lineHeight: 1.7, fontSize: '1.05rem' }}>
                Real platforms serving users today—legal tech, e-commerce, social, operations, and travel. Click any
                project to visit the live site.
              </Typography>
            </Stack>
          </Grid>
          <Grid item xs={12} md={5}>
            <Stack
              direction="row"
              spacing={2}
              justifyContent={{ xs: 'flex-start', md: 'flex-end' }}
              flexWrap="wrap"
            >
              {showcaseStats.map(({ value, label }) => (
                <Box
                  key={label}
                  sx={{
                    px: 2.5,
                    py: 1.5,
                    borderRadius: 2,
                    bgcolor: 'rgba(255,255,255,0.06)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    minWidth: 100,
                    textAlign: 'center',
                  }}
                >
                  <Typography sx={{ fontWeight: 800, fontSize: '1.5rem', color: 'secondary.light', lineHeight: 1 }}>
                    {value}
                  </Typography>
                  <Typography variant="caption" sx={{ opacity: 0.75, fontWeight: 600 }}>
                    {label}
                  </Typography>
                </Box>
              ))}
            </Stack>
          </Grid>
        </Grid>

        {/* Industry coverage */}
        <Stack direction="row" flexWrap="wrap" gap={1} sx={{ mb: 4 }}>
          {['Legal tech', 'E-commerce', 'SaaS', 'Healthcare', 'Education', 'Social', 'Operations'].map((label) => (
            <Chip
              key={label}
              label={label}
              size="small"
              sx={{
                fontWeight: 600,
                bgcolor: 'rgba(255,255,255,0.08)',
                color: 'rgba(255,255,255,0.9)',
                border: '1px solid rgba(255,255,255,0.12)',
              }}
            />
          ))}
        </Stack>

        {/* Featured row */}
        {featured.length > 0 ? (
          <Grid container spacing={3} sx={{ mb: 3 }}>
            {featured.map((item) => (
              <Grid item xs={12} md={6} key={item.id}>
                <PortfolioCardItem item={item} variant="featured" />
              </Grid>
            ))}
          </Grid>
        ) : null}

        {/* SaaS live demos */}
        {saasDemos.length > 0 ? (
          <Box sx={{ mb: 5 }}>
            <Stack spacing={1} sx={{ mb: 3 }}>
              <Typography
                variant="overline"
                sx={{ color: 'secondary.light', fontWeight: 800, letterSpacing: 2, fontSize: '0.7rem' }}
              >
                Try our SaaS
              </Typography>
              <Typography variant="h3" sx={{ fontWeight: 800, fontSize: { xs: '1.35rem', md: '1.65rem' } }}>
                Live product demos
              </Typography>
              <Typography variant="body2" sx={{ opacity: 0.75, maxWidth: 560 }}>
                Explore ready-to-use SaaS templates—e-commerce, healthcare, and school management—hosted by Nextera.
              </Typography>
            </Stack>
            <Grid container spacing={3}>
              {saasDemos.map((item) => (
                <Grid item xs={12} md={4} key={item.id}>
                  <PortfolioCardItem item={item} />
                </Grid>
              ))}
            </Grid>
          </Box>
        ) : null}

        {/* Client projects */}
        <Stack spacing={1} sx={{ mb: 3 }}>
          <Typography variant="overline" sx={{ color: 'secondary.light', fontWeight: 800, letterSpacing: 2, fontSize: '0.7rem' }}>
            Client work
          </Typography>
          <Typography variant="h3" sx={{ fontWeight: 800, fontSize: { xs: '1.35rem', md: '1.65rem' } }}>
            Production deployments
          </Typography>
        </Stack>

        {/* Grid showcase */}
        <Grid container spacing={3}>
          {rest.map((item) => (
            <Grid item xs={12} sm={6} lg={4} key={item.id}>
              <PortfolioCardItem item={item} />
            </Grid>
          ))}
        </Grid>

        {/* Bottom CTA */}
        <Box
          sx={{
            mt: { xs: 6, md: 8 },
            p: { xs: 3, md: 4 },
            borderRadius: 3,
            textAlign: 'center',
            background: 'linear-gradient(135deg, rgba(13, 148, 136, 0.2) 0%, rgba(59, 130, 246, 0.15) 100%)',
            border: '1px solid rgba(255,255,255,0.12)',
          }}
        >
          <Typography variant="h6" sx={{ fontWeight: 800, mb: 1, fontSize: { xs: '1.1rem', md: '1.25rem' } }}>
            Want something similar built for your business?
          </Typography>
          <Typography variant="body2" sx={{ opacity: 0.8, mb: 2.5, maxWidth: 480, mx: 'auto' }}>
            We scope, design, and ship custom software on the same stack—Next.js, Django, and cloud-native tooling.
          </Typography>
          <ScrollLink to="contact" spy smooth offset={-72} duration={400}>
            <StyledButton color="primary" size="large" variant="contained">
              Discuss your project
            </StyledButton>
          </ScrollLink>
        </Box>
      </Container>
    </Box>
  )
}

export default HomePortfolio
