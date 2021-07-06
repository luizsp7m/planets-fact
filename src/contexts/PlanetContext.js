import React, { createContext, useEffect, useState } from 'react';

import planets from '../data/planets';

const PlanetContext = createContext();

function PlanetProvider({ children }) {
  const [navItemSelected, setNavItemSelected] = useState(0);
  const [planet, setPlanet] = useState(planets[navItemSelected]);

  useEffect(() => {
    setPlanet(planets[navItemSelected]);
  }, [navItemSelected]);

  return (
    <PlanetContext.Provider value={{ navItemSelected, setNavItemSelected, planet }}>
      { children}
    </PlanetContext.Provider>
  );
}

export { PlanetContext, PlanetProvider };