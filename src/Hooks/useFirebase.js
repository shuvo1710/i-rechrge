import { useState } from "react";

const useFirebase = () => {
  const [successful, setSuccessful] = useState(false);
  const handleClose = () => setSuccessful(false);
  const handleShow = () => setSuccessful(true);
  const [user,setUser] = useState({})
  console.log(user)
  return {
    successful,handleClose,handleShow,user,setUser
  };
};

export default useFirebase;
