import React from 'react';
import Header from '../../components/Header';

import { Container, Wrapper, Main, Grid, PlanetImage, Sidebar, Description, Tabs, Bottom } from './styles';

function Home() {
  return (
    <Container>
      <Header />

      <Wrapper>
        <Main>
          <Grid>
            <PlanetImage>
              <img src='https://ccreusat-planets-fact.vercel.app/images/planet-venus.svg' />
            </PlanetImage>

            <Sidebar>
              <Description>
                <h1>Title</h1>
                <p>Mercury is the smallest planet in the Solar System and the closest to the Sun. Its orbit around the Sun takes 87.97 Earth days, the shortest of all the Sun's planets. Mercury is one of four terrestrial planets in the Solar System, and is a rocky body like Earth.</p>
              </Description>

              <Tabs>
                <button>
                  <span>01</span>
                  <span>Overview</span>
                </button>

                <button>
                  <span>02</span>
                  <span>Internal Structure</span>
                </button>

                <button>
                  <span>03</span>
                  <span>Surface Geology</span>
                </button>
              </Tabs>
            </Sidebar>
          </Grid>

          <Bottom>
            <div className="card">
              <h5>Rotation Time</h5>
              <h1>58.6 days</h1>
            </div>

            <div className="card">
              <h5>Revolution Time</h5>
              <h1>58.6 days</h1>
            </div>

            <div className="card">
              <h5>Radius</h5>
              <h1>58.6 days</h1>
            </div>

            <div className="card">
              <h5>Average Temp.</h5>
              <h1>58.6 days</h1>
            </div>
          </Bottom>
        </Main>
      </Wrapper>
    </Container>
  );
}

export default Home;