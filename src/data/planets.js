import planetMercury from '../assets/planet-mercury.svg';
import structureMercury from '../assets/planet-mercury-internal.svg';
import geologyMercury from '../assets/geology-mercury.png';

import planetVenus from '../assets/planet-venus.svg';
import structureVenus from '../assets/planet-venus-internal.svg';
import geologyVenus from '../assets/geology-venus.png';

import planetEarth from '../assets/planet-earth.svg';
import structureEarth from '../assets/planet-earth-internal.svg';
import geologyEarth from '../assets/geology-earth.png';

import planetMars from '../assets/planet-mars.svg';
import structureMars from '../assets/planet-mars-internal.svg';
import geologyMars from '../assets/geology-mars.png';

import planetJupiter from '../assets/planet-jupiter.svg';
import structureJupiter from '../assets/planet-jupiter-internal.svg';
import geologyJupiter from '../assets/geology-jupiter.png';

import planetSaturn from '../assets/planet-saturn.svg';
import structureSaturn from '../assets/planet-saturn-internal.svg';
import geologySaturn from '../assets/geology-saturn.png';

import planetUranus from '../assets/planet-uranus.svg';
import structureUranus from '../assets/planet-uranus-internal.svg';
import geologyUranus from '../assets/geology-uranus.png';

import planetNeptune from '../assets/planet-neptune.svg';
import structureNeptune from '../assets/planet-neptune-internal.svg';
import geologyNeptune from '../assets/geology-neptune.png';

