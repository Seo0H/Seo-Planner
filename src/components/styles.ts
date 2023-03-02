import styled from 'styled-components';

export const StyledBasicBlock = styled.input<{ active: boolean }>`
	cursor: pointer;
	box-sizing: border-box;
	width: 100px;
	height: 30px;
	left: 27px;
	margin: 5px;
	border: 1px solid #d9d9d9;
	background-color: ${props => props.active && `#CBE7FF`};
`;
