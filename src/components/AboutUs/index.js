import React from 'react'
import './index.css'
import {FaGraduationCap  } from 'react-icons/fa';
import {BsArrowRight  } from 'react-icons/bs';
import { InputText } from 'primereact/inputtext';
import { Card } from 'primereact/card';
import { InputTextarea } from 'primereact/inputtextarea';
import { Accordion, AccordionTab } from 'primereact/accordion';
        
        
        


const AboutUs = () => {

    
  return (
    <div>
        <section className="breadcrumb-area d-flex  p-relative align-items-center">
            <div className="grid">
                <div className="row align-items-center">
                    <div className="col-xl-12 col-lg-12 ">
                        <div className="breadcrumb-wrap text-left">
                            <div className="breadcrumb-title">
                                <h2>About Us</h2>
                            </div>
                        </div>
                    </div>
                    <div className="breadcrumb-wrap2">
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item active" aria-current="page">
                                     Home
                                </li>
                                <li className="breadcrumb-item active" aria-current="page">About Us</li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </div>
        </section>

        <div className="grid mt-5">
            <div className="flex flex-row flex-wrap  ">
                <div className="col-6 mt-8 p-8">
                    <div className="s-about-img p-relative  wow fadeInLeft  animated" data-animation="fadeInLeft" data-delay=".4s" >
                        <img decoding="async" src="https://wpdemo.zcubethemes.com/qeducato/wp-content/uploads/2023/03/about_img_05.png" alt="https://wpdemo.zcubethemes.com/qeducato/wp-content/uploads/2023/03/about_img_05.png"/>
                    </div>
                </div>
                <div className="col-6 col-sm-12 col-md-12">
                    <div className="about-content s-about-content" >
                        <div className="about-title second-title pb-25">
                            <h5 className=" g-heading ml-7 text-orange-400 text-2xl" ><FaGraduationCap /> About Our University</h5>
                            <h2 className='blog-heading '>A Few Words About the University</h2>
                        </div>
                        <p className="txt-clr ml-7">Our community is being called to reimagine the future. As the only university where a renowned design school comes together with premier colleges, we are making learning more relevant and transformational.</p>
                        <p className='text-color-secondary ml-7'>We are proud to offer top ranige in employment services such and asser payroll and benefits administrato managemen and asistance with global business range ployment employer  readings from religious texts or literature are also commonly inc compliance.</p>
                        <div className="about-content2">
                            <div className="flex flex-row flex-wrap col-12">
                                <div className="col-6 flex flex-row flex-wrap">
                                    <ul className="green2">
                                        <li>
                                            <div className="abcontent">
                                                <div className="text flex flex-row flex-wrap">
                                                <div className='ano'><span>01</span></div>
                                                    <h3 className='mt-1'>Doctoral Degrees</h3>
                                                    <p className='ml-7 text-color-secondary'>consectetur adipiscing elit sed do eiusmod tem incid idunt.</p>
                                                </div>
                                            </div>
                                        </li>
                                        </ul>
                                    </div>
                                    <div className="col-6">    
                                        <div className="text flex flex-row flex-wrap">
                                            <div className='ano mt-3'>
                                                <span>02</span>
                                            </div>
                                            <h3>Global Students</h3>
                                            <p className='ml-8  text-color-secondary'>consectetur adipiscing elit sed do eiusmod tem incid idunt.</p>
                                        </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='sc-container grid flex flex-row'>
            <div className='text-3xl text-white text-left col-8'>
                <h1 className='ml-7'>Scholarship Programs</h1>
                <p className='ml-7 text-2xl text-left '> At Estuidar University, we prepare you to launch your career by providing a supportive, creative, and professional environment from which to learn practical skills and build a network of industry contacts.</p>
            </div>
            <div className='col-4'>
                <button className='button'>Financial Aid <span><BsArrowRight/></span></button>
            </div>
        </div>

        <div className='grid mt-7 '>
            <div className='col-6'>
                <h1 className='ml-5 text-6xl '>Get every single answer here.</h1>
                <p className='text-gray-600 text-2xl ml-5'>A business or organization established to provide a particular service, typically one that involves a organizing transactions.</p>
            <div className="card ml-5">
            <Accordion activeIndex={0}>
                <AccordionTab header="Header I">
                    <p className="m-0">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </AccordionTab>
                <AccordionTab header="Header II">
                    <p className="m-0">
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                        quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas
                        sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
                        Consectetur, adipisci velit, sed quia non numquam eius modi.
                    </p>
                </AccordionTab>
                <AccordionTab header="Header III">
                    <p className="m-0">
                        At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti
                        quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt
                        mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.
                        Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.
                    </p>
                </AccordionTab>
            </Accordion>
        </div>
            </div>
            <div className='col-6 '>
            <div className="card">
                <Card className='bg-cyan-900'>
                    <h1 className='text-white card-heading'>Make An Contact</h1>
                    <div className="card flex flex-column mt-5 justify-content-center">
                        <InputText placeholder='Name' className='mt-5 ml-8 mr-8' />
                        <InputText placeholder='Your Email' className='mt-5 ml-8 mr-8' />
                        <InputText placeholder='Your Phone' className='mt-5 ml-8 mr-8' />
                        <InputTextarea placeholder='Message' className='mt-5 ml-8 mr-8' />
                        <button className='button'>Submit Now <span><BsArrowRight/></span></button>
                    </div>
                </Card>
        </div>
            </div>
        </div>

        <div className='grid mt-8'>
            <div className='col-6 last-container'>
                <img  className="icon"src='https://wpdemo.zcubethemes.com/qeducato/wp-content/uploads/2023/03/fea-icon01-1.png' alt=''/>
                <h1 className='text-white text-6xl ml-5'>
                Campus Tour
                </h1>
                <p className='text-xl m-5 text-gray-500'>
                Campus on a tour designed for prospective graduate and professional students. You will see how our university like, facilities, studenst and life in this university. Meet our graduate admissions representative to learn more about our graduate programs and decide what it the best for you.
                </p>
            </div>
            <div className='col-6'>
                <img className="image"src="https://wpdemo.zcubethemes.com/qeducato/wp-content/uploads/2023/03/steps-img-2.png" alt=""/>
            </div>
        </div>
        <div className='grid '>
            <div className='col-6'>
                <img className="image1"src="https://wpdemo.zcubethemes.com/qeducato/wp-content/uploads/2023/03/steps-img-2.png" alt=""/>
            </div>
            <div className='col-6 last-container1'>
                <img  className="icon"src='https://wpdemo.zcubethemes.com/qeducato/wp-content/uploads/2023/03/fea-icon03.png' alt=''/>
                <h1 className='text-white text-6xl ml-5'>
                Powerful Alumni
                </h1>
                <p className='text-xl m-5 text-gray-500'>
                Campus on a tour designed for prospective graduate and professional students. You will see how our university like, facilities, studenst and life in this university. Meet our graduate admissions representative to learn more about our graduate programs and decide what it the best for you.
                </p>
            </div>
        </div>
       
    </div>
  )
}

export default AboutUs