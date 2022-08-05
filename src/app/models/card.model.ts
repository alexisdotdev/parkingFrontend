

export interface CreateCard extends Omit<Card, 'id' | 'category'> {
  categoryId: number;
}


export interface Card {
  id: string;
  address: string;
  amenities: Array<string>;
  score: number;
  price: number
  type: string;
  image?: string;
  description: string;
}

export interface CardDTO extends Omit<Card, 'id'> {

}
