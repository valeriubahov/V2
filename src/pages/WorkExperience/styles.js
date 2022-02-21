import styled from 'styled-components';

export const MainContainer = styled.div`
overflow: hidden;
height: 100%;
min-height: 560px;
width: 100%;
margin-right: auto;
margin-left: auto;
max-width: 83%;

display:flex;
flex-direction: column;
align-items: flex-end;
justify-content: space-evenly;

padding-top: 3rem;

@media (max-width: 640px) {
  max-width: 100%;
  display:flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin:0;
}
`;

export const Unscrollable = styled.div`
align-items: center;
justify-content: center;
color: #8892b0;
width: 100%;
 height: 100%;
font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
font-weight: 400;
font-style: normal;
font-variant: normal;
text-transform: none;
padding-bottom: 1rem;
padding-top: 3rem;
@media (max-width: 640px) {
  padding-top: 1.5rem;
  height: 100%;
}
`;

export const DivExperience = styled.div`
display:flex;
flex-direction: row;
align-items: center;
justify-content: center;
color: #8892b0;
width: 100%;
height: 100%;
font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
font-weight: 400;
font-style: normal;
font-variant: normal;
text-transform: none;
@media (max-width: 640px) {
  padding-top: 1.5rem;
  height: 100%;
  flex-direction: column;
}
`;


export const WorkItem = styled.li`
  color: #8892b0;
  font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
  font-size: 20px;
  font-weight: 400;
  font-style: normal;
  font-variant: normal;
  text-transform: none;
`;

export const Paragraph = styled.p`
margin: 0px 0px 15px;
text-align: left;
display: block;
margin-block-start: 1em;
margin-block-end: 1em;
margin-inline-start: 0px;
margin-inline-end: 0px;
box-sizing: inherit;
font-size: 18px;
color: #8892b0;
font-family: "Calibre","Inter","San Francisco","SF Pro Text",-apple-system,system-ui,sans-serif;
line-height: 1.3;
-webkit-font-smoothing: antialiased;

@media (max-width: 640px) {
  text-align: center;F
}
`;

export const ParagraphCentered = styled.p`
margin: 0px 0px 15px;
text-align: center;
display: block;
margin-block-start: 1em;
margin-block-end: 1em;
margin-inline-start: 0px;
margin-inline-end: 0px;
box-sizing: inherit;
font-size: 22px;
font-weight: 500;
line-height: 1.3;
color: #ccd6f6;
`;

export const ParagraphDate = styled.p`
margin: 0px 0px 15px;
text-align: center;
font-size: 15px;
display: block;
margin-block-start: 1em;
margin-block-end: 1em;
margin-inline-start: 0px;
margin-inline-end: 0px;
box-sizing: inherit;
color: #a8b2d1;
font-family: "SF Mono","Fira Code","Fira Mono","Roboto Mono",monospace;
margin: 0;
`;



export const ExperienceContainer = styled.div`
display: flex;
justify-content: center;
flex-direction: column;
width: 100%;
height: 100%;
@media (max-width: 640px) {
  max-width: 100%;
  padding-top:0;
  padding-right:0;
}
`;

export const SpanColored = styled.span`
  color: #64ffda;
`;


export const InfoDiv = styled.div`
 width: 40%;
padding-right: 1rem;
@media (max-width: 640px) {
  max-width: 100%;
  width: 80%;
}
`;

export const DescriptionDiv = styled.div`
 width: 40%;
padding-right: 1rem;
@media (max-width: 640px) {
  max-width: 100%;
  width: 80%;
}
`;