import styled from 'styled-components';

export const Container = styled.div`
  padding-top: 8rem;
`;

export const Wrapper = styled.div`

`;

export const Main = styled.div`
  width: 90%;
  max-width: 1440px;
  margin: 5rem auto;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  align-items: center;

  @media(max-width: 905px) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`

export const PlanetImage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 0;

  > img:first-child {
    width: 100%;
    max-width: 35rem;
    height: auto;

    -webkit-animation: spin 60s linear infinite;
    -moz-animation: spin 60s linear infinite;
    animation: spin 60s linear infinite;

    @-moz-keyframes spin { 100% { -moz-transform: rotate(360deg); } }
    @-webkit-keyframes spin { 100% { -webkit-transform: rotate(360deg); } }
    @keyframes spin { 100% { -webkit-transform: rotate(360deg); transform:rotate(360deg); } }
  }

  > img.geology {
    position: absolute;
    width: 100%;
    max-width: 13rem;
    bottom: -3rem;
    height: auto;
  }
`

export const Sidebar = styled.div`
  @media(max-width: 905px) {
    display: grid;
    grid-template-columns: 3fr 2fr;
    gap: 5rem;
    align-items: center;
  }

  @media(max-width: 705px) {
    grid-template-columns: repeat(1, 1fr);
    text-align: center;
  }
`

export const Description = styled.div`
  > h1 {
    color: #fafafa;
    font-size: 2.2rem;
  }

  > p {
    color: #fafafa;
    font-size: 1.35rem;
    line-height: 2.7rem;
    margin: 2rem 0;
  }

  @media(max-width: 905px) {
    > h1 {
      font-size: 2rem;
    }

    > p {
      font-size: 1rem;
      margin: 2rem 0 0 0;
    }
  }
`

export const Tabs = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  > button {
    outline: 0;
    border: 0;
    padding: 1.8rem;
    background: none;
    border: 1px solid rgba(255, 255, 255, .4);
    cursor: pointer;
    text-align: left;
    transition: all .25s;

    &:hover {
      background: rgba(255, 255, 255, .2);
    }

    &.selected {
      background-color: ${props => props.color};
      border-color: ${props => props.color};
    }

    > span {
      color: rgba(255, 255, 255, .2);
      margin-right: 2rem;
      font-weight: 500;
      font-size: 1.05rem;
      font-weight: bold;
      letter-spacing: .1rem;
    }

    > span + span {
      color: #fafafa;
      font-size: 1.05rem;
      text-transform: uppercase;
      font-weight: bold;
    }
  }

  @media(max-width: 905px) {
    > button {
      padding: 1rem;

      > span:first-child {
        display: none;
      }

      > span + span {
        font-size: 1rem;
      }
    }
  }

  @media(max-width: 705px) {
    display: none;
  }
`

export const Bottom = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  margin: 4rem 0;

  > div.card {
    border: 1px solid rgba(255, 255, 255, .2);;
    padding: 2rem;

    > h5 {
      color: #ccc;
      text-transform: uppercase;
      margin-bottom: 2rem;
    }

    > h1 {
      color: #fafafa;
      text-transform: uppercase;
    }
  }

  @media(max-width: 905px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media(max-width: 705px) {
    grid-template-columns: repeat(1, 1fr);
  }
`