import { Post } from "./post.model";

export interface PostResponseWrapper {
    posts: Post[];
    total: number;
    skip: number;
    limit: number;
}