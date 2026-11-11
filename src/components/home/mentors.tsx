import React, { FC } from 'react'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'
import { MentorCardItem } from '@/components/mentor'
import Reveal from '@/components/common/reveal'
import SectionHeading, { GradientText } from '@/components/common/section-heading'
import { data } from './mentors.data'

const HomeOurMentors: FC = () => {
  return (
    <Box id="team" component="section" sx={{ py: { xs: 10, md: 14 }, bgcolor: '#fff' }}>
      <Container maxWidth="lg">
        <Reveal sx={{ mb: { xs: 5, md: 7 } }}>
          <SectionHeading
            align="center"
            eyebrow="Our team"
            title={
              <>
                The people who <GradientText>ship your product</GradientText>
              </>
            }
            description="A small in-house team—you talk directly to the engineers and the project manager building your product, from kickoff to launch."
          />
        </Reveal>

        <Grid container spacing={3}>
          {data.map((item, index) => (
            <Grid item xs={12} sm={6} md={3} key={String(item.id)}>
              <Reveal delay={index * 100} sx={{ height: '100%' }}>
                <MentorCardItem item={item} />
              </Reveal>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  )
}

export default HomeOurMentors
