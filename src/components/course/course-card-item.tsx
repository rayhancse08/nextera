import React, { FC } from 'react'
import Image from 'next/image'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Chip from '@mui/material/Chip'
import Stack from '@mui/material/Stack'
import CheckCircleOutline from '@mui/icons-material/CheckCircleOutline'
import { Course } from '@/interfaces/course'

interface Props {
  item: Course
}

const CourseCardItem: FC<Props> = ({ item }) => {
  return (
    <Box sx={{ px: 1, py: 4, height: '100%' }}>
      <Stack
        sx={{
          height: '100%',
          p: 2.5,
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
        <Box sx={{ lineHeight: 0, overflow: 'hidden', borderRadius: 2, mb: 2, position: 'relative' }}>
          <Image src={item.cover} width={760} height={760} alt={item.title} />
          <Chip
            label={item.category}
            size="small"
            sx={{
              position: 'absolute',
              top: 12,
              left: 12,
              fontWeight: 700,
              bgcolor: 'rgba(255,255,255,0.95)',
              color: 'primary.dark',
            }}
          />
        </Box>

        <Typography component="h3" variant="h6" sx={{ fontWeight: 800, mb: 1 }}>
          {item.title}
        </Typography>

        <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.65, mb: 2, flexGrow: 0 }}>
          {item.description}
        </Typography>

        {item.highlights && item.highlights.length > 0 ? (
          <Stack spacing={0.75} sx={{ mt: 'auto' }}>
            {item.highlights.map((point) => (
              <Stack key={point} direction="row" spacing={1} alignItems="flex-start">
                <CheckCircleOutline sx={{ fontSize: 16, color: 'primary.main', mt: 0.25 }} />
                <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.5 }}>
                  {point}
                </Typography>
              </Stack>
            ))}
          </Stack>
        ) : null}
      </Stack>
    </Box>
  )
}

export default CourseCardItem
