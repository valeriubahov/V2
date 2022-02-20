import React from 'react';
import { useLocation } from 'react-router-dom';
import { Header, MainDiv, H1, H2, H3, DivRight, EmailDiv, EmailLink, DivLeft, ContactUl, LiLink, AnimatedDiv, Arrow } from './styles';
import { SocialIcon } from 'react-social-icons';
import { TypeAnimation } from "./TypeAnimation";


const UserHeader = ({ user }) => {
  const location = useLocation();
  return (
    <Header isHome={location.pathname !== '/'}>
      <MainDiv>
        <H1>Hi, my name is</H1>
        <H2>{user.basics.name}.</H2>
        <H3>I love to code things</H3>
        <H3>with</H3>
        <AnimatedDiv>
          <TypeAnimation className="typeanimation" />
        </AnimatedDiv>
      </MainDiv>

      <DivRight>
        <EmailDiv>
          <EmailLink href="mailto:bahovvaleriu@gmail.com">bahovvaleriu@gmail.com</EmailLink>
        </EmailDiv>
      </DivRight>

      <DivLeft>
        <ContactUl>
          {user.basics.profiles.map((profile, i) => (
            <LiLink key={profile.network}>
              {i !== 0 && ''}
              <SocialIcon className='social-icon-hover' bgColor='#8892b0' url={profile.url} style={{ height: 25, width: 25 }} />
            </LiLink>
          ))}
        </ContactUl>
      </DivLeft>

      <Arrow>
        <span></span>
        <span></span>
        <span></span>
      </Arrow>
    </Header>
  );
};

export default UserHeader;