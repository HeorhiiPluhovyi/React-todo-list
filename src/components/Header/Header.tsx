import React, { FC } from 'react';
import './Header.css';

interface HeaderProps {
  todoCount: number;
}

const Header: FC<HeaderProps> = ({ todoCount }) => {
  return (
    <div className="header">
      <h1>
        Todo list <b>{todoCount}</b> task(s)
      </h1>
    </div>
  );
};

export default Header;