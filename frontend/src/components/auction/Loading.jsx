import React from "react";
import logo from '../../assets/로고.svg';
import styled, {keyframes} from "styled-components";

const StyledLoadingWrapper = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: rgba(44, 49, 60, 0.5);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  z-index: 2;
  top: 0;
`

const StyledLoadingDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const CircleDiv = styled.div`
  position: relative;
  z-index: 1;
  height: 200px;
  width: 200px;
  border-radius: 50%;
  border: 3px solid white;
`

const logoMove = keyframes`
  0% {
    padding-bottom: 0px;
    transform: rotate(0deg);
  }

  33% {
    padding-bottom: 20px;
    transform: rotate(-5deg);
  }

  66% {
    padding-bottom: 10px;
    transform: rotate(5deg);
  }

  100% {
    padding-bottom: 0px;
    transform: rotate(0deg);
  }

`

const LogoImg = styled.img`
  width: 41%;
  height: 100px;
  position: absolute;
  z-index: 0;
  padding-bottom: 0px;
  animation: ${logoMove} 1.5s linear infinite;
`

const loading = keyframes`
  0% {
    content: "Loading";
  }

  33% {
    content: "Loading.";
  }

  66% {
    content: "Loading..";
  }

  100% {
    content: "Loading...";
  }
`

const LoadingMessageDiv = styled.div`
  ::after {
    content: "Loading";
    position: absolute;
    color: white;
    text-align: center;
    transform: translate(-55px, 0px);
    animation: ${loading} 1.5s linear infinite;
    font-size: 28px;
    font-weight: bold;
  }
`

const Loading = (props) => {
  return (
    <div>
      <StyledLoadingWrapper>
        <StyledLoadingDiv>
          <CircleDiv onClick={props.enterAuctionRoom}></CircleDiv>
          <LogoImg src={logo} alt=""></LogoImg>
        </StyledLoadingDiv>
        <LoadingMessageDiv></LoadingMessageDiv>
      </StyledLoadingWrapper>
    </div>
  )
}

export default Loading;