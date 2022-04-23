import { Variable } from "@angular/compiler/src/render3/r3_ast";

export interface Movie {
    id : number,
    Title: string;
    Year: number;
    Type: string;
    Feature: boolean;
    Poster: string;
    imdbID: string;
}