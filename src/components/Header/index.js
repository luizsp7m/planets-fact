import React, { useContext, useEffect } from 'react';

import { Container, NavItemContainer } from './styles';

import { FaBars } from 'react-icons/fa';

import planets from '../../data/planets';

import { PlanetContext } from '../../contexts/PlanetContext';

function Header() {
  const { navItemSelected } = useContext(PlanetContext);

  function toggle() {
    const navbarNav = document.querySelector('.navbar-nav');
    // const body = document.body;
    // body.style.overflow = 'hidden';
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
              id={planet.id}
              name={planet.name}
              color={planet.color}
              selected={planet.id === navItemSelected}
              toggle={toggle}
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

function NavItem({ id, name, color, selected, toggle }) {
  const { setNavItemSelected } = useContext(PlanetContext);

  return (
    <NavItemContainer
      color={color}
      className={selected && 'selected'}
      onClick={() => {
        setNavItemSelected(id);
        toggle();
      }}
    >
      {name}
    </NavItemContainer>
  )
}

export default Header;