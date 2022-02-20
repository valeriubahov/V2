import styled from 'styled-components';


export const Header = styled.div`
  @media (max-width: 640px) {
    display: none;
  }
  position: fixed;
  background-color: rgba(10, 25, 47, 0.85);
  width: 100%;
  @media (max-width: 640px) {
    max-width: 100%;
  }
  z-index: 1;
  margin-left: auto;
  margin-right: auto;
  flex-direction: column;
  overflow: hidden;
  align-items: center;
  justify-content: center;
  left: 0;
  right: 0;
`;

export const Menu = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 70px;
  position: relative;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  padding-inline-start: 40px;
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
   background-color: rgba(10, 25, 47, 0.85);
  border-bottom: 1px solid white;

  &:hover {
    border-bottom: 1px solid  #64ffda;
  }
`;

export const Label = styled.label`
  margin-top: 0;
  -webkit-transition-property: none;
  transition-property: none;
  font-family: Archivo,sans-serif;
  font-size: 14px;
  line-height: 140%;
  font-weight: 600;
  letter-spacing: .1em;
  text-transform: uppercase;
`;

export const Li = styled.li`
 a {
  font-family: Archivo,sans-serif;
  font-size: 14px;
  line-height: 140%;
  font-weight: 600;
  letter-spacing: .1em;
  text-transform: uppercase;
  display: inline-block;
  position: relative;
  color: #0087ca;
  display: block;
  color: white;
  cursor: pointer;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;

  &:hover {
    color: #64ffda;
  }

  &:hover:after {
    transform: scaleX(1);
    transform-origin: bottom;
  }

  &:after {
    cursor: pointer;
    content: '';
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: #64ffda;
    transform-origin: bottom;
    transition: transform 0.25s ease-out;
  }
}
`;


export const Li_Resume = styled.li`
    border: 1px solid  #64ffda;
    border-radius: 4px;
 a {
  font-family: Archivo,sans-serif;
  font-size: 14px;
  line-height: 140%;
  font-weight: 600;
  letter-spacing: .1em;
  text-transform: uppercase;
  display: inline-block;
  position: relative;
  color: #0087ca;
  display: block;
  color: white;
  cursor: pointer;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;

  &:hover {
    color: #64ffda;

  }

  &:hover:after {
    transform: scaleX(1);
    transform-origin: bottom;
  }

}
`;