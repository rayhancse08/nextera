import React, { FC } from 'react'
import Box from '@mui/material/Box'
import { Link as ScrollLink } from 'react-scroll'
import { navigations } from './navigation.data'

const Navigation: FC = () => {
  return (
    <Box
      component="nav"
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        alignItems: 'center',
        gap: { xs: 1, md: 0.25 },
      }}
    >
      {navigations.map(({ path: destination, label }) => (
        <Box
          component={ScrollLink}
          key={destination}
          activeClass="current"
          to={destination}
          spy
          smooth
          duration={450}
          offset={-88}
          sx={{
            color: 'text.secondary',
            cursor: 'pointer',
            fontWeight: 600,
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            px: { xs: 3, md: 1.5, lg: 2 },
            py: { xs: 1, md: 0.75 },
            borderRadius: '999px',
            fontSize: { xs: '1.35rem', md: '0.9rem' },
            whiteSpace: 'nowrap',
            transition: 'color 0.2s ease, background-color 0.2s ease',
            '&.current': {
              color: 'primary.dark',
              bgcolor: 'rgba(13, 148, 136, 0.1)',
            },
            '&:hover': {
              color: 'text.primary',
              bgcolor: 'rgba(15, 23, 42, 0.05)',
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
