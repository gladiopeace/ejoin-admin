import styled, { createGlobalStyle, css } from 'styled-components'

export const theme = {
  primary: "#BFD600",
  backgroundPrimary: "#171717",
  backgroundSecondary: "#202020",
  backgroundMapContainer: "#111111",
  fontPrimary: "#FEFEFE",
  fontSecondary: "#424242",
  arrowColor: "#4E4E4E",
  selectButton: "#232323",
  selectButtonFont: "#fff",
  white: "#fff",
  black: "#000",
  ctaButtonColor: "#fff",
  ctaButtonBackground: "#BFD600",

  signInBackgroundColor: "#fff",
  signInForm: "#F8F8F8",
  signInInputBackgroundColor: "#EEEEEE",
  signInInputLabelColor: "#000", 
  signInInputColor: "#000"

}

export const CustomScrollbarStyles = css`
  /* width */
  ::-webkit-scrollbar {
    width: 10px;
    display: none;
  }
  /* Track */
  ::-webkit-scrollbar-track {
    background: #272727;
    border-radius: 999rem;
  }
  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.primary};
    border-radius: 999rem;
  }
  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: ${({ theme }) => theme.primary};
  }
`

export const GlobalStyles = createGlobalStyle`
  *, *:before, *:after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html {
    scroll-behavior: smooth;
    scroll-snap-type: y proximity;
    font-size: 62.5%;
  }
  body {
    line-height: 1.5;
    font-size: 1.6rem;
    background-color: ${({ theme }) => theme.backgroundPrimary};
    color: ${({ theme }) => theme.fontPrimary};
    font-family: 'Raleway', sans-serif;
    line-height: 1.5;
    ${CustomScrollbarStyles} {
        ::-webkit-scrollbar {
          display: initial;
      }
    };
  }
  a {
    text-decoration: none;
    color: ${({ theme }) => theme.primary};
  }
  ul, ol {
    list-style: none;
  }
  input, button {
    border: none;
    outline: none;
    font-size: inherit;
    font-family: inherit;
    &:focus {
      outline: none;
    }
  }
`

export const PrimaryButton = css`
    cursor: pointer;
    display: block;
    font-weight: bolder;
    background-color: ${({ theme }) => theme.ctaButtonBackground};
    color: ${({ theme }) => theme.ctaButtonColor};
    max-width: ${({ fullWidth }) => fullWidth ? "unset" : "25rem"};
    width: 100%;
    font-size: 1.8rem;
    padding: 1.5rem;
    border-radius: ${({ pill }) => pill ? "9999rem" : "1.3rem"};
    margin: ${({ center }) => center && "0 auto"};
    @media all and (max-width: 500px) {
      max-width: ${({ fullWidth }) => fullWidth ? "unset" : "20rem"};
      font-size: 1.6rem
    }
`

export const WhiteButton = css`
    cursor: pointer;
    display: block;
    font-weight: bolder;
    background-color: #fff;
    color: #000;
    max-width: ${({ fullWidth }) => fullWidth ? "unset" : "25rem"};
    width: 100%;
    font-size: 1.8rem;
    padding: 1.5rem;
    border-radius: ${({ pill }) => pill ? "9999rem" : "1.3rem"};
    margin: ${({ center }) => center && "0 auto"};
    box-shadow: 0 .3rem .6rem 0 rgba(0,0,0, 0.16);
    @media all and (max-width: 500px) {
      max-width: ${({ fullWidth }) => fullWidth ? "unset" : "20rem"};
      font-size: 1.6rem
    }
`

export const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0,0,0,0.3);
  display: flex;
  justify-content: center;
  align-items: center;
`