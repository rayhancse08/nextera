import React from 'react'
import dynamic from 'next/dynamic'
import { NextPageWithLayout } from '@/interfaces/layout'
import { MainLayout } from '@/components/layout'
// import { HomeFeature, HomeHero, HomePopularCourse, HomeTestimonial, HomeOurMentors, DynamicHomeNewsLetter } from '@/components/home'

const DynamicHomeHero = dynamic(() => import('../components/home/hero'))
const DynamicHomeFeature = dynamic(() => import('../components/home/feature'))
const DynamicHomePopularCourse = dynamic(() => import('../components/home/popular-courses'))
const DynamicHomeTestimonial = dynamic(() => import('../components/home/testimonial'))
const DynamicHomeOurMentors = dynamic(() => import('../components/home/mentors'))
const DynamicHomeNewsLetter = dynamic(() => import('../components/home/newsletter'))
const HomePortfolio = dynamic(() => import('../components/home/portfolio'))
const HomeTrustAndProcess = dynamic(() => import('../components/home/trust-and-process'))
const HomeContactCta = dynamic(() => import('../components/home/contact-cta'))
const Home: NextPageWithLayout = () => {
  return (
    <>
      <DynamicHomeHero />

      <HomeTrustAndProcess />

      <DynamicHomePopularCourse />
      {/*<DynamicHomeFeature />*/}
      {/*<DynamicHomeTestimonial />*/}
        <HomePortfolio></HomePortfolio>
      <DynamicHomeOurMentors />

      <HomeContactCta />
      {/*<DynamicHomeNewsLetter />*/}
        {/*<DynamicServices></DynamicServices>*/}
    </>
  )
}

Home.getLayout = (page) => <MainLayout>{page}</MainLayout>

export default Home
