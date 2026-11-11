import React, { FC } from 'react'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import { SvgIconComponent } from '@mui/icons-material'
import LanguageOutlined from '@mui/icons-material/LanguageOutlined'
import AutoAwesomeOutlined from '@mui/icons-material/AutoAwesomeOutlined'
import LayersOutlined from '@mui/icons-material/LayersOutlined'
import ShoppingBagOutlined from '@mui/icons-material/ShoppingBagOutlined'
import PhoneIphoneOutlined from '@mui/icons-material/PhoneIphoneOutlined'
import CloudOutlined from '@mui/icons-material/CloudOutlined'
import SupportAgentOutlined from '@mui/icons-material/SupportAgentOutlined'
import ArrowForward from '@mui/icons-material/ArrowForward'
import { Link as ScrollLink } from 'react-scroll'
import Reveal from '@/components/common/reveal'
import SectionHeading, { GradientText } from '@/components/common/section-heading'

interface Service {
  icon: SvgIconComponent
  title: string
  description: string
  tags: string[]
  md: number
  dark?: boolean
}

const services: Service[] = [
  {
    icon: LanguageOutlined,
    title: 'Custom web applications',
    description:
      'Fast, SEO-friendly products with Next.js frontends and secure Django APIs—dashboards, client portals and admin panels included.',
    tags: ['Next.js', 'Django', 'PostgreSQL'],
    md: 7,
  },
  {
    icon: AutoAwesomeOutlined,
    title: 'AI & automation',
    description: 'Chat assistants, document processing and workflow automation powered by OpenAI and Claude.',
    tags: ['OpenAI', 'Claude', 'Python'],
    md: 5,
    dark: true,
  },
  {
    icon: LayersOutlined,
    title: 'SaaS product development',
    description:
      'Multi-tenant platforms with roles, subscriptions and white-label setups—like our clinic, school and storefront products.',
    tags: ['Multi-tenant', 'RBAC', 'Billing'],
    md: 4,
  },
  {
    icon: ShoppingBagOutlined,
    title: 'E-commerce platforms',
    description:
      'Storefronts with catalogs, carts, Stripe or cash-on-delivery checkout, plus inventory and order management.',
    tags: ['Stripe', 'COD', 'Inventory'],
    md: 4,
  },
  {
    icon: PhoneIphoneOutlined,
    title: 'Mobile apps',
    description: 'Cross-platform iOS and Android apps with Flutter or React Native, powered by the same APIs as your web product.',
    tags: ['Flutter', 'React Native', 'REST'],
    md: 4,
  },
  {
    icon: CloudOutlined,
    title: 'Cloud & DevOps',
    description: 'Docker, Nginx and CI/CD pipelines on AWS, GCP or Azure—with staging, monitoring and backups.',
    tags: ['Docker', 'CI/CD', 'AWS'],
    md: 5,
  },
  {
    icon: SupportAgentOutlined,
    title: 'Maintenance & scaling',
    description:
      'We stay on after launch: bug fixes, performance tuning, new features and monthly retainers as your product grows.',
    tags: ['Retainers', 'Monitoring', 'Feature work'],
    md: 7,
  },
]

const ServiceCard: FC<{ service: Service; index: number }> = ({ service, index }) => {
  const { icon: Icon, title, description, tags, dark } = service

  return (
    <Box
      sx={{
        position: 'relative',
        overflow: 'hidden',
        height: '100%',
        p: { xs: 3, md: 3.5 },
        borderRadius: '24px',
        border: '1px solid',
        borderColor: dark ? 'rgba(255, 255, 255, 0.08)' : 'rgba(15, 23, 42, 0.07)',
        background: dark ? 'linear-gradient(140deg, #0f172a 0%, #134e4a 100%)' : '#fff',
        color: dark ? '#e2e8f0' : 'text.primary',
        boxShadow: '0 1px 2px rgba(15, 23, 42, 0.04)',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease',
        '&:hover': {
          transform: 'translateY(-4px)',
          borderColor: 'rgba(13, 148, 136, 0.4)',
          boxShadow: '0 24px 48px -20px rgba(15, 23, 42, 0.25)',
        },
      }}
    >
      <Typography
        aria-hidden
        sx={{
          position: 'absolute',
          top: 16,
          right: 24,
          fontSize: '3.25rem',
          fontWeight: 800,
          lineHeight: 1,
          color: dark ? 'rgba(255, 255, 255, 0.06)' : 'rgba(15, 23, 42, 0.05)',
        }}
      >
        {String(index + 1).padStart(2, '0')}
      </Typography>

      <Box
        sx={{
          width: 52,
          height: 52,
          borderRadius: '16px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#fff',
          background: 'linear-gradient(135deg, #14b8a6 0%, #3b82f6 100%)',
          boxShadow: '0 10px 24px -8px rgba(20, 184, 166, 0.6)',
          mb: 3,
        }}
      >
        <Icon />
      </Box>

      <Typography component="h3" sx={{ fontWeight: 800, fontSize: '1.25rem', mb: 1, color: dark ? '#fff' : 'text.primary' }}>
        {title}
      </Typography>
      <Typography sx={{ color: dark ? '#94a3b8' : 'text.secondary', lineHeight: 1.7, mb: 2.5, maxWidth: 520 }}>
        {description}
      </Typography>

      <Stack direction="row" flexWrap="wrap" gap={1}>
        {tags.map((tag) => (
          <Box
            key={tag}
            sx={{
              px: 1.25,
              py: 0.4,
              borderRadius: '999px',
              fontSize: '0.75rem',
              fontWeight: 600,
              color: dark ? '#5eead4' : 'primary.dark',
              bgcolor: dark ? 'rgba(45, 212, 191, 0.1)' : 'rgba(13, 148, 136, 0.07)',
            }}
          >
            {tag}
          </Box>
        ))}
      </Stack>
    </Box>
  )
}

const HomeServices: FC = () => {
  return (
    <Box
      id="services"
      component="section"
      sx={{ scrollMarginTop: '88px', py: { xs: 10, md: 14 }, bgcolor: '#f8fafc' }}
    >
      <Container maxWidth="lg">
        <Stack
          direction={{ xs: 'column', md: 'row' }}
          alignItems={{ xs: 'center', md: 'flex-end' }}
          justifyContent="space-between"
          spacing={3}
          sx={{ mb: { xs: 5, md: 7 } }}
        >
          <Reveal>
            <SectionHeading
              eyebrow="What we do"
              title={
                <>
                  Everything you need to <GradientText>launch and grow</GradientText>
                </>
              }
              description="One team for design, engineering and deployment—so you get a working product, not a pile of handoffs."
            />
          </Reveal>
          <ScrollLink to="contact" smooth offset={-88} duration={450}>
            <Box
              component="span"
              sx={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 1,
                fontWeight: 700,
                color: 'primary.dark',
                cursor: 'pointer',
                whiteSpace: 'nowrap',
                '& svg': { transition: 'transform 0.2s ease' },
                '&:hover svg': { transform: 'translateX(4px)' },
              }}
            >
              Discuss your idea <ArrowForward fontSize="small" />
            </Box>
          </ScrollLink>
        </Stack>

        <Grid container spacing={3}>
          {services.map((service, index) => (
            <Grid item xs={12} sm={6} md={service.md} key={service.title}>
              <Reveal delay={(index % 3) * 100} sx={{ height: '100%' }}>
                <ServiceCard service={service} index={index} />
              </Reveal>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  )
}

export default HomeServices
