export interface BlockForms {
	key: number;
	active: boolean;
	time: number;
}
export interface BlockProps {
	id: string;
	form: BlockForms;
	onClick: (e: React.MouseEvent) => void;
}

export enum BlockTypes {
	PLAN = 'PLAN',
	DONE = 'DONE',
}
