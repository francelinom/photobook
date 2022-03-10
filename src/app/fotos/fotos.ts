export interface Foto {
  id: number;
  postDate: Date;
  url: string;
  description: string;
  allowComments: boolean;
  likes: number;
  userId: number;
}

export type Fotos = Array<Foto>;
