import React, { useContext, useState } from 'react';
import Header from '../../components/Header';

import { PlanetContext } from '../../contexts/PlanetContext';

import {
  Container,
  Wrapper,
  Main,
  Grid,
  PlanetImage,
  Sidebar,
  Description,
  Tabs,
  Bottom,
  TabsMobile
} from './styles';

function Home() {
  const [tab, setTab] = useState(1);

  const { planet } = useContext(PlanetContext);

  return (
    <Container>
      <Header />

      <Wrapper>
        <Main>
          <Grid>
            <PlanetImage>
              {tab === 1 ? (
                <img src={planet.images.overview} alt='Overview' />
              ) : (
                tab === 2 ? (
                  <img src={planet.images.structure} alt='Structure' />
                ) : (
                  <>
                    <img src={planet.images.overview} alt='Overview' />
                    <img src={planet.images.geology} alt='Geology' className={'geology'} />
                  </>
                )
              )}
            </PlanetImage>

            <Sidebar>
              <Description>
                <h1>{planet.name}</h1>
                <p>{tab === 1 ? planet.overview : tab === 2 ? planet.structure : planet.geology}</p>
              </Description>

              <Tabs color={planet.color}>
                <button onClick={() => setTab(1)} className={tab === 1 && 'selected'}>
                  <span>01</span>
                  <span>Overview</span>
                </button>

                <button onClick={() => setTab(2)} className={tab === 2 && 'selected'}>
                  <span>02</span>
                  <span>Internal Structure</span>
                </button>

                <button onClick={() => setTab(3)} className={tab === 3 && 'selected'}>
                  <span>03</span>
                  <span>Surface Geology</span>
                </button>
              </Tabs>
            </Sidebar>
          </Grid>

          <Bottom>
            <div className="card">
              <h5>Rotation Time</h5>
              <h1>{planet.rotation}</h1>
            </div>

            <div className="card">
              <h5>Revolution Time</h5>
              <h1>{planet.revolution}</h1>
            </div>

            <div className="card">
              <h5>Radius</h5>
              <h1>{planet.radius}</h1>
            </div>

            <div className="card">
              <h5>Average Temp.</h5>
              <h1>{planet.temperature}</h1>
            </div>
          </Bottom>
        </Main>
      </Wrapper>
    </Container>
  );
}

export default Home;