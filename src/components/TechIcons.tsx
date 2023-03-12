import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReact, faNodeJs, faPython, faStackOverflow, faCloudflare, faAws, faGolang } from '@fortawesome/free-brands-svg-icons'
import styled from 'styled-components';
import { FlexColumn, FlexItem, FlexRow } from './Grid';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

const Icon = styled(FontAwesomeIcon)`
transition: 0.2s;
transition-timing-function: ease-out;
&:hover {
  transform: scale(1.3);
}
`

const SvgIcon = styled.svg`
transition: 0.2s;
transition-timing-function: ease-out;
&:hover {
  transform: scale(1.2);
}
`

const icons = [
  {
    name: faReact,
    color: "#61DBFB",
    text: "React",
    link: "https://reactjs.org",
  },
  {
    name: faCloudflare,
    color: "#ff851b",
    text: "Cloudflare",
    link: "https://cloudflare.com",
  },
  {
    name: faPython,
    color: "#4B8BBE",
    text: "Python",
    link: "https://python.org",
  },
  {
    name: faAws,
    color: "#f24e1e",
    text: "AWS",
    link: "https://aws.amazon.com",
  },
  {
    name: faNodeJs,
    color: "#3c873a",
    text: "Node.JS",
    link: "https://nodejs.org",
  },
  {
    name: faGolang,
    color: "#00fcef",
    text: "Golang",
    link: "https://go.dev",
  },
  {
    name: faStackOverflow,
    color: "#F48024",
    text: "...StackOverflow.",
    link: "https://stackoverflow.com",
  },
]

