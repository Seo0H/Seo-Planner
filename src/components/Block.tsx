import React from 'react';
import * as S from './styles';
import { BlockProps } from './BasicBlocks';

const Block: React.FC<BlockProps> = ({ id, active, onClick }) => {
	return <S.StyledBasicBlock id={id} active={active} onClick={onClick} />;
};

export default Block;
