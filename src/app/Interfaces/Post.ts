import { Author } from "./Author";
import { Category } from "./Category";
import { Tag } from "./Tag";

export interface Post {
    _id?: string;
    author?: Author;
    category?: Category;
    created_at?: string;
    description?: string;
    header_img?: string;
    tags?: Tag;
    title?: string;
}