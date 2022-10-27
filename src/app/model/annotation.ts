import {Image} from "./image";

export interface Annotation {
  title:string;
  abstract:string;
  categories:string[];
  image:Image;
}
