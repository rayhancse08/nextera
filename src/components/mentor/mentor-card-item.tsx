import React, { FC } from 'react'
import Image from 'next/image'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { Mentor } from '@/interfaces/mentor'

interface Props {
  item: Mentor
}

const MentorCardItem: FC<Props> = ({ item }) => {
  return (
    <Box
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        p: 1.25,
        borderRadius: '24px',
        bgcolor: '#f8fafc',
        border: '1px solid rgba(15, 23, 42, 0.06)',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease',
        '&:hover': {
          transform: 'translateY(-6px)',
          borderColor: 'rgba(13, 148, 136, 0.35)',
          boxShadow: '0 24px 48px -20px rgba(15, 23, 42, 0.25)',
        },
        '&:hover .mentor-photo': { transform: 'scale(1.05)' },
      }}
    >
      <Box
        sx={{
          position: 'relative',
          aspectRatio: '4 / 5',
          overflow: 'hidden',
          borderRadius: '18px',
          bgcolor: '#e2e8f0',
        }}
      >
        <Box className="mentor-photo" sx={{ position: 'absolute', inset: 0, transition: 'transform 0.6s ease' }}>
          <Image
            src={item.photo as string}
            alt={item.name}
            layout="fill"
            objectFit="cover"
            objectPosition="center top"
            sizes="(max-width: 600px) 100vw, (max-width: 900px) 50vw, 25vw"
          />
        </Box>
        <Box
          sx={{
            position: 'absolute',
            left: 12,
            bottom: 12,
            px: 1.25,
            py: 0.5,
            borderRadius: '999px',
            fontSize: '0.72rem',
            fontWeight: 700,
            color: '#fff',
            bgcolor: 'rgba(15, 23, 42, 0.6)',
            backdropFilter: 'blur(8px)',
          }}
        >
          {item.category}
        </Box>
      </Box>
      <Box sx={{ px: 1.25, pt: 2, pb: 1.5, flexGrow: 1 }}>
        <Typography component="h3" sx={{ fontWeight: 800, fontSize: '1.1rem', mb: 0.75 }}>
          {item.name}
        </Typography>
        {item.description ? (
          <Typography sx={{ color: 'text.secondary', lineHeight: 1.65, fontSize: '0.88rem' }}>
            {item.description}
          </Typography>
        ) : null}
      </Box>
    </Box>
  )
}
export default MentorCardItem
