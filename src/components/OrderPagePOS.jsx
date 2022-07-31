import React from 'react';

function OrderPagePOS(props) {
    return (
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gridGap: 20,
        }}
      >
        <div>Column 1</div>
        <div>Column 2</div>
        <div>Column 3</div>
      </div>
    );
}

export default OrderPagePOS;