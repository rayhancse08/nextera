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
                minHeight: 0,
            }}
        >
            {/* Scroll when copy + chips are long; keeps “View project” in the slide and clickable */}
            <Box
                sx={{
                    flex: 1,
                    minHeight: 0,
                    overflowY: 'auto',
                    overflowX: 'hidden',
                    WebkitOverflowScrolling: 'touch',
                    pr: 0.25,
                }}
            >
                <Box
                    sx={{
                        width: '100%',
                        height: 180,
                        position: 'relative',
                        borderRadius: 2,
                        overflow: 'hidden',
                        mb: 2,
                        flexShrink: 0,
                    }}
                >
                    <Image src={item.image} alt={item.title} layout="fill" objectFit="cover" />
                </Box>

                <Typography variant="h6" gutterBottom component="h3">
                    {item.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ wordBreak: 'break-word' }}>
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

            <Box
                sx={{
                    flexShrink: 0,
                    pt: 2,
                    mt: 'auto',
                    borderTop: '1px solid',
                    borderColor: 'divider',
                    bgcolor: 'background.paper',
                }}
            >
                <Box
                    component="a"
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                        color: 'primary.main',
                        textDecoration: 'underline',
                        fontWeight: 600,
                        fontSize: '0.9rem',
                        display: 'inline-block',
                        cursor: 'pointer',
                        '&:hover': { color: 'primary.dark' },
                    }}
                >
                    View Project →
                </Box>
            </Box>
        </Box>
    )
}

export default PortfolioCardItem
