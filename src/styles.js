import styled from 'styled-components';

export const Paragraph = styled.p`
margin: 0px 0px 15px;
text-align: left;
display: block;
margin-block-start: 1em;
margin-block-end: 1em;
margin-inline-start: 0px;
margin-inline-end: 0px;
box-sizing: inherit;
`
export const ColorBlockStart = styled.div`
width: 40%;
padding-left: 1rem;
@media (max-width: 640px) {
  max-width: 100%;
  width: 80%;
}
`;

export const DivExperience = styled.div`
 width: 40%;
padding-right: 1rem;
@media (max-width: 640px) {
  max-width: 100%;
  width: 80%;
}
`;

export const ExperienceTitle = styled.div`
 width: 100%;
 display: flex;
 justify-content: center;
@media (max-width: 640px) {
  max-width: 100%;
  width: 80%;
  padding-right: 0;
}
`;

export const ColorBlockEnd = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  text-align: center;
  color: black;
  font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
  font-size: 25px;
  font-weight: 400;
  font-style: normal;
  font-variant: normal;
  text-transform: none;
  padding-bottom: 1rem;
  padding-top: 3rem;
  padding-left:0.5rem;
  `;

export const H1 = styled.h1`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  position: relative;
  width: 100%;
  font-size: clamp(26px,5vw,32px);
  white-space: nowrap;
  font-weight: 600;
  color: #ccd6f6;
  line-height: 1.1;

     &:after {
      content: "";
      display: block;
      top: -5px;
      width: 500px;
      height: 1px;
      margin-left: 20px;
      background-color: #64ffda;
     }
  `;

export const H2 = styled.h2`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 100%;
  font-size: clamp(20px,5vw,27px);
  white-space: nowrap;
  font-weight: 600;
  color: #ccd6f6;
  line-height: 1.1;
  `;

export const H1_Revert = styled.h1`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  text-align: left;
  position: relative;
  font-size: clamp(26px,5vw,32px);
  white-space: nowrap;
  font-weight: 600;
  color: #ccd6f6;
  line-height: 1.1;

     &:before {
      content: "";
      display: block;
      top: -5px;
      width: 500px;
      height: 1px;
      margin-right: 20px;
      background-color: #64ffda;
     }

     &:after {
      content: "";
      display: block;
      top: -5px;
      width: 500px;
      height: 1px;
      margin-left: 20px;
      background-color: #64ffda;
     }

     @media (max-width: 640px) {
      max-width: 100%;
      width: 100%;
    }
  `;
