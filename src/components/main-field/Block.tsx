import * as S from './styles';
import { BlockProps } from '../../shared/types';

const Block = ({ id, form: { active = false }, onClick, onChange }: BlockProps) => {
	return <S.StyledBasicBlockInput id={id} active={active} onClick={onClick} onChange={onChange} />;
};

export default Block;
