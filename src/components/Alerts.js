import React from 'react';

export const Alerts = (props) => {
  return (<>
  {props?.show && <div className="alert alert-success alert-dismissible fade show" role="alert">
  {props.children}
  {/* <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button> */}
</div>}
  </>);
};
