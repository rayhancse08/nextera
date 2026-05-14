import React, { FC } from 'react'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'
import VerifiedUserOutlined from '@mui/icons-material/VerifiedUserOutlined'
import SpeedOutlined from '@mui/icons-material/SpeedOutlined'
import LockOutlined from '@mui/icons-material/LockOutlined'
import SupportAgentOutlined from '@mui/icons-material/SupportAgentOutlined'

const trustItems = [
  {
    title: 'Production-grade engineering',
    body: 'Clear architecture, automated testing where it matters, and documentation so your team can own the system long-term.',
    Icon: VerifiedUserOutlined,
  },
  {
    title: 'Predictable delivery',
    body: 'Milestones, demos, and written scope so stakeholders always know what is shipping next—and when.',
    Icon: SpeedOutlined,
  },
  {
    title: 'Security & confidentiality',
    body: 'NDAs on request, least-privilege access, and careful handling of data and third-party integrations.',
    Icon: LockOutlined,
  },
  {
    title: 'After launch support',
    body: 'We offer stabilization windows, retainers, and handover so releases are not the end of the relationship.',
    Icon: SupportAgentOutlined,
  },
]

const processSteps = [
  {
    step: '01',
    title: 'Discovery & scope',
    body: 'We clarify goals, users, constraints, and success metrics—then agree on a phased plan and estimate.',
  },
  {
    step: '02',
    title: 'Design & build',
    body: 'Iterative implementation with regular reviews, so feedback lands while changes are still inexpensive.',
  },
  {
    step: '03',
    title: 'QA & hardening',
    body: 'Performance checks, edge cases, and deployment readiness—including staging and rollback strategy.',
  },
  {
    step: '04',
    title: 'Launch & iterate',
    body: 'Go-live support, monitoring, and a backlog for improvements as real users hit the product.',
  },
]

const TrustAndProcess: FC = () => {
  return (
    <Box
      id="why-us"
      component="section"
      sx={{
        scrollMarginTop: '80px',
        py: { xs: 8, md: 10 },
        bgcolor: 'background.paper',
        borderTop: '1px solid',
        borderBottom: '1px solid',
        borderColor: 'rgba(15, 23, 42, 0.06)',
      }}
    >
      <Container maxWidth="lg">
        <Stack spacing={1} sx={{ mb: 5, textAlign: { xs: 'center', md: 'left' } }}>
          <Typography variant="overline" sx={{ color: 'primary.main', fontWeight: 800, letterSpacing: 2, fontSize: '0.7rem' }}>
            For decision-makers
          </Typography>
          <Typography variant="h2" sx={{ fontWeight: 800, letterSpacing: -0.5, fontSize: { xs: '1.75rem', md: '2.25rem' } }}>
            Why teams work with Nextera
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 640 }}>
            You get a partner who cares about outcomes—not just tickets closed. Here is how we reduce risk on custom
            software projects.
          </Typography>
        </Stack>

        <Grid container spacing={3}>
          {trustItems.map(({ title, body, Icon }) => (
            <Grid item xs={12} sm={6} md={3} key={title}>
              <Stack
                spacing={1.5}
                sx={{
                  height: '100%',
                  p: 2.5,
                  borderRadius: 2,
                  border: '1px solid',
                  borderColor: 'rgba(15, 23, 42, 0.08)',
                  bgcolor: '#fafbfc',
                  transition: (t) => t.transitions.create(['border-color', 'box-shadow']),
                  '&:hover': {
                    borderColor: 'rgba(13, 148, 136, 0.35)',
                    boxShadow: '0 12px 28px -12px rgba(15, 23, 42, 0.12)',
                  },
                }}
              >
                <Box
                  sx={{
                    width: 44,
                    height: 44,
                    borderRadius: 2,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    bgcolor: 'rgba(13, 148, 136, 0.12)',
                    color: 'primary.dark',
                  }}
                >
                  <Icon sx={{ fontSize: 26 }} />
                </Box>
                <Typography variant="h6" sx={{ fontWeight: 700, fontSize: '1.05rem' }}>
                  {title}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.65 }}>
                  {body}
                </Typography>
              </Stack>
            </Grid>
          ))}
        </Grid>

        <Box id="process" sx={{ pt: { xs: 8, md: 10 }, scrollMarginTop: '80px' }}>
          <Stack spacing={1} sx={{ mb: 4, textAlign: { xs: 'center', md: 'left' } }}>
            <Typography variant="overline" sx={{ color: 'secondary.main', fontWeight: 800, letterSpacing: 2, fontSize: '0.7rem' }}>
              Engagement model
            </Typography>
            <Typography variant="h2" sx={{ fontWeight: 800, letterSpacing: -0.5, fontSize: { xs: '1.6rem', md: '2rem' } }}>
              How we work with you
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 640 }}>
              Fixed-scope builds, phased roadmaps, or ongoing product development—we align contracts to your risk and
              funding rhythm.
            </Typography>
          </Stack>

          <Grid container spacing={3}>
            {processSteps.map(({ step, title, body }) => (
              <Grid item xs={12} sm={6} md={3} key={step}>
                <Stack spacing={1}>
                  <Typography
                    variant="overline"
                    sx={{ fontWeight: 800, color: 'primary.main', letterSpacing: 1.5, fontSize: '0.75rem' }}
                  >
                    {step}
                  </Typography>
                  <Typography variant="h6" sx={{ fontWeight: 700, fontSize: '1.05rem' }}>
                    {title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.65 }}>
                    {body}
                  </Typography>
                </Stack>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  )
}

export default TrustAndProcess