const planets = [{
  id: 0,
  name: 'Mercury',
  color: 'hsl(194, 48%, 49%)',
  overview: "Mercury is the smallest planet in the Solar System and the closest to the Sun. Its orbit around the Sun takes 87.97 Earth days, the shortest of all the Sun's planets. Mercury is one of four terrestrial planets in the Solar System, and is a rocky body like Earth.",
  structure: "Mercury appears to have a solid silicate crust and mantle overlying a solid, iron sulfide outer core layer, a deeper liquid core layer, and a solid inner core. The planet's density is the second highest in the Solar System at 5.427 g/cm3 , only slightly less than Earth's density.",
  geology: "Mercury's surface is similar in appearance to that of the Moon, showing extensive mare-like plains and heavy cratering, indicating that it has been geologically inactive for billions of years. It is more heterogeneous than either Mars's or the Moon’s.",
  rotation: "58.6 days",
  revolution: "87.97 Days",
  radius: "2,439.7 KM",
  temperature: "430 °c",
  images: {
    overview: planetMercury,
    structure: structureMercury,
    geology: geologyMercury,
  }
}, {
  id: 1,
  name: 'Venus',
  color: 'hsl(33, 82%, 61%)',
  overview: "Venus is the second planet from the Sun. It is named after the Roman goddess of love and beauty. As the brightest natural object in Earth's night sky after the Moon, Venus can cast shadows and can be, on rare occasions, visible to the naked eye in broad daylight.",
  structure: "The similarity in size and density between Venus and Earth suggests they share a similar internal structure: a core, mantle, and crust. Like that of Earth, Venusian core is most likely at least partially liquid because the two planets have been cooling at about the same rate.",
  geology: "Much of the Venusian surface appears to have been shaped by volcanic activity. Venus has several times as many volcanoes as Earth, and it has 167 large volcanoes that are over 100 km (60 mi) across. The only volcanic complex of this size on Earth is the Big Island of Hawaii.",
  rotation: "243 Days",
  revolution: "224.7 Days",
  radius: "6,051.8 KM",
  temperature: "471°c",
  images: {
    overview: planetVenus,
    structure: structureVenus,
    geology: geologyVenus,
  }
}, {
  id: 2,
  name: 'Earth',
  color: 'hsl(263, 67%, 51%)',
  overview: "Third planet from the Sun and the only known planet to harbor life. About 29.2% of Earth's surface is land with remaining 70.8% is covered with water. Earth's distance from the Sun, physical properties and geological history have allowed life to evolve and thrive.",
  structure: "Earth's interior, like that of the other terrestrial planets, is divided into layers by their chemical or physical (rheological) properties. The outer layer is a chemically distinct silicate solid crust, which is underlain by a highly viscous solid mantle.",
  geology: "The total surface area of Earth is about 510 million km2. The continental crust consists of lower density material such as the igneous rocks granite and andesite. Less common is basalt, a denser volcanic rock that is the primary constituent of the ocean floors.",
  rotation: "0.99 Days",
  revolution: "365.26 Days",
  radius: "6,371 KM",
  temperature: "16°c",
  images: {
    overview: planetEarth,
    structure: structureEarth,
    geology: geologyEarth,
  }
}, {
  id: 3,
  name: 'Mars',
  color: 'hsl(10, 63%, 51%)',
  overview: "Mars is the fourth planet from the Sun and the second-smallest planet in the Solar System, being larger than only Mercury. In English, Mars carries the name of the Roman god of war and is often referred to as the \"Red Planet\".",
  structure: "Like Earth, Mars has differentiated into a dense metallic core overlaid by less dense materials. Scientists initially determined that the core is at least partially liquid. Current models of its interior imply a core consisting primarily of iron and nickel with about 16–17% sulfur.",
  geology: "Mars is a terrestrial planet whose surface consists of minerals containing silicon and oxygen, metals, and other elements that typically make up rock. The surface is primarily composed of tholeiitic basalt, although parts are more silica-rich than typical basalt.",
  rotation: "1.03 Days",
  revolution: "1.88 Years",
  radius: "3,389.5 KM",
  temperature: "-28°c",
  images: {
    overview: planetMars,
    structure: structureMars,
    geology: geologyMars,
  }
}, {
  id: 4,
  name: 'Jupiter',
  color: 'hsl(2, 68%, 53%)',
  overview: "Jupiter is the fifth planet from the Sun and the largest in the Solar System. It is a gas giant with a mass two and a half times that of all the other planets in the Solar System combined, but less than one-thousandth the mass of the Sun.",
  structure: "When the Juno arrived in 2016, it found that Jupiter has a very diffuse core that mixes into its mantle. A possible cause is an impact from a planet of about ten Earth masses a few million years after Jupiter's formation, which would have disrupted an originally solid Jovian core.",
  geology: "The best known feature of Jupiter is the Great Red Spot, a persistent anticyclonic storm located 22° south of the equator. It is known to have existed since at least 1831, and possibly since 1665.",
  rotation: "9.93 Hours",
  revolution: "11.86 Years",
  radius: "69,911 KM",
  temperature: "-108°c",
  images: {
    overview: planetJupiter,
    structure: structureJupiter,
    geology: geologyJupiter,
  }
}, {
  id: 5,
  name: 'Saturn',
  color: 'rgb(203, 80, 32)',
  overview: "Saturn is the sixth planet from the Sun and the second-largest in the Solar System, after Jupiter. It is a gas giant with an average radius of about nine and a half times that of Earth. It only has one-eighth the average density of Earth.",
  structure: "Despite consisting mostly of hydrogen and helium, most of Saturn's mass is not in the gas phase, because hydrogen becomes a non-ideal liquid when the density is above 0.01 g/cm3, which is reached at a radius containing 99.9% of Saturn's mass.",
  geology: "The outer atmosphere of Saturn contains 96.3% molecular hydrogen and 3.25% helium by volume. The planet's most famous feature is its prominent ring system, which is composed mostly of ice particles with a smaller amount of rocky debris and dust.",
  rotation: "10.8 Hours",
  revolution: "29.46 Years",
  radius: "58,232 KM",
  temperature: "-138°c",
  images: {
    overview: planetSaturn,
    structure: structureSaturn,
    geology: geologySaturn,
  }
}, {
  id: 6,
  name: 'Uranus',
  color: 'hsl(169, 73%, 44%)',
  overview: "Uranus is the seventh planet from the Sun. Its name is a reference to the Greek god of the sky, Uranus according to Greek mythology, was the great-grandfather of Ares. It has the third-largest planetary radius and fourth-largest planetary mass in the Solar System.",
  structure: "The standard model of Uranus's structure is that it consists of three layers: a rocky (silicate/iron–nickel) core in the centre, an icy mantle in the middle and an outer gaseous hydrogen/helium envelope. The core is relatively small, with a mass of only 0.55 Earth masses.",
  geology: "The composition of Uranus's atmosphere is different from its bulk, consisting mainly of molecular hydrogen and helium. The helium molar fraction, i.e. the number of helium atoms per molecule of gas, is 0.15±0.03 in the upper troposphere.",
  rotation: "17.2 Hours",
  revolution: "84 Years",
  radius: "25,362 KM",
  temperature: "-195°c",
  images: {
    overview: planetUranus,
    structure: structureUranus,
    geology: geologyUranus,
  }
}, {
  id: 7,
  name: 'Neptune',
  color: 'hsl(222, 87%, 56%)',
  overview: "Neptune is the eighth and farthest-known Solar planet from the Sun. In the Solar System, it is the fourth-largest planet by diameter, the third-most-massive planet, and the densest giant planet. It is 17 times the mass of Earth, more massive than its near-twin Uranus.",
  structure: "Neptune's internal structure resembles that of Uranus. Its atmosphere forms about 5% to 10% of its mass and extends perhaps 10% to 20% of the way towards the core. Increasing concentrations of methane, ammonia and water are found in the lower regions.",
  geology: "Neptune's atmosphere is 80% hydrogen and 19% helium. A trace amount of methane is also present. Prominent absorption bands of methane exist at wavelengths above 600 nm, in the red and infrared portion of the spectrum.",
  rotation: "16.08 Hours",
  revolution: "164.79 Years",
  radius: "24,622 KM",
  temperature: "-201°c",
  images: {
    overview: planetNeptune,
    structure: structureNeptune,
    geology: geologyNeptune,
  }
}];

export default planets;