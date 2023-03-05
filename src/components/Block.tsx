import * as S from './styles';
import { BlockProps } from './types';

const Block = ({ id, active = false, onClick }: BlockProps) => {
	return <S.StyledBasicBlockInput id={id} active={active} onClick={onClick} />;
};

export default Block;
