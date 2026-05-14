import React from 'react'
import Box from '@mui/material/Box'
import Slider, { Settings } from 'react-slick'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import useMediaQuery from '@mui/material/useMediaQuery'
import { useTheme, styled } from '@mui/material/styles'
import IconArrowBack from '@mui/icons-material/ArrowBack'
import IconArrowForward from '@mui/icons-material/ArrowForward'
import PortfolioCardItem from '@/components/portfolio'
import { data } from './portfolio.data'

interface SliderArrowProps {
    onClick?: () => void
    type: 'next' | 'prev'
    className?: string
}

const SliderArrow: React.FC<SliderArrowProps> = ({ onClick, type, className }) => (
    <IconButton
        sx={{
            backgroundColor: 'background.paper',
            color: 'primary.main',
            '&:hover': { backgroundColor: 'primary.main', color: 'primary.contrastText' },
            bottom: '-28px !important',
            left: 'unset !important',
            right: type === 'prev' ? '60px !important' : '0 !important',
            zIndex: 10,
            boxShadow: 1,
        }}
        disableRipple
        color="inherit"
        onClick={onClick}
        className={className}
    >
        {type === 'next' ? <IconArrowForward sx={{ fontSize: 22 }} /> : <IconArrowBack sx={{ fontSize: 22 }} />}
    </IconButton>
)

const StyledDots = styled('ul')(({ theme }) => ({
    '&.slick-dots': {
        position: 'absolute',
        left: 0,
        bottom: -20,
        paddingLeft: theme.spacing(1),
        textAlign: 'left',
        '& li': {
            marginRight: theme.spacing(2),
            '&.slick-active > div': {
                backgroundColor: theme.palette.primary.main,
            },
        },
    },
}))

const HomePortfolio = (): JSX.Element => {
    const theme = useTheme()
    const isMobile = useMediaQuery(theme.breakpoints.down('md'))

    const sliderConfig: Settings = {
        infinite: true,
        speed: 300,
        slidesToShow: isMobile ? 1 : 3,
        slidesToScroll: 1,
        prevArrow: <SliderArrow type="prev" />,
        nextArrow: <SliderArrow type="next" />,
        dots: true,
        appendDots: (dots) => <StyledDots>{dots}</StyledDots>,
        customPaging: () => (
            <Box sx={{ height: 8, width: 30, backgroundColor: 'divider', display: 'inline-block', borderRadius: 4 }} />
        ),
    }

    return (
        <Box
            id="portfolio"
            sx={{
                pt: { xs: 6, md: 8 },
                pb: { xs: 8, md: 12 },
                background: 'linear-gradient(180deg, #ffffff 0%, #f0f4f8 100%)',
            }}
        >
            <Container maxWidth="lg">
        <Box sx={{ mb: 4, textAlign: { xs: 'center', md: 'left' } }}>
          <Typography
            variant="overline"
            sx={{ color: 'primary.main', fontWeight: 800, letterSpacing: 2, fontSize: '0.7rem' }}
          >
            Case studies
          </Typography>
          <Typography variant="h2" sx={{ fontWeight: 800, letterSpacing: -0.5, fontSize: { xs: '1.75rem', md: '2.25rem' }, mt: 1 }}>
            Portfolio
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mt: 1, maxWidth: 480 }}>
            Selected work across products, platforms, and integrations.
          </Typography>
        </Box>

                <Slider {...sliderConfig}>
                    {data.map((item) => (
                        <Box
                            key={item.id}
                            sx={{
                                px: 1,
                                display: 'flex',
                                height: { xs: 520, md: 480 },
                                width: '100%',
                                minHeight: 0,
                            }}
                        >
                            <Box
                                sx={{
                                    width: '100%',
                                    height: '100%',
                                    minHeight: 0,
                                    display: 'flex',
                                }}
                            >
                                <PortfolioCardItem item={item} />
                            </Box>
                        </Box>
                    ))}
                </Slider>
            </Container>
        </Box>
    )
}

export default HomePortfolio
