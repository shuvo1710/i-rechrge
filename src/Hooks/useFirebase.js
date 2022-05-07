import { useState } from "react";

const useFirebase = () => {
  const [successful, setSuccessful] = useState(false);

  const handleClose = () => setSuccessful(false);
  const handleShow = () => setSuccessful(true);
  return {
    successful,handleClose,handleShow
  };
};

export default useFirebase;
