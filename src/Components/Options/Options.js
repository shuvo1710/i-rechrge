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
          <div className="py-2 d-flex align-items-center justify-content-between">
          {navItems.map((item, i) => (
            <div key={i}>
              <div className={`option text-black ${activeState === item.linkName ? 'border border-danger ' : ''}`}>
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
      </Container>
    </div>
  );
};

export default Options;
