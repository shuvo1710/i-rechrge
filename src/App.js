import {  RouterProvider} from "react-router-dom";
import "./App.css";
import AuthProvider from "./AuthProvider/AuthProvider";
import ScaleLoader from "react-spinners/ScaleLoader";
import { useState } from "react";
import { useEffect } from "react";
import { router } from "./Router/Router";
import { Toaster } from "react-hot-toast";

function App() {
  // real loading time with preloader 
  const [loader, setLoader] = useState(true);
  const [loaderAnimation, setLoaderAnimation] = useState(true);
  // const [fastLoad, setFastLoad] = useState(false)
  
  useEffect(()=>{
    window.addEventListener("load", () => {
      // setFastLoad(()=>{
      //   langHandler()
      // })
      setLoader(false);
      setLoaderAnimation(false);
    });
  },[])

  // const langHandler = ()=>{
  //   fetch('https://jsonplaceholder.typicode.com/users')
  //   .then(res=>res.json())
  //   .then(data=>console.log(data))
  // }
  


 

  // real loading time with preloader

  // fake loading time to show preloader

  // const [loader, setLoader] = useState(false);
  // const [loaderAnimation, setLoaderAnimation] = useState(false);
  // useEffect(() => {
  //   setLoader(true);
  //   setTimeout(() => {
  //     setLoader(false);
  //   }, 2500);
  // }, []);
  // useEffect(() => {
  //   setTimeout(() => {
  //     setLoaderAnimation(true);
  //   }, 2000);
  // }, []);

  // fake loading time to show preloader

  return (
    <>
      {loader ? (
        <div className={`preloader`}>
          <ScaleLoader color={"#0087db"} size={150} />
        </div>
      ) : (
        <div className={`${loaderAnimation && "animation"}`}>
          <AuthProvider>
            <RouterProvider router={router}></RouterProvider>
            <Toaster />
          </AuthProvider>
        </div>
      )} 
    </>
  );
}

export default App;