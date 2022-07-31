import React from 'react';

function SidebarPOS(props) {
    return (
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gridGap: 20,
        }}
      >
        <div>
          <img
            id="marseeysIco"
            src="images/marseeys-icon.png"
            alt="Marseeys icon"
          />
        </div>
      </div>
    );
}

export default SidebarPOS;