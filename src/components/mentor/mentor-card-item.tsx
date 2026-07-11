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
    <Box sx={{ px: 1.5, py: 5, height: '100%' }}>
      <Box
        sx={{
          p: 2.5,
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          backgroundColor: 'background.paper',
          borderRadius: 3,
          border: '1px solid',
          borderColor: 'rgba(15, 23, 42, 0.06)',
          transition: (theme) => theme.transitions.create(['box-shadow', 'transform', 'border-color']),
          '&:hover': {
            boxShadow: '0 20px 40px -16px rgba(15, 23, 42, 0.15)',
            transform: 'translateY(-4px)',
            borderColor: 'rgba(13, 148, 136, 0.35)',
          },
        }}
      >
        <Box
          sx={{
            lineHeight: 0,
            overflow: 'hidden',
            borderRadius: 2,
            height: 220,
            mb: 2,
            position: 'relative',
            bgcolor: '#f0f4f8',
          }}
        >
          <Image src={item.photo as string} width={570} height={427} alt={item.name} />
        </Box>
        <Box sx={{ flexGrow: 1 }}>
          <Typography component="h3" variant="h5" sx={{ fontWeight: 800, fontSize: '1.15rem', mb: 0.5 }}>
            {item.name}
          </Typography>
          <Typography sx={{ mb: 1.5, color: 'primary.main', fontWeight: 600, fontSize: '0.9rem' }}>
            {item.category}
          </Typography>
          {item.description ? (
            <Typography sx={{ color: 'text.secondary', lineHeight: 1.65 }} variant="body2">
              {item.description}
            </Typography>
          ) : null}
        </Box>
      </Box>
    </Box>
  )
}
export default MentorCardItem
