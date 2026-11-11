import React, { FC, useEffect, useState } from 'react'
import Image from 'next/image'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'
import Avatar from '@mui/material/Avatar'
import AvatarGroup from '@mui/material/AvatarGroup'
import ArrowForward from '@mui/icons-material/ArrowForward'
import LockOutlined from '@mui/icons-material/LockOutlined'
import RocketLaunchOutlined from '@mui/icons-material/RocketLaunchOutlined'
import AutoAwesomeOutlined from '@mui/icons-material/AutoAwesomeOutlined'
import { Link as ScrollLink } from 'react-scroll'
import { StyledButton } from '@/components/styled-button'
import { GradientText } from '@/components/common/section-heading'
import { data as team } from './mentors.data'

const screens = [
  { src: '/images/portfolio/ecommerce.png', label: 'Nextera Demo Store', url: 'demo.app.nexterasotech.com' },
  { src: '/images/portfolio/clarvo.png', label: 'Clarvo', url: 'clarvo.us' },
  { src: '/images/portfolio/school.png', label: 'EduManage', url: 'school.nexterasotech.com' },
  { src: '/images/portfolio/bakingtoolbox.png', label: 'Baking Toolbox', url: 'bakingtoolbox.com' },
  { src: '/images/portfolio/deshishad.png', label: 'Deshi Shad', url: 'deshishadusa.com' },
  { src: '/images/portfolio/tourist.png', label: 'Explore the Known World', url: 'exploreknownworld.com' },
]

const FloatingCard: FC<{
  icon: React.ReactNode
  title: string
  subtitle: string
  sx: object
  delay?: string
}> = ({ icon, title, subtitle, sx, delay = '0s' }) => (
  <Box
    sx={{
      position: 'absolute',
      zIndex: 2,
      display: { xs: 'none', sm: 'flex' },
      alignItems: 'center',
      gap: 1.5,
      px: 2,
      py: 1.5,
      borderRadius: '16px',
      bgcolor: 'rgba(255, 255, 255, 0.95)',
      color: 'text.primary',
      boxShadow: '0 20px 40px -12px rgba(0, 0, 0, 0.45)',
      animation: `nx-float 6s ease-in-out ${delay} infinite`,
      ...sx,
    }}
  >
    <Box
      sx={{
        width: 40,
        height: 40,
        borderRadius: '12px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#fff',
        background: 'linear-gradient(135deg, #14b8a6 0%, #3b82f6 100%)',
      }}
    >
      {icon}
    </Box>
    <Box>
      <Typography sx={{ fontWeight: 800, fontSize: '0.95rem', lineHeight: 1.2 }}>{title}</Typography>
      <Typography sx={{ fontSize: '0.75rem', color: 'text.secondary' }}>{subtitle}</Typography>
    </Box>
  </Box>
)

