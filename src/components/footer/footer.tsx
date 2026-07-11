import React, { FC } from 'react'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'
import { Link as ScrollLink } from 'react-scroll'
import { siteConfig } from '@/config/site'

const footerLinks: { label: string; to: string }[] = [
  { label: 'Home', to: 'hero' },
  { label: 'About', to: 'about' },
  { label: 'Services', to: 'services' },
  { label: 'Why us', to: 'why-us' },
  { label: 'Process', to: 'process' },
  { label: 'Portfolio', to: 'portfolio' },
  { label: 'Team', to: 'team' },
  { label: 'Contact', to: 'contact' },
]

const Footer: FC = () => {
  const mailto = `mailto:${siteConfig.contactEmail}`
  const telHref = `tel:${siteConfig.contactPhoneTel}`

  return (
    <Box
      component="footer"
      sx={{
        background: 'linear-gradient(165deg, #0f172a 0%, #0d4f4a 45%, #0f172a 100%)',
        color: 'primary.contrastText',
        pt: { xs: 8, md: 12 },
        pb: 5,
        width: '100%',
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: -120,
          right: -80,
          width: 360,
          height: 360,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(45, 212, 191, 0.12) 0%, transparent 70%)',
          pointerEvents: 'none',
        },
      }}
    >
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={5}>
            <Stack spacing={2}>
              <Typography
                component="h2"
                variant="h3"
                sx={{
                  fontWeight: 800,
                  letterSpacing: -0.5,
                  fontSize: { xs: '1.75rem', md: '2.25rem' },
                }}
              >
                {siteConfig.name}
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  opacity: 0.88,
                  lineHeight: 1.75,
                  fontSize: { xs: '0.95rem', md: '1.05rem' },
                }}
              >
                Nextera Technologies is a forward-thinking software company established in 2024. We specialize in
                delivering modern, scalable, and high-performance digital solutions for businesses of all sizes. From
                full-stack web development using Next.js and Django to mobile apps, cloud integration, and AI-powered
                tools, Nextera combines cutting-edge technologies with industry best practices to drive real results.
                Our mission is to empower organizations through clean code, intuitive design, and smart automation.
              </Typography>
            </Stack>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="overline" sx={{ opacity: 0.75, letterSpacing: 2, fontWeight: 700, display: 'block', mb: 2 }}>
              Explore
            </Typography>
            <Stack spacing={1.25}>
              {footerLinks.map(({ label, to }) => (
                <Box
                  key={to}
                  component={ScrollLink}
                  to={to}
                  spy
                  smooth
                  duration={350}
                  offset={-72}
                  sx={{
                    cursor: 'pointer',
                    opacity: 0.9,
                    fontSize: '0.95rem',
                    fontWeight: 500,
                    '&:hover': { opacity: 1, color: 'secondary.light' },
                  }}
                >
                  {label}
                </Box>
              ))}
            </Stack>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="overline" sx={{ opacity: 0.75, letterSpacing: 2, fontWeight: 700, display: 'block', mb: 2 }}>
              Contact
            </Typography>
            <Stack spacing={2}>
              <Typography variant="body2" sx={{ opacity: 0.85, lineHeight: 1.6 }}>
                {siteConfig.responseTime}
              </Typography>
              <Typography variant="body2" sx={{ opacity: 0.85, lineHeight: 1.6 }}>
                {siteConfig.location}
              </Typography>
              <Box
                component="a"
                href={mailto}
                sx={{
                  color: 'secondary.light',
                  fontWeight: 700,
                  textDecoration: 'underline',
                  fontSize: '1rem',
                  wordBreak: 'break-all',
                  '&:hover': { color: '#fff' },
                }}
              >
                {siteConfig.contactEmail}
              </Box>
              <Box
                component="a"
                href={telHref}
                sx={{
                  color: 'secondary.light',
                  fontWeight: 700,
                  textDecoration: 'underline',
                  fontSize: '1rem',
                  display: 'block',
                  '&:hover': { color: '#fff' },
                }}
              >
                {siteConfig.contactPhone}
              </Box>
              {siteConfig.linkedInUrl ? (
                <Box
                  component="a"
                  href={siteConfig.linkedInUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    color: 'secondary.light',
                    fontWeight: 600,
                    textDecoration: 'underline',
                    fontSize: '0.95rem',
                    wordBreak: 'break-all',
                    '&:hover': { color: '#fff' },
                  }}
                >
                  LinkedIn profile
                </Box>
              ) : null}
              <Box
                component={ScrollLink}
                to="contact"
                spy
                smooth
                duration={350}
                offset={-72}
                sx={{
                  cursor: 'pointer',
                  fontWeight: 600,
                  fontSize: '0.9rem',
                  textDecoration: 'underline',
                  opacity: 0.9,
                  '&:hover': { opacity: 1 },
                }}
              >
                Project brief & checklist →
              </Box>
            </Stack>
          </Grid>

          <Grid item xs={12}>
            <Typography variant="body2" align="center" sx={{ pt: 3, opacity: 0.65, fontSize: '0.875rem' }}>
              © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default Footer
