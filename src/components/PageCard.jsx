import { useState } from "react";

function PageCard({title, desc, buttonText, theme}) {
    const [isHovered, setIsHovered] = useState(false);
  return (
    <div 
        className="page-card rounded d-flex flex-column justify-content-start align-items-start"
        style={{
            border: `1px solid ${theme}`,
            backgroundColor: `${isHovered?theme:'white'}`,
            color: `${!isHovered?'black':'white'}`,
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
    >
        <h4>{title}</h4>
        <p className="desc">{desc}</p>
        <button type="button" className="btn btn-outline-primary">{buttonText}</button>
    </div>
  )
}

export default PageCard