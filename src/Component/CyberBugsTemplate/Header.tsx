import React from "react";

type Props = {};

const Header = (props: Props) => {
  return (
    <div>
      <div className="header">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb" style={{ backgroundColor: "white" }}>
            <li className="breadcrumb-item">Project</li>
            <li className="breadcrumb-item">CyberLearn</li>
            <li className="breadcrumb-item active" aria-current="page">
              Cyber Board
            </li>
          </ol>
        </nav>
      </div>
    </div>
  );
};

export default Header;
