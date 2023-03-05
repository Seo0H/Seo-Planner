import * as S from './styles';
import { BlockProps } from './types';

const Block = ({ id, form: { active = false, time }, onClick }: BlockProps) => {
	return <S.StyledBasicBlockInput id={id} active={active} onClick={onClick} />;
};

export default Block;
