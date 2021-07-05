import React from 'react';

import { Container, NavItemContainer } from './styles';

import { FaBars } from 'react-icons/fa';

import planets from '../../data/planets';

function Header() {
  function toggle() {
    const navbarNav = document.querySelector('.navbar-nav');
    navbarNav.classList.toggle('toggled');
  }

  return (
    <Container>
      <div className="navbar">
        <div className="navbar-title">The Planets</div>

        <div className="navbar-nav">
          {planets.map(planet => (
            <NavItem 
              key={planet.id} 
              name={planet.name} 
              color={planet.color}
            />
          ))}
        </div>

        <div className="hamburguer" onClick={toggle}>
          <FaBars size={24} color={'#fafafa'} />
        </div>
      </div>
    </Container>
  );
}

function NavItem({ name, color }) {
  return (
    <NavItemContainer color={color}>
      {name}
    </NavItemContainer>
  )
}

export default Header;