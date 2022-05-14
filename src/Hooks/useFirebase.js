import { useState } from "react";
import {
  AiOutlineMobile,
  AiOutlineWifi,
  AiFillThunderbolt,
} from "react-icons/ai";
import { MdLocalGasStation } from "react-icons/md";
import { BsTelephone, BsDropletHalf } from "react-icons/bs";
import { RiComputerLine } from "react-icons/ri";

const useFirebase = () => {
  const [successful, setSuccessful] = useState(false);
  const handleClose = () => setSuccessful(false);
  const handleShow = () => setSuccessful(true);
  const [user, setUser] = useState({});
  const [activeState, setActiveState] = useState("Mobile");
  const activeTab = (tabName) => {
    setActiveState(tabName);
  };
  const navItems = [
    {
      linkName: "Mobile",
      iconName: <AiOutlineMobile className=" fs-3 iconContainer1" />,
    },
    {
      linkName: "DTH",
      iconName: <RiComputerLine className=" fs-3 iconContainer2" />,
    },
    {
      linkName: "BroadBand",
      iconName: <AiOutlineWifi className=" fs-3 iconContainer3" />,
    },
    {
      linkName: "LandPhone",
      iconName: <BsTelephone className=" fs-3 iconContainer4" />,
    },
    {
      linkName: "Electricity",
      iconName: <AiFillThunderbolt className=" fs-3 iconContainer1" />,
    },
    {
      linkName: "Gas",
      iconName: <MdLocalGasStation className=" fs-3 iconContainer2" />,
    },
    {
      linkName: "Water",
      iconName: <BsDropletHalf className=" fs-3 iconContainer3" />,
    },
    {
      linkName: "Mobile",
      iconName: <AiOutlineMobile className=" fs-3 iconContainer1" />,
    },
    {
      linkName: "DTH",
      iconName: <RiComputerLine className=" fs-3 iconContainer2" />,
    },
    {
      linkName: "BroadBand",
      iconName: <AiOutlineWifi className=" fs-3 iconContainer3" />,
    },
    {
      linkName: "LandPhone",
      iconName: <BsTelephone className=" fs-3 iconContainer4" />,
    },
    {
      linkName: "Electricity",
      iconName: <AiFillThunderbolt className=" fs-3 iconContainer1" />,
    },
    {
      linkName: "Gas",
      iconName: <MdLocalGasStation className=" fs-3 iconContainer2" />,
    },
    {
      linkName: "Water",
      iconName: <BsDropletHalf className=" fs-3 iconContainer3" />,
    },
  ];
  return {
    successful,
    handleClose,
    handleShow,
    user,
    setUser,
    activeState,
    setActiveState,
    activeTab,
    navItems,
  };
};

export default useFirebase;
