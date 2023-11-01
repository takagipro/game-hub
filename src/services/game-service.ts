import create, { Entity } from "./http-service";

export interface Game extends Entity {
  background_image: string;
  metacritic: number;
  parent_platforms: { platform: Platform }[];
}

export interface Platform extends Entity {
  slug: string;
}

export interface GameResponse {
  count: number;
  results: Game[];
}

export default create("/games");
