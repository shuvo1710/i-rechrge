
import { useEffect, useState } from "react";

import { Container } from "react-bootstrap";
import { BsFillTelephonePlusFill, BsFillEnvelopeFill } from "react-icons/bs";
import "./SubHeader.css";



const SubHeader = () => {

  let code = localStorage.getItem('country')
  if(code == null){
    code ='null'
  }
  const [countryCode, setCountryCode] = useState([])
  useEffect(() => {
      fetch('http://192.168.68.116/paycharge/api/v1/language/locale',{
        headers:{
          "X-localization":code
        }
      })
      .then(res => res.json())
      .then(data => { setCountryCode(data.data)})

  },[code])

  const [countries, setCountries] = useState([])
  // console.log(code)
  useEffect(() => {
    fetch('http://192.168.68.116/paycharge/api/v1/language/index',{
      headers:{
        "X-localization":code
      }
    })
      .then(res => res.json())
      .then(data => { setCountries(data.data)
        // console.log(data)
      })
  }, [code])

const changeLanguage = event =>{
  const countryCode = event.target.value;
  fetch(`http://192.168.68.116/paycharge/api/v1/language/change/${(countryCode)}`)
  .then(res=>res.json())
  .then(data=>{
    localStorage.setItem('country', data.data)
  })
  .catch(error=>console.error(error))
 }

  return (
    <div className="subHeader">
      <Container className="px-0">
        <div className="row">
          <div className="col-12 col-md-6 col-lg-6 col-xl-6">
            <p className="m-0">Need any help? Please Contact With Us.</p>
          </div>
          <div className="col-12 col-md-6 col-lg-6 col-xl-6">
            <div className="contactAndEmail">
              <div className="callContainer d-flex align-items-center">
                <div className="me-3">
                  <select onChange={changeLanguage} name="" id="" className="selectLanguage border-0">
                    {
                      countries?.map(country => {
                          let test = localStorage.getItem('country')
                          // console.log(test)
                          if(test){
                            if (test === country.code) {
                              return <option  selected key={country.id} value={country.code}>{country?.name}</option>
                            }
                            else {
                              return <option key={country.id} value={country.code}>{country?.name}</option>
                            }
                          }
                          else{
                            if (country.is_default === 1) {
                              return <option  selected key={country.id} value={country.code}>{country?.name}</option>
                            }
                            else {
                              return <option key={country.id} value={country.code}>{country?.name}</option>
                            }
                          }
                      }
                      )
                    }

                  </select>
                </div>
                <BsFillTelephonePlusFill className="me-1" />
                <span className="contactNumber">+88-54521821</span>
              </div>
              <div className="emailContainer d-flex align-items-center">
                <BsFillEnvelopeFill className="me-1" />
                <span>example@gmail.com</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default SubHeader;
