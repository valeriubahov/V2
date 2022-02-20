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
align-items: center;
justify-content: center;

padding:0;

@media (max-width: 640px) {
  max-width: 100%;
  display:flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin:0;
}
`;

export const Paragraph = styled.p`
margin: 0px 0px 15px;
text-align: center;
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

export const Footer = styled.footer`
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    flex-direction: column;
    height: auto;
    min-height: 70px;
    padding: 15px;
    text-align: center;
`;

export const StyledLink = styled.a`
    padding: 10px;
    display: inline-block;
    text-decoration: none;
    text-decoration-skip-ink: auto;
    color: inherit;
    position: relative;
    transition: all 0.25s cubic-bezier(0.645,0.045,0.355,1);

    &:hover {
        color: #64ffda;
    }
`;