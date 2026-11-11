import React from 'react'
import dynamic from 'next/dynamic'
import { NextPageWithLayout } from '@/interfaces/layout'
import { MainLayout } from '@/components/layout'

const DynamicHomeHero = dynamic(() => import('../components/home/hero'))
const HomeProjectMarquee = dynamic(() => import('../components/home/project-marquee'))
const HomeAboutCompany = dynamic(() => import('../components/home/about-company'))
const HomeServices = dynamic(() => import('../components/home/services'))
const HomeTechStack = dynamic(() => import('../components/home/tech-stack'))
const HomePortfolio = dynamic(() => import('../components/home/portfolio'))
const DynamicHomeOurMentors = dynamic(() => import('../components/home/mentors'))
const HomeMidCta = dynamic(() => import('../components/home/mid-cta'))
const HomeContactCta = dynamic(() => import('../components/home/contact-cta'))

const Home: NextPageWithLayout = () => {
  return (
    <>
      <DynamicHomeHero />
      <HomeProjectMarquee />
      <HomeAboutCompany />
      <HomeServices />
      <HomePortfolio />
      <HomeTechStack />
      <DynamicHomeOurMentors />
      <HomeMidCta />
      <HomeContactCta />
    </>
  )
}

Home.getLayout = (page) => <MainLayout>{page}</MainLayout>

export default Home
