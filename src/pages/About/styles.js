import styled from 'styled-components';

export const ProfileLink = styled.li`
  margin-right: 0.5rem;
  margin-bottom: 0.5rem;
  display: inline-block;
  font-size: 18px;
`;

export const ProgressBar = styled.div`
margin-right: 1rem;
margin-bottom: 1rem;
display: inline-block;
width: 100%;
`;

export const Scrollable = styled.div`
overflow-x: none;
overflow-y: hidden;
white-space: nowrap;
color: white;
width: 100%;
height: 100%;
font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
font-weight: 400;
font-style: normal;
font-variant: normal;
text-transform: none;
padding-bottom: 1rem;
padding-top: 3rem;
padding-left:0.5rem;
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

export const CenterDiv = styled.div`
display: flex;
align-items: center;
justify-content: center;
`;

export const HomeDiv = styled.div`
overflow: hidden;
height: 100%;
min-height: 560px;
width: 100%;
margin-right: auto;
margin-left: auto;
max-width: 83%;

display:flex;
flex-direction: row;
align-items: center;
justify-content: space-evenly;

padding-top: 8rem;
padding-bottom: 2rem;

@media (max-width: 640px) {
  max-width: 100%;
  display:flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin:0;
  padding-top: 3rem;
}
`;

export const ImageBlock = styled.div`
display: flex;
justify-content:center;
padding-top:6rem;
// padding-right:3rem;

@media (max-width: 640px) {
  max-width: 100%;
  padding-top:0;
  padding-right:0;
}
`;

export const ImageOfMe = styled.img`
 height:300px;
 object-fit: cover; 
 opacity: 1;
 border: 5px solid #64ffda;
 border-radius: 10px;
 @media (max-width: 640px) {
  height:250px;
}
`;

export const SpanColored = styled.span`
  color: #64ffda;
`;


export const SkillsList = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, minmax(140px, 200px));
  gap: 0px 10px;
  padding: 0px;
  margin: 20px 0px 0px;
  overflow: hidden;
  list-style: none;

  li {
    position: relative;
    margin-bottom: 10px;
    padding-left: 20px;
    font-family: "SF Mono","Fira Code","Fira Mono","Roboto Mono",monospace;
    font-size: 13px;
    
    &:before {
      content: "▹";
    position: absolute;
    left: 0px;
    color: #64ffda;
    font-size: 14px;
    line-height: 12px;
    }
  }
`;