import { InsertComponentsByConfig, CreateCompilationInfo } from "./helper-master";
import Welcome from "../welcome"


CreateCompilationInfo("default-header");

let configReact = {
    Welcome: {
        Component: Welcome,
        data: { name : "user"},
        IdDom: "root",
        NoLazy: true,
        Author: "Adrián lopez de la cruz",
    },


};
InsertComponentsByConfig(configReact);

