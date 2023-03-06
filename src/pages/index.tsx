import React from 'react';
import BasicBlocks from '../components/main-field/BasicBlocks';
import * as S from '../styles/GlobalStyel';

function main() {
	return (
		<>
			<S.Navigator />
			<S.SideBar />
			<BasicBlocks />
		</>
	);
}

export default main;
