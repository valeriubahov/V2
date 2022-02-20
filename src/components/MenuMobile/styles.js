import styled from 'styled-components';
import { Link } from 'react-scroll';

export const Container = styled.div`
  display: none;
  @media (max-width: 640px) {
    display: block;
  }
`;

export const NavWrapper = styled.div`
  display: flex;
  justify-content: center;
  position: fixed;
  width: 100vw;
  top: 0;
  left: 0;
  z-index: 99999;
`;

export const NavLink = styled(Link)`
  width: 100%;
`;

export const NavResume = styled.a`
  width: 100%;
`;

export const NavButton = styled.button`
  width: 100%;
  height: 100%;
  justify-content: center;
  background-color: #0a192f;
  border: 0px;
    border-bottom: 1px solid white;
`;