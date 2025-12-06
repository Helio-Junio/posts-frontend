// src/types/Post.ts
export interface Post {
  id: number;
  titulo: string;
  conteudo: string;
  dataPublicacao: string;
  username: string;
}

export interface PostCreate {
  titulo: string;
  conteudo: string;
}
