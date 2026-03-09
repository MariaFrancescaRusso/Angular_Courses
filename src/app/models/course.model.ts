export interface Course {
	id: number;
	title: string;
	description: string;
	price: number;
	date?: string;
	image?: string;
	soldOut: boolean;
	onSale: boolean;
}
