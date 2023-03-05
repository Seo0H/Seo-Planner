import * as S from './styles';
import Block from './Block';
import { BlocksContainerProps, BlockTypes } from './types';

function BlocksContainer({ planActive, doActive, textMemoInput, onClick }: BlocksContainerProps) {
	return (
		<S.BlockContainer>
			<S.TimeContainor style={{ gridArea: 'time' }}>
				{planActive.map(el => (Number.isInteger(el.time) ? <div>{el.time}</div> : <div></div>))}
			</S.TimeContainor>
			<div className={BlockTypes.PLAN}>
				{planActive.map(el => (
					<Block form={el} key={el.key} id={el.key.toString()} onClick={onClick} />
				))}
			</div>
			<div className={BlockTypes.DONE}>
				{doActive.map(el => (
					<Block form={el} key={el.key} id={el.key.toString()} onClick={onClick} />
				))}
			</div>
			<div>
				{textMemoInput.map(el => (
					<S.TextMemoInput key={el.key} />
				))}
			</div>
		</S.BlockContainer>
	);
}

export default BlocksContainer;
