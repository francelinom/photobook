export interface Foto {
  id: number;
  postDate: Date;
  url: string;
  description: string;
  allowComments: boolean;
  comments: string;
  likes: number;
  userId: number;
}

export type Fotos = Array<Foto>;
