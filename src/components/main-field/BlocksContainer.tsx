import * as S from './styles';
import Block from './Block';
import { BlocksContainerProps, BlockTypes } from '../../shared/types';

function BlocksContainer({
	planActive,
	doActive,
	textMemoInput,
	onClick,
	onChange,
}: BlocksContainerProps) {
	return (
		<S.BlockContainer>
			<S.TimeContainor style={{ gridArea: 'time' }}>
				{planActive.map(el =>
					Number.isInteger(el.time) ? <div key={el.key}> {el.time}</div> : <div key={el.key}></div>,
				)}
			</S.TimeContainor>
			<div className={BlockTypes.PLAN}>
				{planActive.map(el => (
					<Block
						form={el}
						key={el.key}
						id={el.key.toString()}
						onClick={onClick}
						onChange={onChange}
					/>
				))}
			</div>
			<div className={BlockTypes.DONE}>
				{doActive.map(el => (
					<Block
						form={el}
						key={el.key}
						id={el.key.toString()}
						onClick={onClick}
						onChange={onChange}
					/>
				))}
			</div>
			<div>
				{textMemoInput.map(el => (
					<S.TextMemoInput key={el.key} id={el.key.toString()} onChange={onChange} />
				))}
			</div>
		</S.BlockContainer>
	);
}

export default BlocksContainer;
