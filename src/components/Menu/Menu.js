import React from 'react';
import { Header, Menu, Li, Li_Resume } from './styles';
import { Link } from 'react-scroll';


const items = [
  { name: 'Home', path: 'home' },
  { name: 'About Me', path: 'about' },
  { name: 'Experience', path: 'work' },
];

const TopMenu = ({ user }) => {
  return (
    <Header>
      <Menu>
        {items.map((i, id) => (
          <Li key={id}>
            <Link
              to={i.path}
              key={i.name}
              spy={true}
              smooth={true}
              duration={500}
            >
              {i.name}
            </Link>
          </Li>
        ))}
        <Li_Resume>
          <a href="https://drive.google.com/open?id=1EafRTLOaEbjYBgckBIfArwJmMjRC241J" target="_blank">
            View Resume
          </a>
        </Li_Resume>
      </Menu>
    </Header>
  );
};

export default TopMenu;