import styled from 'styled-components';

export const Container = styled.div`
  background: #070722;
  border-bottom: 1px solid rgba(255, 255, 255, .1);
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 10;

  > div.navbar {
    width: 90%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;

    > div.navbar-title {
      color: #fafafa;
      font-family: 'Antonio', sans-serif;
      font-size: 2.85rem;
      text-transform: uppercase;
    }

    > div.navbar-nav {
      display: flex;
      gap: 4rem;
    }

    > div.hamburguer {
      display: none;
    }

    @media(max-width: 905px) {
      flex-direction: column;

      > div.navbar-title {
        margin-top: 3rem;
      }
    }

    @media(max-width: 705px) {
      flex-direction: row;

      > div.navbar-title {
        margin-top: 0;
        padding: 2rem 0;
      }

      > div.navbar-nav {
        display: none;
      }

      > div.hamburguer {
        display: block;
      }

      > div.navbar-nav.toggled {
        display: flex;
        flex-direction: column;
        gap: 0;
        padding: 0;
        position: absolute;
        background: #070722;
        top: 7.5rem;
        left: 0; right: 0;
        padding: 2rem 1rem;
      }
    }
  }
`;

export const NavItemContainer = styled.div`
  text-transform: uppercase;
  font-size: 1.1rem;
  color: #ccc;
  font-weight: bold;
  transition: .25s;
  padding: 3rem 0;
  border-top: 4px solid transparent;
  border-bottom: 4px solid transparent;
  cursor: pointer;
  position: relative;

  &:hover, &.selected {
    color: #fafafa;
    border-top-color: ${props => props.color};
  }

  @media(max-width: 905px) {
    &:hover, &.selected {
      border-top-color: transparent;
      border-bottom-color: ${props => props.color};
    }
  }

  @media(max-width: 705px) {
    padding: 0;
    color: #fafafa;
    padding: 2rem 4rem;
    border-bottom: 1px solid rgba(255, 255, 255, .1);

    &:first-child {
      border-top: 1px solid rgba(255, 255, 255, .1);
    }

    &::before {
      content: '';
      height: 1.5rem;
      width: 1.5rem;
      left: 1rem;
      top: 1.7rem;
      background: ${props => props.color};
      position: absolute;
      border-radius: 50%;
    }
  }
`