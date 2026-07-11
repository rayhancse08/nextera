import React, { FC } from 'react'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'
import { Link as ScrollLink } from 'react-scroll'
import { StyledButton } from '@/components/styled-button'

const MidCta: FC = () => {
  return (
    <Box
      component="section"
      sx={{
        py: { xs: 6, md: 8 },
        background: 'linear-gradient(120deg, rgba(13, 148, 136, 0.12) 0%, rgba(59, 130, 246, 0.1) 100%)',
        borderTop: '1px solid',
        borderBottom: '1px solid',
        borderColor: 'rgba(15, 23, 42, 0.06)',
      }}
    >
      <Container maxWidth="lg">
        <Stack
          direction={{ xs: 'column', md: 'row' }}
          spacing={3}
          alignItems={{ xs: 'center', md: 'center' }}
          justifyContent="space-between"
          sx={{ textAlign: { xs: 'center', md: 'left' } }}
        >
          <Box sx={{ maxWidth: 560 }}>
            <Typography variant="h2" sx={{ fontWeight: 800, letterSpacing: -0.5, fontSize: { xs: '1.5rem', md: '1.85rem' }, mb: 1 }}>
              Have a product idea or need a reliable dev team?
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.65 }}>
              Tell us your goals—we will respond with a practical plan, timeline estimate, and how Nextera can help you
              ship.
            </Typography>
          </Box>
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ flexShrink: 0 }}>
            <ScrollLink to="contact" spy smooth offset={-72} duration={400}>
              <StyledButton color="primary" size="large" variant="contained">
                Start a project
              </StyledButton>
            </ScrollLink>
            <ScrollLink to="portfolio" spy smooth offset={-72} duration={400}>
              <StyledButton color="dark" size="large" variant="outlined">
                See our work
              </StyledButton>
            </ScrollLink>
          </Stack>
        </Stack>
      </Container>
    </Box>
  )
}

export default MidCta
