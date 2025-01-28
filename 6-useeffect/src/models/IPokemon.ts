export interface IPokemon {
  name: string;
  id: number;
  sprites: ISprite;
}

interface ISprite {
  front_default: string;
}
