import styled from 'styled-components';

export const MainContainer = styled.div`
	display: flex;
	position: relative;

	left: 268px;
	top: 64px;

	overflow: hidden scroll;
	scroll-behavior: smooth;
`;

export const BlockContainer = styled.div`
	display: grid;
	grid-template-areas: 'block line';
`;

export const StyledBasicBlockInput = styled.input<{ active: boolean }>`
	cursor: pointer;
	display: block;
	width: 100px;
	height: 30px;
	margin: 7px;
	padding: 0;

	border: 1px solid #d9d9d9;
	background-color: ${props => props.active && `#CBE7FF`};

	font-weight: 600;
	text-align: center;
`;

export const TextMemoInput = styled.input`
	display: flex;
	width: 354px;
	height: 30px;
	margin: 7px;
	padding: 0;

	border: 1px solid white;
	border-bottom: 1px solid #d9d9d9;
`;

export const ListWrapper = styled.div``;
