import React,{useState} from "react";
import "./Options.css";
import useAuth from "../../Hooks/useAuth";
import { BiDotsHorizontalRounded } from "react-icons/bi";

const Options = () => {
  const { activeTab, navItems, activeState } = useAuth();
  const [showOption,setShowOption] = useState(false);


  return (
    <>
      <div id="recharge" className="optionsContainer">
        <div className="container px-0">
          <div className="d-flex align-items-center justify-content-around bgOption">
            {navItems.slice(0, 8).map((item, i) => (
              <>
                <div key={i} className="d-flex">
                  <div className={`option ${activeState === item?.linkName ? 'activeStateColor' : ''}`}>
                    <button
                      onClick={() => activeTab(item?.linkName)}
                      className={'linkOption rounded-top'}
                    >
                      {item?.iconName}
                      <span className={`text-center d-block ${activeState === item?.linkName ? 'text-black' : ''}`}>{item.linkName}</span>
                    </button>
                  </div>
                </div>
              </>
            ))}
            <div className="p-0 m-0 position-relative">
              <button className= "linkOption" onClick={()=> setShowOption(!showOption)}><BiDotsHorizontalRounded/></button>
              <div className={`moreButton ${showOption ? "show-option" :""}`}>
                <ul>
                  {
                    navItems.slice(8,navItems.length).map((moreItem, i)=>
                    <div className={`option ${activeState === moreItem?.linkName ? 'activeStateColor' : ''}`}>
                    <button
                      onClick={() => activeTab(moreItem?.linkName)}
                      className={'linkOption rounded-top'}
                    >
                      {moreItem?.iconName}
                      <span className={`text-center d-block ${activeState === moreItem?.linkName ? 'text-black' : ''}`}>{moreItem.linkName}</span>
                    </button>
                  </div>
                    )
                  }
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Options;