const HomeHero: FC = () => {
  const [active, setActive] = useState(0)

  useEffect(() => {
    const timer = window.setInterval(() => setActive((i) => (i + 1) % screens.length), 4000)
    return () => window.clearInterval(timer)
  }, [])

  return (
    <Box
      id="hero"
      component="section"
      sx={{
        position: 'relative',
        overflow: 'hidden',
        bgcolor: '#0b1120',
        color: '#e2e8f0',
        pt: { xs: 14, md: 20 },
        pb: { xs: 8, md: 12 },
        '&::before': {
          content: '""',
          position: 'absolute',
          inset: 0,
          backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.04) 1px, transparent 1px)`,
          backgroundSize: '56px 56px',
          maskImage: 'radial-gradient(ellipse 80% 70% at 50% 30%, black 20%, transparent 75%)',
          WebkitMaskImage: 'radial-gradient(ellipse 80% 70% at 50% 30%, black 20%, transparent 75%)',
          pointerEvents: 'none',
        },
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          top: '-20%',
          left: '-10%',
          width: { xs: 360, md: 640 },
          height: { xs: 360, md: 640 },
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(20, 184, 166, 0.35) 0%, transparent 65%)',
          filter: 'blur(40px)',
          pointerEvents: 'none',
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          bottom: '-25%',
          right: '-10%',
          width: { xs: 360, md: 700 },
          height: { xs: 360, md: 700 },
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(99, 102, 241, 0.3) 0%, transparent 65%)',
          filter: 'blur(40px)',
          pointerEvents: 'none',
        }}
      />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Grid container spacing={{ xs: 6, md: 6 }} alignItems="center">
          <Grid item xs={12} md={6}>
            <Stack spacing={3.5} sx={{ textAlign: { xs: 'center', md: 'left' }, alignItems: { xs: 'center', md: 'flex-start' } }}>
              <Box
                sx={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 1.25,
                  px: 1.75,
                  py: 0.75,
                  borderRadius: '999px',
                  border: '1px solid rgba(255, 255, 255, 0.12)',
                  bgcolor: 'rgba(255, 255, 255, 0.05)',
                  fontSize: '0.82rem',
                  fontWeight: 600,
                  color: '#cbd5e1',
                }}
              >
                <Box
                  sx={{
                    width: 8,
                    height: 8,
                    borderRadius: '50%',
                    bgcolor: '#22c55e',
                    animation: 'nx-pulse 2s infinite',
                  }}
                />
                Now taking new projects
              </Box>

              <Typography
                component="h1"
                sx={{
                  fontSize: { xs: '2.4rem', sm: '3rem', md: '3.6rem' },
                  fontWeight: 800,
                  lineHeight: 1.08,
                  letterSpacing: { xs: '-1px', md: '-1.5px' },
                  color: '#fff',
                }}
              >
                We design &amp; build software that <GradientText>grows your business</GradientText>
              </Typography>

              <Typography
                sx={{
                  color: '#94a3b8',
                  fontSize: { xs: '1.02rem', md: '1.15rem' },
                  lineHeight: 1.7,
                  maxWidth: 540,
                }}
              >
                Nextera Technologies is a product engineering team for startups and growing businesses. Web platforms,
                SaaS, e-commerce and AI integrations—shipped to production with Next.js and Django.
              </Typography>

              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ pt: 0.5 }}>
                <ScrollLink to="contact" smooth offset={-88} duration={450}>
                  <StyledButton color="primary" size="large" variant="contained" endIcon={<ArrowForward />}>
                    Start your project
                  </StyledButton>
                </ScrollLink>
                <ScrollLink to="portfolio" smooth offset={-88} duration={450}>
                  <Box
                    component="span"
                    sx={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      px: 2.5,
                      py: '12px',
                      borderRadius: '999px',
                      border: '1px solid rgba(255, 255, 255, 0.2)',
                      color: '#fff',
                      fontWeight: 600,
                      fontSize: 15,
                      cursor: 'pointer',
                      transition: 'all 0.25s ease',
                      '&:hover': { bgcolor: 'rgba(255, 255, 255, 0.08)', borderColor: 'rgba(255, 255, 255, 0.35)' },
                    }}
                  >
                    View our work
                  </Box>
                </ScrollLink>
              </Stack>

              <Stack direction="row" spacing={2} alignItems="center" sx={{ pt: 1 }}>
                <AvatarGroup
                  max={4}
                  sx={{ '& .MuiAvatar-root': { width: 38, height: 38, border: '2px solid #0b1120' } }}
                >
                  {team.map((member) => (
                    <Avatar key={member.id} alt={member.name} src={member.photo as string} />
                  ))}
                </AvatarGroup>
                <Box sx={{ textAlign: 'left' }}>
                  <Typography sx={{ fontWeight: 700, color: '#fff', fontSize: '0.92rem' }}>
                    In-house team · 10+ products live
                  </Typography>
                  <Typography sx={{ color: '#64748b', fontSize: '0.8rem' }}>Next.js · Django · Cloud · AI</Typography>
                </Box>
              </Stack>
            </Stack>
          </Grid>

          <Grid item xs={12} md={6}>
            <Box sx={{ position: 'relative', mx: { xs: 0, sm: 3, md: 0 } }}>
              <Box
                sx={{
                  position: 'absolute',
                  inset: '-8%',
                  background: 'radial-gradient(circle at 50% 50%, rgba(20, 184, 166, 0.35), transparent 60%)',
                  filter: 'blur(30px)',
                  pointerEvents: 'none',
                }}
              />

              <Box
                sx={{
                  position: 'relative',
                  borderRadius: '18px',
                  overflow: 'hidden',
                  border: '1px solid rgba(255, 255, 255, 0.12)',
                  bgcolor: '#0f172a',
                  boxShadow: '0 40px 80px -20px rgba(0, 0, 0, 0.65)',
                  transform: { md: 'perspective(1600px) rotateY(-6deg) rotateX(2deg)' },
                }}
              >
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1,
                    px: 1.5,
                    py: 1,
                    bgcolor: '#111827',
                    borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
                  }}
                >
                  {['#f87171', '#fbbf24', '#34d399'].map((color) => (
                    <Box key={color} sx={{ width: 10, height: 10, borderRadius: '50%', bgcolor: color }} />
                  ))}
                  <Box
                    sx={{
                      flex: 1,
                      mx: 1,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: 0.75,
                      px: 1.5,
                      py: 0.4,
                      borderRadius: '8px',
                      bgcolor: 'rgba(255, 255, 255, 0.06)',
                      color: '#94a3b8',
                      fontSize: '0.75rem',
                      whiteSpace: 'nowrap',
                      overflow: 'hidden',
                    }}
                  >
                    <LockOutlined sx={{ fontSize: 12 }} />
                    {screens[active].url}
                  </Box>
                </Box>

                <Box sx={{ position: 'relative', aspectRatio: '16 / 10', bgcolor: '#fff' }}>
                  {screens.map((screen, index) => (
                    <Box
                      key={screen.src}
                      sx={{
                        position: 'absolute',
                        inset: 0,
                        opacity: index === active ? 1 : 0,
                        transition: 'opacity 0.8s ease',
                      }}
                    >
                      <Image
                        src={screen.src}
                        alt={screen.label}
                        layout="fill"
                        objectFit="cover"
                        objectPosition="center top"
                        sizes="(max-width: 900px) 100vw, 50vw"
                        priority={index === 0}
                      />
                    </Box>
                  ))}
                </Box>
              </Box>

              <FloatingCard
                icon={<RocketLaunchOutlined fontSize="small" />}
                title="10+ products"
                subtitle="shipped to production"
                sx={{ left: { sm: -12, md: -36 }, bottom: 36 }}
              />
              <FloatingCard
                icon={<AutoAwesomeOutlined fontSize="small" />}
                title="AI-ready"
                subtitle="OpenAI & Claude integrations"
                sx={{ right: { sm: -8, md: -20 }, top: -22 }}
                delay="1.5s"
              />

              <Stack direction="row" spacing={1.5} alignItems="center" justifyContent="center" sx={{ mt: 3.5, position: 'relative' }}>
                <Typography sx={{ color: '#64748b', fontSize: '0.8rem', mr: 1 }}>{screens[active].label}</Typography>
                {screens.map((screen, index) => (
                  <Box
                    key={screen.src}
                    component="button"
                    type="button"
                    aria-label={`Show ${screen.label}`}
                    onClick={() => setActive(index)}
                    sx={{
                      width: index === active ? 28 : 10,
                      height: 6,
                      p: 0,
                      border: 'none',
                      borderRadius: '999px',
                      cursor: 'pointer',
                      bgcolor: index === active ? '#2dd4bf' : 'rgba(255, 255, 255, 0.25)',
                      transition: 'all 0.3s ease',
                    }}
                  />
                ))}
              </Stack>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default HomeHero
