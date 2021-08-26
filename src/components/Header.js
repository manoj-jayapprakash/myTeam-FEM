import { useState } from 'react';

import './Header.css';
import { Link } from 'react-router-dom';

import { NavMenu } from './UI/NavMenu';

export const Header = () => {
  return (
    <header className="header">
      <div className="container header__content">
        <NavMenu position="header" />
      </div>
    </header>
  );
};
