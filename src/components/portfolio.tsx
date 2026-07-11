import React from 'react'
import Image from 'next/image'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Chip from '@mui/material/Chip'
import Stack from '@mui/material/Stack'
import OpenInNewOutlined from '@mui/icons-material/OpenInNewOutlined'

export interface PortfolioItem {
  id: number
  image: string
  title: string
  category?: string
  tagline?: string
  description: string
  stack: string[]
  link: string
  adminLink?: string
  featured?: boolean
  isDemo?: boolean
}

interface Props {
  item: PortfolioItem
  variant?: 'default' | 'featured'
}

const PortfolioCardItem = ({ item, variant = 'default' }: Props): JSX.Element => {
  const isFeatured = variant === 'featured' || item.featured

  return (
    <Box
      component="article"
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        borderRadius: 3,
        overflow: 'hidden',
        bgcolor: 'background.paper',
        border: '1px solid',
        borderColor: 'rgba(15, 23, 42, 0.08)',
        boxShadow: '0 4px 24px -8px rgba(15, 23, 42, 0.1)',
        transition: (t) => t.transitions.create(['box-shadow', 'transform', 'border-color'], { duration: 280 }),
          '&:hover': {
          transform: 'translateY(-6px)',
          boxShadow: '0 28px 56px -16px rgba(15, 23, 42, 0.22)',
          borderColor: 'rgba(13, 148, 136, 0.4)',
          '& .portfolio-image': { transform: 'scale(1.02)' },
          '& .portfolio-overlay': { opacity: 1 },
          '& .portfolio-cta': { opacity: 1, transform: 'translate(-50%, -50%)' },
        },
      }}
    >
      {/* Image showcase — aspect-ratio keeps screenshots fully visible across breakpoints */}
      <Box
        component="a"
        href={item.link}
        target="_blank"
        rel="noopener noreferrer"
        sx={{
          position: 'relative',
          display: 'block',
          width: '100%',
          aspectRatio: isFeatured ? '16 / 10' : '16 / 11',
          minHeight: isFeatured ? { xs: 200, md: 240 } : { xs: 176, md: 208 },
          overflow: 'hidden',
          flexShrink: 0,
          textDecoration: 'none',
          bgcolor: '#f1f5f9',
          borderBottom: '1px solid',
          borderColor: 'rgba(15, 23, 42, 0.06)',
        }}
      >
        <Box
          className="portfolio-image"
          sx={{
            position: 'absolute',
            inset: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: (t) => t.transitions.create('transform', { duration: 500 }),
          }}
        >
          <Image
            src={item.image}
            alt={item.title}
            layout="fill"
            objectFit="contain"
            objectPosition="center top"
            sizes="(max-width: 600px) 100vw, (max-width: 960px) 50vw, 33vw"
          />
        </Box>

        {/* Bottom gradient for title legibility */}
        <Box
          sx={{
            position: 'absolute',
            left: 0,
            right: 0,
            bottom: 0,
            height: '55%',
            background: 'linear-gradient(to top, rgba(15,23,42,0.88) 0%, rgba(15,23,42,0.35) 55%, transparent 100%)',
            pointerEvents: 'none',
          }}
        />
        <Box
          className="portfolio-overlay"
          sx={{
            position: 'absolute',
            inset: 0,
            bgcolor: 'rgba(13, 148, 136, 0.35)',
            opacity: 0,
            transition: (t) => t.transitions.create('opacity', { duration: 280 }),
            pointerEvents: 'none',
          }}
        />

        {item.category ? (
          <Chip
            label={item.category}
            size="small"
            sx={{
              position: 'absolute',
              top: 14,
              left: 14,
              fontWeight: 700,
              fontSize: '0.7rem',
              bgcolor: 'rgba(255,255,255,0.95)',
              color: 'primary.dark',
              backdropFilter: 'blur(8px)',
              zIndex: 2,
            }}
          />
        ) : null}
        {item.isDemo ? (
          <Chip
            label="Live demo"
            size="small"
            sx={{
              position: 'absolute',
              top: 14,
              right: 14,
              fontWeight: 800,
              fontSize: '0.65rem',
              bgcolor: 'secondary.main',
              color: '#fff',
              letterSpacing: 0.5,
              zIndex: 2,
            }}
          />
        ) : null}

        <Stack
          sx={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            p: 2,
            pointerEvents: 'none',
            zIndex: 2,
          }}
        >
          <Typography
            variant="h5"
            component="h3"
            sx={{
              fontWeight: 800,
              color: '#fff',
              letterSpacing: -0.3,
              fontSize: isFeatured ? { xs: '1.25rem', md: '1.5rem' } : '1.15rem',
              textShadow: '0 2px 8px rgba(0,0,0,0.3)',
            }}
          >
            {item.title}
          </Typography>
          {item.tagline ? (
            <Typography
              variant="body2"
              sx={{
                color: 'rgba(255,255,255,0.9)',
                fontWeight: 500,
                mt: 0.25,
                lineHeight: 1.4,
                display: '-webkit-box',
                WebkitLineClamp: 2,
                WebkitBoxOrient: 'vertical',
                overflow: 'hidden',
              }}
            >
              {item.tagline}
            </Typography>
          ) : null}
        </Stack>

        <Box
          className="portfolio-cta"
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, calc(-50% + 8px))',
            opacity: 0,
            transition: (t) => t.transitions.create(['opacity', 'transform'], { duration: 280 }),
            display: 'flex',
            alignItems: 'center',
            gap: 0.75,
            px: 2.5,
            py: 1.25,
            borderRadius: 2,
            bgcolor: 'background.paper',
            color: 'primary.dark',
            fontWeight: 700,
            fontSize: '0.875rem',
            boxShadow: '0 8px 24px rgba(0,0,0,0.2)',
            pointerEvents: 'none',
            zIndex: 2,
          }}
        >
          View {item.isDemo ? 'live demo' : 'live site'}
          <OpenInNewOutlined sx={{ fontSize: 18 }} />
        </Box>
      </Box>

      {/* Details */}
      <Stack spacing={1.5} sx={{ p: 2.5, flex: 1 }}>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{
            lineHeight: 1.65,
            display: '-webkit-box',
            WebkitLineClamp: isFeatured ? 4 : 3,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
            flex: 1,
          }}
        >
          {item.description}
        </Typography>

        <Stack direction="row" flexWrap="wrap" gap={0.75} sx={{ pt: 0.5 }}>
          {item.stack.slice(0, isFeatured ? 6 : 4).map((tech) => (
            <Chip
              key={tech}
              label={tech}
              size="small"
              sx={{
                height: 26,
                fontSize: '0.72rem',
                fontWeight: 600,
                bgcolor: 'rgba(13, 148, 136, 0.08)',
                color: 'primary.dark',
                border: '1px solid rgba(13, 148, 136, 0.15)',
              }}
            />
          ))}
          {item.stack.length > (isFeatured ? 6 : 4) ? (
            <Chip
              label={`+${item.stack.length - (isFeatured ? 6 : 4)}`}
              size="small"
              sx={{ height: 26, fontSize: '0.72rem', fontWeight: 600, bgcolor: '#f1f5f9', color: 'text.secondary' }}
            />
          ) : null}
        </Stack>

        <Stack direction="row" flexWrap="wrap" gap={2} sx={{ mt: 'auto', pt: 1 }}>
          <Box
            component="a"
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 0.5,
              color: 'primary.main',
              fontWeight: 700,
              fontSize: '0.875rem',
              textDecoration: 'none',
              '&:hover': { color: 'primary.dark', gap: 1 },
              transition: (t) => t.transitions.create(['gap', 'color']),
            }}
          >
            {item.isDemo ? 'Open live demo' : 'Open project'}
            <OpenInNewOutlined sx={{ fontSize: 16 }} />
          </Box>
          {item.adminLink ? (
            <Box
              component="a"
              href={item.adminLink}
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 0.5,
                color: 'text.secondary',
                fontWeight: 600,
                fontSize: '0.875rem',
                textDecoration: 'none',
                '&:hover': { color: 'primary.main' },
              }}
            >
              Admin panel
              <OpenInNewOutlined sx={{ fontSize: 14 }} />
            </Box>
          ) : null}
        </Stack>
      </Stack>
    </Box>
  )
}

export default PortfolioCardItem
