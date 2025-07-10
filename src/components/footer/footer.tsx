import React, { FC } from 'react'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import { FooterNavigation, FooterSocialLinks } from '@/components/footer'

const Footer: FC = () => {
  return (
      <Box
          component="footer"
          sx={{
            backgroundColor: 'primary.main',
            color: 'primary.contrastText',
            pt: { xs: 6, md: 10 },
            pb: 4,
            width: '100%',
          }}
      >
        <Container maxWidth="xl">
          <Grid container spacing={4}>
            <Grid item xs={12}>
              <Box sx={{ maxWidth: 1420, mb: 3 }}>
                <Typography component="h1" variant="h3" sx={{ mb: 2 }}>
                  Nextera Technologies
                </Typography>
                <Typography
                    variant="subtitle1"
                    sx={{ letterSpacing: 0.5, fontSize: { xs: '1rem', md: '1.125rem' } }}
                >
                  Nextera Technologies is a forward-thinking software company established in 2024. We specialize in delivering modern, scalable, and high-performance digital solutions for businesses of all sizes. From full-stack web development using Next.js and Django to mobile apps, cloud integration, and AI-powered tools, Nextera combines cutting-edge technologies with industry best practices to drive real results. Our mission is to empower organizations through clean code, intuitive design, and smart automation.
                </Typography>
              </Box>
            </Grid>

            {/* Optional navigation and social links */}
            {/* <Grid item xs={12} md={7}>
            <FooterNavigation />
          </Grid>
          <Grid item xs={12}>
            <FooterSocialLinks />
          </Grid> */}

            <Grid item xs={12}>
              <Typography
                  variant="body2"
                  align="center"
                  sx={{ mt: 4, fontSize: '0.875rem', opacity: 0.8 }}
              >
                © {new Date().getFullYear()} Nextera Technologies. All rights reserved.
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>
  )
}

export default Footer
