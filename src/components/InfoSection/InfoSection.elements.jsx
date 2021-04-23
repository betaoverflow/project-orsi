import styled from 'styled-components';

export const InfoSec = styled.div`
  color: #fff;
  padding: 80px 0;
  background: ${({ lightBg }) => (lightBg ? '#fff' : '#101522')};
`;

export const InfoRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  flex-direction: ${({ imgStart }) => (imgStart ? 'row-reverse' : 'row')};
`;

export const InfoColumn = styled.div`
  flex: 1;
  max-width: 50%;
  flex-basis: 50%;
  @media screen and (max-width: 768px) {
    max-width: 100%;
    flex-basis: 100%;
    display: flex;
    justify-content: center;
  }
`;

export const TextWrapper = styled.div`
  @media screen and (max-width: 768px) {
    padding-bottom: 65px;
  }
`;

export const ImgWrapper = styled.div`
  display: flex;
  justify-content: ${({ start }) => (start ? 'flex-start' : 'flex-end')};
`;

export const TopLine = styled.div`
  color: ${({ lightTopLine }) => (lightTopLine ? '#a9b3c1' : '#4B59F7')};
  // font-size: 18px;
  // line-height: 16px;
  // font-weight: 700;
  // letter-spacing: 1.4px;
  // margin-bottom: 16px;
`;

export const Img = styled.img`
  border: 0;
  max-width: 100%;
  vertical-align: middle;
  display: inline-block;
  max-height: 500px;
  padding-right:30px;
  padding-left:30px;
  @media screen and (min-width: 768px) {
    width: 80%;
  }
`;

export const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: 48px;
  line-height: 1.1;
  font-weight: 600;
  color: ${({ lightText }) => (lightText ? '#f7f8fa' : '#1c2237')};
`;

export const Subtitle = styled.p`
  margin-bottom: 35px;
  font-size: 22px;
  line-height: 2;
  color: ${({ lightTextDesc }) => (lightTextDesc ? '#a9b3c1' : '#1c2237')};
`;

export const Container = styled.div`
  z-index: 1;
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  padding-right: 50px;
  padding-left: 50px;
  @media screen and (max-width: 991px) {
    padding-right: 30px;
    padding-left: 30px;
  }
`;

export const Button = styled.button`
border: 0;
	left: 0;
	margin-top: 3em;
	padding: 10px 1em;
	color: #fff;
	font-size: 18px;
	font-weight: 600;
	border-radius: 5px;
	background-color: royalblue;
	border: 2px solid royalblue;
	transition: all 240ms ease-in-out;
	cursor: pointer;
	box-shadow: 2px 2px 25px #6797e7;
	&:hover {
		color: #fff;
		background-color: royalblue;
	}
    @media screen and (max-width: 580px){
        font-size: 15px;
    }
`;