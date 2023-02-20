import { keyframes } from "styled-components"

export const cardAnimation = keyframes`
0% {
  transform: translateY(20px);
  opacity: 0.0
}

100% {
  transform: translateY(0);
  opacity: 1.0;
}
`

export const backgroundShift = keyframes`
0% {
  background-position: left top;
}

25% {
  background-position: right bottom;
}

50% {
  background-position: right top;
}

75% {
  background-position: left bottom;
}

100% {
  background-position: left top;
}
`


export const navAnimation = keyframes`
0% {
  width: 0%;
  opacity: 0.0;
}

100% {
  width: 100%;
  opacity: 1.0;
}
`

export const navCloseAnimation = keyframes`
0% {
  width: 100%;
  opacity: 1.0;
}

100% {
  width: 0%;
  opacity: 0.0;
}
`

export const navNullAnimation = keyframes`
0% {
  width: 0px;
}

100% {
  width: 0px;
}
`

