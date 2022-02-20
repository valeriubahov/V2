import React from 'react';
import Menu from '../Menu';
import MobileMenu from '../MenuMobile';

import { StyledContent } from './styles';

const Layout = ({ user, children }) => {
  return (
    <>
      <MobileMenu user={user} />
      <Menu user={user} />
      <StyledContent>
        <div>{children}</div>
      </StyledContent>
    </>
  );
};

export default Layout;