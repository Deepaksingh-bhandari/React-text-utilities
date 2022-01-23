import React from 'react';

const Alerts = (props) => {
  return (<div style={{height:'20px'}}>
  {props?.show && <div className="alert alert-success alert-dismissible fade show" role="alert">
  {props.children}
  {/* <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button> */}
</div>}
  </div>);
};
export default Alerts;