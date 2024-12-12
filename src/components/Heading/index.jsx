import React from "react";
import "./index.css";
const typer= {
    "1":"h1",
    "2":"h2",
    "3":"h3",
    "4":"h4",
    "5":"h5",
    "6":"h6"
}
export function Heading(props){
    const {size="1" ,additionalClassName="", children} = props
    const tag = typer[size]
    const elen = React.createElement(tag,{className:additionalClassName},children);
    return elen;
}