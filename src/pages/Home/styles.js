import styled from 'styled-components';

export const Container = styled.div`
  padding-top: 8rem;

  @media(max-width: 905px) {
    padding-top: 14rem;
  }

  @media(max-width: 705px) {
    
  }
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
    max-width: 30rem;
    height: auto;
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
    padding: 5rem 0;
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
    position: fixed;
    flex-direction: row;
    justify-content: center;
    background-color: #070722;
    border-bottom: 1px solid rgba(255, 255, 255, .2);
    top: 7.8rem;
    left: 0;
    right: 0;
    z-index: 9;

    > button {
      border: none;
      background: none;
      padding: 0;
      text-align: center;
      width: 30%;
      border-top: 4px solid transparent;
      border-bottom: 4px solid transparent;
      padding: 2rem 0;

      &:hover {
        background: 0;
      }

      &.selected {
        background: 0;
        border-color: ${props => props.color};
        border-top-color: transparent;
        
        > span + span {
          color: #fafafa;
        }
      }

      > span {
        margin: 0;
      }

      > span + span {
        color: #ccc;
      }
    }
  }
`

export const Bottom = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  margin: 4rem 0;

  > div.card {
    border: 1px solid rgba(255, 255, 255, .2);
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
    margin: 0;
  }

  @media(max-width: 705px) {
    grid-template-columns: repeat(1, 1fr);

    > div.card {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }
`