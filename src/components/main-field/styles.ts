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
	grid-template-areas: 'time block block line';
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
export const TimeContainor = styled.div`
	div {
		display: block;
		text-align: end;
		height: 30px;
		margin: 7px 1px 7px 10px;
		padding-top: 0.1px;
		border: 1px solid white;
		font-size: 0.9rem;
		font-weight: 600;
		line-height: 1rem;
		color: #a1a1a1;
	}
	display: inline-block;
`;
