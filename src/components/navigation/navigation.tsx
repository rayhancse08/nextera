import React, { FC } from 'react'
import Box from '@mui/material/Box'
import { Link as ScrollLink } from 'react-scroll'
import { navigations } from './navigation.data'

const Navigation: FC = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, alignItems: { xs: 'stretch', md: 'center' } }}>
      {navigations.map(({ path: destination, label }) => (
        <Box
          component={ScrollLink}
          key={destination}
          activeClass="current"
          to={destination}
          spy
          smooth
          duration={350}
          offset={-72}
          sx={{
            position: 'relative',
            color: 'text.secondary',
            cursor: 'pointer',
            fontWeight: 600,
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            px: { xs: 0, md: 2.5 },
            py: { xs: 0, md: 0.5 },
            mb: { xs: 3, md: 0 },
            fontSize: { xs: '1.1rem', md: '0.95rem' },
            letterSpacing: 0.2,
            transition: (theme) => theme.transitions.create(['color']),
            '&::after': {
              content: '""',
              position: 'absolute',
              left: { xs: '50%', md: 12 },
              transform: { xs: 'translateX(-50%)', md: 'none' },
              bottom: { xs: -8, md: -4 },
              width: { xs: 32, md: 'calc(100% - 24px)' },
              height: 3,
              borderRadius: 2,
              bgcolor: 'primary.main',
              opacity: 0,
              transition: (theme) => theme.transitions.create(['opacity']),
            },
            '&.current': {
              color: 'primary.dark',
              '&::after': { opacity: 1 },
            },
            '&:hover': {
              color: 'primary.main',
            },
          }}
        >
          {label}
        </Box>
      ))}
    </Box>
  )
}

export default Navigation