const TechIcons = () => {
  return (
    <FlexColumn wrap>
      <FlexRow wrap gap={4} justifyContent="center">
        {icons.map((icon, index) => (
          <FlexItem flex={30}
            key={index}
            justifyContent="center"
          >
            <Icon
              icon={icon.name as IconDefinition}
              size="4x"
              color={icon.color}
            />
          </FlexItem>
        ))}
        <FlexItem flex={30} justifyContent="center">
          <SvgIcon aria-label="Gatsby" viewBox="0 0 28 28" width="80" height="80"><g><g fill="#ffffff"><path d="M25,14h-7v2h4.8c-0.7,3-2.9,5.5-5.8,6.5L5.5,11c1.2-3.5,4.6-6,8.5-6c3,0,5.7,1.5,7.4,3.8l1.5-1.3 C20.9,4.8,17.7,3,14,3C8.8,3,4.4,6.7,3.3,11.6l13.2,13.2C21.3,23.6,25,19.2,25,14z"></path><path d="M3,14.1c0,2.8,1.1,5.5,3.2,7.6c2.1,2.1,4.9,3.2,7.6,3.2L3,14.1z"></path></g><path d="M14,0C6.3,0,0,6.3,0,14s6.3,14,14,14s14-6.3,14-14S21.7,0,14,0z M6.2,21.8c-2.1-2.1-3.2-4.9-3.2-7.6L13.9,25 C11.1,24.9,8.3,23.9,6.2,21.8z M16.4,24.7L3.3,11.6C4.4,6.7,8.8,3,14,3c3.7,0,6.9,1.8,8.9,4.5l-1.5,1.3C19.7,6.5,17,5,14,5 c-3.9,0-7.2,2.5-8.5,6L17,22.5c2.9-1,5.1-3.5,5.8-6.5H18v-2h7C25,19.2,21.3,23.6,16.4,24.7z" fill="#663399"></path></g></SvgIcon>
        </FlexItem>
        <FlexItem flex={30} justifyContent="center">
          <SvgIcon aria-label="MongoDB" width="80" height="80" xmlns="http://www.w3.org/2000/svg" viewBox="-50 0 150 150"><g fill="none" fillRule="evenodd"><path d="M35.053 142.317l-3.783-1.293s.462-19.286-6.46-20.67c-4.613-5.353.74-227.013 17.35-.739 0 0-5.722 2.86-6.737 7.752-1.108 4.799-.37 14.95-.37 14.95z" fill="#FFF"></path><path d="M35.053 142.317l-3.783-1.293s.462-19.286-6.46-20.67c-4.613-5.353.74-227.013 17.35-.739 0 0-5.722 2.86-6.737 7.752-1.108 4.799-.37 14.95-.37 14.95z" fill="#A6A385"></path><path d="M37.084 123.676s33.13-21.779 25.377-67.09c-7.474-32.943-25.1-43.74-27.038-47.893C33.301 5.74 31.27.573 31.27.573l1.385 91.634c0 .093-2.861 28.054 4.43 31.47" fill="#FFF"></path><path d="M37.084 123.676s33.13-21.779 25.377-67.09c-7.474-32.943-25.1-43.74-27.038-47.893C33.301 5.74 31.27.573 31.27.573l1.385 91.634c0 .093-2.861 28.054 4.43 31.47" fill="#499D4A"></path><path d="M29.333 124.875S-1.767 103.65.079 66.277C1.832 28.903 23.795 10.539 28.04 7.217c2.769-2.953 2.861-4.061 3.046-7.014 1.938 4.153 1.569 62.106 1.845 68.934.83 26.3-1.476 50.756-3.598 55.738z" fill="#FFF"></path><path d="M29.333 124.875S-1.767 103.65.079 66.277C1.832 28.903 23.795 10.539 28.04 7.217c2.769-2.953 2.861-4.061 3.046-7.014 1.938 4.153 1.569 62.106 1.845 68.934.83 26.3-1.476 50.756-3.598 55.738z" fill="#58AA50"></path></g></SvgIcon>
        </FlexItem>
        <FlexItem flex={30} justifyContent="center">
          <SvgIcon fill="#2772f2" height="80" viewBox="0 0 27 26" width="80" xmlns="http://www.w3.org/2000/svg"><path clipRule="evenodd" d="m.98608 0h24.32332c.5446 0 .9861.436522.9861.975v24.05c0 .5385-.4415.975-.9861.975h-24.32332c-.544597 0-.98608-.4365-.98608-.975v-24.05c0-.538478.441483-.975.98608-.975zm13.63142 13.8324v-2.1324h-9.35841v2.1324h3.34111v9.4946h2.6598v-9.4946zm1.0604 9.2439c.4289.2162.9362.3784 1.5218.4865.5857.1081 1.2029.1622 1.8518.1622.6324 0 1.2331-.0595 1.8023-.1784.5691-.1189 1.0681-.3149 1.497-.5879s.7685-.6297 1.0187-1.0703.3753-.9852.3753-1.6339c0-.4703-.0715-.8824-.2145-1.2365-.1429-.3541-.3491-.669-.6186-.9447-.2694-.2757-.5925-.523-.9692-.7419s-.8014-.4257-1.2743-.6203c-.3465-.1406-.6572-.2771-.9321-.4095-.275-.1324-.5087-.2676-.7011-.4054-.1925-.1379-.3409-.2838-.4454-.4379-.1045-.154-.1567-.3284-.1567-.523 0-.1784.0467-.3392.1402-.4824.0935-.1433.2254-.2663.3959-.369s.3794-.1824.6269-.2392c.2474-.0567.5224-.0851.8248-.0851.22 0 .4523.0162.697.0486.2447.0325.4908.0825.7382.15.2475.0676.4881.1527.7218.2555.2337.1027.4495.2216.6475.3567v-2.4244c-.4015-.1514-.84-.2636-1.3157-.3365-.4756-.073-1.0214-.1095-1.6373-.1095-.6268 0-1.2207.0662-1.7816.1987-.5609.1324-1.0544.3392-1.4806.6203s-.763.6392-1.0104 1.0743c-.2475.4352-.3712.9555-.3712 1.5609 0 .7731.2268 1.4326.6805 1.9785.4537.546 1.1424 1.0082 2.0662 1.3866.363.146.7011.2892 1.0146.4298.3134.1405.5842.2865.8124.4378.2282.1514.4083.3162.5403.4946s.198.3811.198.6082c0 .1676-.0413.323-.1238.4662-.0825.1433-.2076.2676-.3753.373s-.3766.1879-.6268.2473c-.2502.0595-.5431.0892-.8785.0892-.5719 0-1.1383-.0986-1.6992-.2959-.5608-.1973-1.0805-.4933-1.5589-.8879z" fill="#2772f2" fillRule="evenodd"></path></SvgIcon>
        </FlexItem>
        <FlexItem flex={30} justifyContent="center">
          <SvgIcon xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 250 200" preserveAspectRatio="xMidYMid">
            <path d="M0 161.202h45.312l-14.039 42.396H0v-42.396zM0 80.6h72l-14.036 42.396H0V80.601zM0 0h98.692l-14.04 42.395H0V0zm143.349 0H256v42.395H129.312L143.349 0zM116.66 80.6H256v42.397H102.622l14.038-42.396zm-26.69 80.602H256v42.396H75.933l14.037-42.396z" fill="#F26D61" />
          </SvgIcon>
        </FlexItem>
      </FlexRow>
    </FlexColumn>
  )
}

export default TechIcons