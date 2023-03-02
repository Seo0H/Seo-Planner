import React from 'react';
import { useState, useEffect, useCallback } from 'react';
import Block from './Block';

//한시간 -> 2block
// 7:00 ~ 24:00 -> 17시간 -> 34 block 나와야 함.
// 나중에 이것도 유저가 선택 할 수 있게 하면 좋을 것 같다.
const initialBlockTemplet = [
	{
		key: 0,
		isActive: false,
	},
];

export type BlockProps = {
	id: string;
	key: number;
	active: boolean;
	onClick: (e: React.MouseEvent) => void;
};

const BasicBlocks = () => {
	const [active, setActive] = useState(initialBlockTemplet);

	useEffect(() => {
		let pushVal = [];
		for (let i = 1; i <= 34; i++) {
			pushVal.push({
				key: i,
				isActive: false,
			});
		}
		setActive(active.concat(pushVal));
	}, []);

	const onClick = useCallback(
		(e: React.MouseEvent) => {
			e.preventDefault();
			const thisId = parseInt(e.currentTarget.id);
			const thisIdx = active.findIndex(i => i.key === thisId);
			const copyArr = [...active];
			copyArr[thisIdx] = { ...copyArr[thisIdx], isActive: !copyArr[thisIdx].isActive };
			setActive(copyArr);
		},
		[active],
	);

	return (
		<>
			<h1>basicBlocks</h1>
			{active.map(el => (
				<Block key={el.key} id={el.key.toString()} active={el.isActive} onClick={onClick} />
			))}
		</>
	);
};

export default BasicBlocks;
