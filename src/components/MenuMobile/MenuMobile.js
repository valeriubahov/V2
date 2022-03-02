import React from 'react'
import { User32, Portfolio32, Document32, Home32 } from '@carbon/icons-react'
import { Link } from 'react-scroll';
import { Container, NavWrapper, NavButton, NavLink, NavResume } from './styles'

const items = [
  { name: 'Home', path: 'home', icon: Home32 },
  { name: 'About Me', path: 'about', icon: User32 },
  { name: 'Experience', path: 'work', icon: Portfolio32 },
];
const MenuMobile = () => {
  return (
    <Container>
      <NavWrapper>
        <NavLink
          element={Link}
          to={'home'}
          key={'Home'}
          spy={true}
          smooth={true}
          duration={500}
        >
          <NavButton>
            <Home32 aria-label="Home" className="my-custom-class" />
          </NavButton>
        </NavLink>

        <NavLink
          element={Link}
          to={'about'}
          key={'About Me'}
          spy={true}
          smooth={true}
          duration={500}
        >
          <NavButton>
            <User32 aria-label="About Me" className="my-custom-class" />
          </NavButton>
        </NavLink>

        <NavLink
          element={Link}
          to={'work'}
          key={'Work Experience'}
          spy={true}
          smooth={true}
          duration={500}
        >
          <NavButton>
            <Portfolio32 aria-label="About Me" className="my-custom-class" />
          </NavButton>
        </NavLink>


        <NavResume href={`https://drive.google.com/file/d/1zJ3g94vAaxWuhOHUP-ZFk7LdzE890b0q/view?usp=sharing`}>
          <NavButton>
            <Document32 aria-label="About Me" className="my-custom-class" />

          </NavButton>
        </NavResume>
      </NavWrapper>
    </Container>
  )
}

export default MenuMobile;