import React from 'react';
import {Header as CommonHeader} from '@twinlify/walrus';
import {NavLink} from 'react-router-dom';
import {PATHS} from '../platform';

// -----------------------------------------------------------------------------

// import GithubCorner from './github-corner';

// -----------------------------------------------------------------------------

const Header = () => {
  return (
    <CommonHeader subtitle="Platform demo">
      <NavLink exact to={PATHS.demo1}>
        Demo1
      </NavLink>
      <NavLink exact to={PATHS.demo2}>
        Demo2
      </NavLink>
      <NavLink exact to={PATHS.demo3}>
        Demo3
      </NavLink>
      <a href="https://docs.twinlify.com/documentation" target="__new">
        Documentation
      </a>
      <a
        href="https://github.com/twinlify/external-platform-demo"
        target="__new"
      >
        Github
      </a>
    </CommonHeader>
  );
};

// -----------------------------------------------------------------------------

export default Header;
