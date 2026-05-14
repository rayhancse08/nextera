import React, { FC } from 'react'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import CheckCircleOutline from '@mui/icons-material/CheckCircleOutline'
import EmailOutlined from '@mui/icons-material/EmailOutlined'
import PhoneOutlined from '@mui/icons-material/PhoneOutlined'
import LinkedIn from '@mui/icons-material/LinkedIn'
import PlaceOutlined from '@mui/icons-material/PlaceOutlined'
import ScheduleOutlined from '@mui/icons-material/ScheduleOutlined'
import { siteConfig } from '@/config/site'

const checklist = [
  'Problem you are solving and who it is for',
  'Rough timeline, budget band, or constraints (NDA, stack, compliance)',
  'Links to any existing product, designs, or APIs we should review',
]

const ContactCta: FC = () => {
  const mailto = `mailto:${siteConfig.contactEmail}?subject=${encodeURIComponent(
    'Project inquiry — Nextera Technologies'
  )}&body=${encodeURIComponent(
    'Hi Nextera,\n\nI would like to discuss:\n\n- Goal:\n- Timeline:\n- Best time to connect:\n\nThanks,\n'
  )}`

  return (
    <Box
      id="contact"
      component="section"
      sx={{
        py: { xs: 8, md: 10 },
        scrollMarginTop: '80px',
        background: 'linear-gradient(135deg, rgba(13, 148, 136, 0.08) 0%, rgba(59, 130, 246, 0.08) 100%)',
        borderTop: '1px solid',
        borderColor: 'rgba(15, 23, 42, 0.06)',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="stretch">
          <Grid item xs={12} md={7}>
            <Stack spacing={2.5}>
              <Typography variant="overline" sx={{ color: 'primary.main', fontWeight: 800, letterSpacing: 2, fontSize: '0.7rem' }}>
                Start a conversation
              </Typography>
              <Typography variant="h2" sx={{ fontWeight: 800, letterSpacing: -0.5, fontSize: { xs: '1.75rem', md: '2.25rem' } }}>
                Tell us about your build
              </Typography>
              <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.7, maxWidth: 560 }}>
                Share a short brief and we will follow up with questions, a suggested approach, and next steps. No
                obligation—just a clear path forward if we are a fit.
              </Typography>

              <Box
                sx={{
                  p: 2.5,
                  borderRadius: 2,
                  bgcolor: 'background.paper',
                  border: '1px solid',
                  borderColor: 'rgba(15, 23, 42, 0.08)',
                  boxShadow: '0 8px 24px -12px rgba(15, 23, 42, 0.1)',
                }}
              >
                <Typography variant="overline" sx={{ fontWeight: 800, letterSpacing: 1.5, color: 'text.secondary' }}>
                  Contact details
                </Typography>
                <Stack spacing={2} sx={{ mt: 1.5 }}>
                  <Stack direction="row" spacing={2} alignItems="flex-start">
                    <EmailOutlined color="primary" sx={{ mt: 0.25 }} />
                    <Box>
                      <Typography variant="caption" color="text.secondary" display="block">
                        Email
                      </Typography>
                      <Typography
                        component="a"
                        href={mailto}
                        variant="body1"
                        sx={{ fontWeight: 600, color: 'primary.dark', textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}
                      >
                        {siteConfig.contactEmail}
                      </Typography>
                    </Box>
                  </Stack>
                  <Stack direction="row" spacing={2} alignItems="flex-start">
                    <PhoneOutlined color="primary" sx={{ mt: 0.25 }} />
                    <Box>
                      <Typography variant="caption" color="text.secondary" display="block">
                        Phone
                      </Typography>
                      <Typography
                        component="a"
                        href={`tel:${siteConfig.contactPhoneTel}`}
                        variant="body1"
                        sx={{ fontWeight: 600, color: 'primary.dark', textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}
                      >
                        {siteConfig.contactPhone}
                      </Typography>
                    </Box>
                  </Stack>
                  <Stack direction="row" spacing={2} alignItems="flex-start">
                    <LinkedIn color="primary" sx={{ mt: 0.25 }} />
                    <Box>
                      <Typography variant="caption" color="text.secondary" display="block">
                        LinkedIn
                      </Typography>
                      <Typography
                        component="a"
                        href={siteConfig.linkedInUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        variant="body1"
                        sx={{ fontWeight: 600, color: 'primary.dark', textDecoration: 'none', wordBreak: 'break-all', '&:hover': { textDecoration: 'underline' } }}
                      >
                        {siteConfig.linkedInUrl}
                      </Typography>
                    </Box>
                  </Stack>
                </Stack>
              </Box>

              <Stack spacing={1} sx={{ pt: 1 }}>
                <Stack direction="row" flexWrap="wrap" gap={2} sx={{ alignItems: 'center' }}>
                <Button
                  component="a"
                  href={mailto}
                  variant="contained"
                  color="primary"
                  size="large"
                  startIcon={<EmailOutlined />}
                  sx={{ fontWeight: 700, textTransform: 'none', px: 3 }}
                >
                  Email us
                </Button>
                {siteConfig.calendlyUrl ? (
                  <Button
                    component="a"
                    href={siteConfig.calendlyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="outlined"
                    color="inherit"
                    size="large"
                    sx={{ fontWeight: 700, textTransform: 'none', borderColor: 'rgba(15,23,42,0.2)', color: 'text.primary' }}
                  >
                    Schedule a call
                  </Button>
                ) : null}
                {siteConfig.linkedInUrl ? (
                  <Button
                    component="a"
                    href={siteConfig.linkedInUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="outlined"
                    color="primary"
                    size="large"
                    startIcon={<LinkedIn />}
                    sx={{ fontWeight: 700, textTransform: 'none' }}
                  >
                    LinkedIn
                  </Button>
                ) : null}
                <Button
                  component="a"
                  href={`tel:${siteConfig.contactPhoneTel}`}
                  variant="outlined"
                  color="inherit"
                  size="large"
                  startIcon={<PhoneOutlined />}
                  sx={{ fontWeight: 700, textTransform: 'none', borderColor: 'rgba(15,23,42,0.2)', color: 'text.primary' }}
                >
                  Call {siteConfig.contactPhone}
                </Button>
                </Stack>
              </Stack>

              <Stack spacing={1.5} sx={{ pt: 2 }}>
                <Stack direction="row" spacing={1.5} alignItems="flex-start">
                  <ScheduleOutlined color="action" sx={{ mt: 0.25 }} />
                  <Typography variant="body2" color="text.secondary">
                    {siteConfig.responseTime}
                  </Typography>
                </Stack>
                <Stack direction="row" spacing={1.5} alignItems="flex-start">
                  <PlaceOutlined color="action" sx={{ mt: 0.25 }} />
                  <Typography variant="body2" color="text.secondary">
                    {siteConfig.location}
                  </Typography>
                </Stack>
              </Stack>
            </Stack>
          </Grid>

          <Grid item xs={12} md={5}>
            <Box
              sx={{
                height: '100%',
                p: 3,
                borderRadius: 3,
                bgcolor: 'background.paper',
                border: '1px solid',
                borderColor: 'rgba(15, 23, 42, 0.08)',
                boxShadow: '0 16px 40px -20px rgba(15, 23, 42, 0.15)',
              }}
            >
              <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 1.5 }}>
                Include in your first message
              </Typography>
              <List dense disablePadding>
                {checklist.map((text) => (
                  <ListItem key={text} disableGutters sx={{ alignItems: 'flex-start', py: 0.75 }}>
                    <ListItemIcon sx={{ minWidth: 36, mt: 0.25 }}>
                      <CheckCircleOutline color="primary" fontSize="small" />
                    </ListItemIcon>
                    <ListItemText primary={text} primaryTypographyProps={{ variant: 'body2', color: 'text.secondary' }} />
                  </ListItem>
                ))}
              </List>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default ContactCta
