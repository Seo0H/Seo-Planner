export interface BlockForms {
	key: number;
	active: boolean;
	time: number;
}

export interface TextMemoForms {
	key: number;
	text: string;
}
export interface BlockProps {
	id: string;
	form: BlockForms;
	onClick: (e: React.MouseEvent) => void;
}

export interface BlocksContainerProps {
	planActive: BlockForms[];
	doActive: BlockForms[];
	textMemoInput: TextMemoForms[];
	onClick: (e: React.MouseEvent) => void;
}

export enum BlockTypes {
	PLAN = 'PLAN',
	DONE = 'DONE',
}
