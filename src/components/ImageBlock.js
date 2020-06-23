import React from "react";

const ImageBlock = (props) => {
  //console.log('these r aour props in image block', props)
  return(
  <img onClick={() => {props.click(props.id)}} src={props.pic} className={"col-md-3 col-sm-4 col-xs-12 pb-4 imageBlock rounded-circle"} alt={props.alt} />
);
  }
export default ImageBlock;