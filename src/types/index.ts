export type Movie = {
    id: number;
    title: string;
    backdrop_path: string;
    poster_path?: string
    release_date: string;
};
export interface FavoritesItems {
    id: number | undefined;
    title: string | undefined;
    poster_path: string | undefined;
    release_date: string | undefined;
};
export type SearchMovie = {
  id: number;
  title: string;
  poster_path: string;
  release_date: string;
}