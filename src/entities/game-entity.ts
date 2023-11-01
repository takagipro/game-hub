import { Entity } from "./entity";
import { Platform } from "./platform-entity";

export interface Game extends Entity {
  background_image: string;
  metacritic: number;
  parent_platforms: { platform: Platform }[];
}
