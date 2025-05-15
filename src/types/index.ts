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
export type SidebarItem = {
  title: string;
  destination: string;
  icon: React.ElementType;
};
export type CreditItems = {
  id?: number,
  profile_path: string,
  name: string,
  character: string
};
export type Genre = {
  id: number,
  name: string
};
export type SpokenLanguages = {
  id: number,
  english_name: string
}
export type HeroDetails = {
  id?: number | undefined,
  title: string,
  tagline: string,
  poster_path: string,
  backdrop_path: string,
  overview: string,
  runtime: number,
  vote_average: number,
  release_date: string,
  genres: Genre[],
  homepage: string,
  status: string,
  spoken_languages: SpokenLanguages[],
  budget: string,
  revenue: string
};
