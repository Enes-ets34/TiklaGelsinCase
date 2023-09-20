
export interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: number;
  ingredients: string[];
  quantity?: number;
}
