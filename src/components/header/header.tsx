import React, { FC, useEffect, useState } from 'react'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import IconButton from '@mui/material/IconButton'
import { Menu, Close } from '@mui/icons-material'
import ArrowForward from '@mui/icons-material/ArrowForward'
import { Link as ScrollLink } from 'react-scroll'
import { Logo } from '@/components/logo'
import { Navigation } from '@/components/navigation'
import { StyledButton } from '@/components/styled-button'

const Header: FC = () => {
  const [visibleMenu, setVisibleMenu] = useState<boolean>(false)
  const [scrolled, setScrolled] = useState<boolean>(false)

  useEffect(() => {
    const onScroll = (): void => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = visibleMenu ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [visibleMenu])

  return (
    <Box
      component="header"
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: (theme) => theme.zIndex.appBar,
        pt: scrolled ? 1 : { xs: 1.5, md: 2.5 },
        transition: 'padding-top 0.3s ease',
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            position: 'relative',
            isolation: 'isolate',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 2,
            pl: { xs: 2, md: 3 },
            pr: { xs: 1, md: 1.25 },
            py: { xs: 0.75, md: 1 },
            borderRadius: '999px',
            // Blur lives on a pseudo-element: backdrop-filter on the parent would trap fixed-position children
            '&::before': {
              content: '""',
              position: 'absolute',
              inset: 0,
              zIndex: -1,
              borderRadius: 'inherit',
              bgcolor: scrolled ? 'rgba(255, 255, 255, 0.9)' : 'rgba(255, 255, 255, 0.82)',
              backdropFilter: 'blur(16px) saturate(160%)',
              WebkitBackdropFilter: 'blur(16px) saturate(160%)',
              border: '1px solid rgba(255, 255, 255, 0.7)',
              boxShadow: scrolled
                ? '0 12px 32px -12px rgba(15, 23, 42, 0.25)'
                : '0 8px 24px -16px rgba(15, 23, 42, 0.45)',
              transition: 'all 0.3s ease',
            },
          }}
        >
          <Logo />
          <Box sx={{ display: { xs: 'none', md: 'block' } }}>
            <Navigation />
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Box sx={{ display: { xs: 'none', lg: 'block' } }}>
              <ScrollLink to="contact" smooth offset={-88} duration={450}>
                <StyledButton color="primary" variant="contained" size="medium" endIcon={<ArrowForward />}>
                  Start a project
                </StyledButton>
              </ScrollLink>
            </Box>
            <IconButton
              sx={{ display: { xs: 'inline-flex', md: 'none' } }}
              onClick={() => setVisibleMenu(true)}
              aria-label="Open menu"
            >
              <Menu />
            </IconButton>
          </Box>
        </Box>
      </Container>

      {/* Mobile menu: any link click bubbles up here and closes it */}
      <Box
        onClick={() => setVisibleMenu(false)}
        sx={{
          display: { xs: 'flex', md: 'none' },
          position: 'fixed',
          inset: 0,
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 3,
          bgcolor: 'background.paper',
          transform: visibleMenu ? 'translateY(0)' : 'translateY(-100%)',
          visibility: visibleMenu ? 'visible' : 'hidden',
          transition: 'transform 0.35s ease, visibility 0.35s',
          zIndex: 1,
        }}
      >
        <IconButton sx={{ position: 'absolute', top: 16, right: 16 }} aria-label="Close menu">
          <Close />
        </IconButton>
        <Navigation />
        <ScrollLink to="contact" smooth offset={-88} duration={450}>
          <StyledButton color="primary" variant="contained" size="large" endIcon={<ArrowForward />}>
            Start a project
          </StyledButton>
        </ScrollLink>
      </Box>
    </Box>
  )
}

export default Header
