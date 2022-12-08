import React from 'react';
import "./FAQ.css"
import Reveal from 'react-reveal/Reveal';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import { useState } from 'react';

const FAQ = () => {
    const [activeAccordion,setActiveAccordion] = useState(1)
    const accordion = [
        {
            id:1,
            title:" I have read and agree to the Privacy Policy and Terms & Conditions.",
            icon_primary:<AiOutlinePlus/>,
            icon_secondary:<AiOutlineMinus/>,
            text:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio quis maxime, labore dolorum quaerat doloremque dolorem iure error possimus rem iusto ipsa ducimus cupiditate, nam quae tenetur qui! Possimus aperiam exercitationem obcaecati, iusto et iste dicta alias dolor? Aspernatur unde quae expedita autem officia laudantium sit voluptate, maxime voluptas ducimus!'
        },
        {
            id:2,
            title:" You can easily build a page without any design or custom coding.",
            icon_primary:<AiOutlinePlus/>,
            icon_secondary:<AiOutlineMinus/>,
            text:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio quis maxime, labore dolorum quaerat doloremque dolorem iure error possimus rem iusto ipsa ducimus cupiditate, nam quae tenetur qui! Possimus aperiam exercitationem obcaecati, iusto et iste dicta alias dolor? Aspernatur unde quae expedita autem officia laudantium sit voluptate, maxime voluptas ducimus!'
        },
        {
            id:3,
            title:"Stream that converts more visitors than any website.",
            icon_primary:<AiOutlinePlus/>,
            icon_secondary:<AiOutlineMinus/>,
            text:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio quis maxime, labore dolorum quaerat doloremque dolorem iure error possimus rem iusto ipsa ducimus cupiditate, nam quae tenetur qui! Possimus aperiam exercitationem obcaecati, iusto et iste dicta alias dolor? Aspernatur unde quae expedita autem officia laudantium sit voluptate, maxime voluptas ducimus!'
        },
    ]
    return (
        <section className='FaqBody'>
            <div className='container'>
            <div>
            <h2 className='text-center '>Frequently Asked Question</h2>
            <p className='text-center'>Lorem ipsum dolor sit amet.</p>
            </div>
            <div className='col-12 col-md-10 col-lg-8 col-xl-8 mx-auto'>
                {
                    accordion.map((item,i)=>
                        <div key={i} className='singleFAQ'>
                    <div onClick={()=>setActiveAccordion(item?.id)} className='pointer d-flex align-items-center justify-content-between p-2 bg-light'>
                        <h5>{item.title}</h5>
                        {
                            item.id === activeAccordion ? item.icon_secondary : item.icon_primary
                        }
                    </div>
                    <div className={`bg-light p-2 ${item?.id === activeAccordion ? 'd-block' : 'd-none'}`}>
                        <p>{item?.text}</p>
                    </div>
                </div>
                   )
                }
            </div>
            </div>
        </section>
    );
};

export default FAQ;