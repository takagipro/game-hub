import { Genre } from "./genre-entity";
import { Platform } from "./platform-entity";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  sortBy: string;
  searchText: string;
}
