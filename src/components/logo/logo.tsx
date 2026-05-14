import React, { FC } from 'react'
import { Box, Typography } from '@mui/material'

interface Props {
  onClick?: () => void
  variant?: 'primary' | 'secondary'
}

const Logo: FC<Props> = ({ onClick, variant }) => {
  return (
    <Box onClick={onClick} sx={{ cursor: onClick ? 'pointer' : 'default' }}>
      <Typography
        variant="h5"
        component="div"
        sx={{
          fontWeight: 800,
          letterSpacing: -0.5,
          color: 'text.primary',
          '& .brand-accent': {
            fontWeight: 800,
            ...(variant === 'primary'
              ? {
                  background: (theme) =>
                    `linear-gradient(120deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }
              : { color: 'inherit' }),
          },
        }}
      >
        Nextera<span className="brand-accent"> Technologies</span>
      </Typography>
    </Box>
  )
}

Logo.defaultProps = {
  variant: 'primary',
}

export default Logo
