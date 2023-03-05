import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

    *{
        font-family: 'Pretendard';
        font-size: 15px;
    }

    body {
        font-family: 'Pretendard';
        width: 100%;
        height: 100%;
        padding: 0%;
        overflow: hidden auto;
    }

    #root{
        height: 100%;
    }

    h1{
        font-weight: 700;
        font-size: 2rem;
    }

    input{
        outline: none;
    }
`;

//임시로 위치만 표기해 둔 스타일 요소들
export const Navigator = styled.nav`
	position: fixed;
	align-items: center;
	-webkit-box-pack: start;
	z-index: 2;

	left: 0px;
	top: 0px;
	width: 100%;
	height: 64px;

	background-color: #f4f4f4;
`;

export const SideBar = styled.div`
	position: fixed;

	left: 0px;
	top: 65px;
	width: 268px;
	height: 855px;

	background-color: #bdbdbd;
`;
