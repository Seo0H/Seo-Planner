export interface BlockForms {
	key: number;
	active: boolean;
	time: number;
	text: string;
}

interface InputHnadler {
	onClick: (e: React.MouseEvent) => void;
	onChange: (e: React.ChangeEvent) => void;
}

export interface BlockProps extends InputHnadler {
	id: string;
	form: BlockForms;
}

export interface BlocksContainerProps extends InputHnadler {
	planActive: BlockForms[];
	doActive: BlockForms[];
	textMemoInput: TextMemoForms[];
}

export interface TextMemoForms {
	key: number;
	text: string;
}

export enum BlockTypes {
	PLAN = 'PLAN',
	DONE = 'DONE',
}
