import React from 'react';
import styled from 'styled-components';
import { Button, Space } from 'antd';

const HeroGrid = styled.div`
background: rgb(221,247,243);
background: linear-gradient(90deg, rgba(221,247,243,1) 0%, rgba(3,120,152,1) 100%);display: grid;
grid-template-columns: 3fr 4fr;
grid-column-gap: 100px;
grid-row-gap: 0px;
`
const HeroCol = styled.div`
grid-column: span 1;
height: 80vh;
`
const HeroTextBlock = styled.div`
margin-top: 20vh;
margin-left: 10vh;
`
const HeroTitle = styled.h1`
font-size: 64px;
line-height: 1.2em;
`
const HeroSubtitle = styled.h2`
font-size: 48px;
line-height: 1.2em;
color: 8f6f4f;`

const Hero = () => {

    return (
        <HeroGrid >
            <HeroCol>
                <HeroTextBlock>
                <HeroTitle>
                    William Krakow
                </HeroTitle>
                <HeroSubtitle>
                    Developer | Designer | Writer 
                </HeroSubtitle>
                <Space>
                <Button size="large">Projects</Button>
                <Button type="text" size="large" href="#">Contact me</Button>
                </Space>
                </HeroTextBlock>
            </HeroCol>
        </HeroGrid>
    )
}

export default Hero