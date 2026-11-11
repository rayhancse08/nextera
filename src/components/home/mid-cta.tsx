import React, { FC } from 'react'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'
import ArrowForward from '@mui/icons-material/ArrowForward'
import MailOutline from '@mui/icons-material/MailOutline'
import PhoneOutlined from '@mui/icons-material/PhoneOutlined'
import { Link as ScrollLink } from 'react-scroll'
import { StyledButton } from '@/components/styled-button'
import Reveal from '@/components/common/reveal'
import { siteConfig } from '@/config/site'

const chipSx = {
  display: 'inline-flex',
  alignItems: 'center',
  gap: 1,
  px: 2,
  py: 1,
  borderRadius: '999px',
  color: '#fff',
  fontWeight: 600,
  fontSize: '0.9rem',
  textDecoration: 'none',
  bgcolor: 'rgba(255, 255, 255, 0.12)',
  border: '1px solid rgba(255, 255, 255, 0.2)',
  transition: 'background-color 0.2s ease',
  '&:hover': { bgcolor: 'rgba(255, 255, 255, 0.2)' },
}

const MidCta: FC = () => {
  return (
    <Box component="section" sx={{ py: { xs: 6, md: 10 }, bgcolor: '#fff' }}>
      <Container maxWidth="lg">
        <Reveal>
          <Box
            sx={{
              position: 'relative',
              overflow: 'hidden',
              borderRadius: { xs: '24px', md: '32px' },
              px: { xs: 3, sm: 6, md: 8 },
              py: { xs: 6, md: 8 },
              color: '#fff',
              background: 'linear-gradient(120deg, #0f766e 0%, #0d9488 45%, #2563eb 100%)',
              boxShadow: '0 40px 80px -30px rgba(13, 148, 136, 0.6)',
              '&::before': {
                content: '""',
                position: 'absolute',
                inset: 0,
                backgroundImage: 'radial-gradient(rgba(255, 255, 255, 0.18) 1px, transparent 1px)',
                backgroundSize: '22px 22px',
                maskImage: 'linear-gradient(90deg, transparent 30%, black)',
                WebkitMaskImage: 'linear-gradient(90deg, transparent 30%, black)',
                pointerEvents: 'none',
              },
            }}
          >
            <Stack
              direction={{ xs: 'column', md: 'row' }}
              spacing={4}
              alignItems="center"
              justifyContent="space-between"
              sx={{ position: 'relative', textAlign: { xs: 'center', md: 'left' } }}
            >
              <Box sx={{ maxWidth: 620 }}>
                <Typography
                  component="h2"
                  sx={{
                    fontWeight: 800,
                    letterSpacing: '-1px',
                    lineHeight: 1.15,
                    fontSize: { xs: '1.9rem', md: '2.6rem' },
                    mb: 2,
                  }}
                >
                  Let&apos;s build your next product together.
                </Typography>
                <Typography sx={{ color: 'rgba(255, 255, 255, 0.85)', lineHeight: 1.7, fontSize: '1.05rem', mb: 3 }}>
                  Share your idea and get a free, no-obligation plan with scope, timeline and cost estimate.{' '}
                  {siteConfig.responseTime}
                </Typography>
                <Stack
                  direction={{ xs: 'column', sm: 'row' }}
                  spacing={1.5}
                  alignItems="center"
                  justifyContent={{ xs: 'center', md: 'flex-start' }}
                >
                  <Box component="a" href={`mailto:${siteConfig.contactEmail}`} sx={chipSx}>
                    <MailOutline fontSize="small" /> {siteConfig.contactEmail}
                  </Box>
                  <Box component="a" href={`tel:${siteConfig.contactPhoneTel}`} sx={chipSx}>
                    <PhoneOutlined fontSize="small" /> {siteConfig.contactPhone}
                  </Box>
                </Stack>
              </Box>
              <Box sx={{ flexShrink: 0 }}>
                <ScrollLink to="contact" smooth offset={-88} duration={450}>
                  <StyledButton color="light" size="large" variant="contained" endIcon={<ArrowForward />}>
                    Start a project
                  </StyledButton>
                </ScrollLink>
              </Box>
            </Stack>
          </Box>
        </Reveal>
      </Container>
    </Box>
  )
}

export default MidCta
