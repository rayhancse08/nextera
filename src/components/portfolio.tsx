import React from 'react'
import Image from 'next/image'
import { Box, Typography, Chip } from '@mui/material'

interface PortfolioItem {
    id: number
    image: string
    title: string
    description: string
    stack: string[]
    link: string
}

interface Props {
    item: PortfolioItem
}

const PortfolioCardItem = ({ item }: Props): JSX.Element => {
    return (
        <Box
            sx={{
                backgroundColor: '#fff',
                borderRadius: 2,
                boxShadow: 3,
                padding: 2,
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
                width: '100%',
            }}
        >
            {/* Top content that grows */}
            <Box sx={{ flexGrow: 1 }}>
                <Box
                    sx={{
                        width: '100%',
                        height: 180,
                        position: 'relative',
                        borderRadius: 2,
                        overflow: 'hidden',
                        mb: 2,
                    }}
                >
                    <Image src={item.image} alt={item.title} layout="fill" objectFit="cover" />
                </Box>

                <Typography variant="h6" gutterBottom>
                    {item.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {item.description}
                </Typography>

                <Box sx={{ mt: 1, display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                    {item.stack.map((tech, index) => (
                        <Chip
                            key={index}
                            label={tech}
                            size="small"
                            sx={{ backgroundColor: '#eef1f4', color: '#333' }}
                        />
                    ))}
                </Box>
            </Box>

            {/* View Project link pinned to bottom with spacing */}
            <Box sx={{ mt: 3 }}>
                <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                        color: '#0070f3',
                        textDecoration: 'underline',
                        fontWeight: 500,
                        fontSize: '0.9rem',
                        display: 'inline-block',
                    }}
                >
                    View Project →
                </a>
            </Box>
        </Box>
    )
}

export default PortfolioCardItem
