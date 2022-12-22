import { useQuery } from "@tanstack/react-query";
import React from "react";
import { Accordion, Container } from "react-bootstrap";
import { Fade } from "react-reveal";
import img from "../../utilities/accordionImages/accordion.png";
import "./Accordions.css";

const Accordions = () => {
  const { data: accordions =[] , isLoading} = useQuery({
    queryKey:['singleAccordions'],
    queryFn: async ()=>{
      const res = fetch('http://192.168.68.116/paycharge/api/v1/faq/index')
      const data = (await res).json()
      return data;
    }
  })
  if(isLoading){
    return <div><h1>load...</h1></div>
  }
console.log(accordions.data)
  return (
    <section className="accordions">
      <Container className="p-0">
        <div className="row align-items-center">
          <Fade left>
            <div

              className="col-12 col-md-12 col-lg-6 col-xl-6 h-50"
            >
              <img className="w-100 h-100" src={img} alt="" />
            </div>
          </Fade>
          <Fade right>
          <div
            className="col-12 col-md-12 col-lg-6 col-xl-6"
          >
            {
              accordions?.data?.map(singleAccording=>
              <Accordion>
              <Accordion.Item eventKey={singleAccording.id}>
             <Accordion.Header>
               {singleAccording.qsn.us}
             </Accordion.Header>
             <Accordion.Body>
             {singleAccording.ans.us}
             </Accordion.Body>
           </Accordion.Item>
           </Accordion>)
            }
          </div>
          </Fade>
        </div>
      </Container>
    </section>
  );
};

export default Accordions;
