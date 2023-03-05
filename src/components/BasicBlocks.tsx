import React from 'react';
import { useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import Block from './Block';
import { BlockTypes } from './types';
import * as S from './styles';

//한시간 -> 2block
// 7:00 ~ 24:00 -> 17시간 -> 34 block 나와야 함.
// 나중에 이것도 유저가 선택 할 수 있게 하면 좋을 것 같다.
const initialPlanBlockTemplet = [
	{
		key: 0,
		isActive: false,
	},
];
const initialDoBlockTemplet = [
	{
		key: 0,
		isActive: false,
	},
];

//몇자 이상 넘어가면 다음줄로 넘어가게 처리해야...
const initialTextMemoInput = [
	{
		key: 0,
		text: '',
	},
];

const BasicBlocks = () => {
	const [planActive, setPlanActive] = useState(initialPlanBlockTemplet);
	const [doActive, setDoActive] = useState(initialDoBlockTemplet);
	const [textMemoInput, setTextMemoInput] = useState(initialTextMemoInput);

	// 처음 한번만 랜더링
	useEffect(() => {
		let pushVal = [];
		let pushMemoVal = [];
		for (let i = 1; i <= 20; i++) {
			pushVal.push({
				key: i,
				isActive: false,
			});

			pushMemoVal.push({
				key: i,
				text: '',
			});
		}
		setDoActive(doActive.concat(pushVal));
		setPlanActive(planActive.concat(pushVal));
		setTextMemoInput(textMemoInput.concat(pushMemoVal));
	}, []);

	const onClick = useCallback(
		(e: React.MouseEvent) => {
			e.preventDefault();

			const element = e.target as Element;
			const parentElement = element.parentElement;

			const clickBoxID = parseInt(e.currentTarget.id);
			if (parentElement?.className.includes(BlockTypes.PLAN)) {
				const clickBoxIdx = planActive.findIndex(i => i.key === clickBoxID);
				const copyArr = [...planActive];
				copyArr[clickBoxIdx] = {
					...copyArr[clickBoxIdx],
					isActive: !copyArr[clickBoxIdx].isActive,
				};
				setPlanActive(copyArr);
			} else if (parentElement?.className.includes(BlockTypes.DONE)) {
				const clickBoxIdx = doActive.findIndex(i => i.key === clickBoxID);
				const copyArr = [...doActive];
				copyArr[clickBoxIdx] = {
					...copyArr[clickBoxIdx],
					isActive: !copyArr[clickBoxIdx].isActive,
				};
				setDoActive(copyArr);
			}
		},
		[planActive, doActive],
	);

	return (
		<S.MainContainer>
			<S.BlockContainer>
				<S.ListWrapper className={BlockTypes.PLAN} style={{ gridArea: 'block,' }}>
					{planActive.map(el => (
						<Block key={el.key} id={el.key.toString()} active={el.isActive} onClick={onClick} />
					))}
				</S.ListWrapper>
				<S.ListWrapper>
					{textMemoInput.map(el => (
						<S.TextMemoInput key={el.key} style={{ gridArea: 'line' }} autoComplete="off" />
					))}
				</S.ListWrapper>
			</S.BlockContainer>

			<S.BlockContainer>
				<S.ListWrapper className={BlockTypes.DONE} style={{ gridArea: 'block' }}>
					{doActive.map(el => (
						<Block key={el.key} id={el.key.toString()} active={el.isActive} onClick={onClick} />
					))}
				</S.ListWrapper>
				<S.ListWrapper>
					{textMemoInput.map(el => (
						<S.TextMemoInput key={el.key} style={{ gridArea: 'line' }} autoComplete="off" />
					))}
				</S.ListWrapper>
			</S.BlockContainer>
		</S.MainContainer>
	);
};

export default BasicBlocks;
