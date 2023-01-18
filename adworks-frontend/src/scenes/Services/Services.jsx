import React from 'react'
import Composervices from './Component/Composervices'
import "./Services.css"
// import profile1 from "assets/images/profile.png"
// import profile2 from "assets/images/soc1.jpg"
// import profile3 from "assets/images/elevate-cards.webp"
import Carousell from 'scenes/Home/Carousell'
import {
  HomeOutlined,
  GroupSharp,
  Facebook,
  DesktopWindowsOutlined,
  DesignServices,
  PhoneAndroidOutlined,
  TipsAndUpdatesOutlined,
  ArticleOutlined,
  LocationOnOutlined,
  VolumeUpOutlined,
  Instagram
} from "@mui/icons-material";
import { useMediaQuery } from '@mui/material'
// import Instagram from '@mui/icons-material/Instagram'
const Services = () => {
  const isTablet=useMediaQuery("(max-width:1000px)");
  const isMobile=useMediaQuery("(max-width:650px)");
  return (
    <div className='services'>
    <div className='carobody'><Carousell /></div>
    <br/><br/>
        <h3 style={{display:"flex",justifyContent:"center"}}>Our Services</h3>
        <br/><br/>
        <div className={isMobile?"servimob":isTablet?"servi2":"servi1"}>
          <Composervices icon={DesktopWindowsOutlined} title="Web Service Design" text="We develop both brochure led and e-commerce websites that are easy to manage.  We meet deadlines and work within agreed budgets."/>
          <Composervices icon={DesignServices} title="Design & Branding" text="Adworks creative team has a wealth of experience, creating everything from brochures and publications to packaging and branding." />
          <Composervices icon={GroupSharp} title="Digital Marketing" text="Our team are focused on engaging new customers for our clients. Our digital media mix can include web, social, e-marketing, PPC and display." />
        {/* </div>
        <br></br>
        <div className='servi2'> */}
          <Composervices icon={TipsAndUpdatesOutlined} title="Media Planning & Buying" text="We do all the research, negotiate discounts and make it easy for you to purchase any advertising space across all formats." />
          <Composervices icon={Facebook} title="Social Marketing" text="Our social marketers develop the right messages and promote your company across platforms including Facebook, Twitter, Instagram, Linkedin and Youtube." />
          <Composervices icon={PhoneAndroidOutlined} title="PPC & Display Advertising" text="The digital team will develop your media strategy, create a media plan and ultimately launch and optimise your online ad campaigns." />
        </div>
        <br/><br/>

   <div className='abc'>

        <div className='servi3'>
        <div className='servi3content'>
          <Composervices  title="Digital Design Services" text="Every business needs an identity - who you are and what you do. This is 'branding' and goes deeper than a label or a logo. Your brand is what your business is and what it stands for.

Adworks design, develop and integrate logo and brand identities that are easily recognised, relevant and creative." width="50"/>
        </div>
        {/* <div className='servi3img'>
          <img src={profile2} alt='Image'></img>
        </div> */}
        </div>
        <div className='servi4'>
        {/* <div className='servi4img'>
          <img src={profile3} alt='Image'></img>
        </div> */}
        <div className='servi4content'>
          <Composervices  title="Website Design" text="Whether you are looking for a simple one page micro website, larger brochure led web design or a large complex web development project, we will offer you an excellent service." width="50"/>
        </div>
        </div>
   </div>
        <br/><br/>
        <h3 style={{display:"flex",justifyContent:"center"}}>Media Planning and Buying</h3>
        <br/><br/>
        <div className={isMobile?"servimob":isTablet?"servi2":"servi1"}>
          <Composervices icon={ArticleOutlined} title="Newspaper & Magazines" text="We are able to target publication advertising by demographics such as age, sex and geographic area and evaluate each title's performance to ensure that the most efficient titles are chosen to fulfil your brief."/>
          <Composervices icon={LocationOnOutlined} title="Out Of Home" text="Our specialist outdoor media buyer has over 20 years experience. We understand that every client has different needs. We have the flexibility to adapt, providing a great service to both small businesses and big companies." />
          <Composervices icon={DesktopWindowsOutlined} title="TV Advertising" text="With television and the internet becoming ever more closely entwined, options for TV advertisers are multiplying.  With options such as Sky Adsmart your advertising can be micro geo-targeted to key demographics." />
        {/* </div>
        <br></br>
        <div className='servi2'> */}
          <Composervices icon={VolumeUpOutlined} title="Radio Advertising" text="We can handle any size of broadcast advertising campaign, from major ongoing schedules to lower budget tactical bursts." />
          <Composervices icon={Instagram} title="Social Media" text="Facebook, Twitter, Instagram and Linkedin all have various advertising options from sponsored display content to re-targeting. Our media specialists make sure that you are getting most from your budget." />
          <Composervices icon={PhoneAndroidOutlined} title="PPC & Display" text="As a Google Partner we can develop online advertising plans revolving around small test buys, tailoring your future campaigns around proven results." />
        </div>
    </div>
  )
}

export default Services