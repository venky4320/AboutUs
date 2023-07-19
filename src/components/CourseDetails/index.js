import React from 'react'
import './index.css'

import {AiOutlineCheck,AiOutlineArrowRight,AiOutlineHome,AiOutlineBook,AiOutlineFieldTime,AiOutlineUser} from "react-icons/ai";
import  {MdLanguage} from "react-icons/md";
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Accordion, AccordionTab } from 'primereact/accordion';
        
        


const CourseDetails = () => {

    const products =[
        {qualification:'Bsc (Hons)',
         length:"3 years full time",
         code:'CDX3'
        },
        {qualification:'Bsc',
         length:"4 years full time",
         code:'CDX4'
    
        }
    ]
    
  return (
    <>
        <section className="breadcrumb-area d-flex  relative align-items-center">
            <div className="grid">
                <div className="align-items-center">
                    <div className="col-12 ">
                        <div className="breadcrumb-wrap text-left">
                            <div className="breadcrumb-title">
                                <h2>Langue Class</h2>
                            </div>
                        </div>
                    </div>
                    <div className="breadcrumb-wrap2">
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item active" aria-current="page">
                                     Home
                                </li>
                                <li className="breadcrumb-item active" aria-current="page">Langue Class</li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </div>
        </section>
        <div className='grid relative'>
            <div className='col-7 mt-7 m-7'>
                <img className="h-30rem mt-5"src="https://wpdemo.zcubethemes.com/qeducato/wp-content/uploads/2023/03/class-7.jpg" alt=""/>
                <div className='flex flex-row flex-wrap bg-cyan-800 mt-8 border-round '>
                    <div>
                        <img className='p-5' src="https://wpdemo.zcubethemes.com/qeducato/wp-content/uploads/2023/02/testi_avatar.png" alt=""/>
                    </div>
                    <div>
                        <h1 className='text-white text-2xl' ml-3>Robto Jone</h1>
                        <p className='text-white text-2xl '>Teacher</p>
                    </div>
                    <div>
                        <h1 className='text-white text-2xl ml-5'>Language Class</h1>
                        <p className='text-white text-2xl ml-5'>Language</p>
                    </div>
                    <div className='mt-6 ml-7'>
                        <h1 className='text-2xl bg-orange-400 border-round-3xl h-2rem w-7rem text-center text-white'>$49.00</h1>
                    </div>
                </div>
                <div>
                    <h1 className='text-900'>Course Overview</h1>
                    <p className='text-500 mr-3'>
                    Lorem ipsum is simply free text used by copytyping refreshing. Neque porro est qui dolorem ipsum quia quaed inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Aelltes port lacus quis enim var sed efficitur turpis gilla sed sit amet finibus eros. Lorem Ipsum is simply dummy text of the printing.
                    </p>
                    <p className='text-500 mr-3'>The world of search engine optimization is complex and ever-changing, but you can easily understand the basics, and even a small amount of SEO knowledge can make a big difference. Free SEO education is also widely available on the web, including in guides like this! (Woohoo!) This guide is designed to describe all major aspects of SEO, from finding the terms and phrases (keywords) that can generate qualified traffic to your website, to making your site friendly to search engines, to building links and marketing the unique value of your site.Etiam pharetra erat sed fermentum feugiat velit mauris egestas quam ut erat justo.</p>
                    <h1>What You Will Learn</h1>
                    <p className='text-500 mr-3'>Fusce eleifend donec sapien sed phase lusa pellentesque lacus.Vivamus lorem arcu semper duiac. Cras ornare arcu avamus nda leo Etiam ind arcu. Morbi justo mauris tempus pharetra interdum at congue semper purus. Lorem ipsum dolor sit.The world of search engine optimization is complex and ever-changing, but you can easily understand the basics.</p>
                    <p className='text-500 mr-3'>
                    Lorem ipsum is simply free text used by copytyping refreshing. Neque porro est qui dolorem ipsum quia quaed inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Aelltes port lacus quis enim var sed efficitur turpis gilla sed sit amet finibus eros. Lorem Ipsum is simply dummy text of the printing.
                    </p>
                </div>
                <div className='grid'>
                    <div className='col-6 flex flex-row m-'>
                        <div className='border-circle w-5rem h-4rem m-2 border-solid border-200 text-center'>
                            <AiOutlineCheck className=' h-2rem w-2rem text-orange-400 mt-3 ml-2 mr-2 '/>
                        </div>
                        <p className='text-500'>Crawl accessibility so engines can read your website</p>
                    </div>
                    <div className='col-6 flex flex-row m-'>
                        <div className='border-circle w-5rem h-4rem m-2 border-solid border-200 text-center'>
                            <AiOutlineCheck className=' h-2rem w-2rem text-orange-400 mt-3 ml-2 mr-2 '/>
                        </div>
                        <p className='text-500'>Crawl accessibility so engines can read your website</p>
                    </div>
                    <div className='col-6 flex flex-row m-'>
                        <div className='border-circle w-5rem h-4rem m-2 border-solid border-200 text-center'>
                            <AiOutlineCheck className=' h-2rem w-2rem text-orange-400 mt-3 ml-2 mr-2 '/>
                        </div>
                        <p className='text-500'>Crawl accessibility so engines can read your website</p>
                    </div>
                    <div className='col-6 flex flex-row m-'>
                        <div className='border-circle w-5rem h-4rem m-2 border-solid border-200 text-center'>
                            <AiOutlineCheck className=' h-2rem w-2rem text-orange-400 mt-3 ml-2 mr-2 '/>
                        </div>
                        <p className='text-500'>Crawl accessibility so engines can read your website</p>
                    </div>
                </div>
                <div>
                    <h1>Study Options:</h1>
                    <DataTable value={products} tableStyle={{ minWidth: '30rem' }}>
                        <Column  field="qualification" header="Qualification"></Column>
                        <Column field="length" header="Length"></Column>
                        <Column  field="code" header="Code"></Column>
                    </DataTable>
                </div>
                <div>
                    <h1 className='text-900'>Frequently Asked Question</h1>
                    <p className='text-500'>A business or organization established to provide a particular service, typically one that involves a organizing transactions.Lorem ipsum is simply free text used by copytyping refreshing. Neque porro est qui dolorem enim var sed efficitur turpis gilla sed sit amet finibus eros. Lorem Ipsum is simply dummy text of the printing..</p>
                    <Accordion activeIndex={0}>
                        <AccordionTab header="01 Cras turpis felis, elementum sed mi at arcu ?">
                            <p className="mt-3">
                                Our community is being called to reimagine the future. As the only university where a renowned design school comes together with premier colleges, we are making learning more relevant and transformational. We are enriched by the wide range.
                            </p>
                        </AccordionTab>
                        <AccordionTab header="02 Vestibulum nibh risus, in neque eleifendulputate sem ?">
                            <p className="m-0">
                                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                                quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas
                                sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
                                Consectetur, adipisci velit, sed quia non numquam eius modi.
                            </p>
                        </AccordionTab>
                        <AccordionTab header="03 Donec maximus, sapien id auctor ornare ?">
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
            <div className='col-3 mt-7 position'>
                <div >
                    <h3 className=" text-white ml-5 bg-blue-800  pt-5 border-round-xl border-noround-bottom text-center pb-3 mb-0 text-2xl"> Course Features</h3>
                    <ul className='surface-border border-solid border-gray-100 ml-5 mt-0 '>
                        <li className='pricing'>
                            <div className="pt-3 flex flex-row ">
                                 <strong className='text-orange-500 text-2xl '> $49.00 </strong> 
                                 <strong className='line-through  ml-2'> $129.00 </strong>
                                 <div className='border-round text-orange-500 text-2xl  bg-orange-100 text-center'>
                                    <span> 55% OFF</span>
                                </div>
                                 
                            </div>
                        </li>
                        <li className='pricing pb-3'>
                            <span ><AiOutlineHome className='h-2rem w-2rem text-orange-500 mr-3 pt-2'/></span> 
                            <strong>Class Size:</strong> 
                            <span className="text-gray-500 ml-5">18</span>
                        </li>
                        <li className='pricing pb-3'>
                            <span ><AiOutlineBook className='h-2rem w-2rem text-orange-500 mr-3 pt-2'/></span> 
                            <strong>Lectures:</strong> 
                            <span className="text-gray-500 ml-5">12</span>
                        </li>
                        <li className='pricing pb-3'>
                            <span ><AiOutlineFieldTime className='h-2rem w-2rem text-orange-500 mr-3 pt-2'/></span> 
                            <strong>Time:</strong> 
                            <span className="text-gray-500 ml-5">8:30-10am</span>
                        </li>
                        <li className='pricing pb-3'>
                            <span ><AiOutlineUser className='h-2rem w-2rem text-orange-500 mr-3 pt-2'/></span> 
                            <strong>Enrolled:</strong> 
                            <span className="text-gray-500 ml-5">20 students</span>
                        </li>
                        <li className='pricing pb-3'>
                            <span ><MdLanguage className='h-2rem w-2rem text-orange-500 mr-3 pt-2'/></span> 
                            <strong>Language:</strong> 
                            <span className="text-gray-500 ml-5">English</span>
                        </li>
                        <button className='button ml-0 mt-5 mb-3'>Enroll <AiOutlineArrowRight/> </button>
                    </ul>
                </div>
            </div>
        </div>
        
        
       
    </>
  )
}

export default CourseDetails