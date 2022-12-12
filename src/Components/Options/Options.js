import React from "react";
import "./Options.css";
import useAuth from "../../Hooks/useAuth";

const Options = () => {
  const { activeTab, navItems,activeState } = useAuth();
  
  return (
    <div id="recharge" className="optionsContainer">
      
          <div className="container px-0 ">
          <div className="d-flex align-items-center justify-content-around bgOption">
          {navItems.map((item, i) => (
            <div key={i}>
            <div className={`option ${activeState === item.linkName ? 'activeStateColor' : ''}`}>
              <button
                onClick={() => activeTab(item.linkName)}
                className={'linkOption rounded-top'}
              >
                {item.iconName}
                <span className={`text-center d-block ${activeState === item.linkName ? 'text-black' : ''}`}>{item.linkName}</span>
              </button>
            </div>
          </div>
          ))}
          </div>
          </div>
    
    </div>
  );
};

export default Options;
