import { InsertComponentsByConfig, CreateCompilationInfo } from "./helper-master";
import Welcome from "../welcome"
import MarvelComics from "../marvel"


CreateCompilationInfo("default-header");

let configReact = {


    MarvelComics: {
        Component: MarvelComics,
        data: {
            name : "Adrian",
            ts : 100,
            apikey :"a9bf5b621ca9bbd33b8e6578aa71055f",
            hash : "28b1d5aa7f4e1bac216ed22746fcdb76"

        },
        IdDom: "root",
        NoLazy: true,
        Author: "Adrián lopez de la cruz",
    },



};
InsertComponentsByConfig(configReact);

