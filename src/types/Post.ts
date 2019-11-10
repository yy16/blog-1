import { TagID } from "../utils/tagInfo";
import { Language } from "../utils/translations";

export default interface Post {
  frontmatter: {
    id: number;
    title: string;
    lang: Language;
    create: string;
    categories: TagID[];
  };
}
