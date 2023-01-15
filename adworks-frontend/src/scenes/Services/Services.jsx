import React from 'react'
import Composervices from './Component/Composervices'
import "./Services.css"
import profile from "assets/images/profile.png"
import Carousel from 'components/Home/Carousel'
import {
  ChevronLeftOutlined,
  HomeOutlined,
  GroupSharp,
  ContactPageSharp,
  MiscellaneousServicesOutlined,
  CurrencyRupeeOutlined,
  GradeOutlined,
} from "@mui/icons-material";
const Services = () => {
  return (
    <div className='services'>
    <div className='carobody'><Carousel /></div>
    <br/><br/>
        <h3 style={{display:"flex",justifyContent:"center"}}>Our Services</h3>
        <br/><br/>
        <div className='servi1'>
          <Composervices icon={GroupSharp} title="Hello" text="We develop both brochure led and e-commerce websites that are easy to manage.  We meet deadlines and work within agreed budgets."/>
          <Composervices icon={GroupSharp} title="Hello" text="We develop both brochure led and e-commerce websites that are easy to manage.  We meet deadlines and work within agreed budgets." />
          <Composervices icon={GroupSharp} title="Hello" text="We develop both brochure led and e-commerce websites that are easy to manage.  We meet deadlines and work within agreed budgets." />
        </div>
        <br></br>
        <div className='servi2'>
          <Composervices icon={GroupSharp} title="Hello" text="We develop both brochure led and e-commerce websites that are easy to manage.  We meet deadlines and work within agreed budgets." />
          <Composervices icon={GroupSharp} title="Hello" text="We develop both brochure led and e-commerce websites that are easy to manage.  We meet deadlines and work within agreed budgets." />
          <Composervices icon={GroupSharp} title="Hello" text="We develop both brochure led and e-commerce websites that are easy to manage.  We meet deadlines and work within agreed budgets." />
        </div>
        <br/><br/>


        <div className='servi3'>
        <div className='servi3content'>
          <Composervices  title="Hello" text="We develop both brochure led and e-commerce websites that are easy to manage.  We meet deadlines and work within agreed budgets." width="50"/>
        </div>
        <div className='servi3img'>
          <img src={profile} alt='Image'></img>
        </div>
        </div>
        <div className='servi4'>
        <div className='servi4img'>
          <img src={profile} alt='Image'></img>
        </div>
        <div className='servi4content'>
          <Composervices  title="Hello" text="We develop both brochure led and e-commerce websites that are easy to manage.  We meet deadlines and work within agreed budgets." width="50"/>
        </div>
        </div>
        <br/><br/>
        <h3 style={{display:"flex",justifyContent:"center"}}>Our Services</h3>
        <br/><br/>
        <div className='servi1'>
          <Composervices icon={GroupSharp} title="Hello" text="We develop both brochure led and e-commerce websites that are easy to manage.  We meet deadlines and work within agreed budgets."/>
          <Composervices icon={GroupSharp} title="Hello" text="We develop both brochure led and e-commerce websites that are easy to manage.  We meet deadlines and work within agreed budgets." />
          <Composervices icon={GroupSharp} title="Hello" text="We develop both brochure led and e-commerce websites that are easy to manage.  We meet deadlines and work within agreed budgets." />
        </div>
        <br></br>
        <div className='servi2'>
          <Composervices icon={GroupSharp} title="Hello" text="We develop both brochure led and e-commerce websites that are easy to manage.  We meet deadlines and work within agreed budgets." />
          <Composervices icon={GroupSharp} title="Hello" text="We develop both brochure led and e-commerce websites that are easy to manage.  We meet deadlines and work within agreed budgets." />
          <Composervices icon={GroupSharp} title="Hello" text="We develop both brochure led and e-commerce websites that are easy to manage.  We meet deadlines and work within agreed budgets." />
        </div>
    </div>
  )
}

export default Services