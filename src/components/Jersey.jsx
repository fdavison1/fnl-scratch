import React from "react";
import styled from 'styled-components'


const Jersey = props => {
    return (
    <JerseyWrapper   
     version="1.1" 
     id="IconsRepoEditor"
     xmlns="http://www.w3.org/2000/svg" 
     xmlnsxlink="http://www.w3.org/1999/xlink"
     x="0px" y="0px" 
     viewBox="-49.6 -49.6 595.20 595.20" 
     styles="--darkreader-inline-fill:#000000; --darkreader-inline-stroke:#e8e6e3;" 
     xmlspace="preserve"
     width="100px" 
     height="100px" 
     fill="#ffffff"
     stroke="#000000"
     stroke-width="0" 
     ata-darkreader-inline-fill="" 
     data-darkreader-inline-stroke=""
     >
    <svg>
        
    <g id="IconsRepo_bgCarrier"></g>
    <path fill={props.color} 
    d='M427.504,26.048L313.776,0.2L184,0L68.496,26.048C28.168,35.208,0,70.504,0,111.856v94.384l96,24V496h40h224h40V230.248 l96-24v-94.392C496,70.504,467.832,35.208,427.504,26.048z M302.44,16c-4,18.256-16.984,59.512-54.44,71.64 C210.68,75.552,197.624,34.272,193.584,16H302.44z M136,480h-24V168H96v45.752l-80-20v-15.784l62.264,13.84l3.472-15.616 L16,161.584v-49.728c0-33.84,23.048-62.712,56.04-70.208L177.512,17.68c0.904,4.448,2.328,10.296,4.456,16.864L77.8,64.304 l4.4,15.384l105.56-30.16c4.6,10.216,10.992,20.864,19.688,30.256C164.784,96.304,136,137.272,136,184V480z M344,480H152V184 c0-42.96,28.384-80.256,69.416-92.056c7.048,4.928,15.032,9.072,24.384,11.744l2.2,0.632l2.2-0.632 c9.352-2.672,17.344-6.816,24.384-11.744C315.616,103.744,344,141.04,344,184V480z M480,161.584l-65.736,14.608l3.472,15.616 L480,177.968v15.784l-80,20V168h-16v312h-24V184c0-46.728-28.784-87.696-71.448-104.208c8.696-9.392,15.088-20.04,19.688-30.256 l105.56,30.16l4.4-15.384l-104.168-29.76c2.128-6.568,3.56-12.416,4.456-16.864L423.96,41.656 c32.992,7.496,56.04,36.36,56.04,70.2V161.584z' />
    <g>
    <text x="155" y="250" font-family="Consolas" font-size="150" fill="#000000">{props.number}</text>
    {/* <rect x="175" y="180" width="150" height="190" ></rect> */}
    </g> 
   </svg>

   </JerseyWrapper>

    )
  }


export default Jersey

const JerseyWrapper = styled.svg`
  transform: ${props => (props.rightHelmet ? 'scale(-1, 1)' : null)};
  margin-right: 5000px;
  color: #000000`