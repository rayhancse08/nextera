import React, { FC } from 'react'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'
import Chip from '@mui/material/Chip'
import RocketLaunchOutlined from '@mui/icons-material/RocketLaunchOutlined'
import GroupsOutlined from '@mui/icons-material/GroupsOutlined'
import PublicOutlined from '@mui/icons-material/PublicOutlined'
import CodeOutlined from '@mui/icons-material/CodeOutlined'

const highlights = [
  {
    icon: RocketLaunchOutlined,
    stat: '10+',
    label: 'Live products shipped',
    detail: 'From visa platforms to e-commerce and inventory systems',
  },
  {
    icon: CodeOutlined,
    stat: 'Full-stack',
    label: 'Next.js & Django',
    detail: 'Modern frontends with robust, API-first backends',
  },
  {
    icon: GroupsOutlined,
    stat: '4',
    label: 'Dedicated engineers',
    detail: 'Leadership, PM, and hands-on developers on every build',
  },
  {
    icon: PublicOutlined,
    stat: 'US & global',
    label: 'Client reach',
    detail: 'Products serving users across the United States and beyond',
  },
]

const industries = ['Legal & immigration tech', 'E-commerce', 'Social platforms', 'Operations & inventory', 'Travel & tourism']

const AboutCompany: FC = () => {
  return (
    <Box
      id="about"
      component="section"
      sx={{
        scrollMarginTop: '80px',
        py: { xs: 8, md: 10 },
        background: 'linear-gradient(180deg, #ffffff 0%, #f0f4f8 100%)',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={{ xs: 4, md: 6 }} alignItems="center">
          <Grid item xs={12} md={6}>
            <Stack spacing={2.5}>
              <Typography variant="overline" sx={{ color: 'primary.main', fontWeight: 800, letterSpacing: 2, fontSize: '0.7rem' }}>
                About Nextera
              </Typography>
              <Typography variant="h2" sx={{ fontWeight: 800, letterSpacing: -0.5, fontSize: { xs: '1.75rem', md: '2.35rem' }, lineHeight: 1.2 }}>
                A software partner for products that need to{' '}
                <Box component="span" sx={{ color: 'primary.main' }}>
                  scale and ship
                </Box>
              </Typography>
              <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.75, fontSize: '1.05rem' }}>
                Founded in 2024, Nextera Technologies builds custom web applications, APIs, and AI-enabled workflows for
                startups and growing businesses. We combine Next.js and Django with cloud deployment, payments, and
                third-party integrations—so you launch faster with code you can maintain.
              </Typography>
              <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.75 }}>
                Whether you need a greenfield MVP, a legacy rebuild, or ongoing product development, we align engineering
                with your roadmap and communicate in plain language—not jargon.
              </Typography>
              <Stack direction="row" flexWrap="wrap" gap={1}>
                {industries.map((label) => (
                  <Chip
                    key={label}
                    label={label}
                    size="small"
                    sx={{
                      fontWeight: 600,
                      bgcolor: 'background.paper',
                      border: '1px solid',
                      borderColor: 'rgba(13, 148, 136, 0.2)',
                      color: 'primary.dark',
                    }}
                  />
                ))}
              </Stack>
            </Stack>
          </Grid>

          <Grid item xs={12} md={6}>
            <Grid container spacing={2}>
              {highlights.map(({ icon: Icon, stat, label, detail }) => (
                <Grid item xs={12} sm={6} key={label}>
                  <Stack
                    spacing={1}
                    sx={{
                      height: '100%',
                      p: 2.5,
                      borderRadius: 2,
                      bgcolor: 'background.paper',
                      border: '1px solid',
                      borderColor: 'rgba(15, 23, 42, 0.08)',
                      boxShadow: '0 8px 24px -12px rgba(15, 23, 42, 0.12)',
                      transition: (t) => t.transitions.create(['transform', 'box-shadow']),
                      '&:hover': {
                        transform: 'translateY(-3px)',
                        boxShadow: '0 16px 32px -12px rgba(15, 23, 42, 0.15)',
                      },
                    }}
                  >
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                      <Box
                        sx={{
                          width: 40,
                          height: 40,
                          borderRadius: 1.5,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          bgcolor: 'rgba(13, 148, 136, 0.1)',
                          color: 'primary.dark',
                        }}
                      >
                        <Icon fontSize="small" />
                      </Box>
                      <Typography sx={{ fontWeight: 800, fontSize: '1.5rem', color: 'primary.dark', lineHeight: 1 }}>
                        {stat}
                      </Typography>
                    </Box>
                    <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
                      {label}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.55 }}>
                      {detail}
                    </Typography>
                  </Stack>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default AboutCompany
