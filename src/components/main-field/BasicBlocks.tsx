import React from 'react';
import { useState, useEffect, useCallback } from 'react';
import Block from './Block';
import { BlockTypes } from './types';
import * as S from './styles';

const initialPlanBlockTemplet = [
	{
		key: 0,
		time: 7,
		active: false,
	},
];
const initialDoBlockTemplet = [
	{
		key: 0,
		time: 7,
		active: false,
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

	//Shift List 선택을 위한 마지막 선택 idx 저장 state
	const [lastClickIdx, setLastClickIdx] = useState(-1);

	//한시간 -> 2block
	// 7:00 ~ 24:00 -> 17시간 -> 34 block 나와야 함.
	// 나중에 이것도 유저가 선택 할 수 있게 하면 좋을 것 같다.
	const blockCount = 34;

	// 처음 한번만 랜더링
	useEffect(() => {
		let pushVal = [];
		let pushMemoVal = [];
		for (let i = 1; i < blockCount; i++) {
			pushVal.push({
				key: i,
				time: 7 + i / 2,
				active: false,
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
			const element = e.target as HTMLInputElement; // element? inputelement? 머가 좋은거지

			const parentElement = element.parentElement;
			const clickBoxID = parseInt(e.currentTarget.id);

			if (parentElement?.className.includes(BlockTypes.PLAN)) {
				const copyArr = [...planActive];

				// isActive가 true로 바뀌는 경우 일때만 shift key가 작동해야 한다.
				// 중간에 isActive가 true이면 그대로 true로 나둬야 한다.
				// 나중에 코드를 좀 더 가독성있게 바꿀 수 있을 법 하다.
				if (e.shiftKey) {
					for (let i = lastClickIdx; i <= clickBoxID; i++) {
						copyArr[i] = {
							...copyArr[i],
							active: true,
						};
					}
				} else {
					copyArr[clickBoxID] = {
						...copyArr[clickBoxID],
						active: !copyArr[clickBoxID].active,
					};
				}
				setPlanActive(copyArr);
			} else if (parentElement?.className.includes(BlockTypes.DONE)) {
				const copyArr = [...doActive];

				if (e.shiftKey) {
					for (let i = lastClickIdx; i <= clickBoxID; i++) {
						copyArr[i] = {
							...copyArr[i],
							active: true,
						};
					}
				} else {
					copyArr[clickBoxID] = {
						...copyArr[clickBoxID],
						active: !copyArr[clickBoxID].active,
					};
				}
				setDoActive(copyArr);
			}

			//shift list select를 위해 마지막 클릭한 idx 저장
			setLastClickIdx(clickBoxID);
		},
		[planActive, doActive, lastClickIdx],
	);

	const onChange = useCallback((e: React.ChangeEvent) => {}, []);

	return (
		<S.MainContainer>
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
		</S.MainContainer>
	);
};

export default BasicBlocks;
