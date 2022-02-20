import styled from 'styled-components';

export const Header = styled.div`
  display: ${({ isHome }) => (isHome ? 'none' : 'flex')};
  position:relative;
  flex-direction: column;
  color: #1a1d1e;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
  width: 100%;
  background-position: center;
  @media (max-width: 640px) {
    max-width: 100%;
  }
margin-left: auto;
margin-right: auto;
position: relative;
display: flex;
flex-direction: column;
overflow: hidden;
align-items: center;
justify-content: center;

  @media (max-width: 640px) {
    display: ${({ isHome }) => (isHome ? 'none' : 'flex')};
    background-size: cover;
  }
`;


export const MainDiv = styled.div`
margin: auto;
width: 100%;
line-height: 30px;
vertical-align: middle;
text-align: center;
`;

export const H1 = styled.h1`
    color: #64ffda;
    font-family: "SF Mono","Fira Code","Fira Mono","Roboto Mono",monospace;
    font-size: clamp(20px,5vw,24px);
    font-weight: 400;
    line-height: 1.1;
`;

export const H2 = styled.h2`
  margin: 0px;
  font-size: clamp(40px, 8vw, 80px);
    font-weight: 600;
    color: #ccd6f6;
    line-height: 1.1;
    font-family: "Calibre","Inter","San Francisco","SF Pro Text",-apple-system,system-ui,sans-serif;
`;

export const H3 = styled.h3`

    color: #8892b0;
    line-height: 0.9;
    margin: 15px 15px;
    font-size: clamp(40px, 8vw, 80px);
    font-weight: 600;
`;


export const P = styled.p`
letter-spacing: .01em;
font-size: clamp(16px,5vw,20px);
line-height: 1.3;
color: #8892b0;
text-align:center;
margin: 20px 0px 0px;
margin-left: auto;
    margin-right: auto;
    width: 75%;
font-family: "Calibre","Inter","San Francisco","SF Pro Text",-apple-system,system-ui,sans-serif;
`;


export const DivRight = styled.div`
  width: 40px;
  position: fixed;
  bottom: 0px;
  left: auto;
  right: 40px;
  z-index: 10;
  color: #a8b2d1;
  @media (max-width: 640px) {
    display: none;
  }

  @media (max-width: 840px) {
    right: 10px;
  }
`;

export const DivLeft = styled.div`
  width: 40px;
  position: fixed;
  bottom: 0px;
  left: auto;
  left: 40px;
  z-index: 10;
  color: #a8b2d1;
  @media (max-width: 640px) {
    display: none;
  }

  @media (max-width: 840px) {
    left: 10px;
  }
`;

export const EmailDiv = styled.div`
  display: flex;
  flex-direction: column;
  -webkit-box-align: center;
  align-items: center;
  position: relative;
  &:after {
    content: "";
    display: block;
    width: 1px;
    height: 90px;
    margin: 0px auto;
    background-color: #ccd6f6;
  }
`;

export const ContactUl = styled.ul`
  display: flex;
  flex-direction: column;
  -webkit-box-align: center;
  align-items: center;
  position: relative;
  margin:0;
  padding:0;
  &:after {
    content: "";
    display: block;
    width: 1px;
    height: 90px;
    margin: 0px auto;
    background-color: #ccd6f6;
  }
  &:hover {
    color: #64ffda;
    transition: all 0.5s cubic-bezier(0.645,0.045,0.355,1);
  }
`;

export const EmailLink = styled.a`
  margin: 20px auto;
  text-decoration: none;
  padding: 10px;
  font-family: "SF Mono","Fira Code","Fira Mono","Roboto Mono",monospace;
  font-size: 14px;
  line-height: 18px;
  letter-spacing: 0.2em;
  -webkit-writing-mode: vertical-rl;
  writing-mode: vertical-rl;
  color: #8892b0;

  &:hover {
    color: #64ffda;
    transition: all 0.5s cubic-bezier(0.645,0.045,0.355,1);
    font-size: 14.5px;
  }
`;

export const LiLink = styled.li`
  margin-bottom: 0.5rem;
  display: inline-block;
  font-size: 18px;
  padding:10px;
`;

export const AnimatedDiv = styled.div`
display: flex;
gap: 10rem;
justify-content: center;
align-items: center;
flex-wrap: wrap;
`;

export const Arrow = styled.div`
position: absolute;
bottom: 0%;
left: 50%;
transform: translate(-50%,-50%);
span {
  display: block;
  width: 30px;
  height: 30px;
  border-bottom: 5px solid #64ffda;
  border-right: 5px solid #64ffda;
  transform: rotate(45deg);
  // margin: -10px;
  animation: animate 2s infinite;
}
span:nth-child(2){
  animation-delay: -0.2s;
}
span:nth-child(3){
  animation-delay: -0.4s;
}

@keyframes animate {
  0%{
      opacity: 0;
      transform: rotate(45deg) translate(-20px,-20px);
  }
  50%{
      opacity: 1;
  }
  100%{
      opacity: 0;
      transform: rotate(45deg) translate(20px,20px);
  }
}
`;


