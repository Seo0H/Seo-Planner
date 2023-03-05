export interface BlockProps {
	id: string;
	key: number;
	active: boolean;
	// className: 'plan' | 'do';
	onClick: (e: React.MouseEvent) => void;
}

export enum BlockTypes {
	PLAN = 'PLAN',
	DONE = 'DONE',
}
