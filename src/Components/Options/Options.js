import React from "react";
import { Container } from "react-bootstrap";
import "./Options.css";
import useAuth from "../../Hooks/useAuth";

const Options = () => {
  const { activeTab, navItems,activeState } = useAuth();
  // console.log(activeState)
  return (
    <div id="recharge" className="optionsContainer">
      <Container>
          <div className="py-2">
          {navItems.slice(0,6).map((item, i) => (
            <div key={i} className="border-bottom">
              <div className={`option text-black ${activeState === item.linkName ? 'bg-white ' : ''}`}>
                <button
                  onClick={() => activeTab(item.linkName)}
                  className={'linkOption rounded-top'}
                >
                  {item.iconName}
                  <span className={`ms-2 ${activeState === item.linkName ? 'text-black' : ''}`}>{item.linkName}</span>
                </button>
              </div>
            </div>
          ))}
          </div>
      </Container>
    </div>
  );
};

export default Options;
