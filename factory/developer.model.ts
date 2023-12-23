import { IDeveloper } from "./developer.interface";

export abstract class Developer {
  name!: string;
  experience!: string;
  abstract getInfo(): IDeveloper;
}
