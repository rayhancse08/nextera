import React from 'react'
import { Card, CardContent, Typography, Box, Button, Chip, Stack } from '@mui/material'

export const PortfolioCardItem = ({ item }: { item: any }) => {
    return (
        <Card sx={{ borderRadius: 3, overflow: 'hidden', m: 1 }}>
            <img src={item.image} alt={item.title} width="100%" height="200px" style={{ objectFit: 'cover' }} />
            <CardContent>
                <Typography variant="h6" gutterBottom>{item.title}</Typography>
                <Stack direction="row" spacing={1} sx={{ mb: 1, flexWrap: 'wrap' }}>
                    {item.stack.map((tech: string, index: number) => (
                        <Chip key={index} label={tech} size="small" />
                    ))}
                </Stack>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                    {item.description}
                </Typography>
                <Button
                    variant="contained"
                    size="small"
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    View Project
                </Button>
            </CardContent>
        </Card>
    )
}
