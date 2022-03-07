import React, { Component } from "react";
import { GetDataMarvel } from "./helpers";
import { ComponetMaker } from "../helpers";
import li from "./li";
import Character from "./character";
import MarvelComicsForm from "./search";
class MarvelComics extends Component {

  constructor (props) {
    super(props);
    this.state = {
      copyright: "localhost",
      offset: 0
    }

    this.type = "comics";

    this.resquest = this.resquest.bind(this)
    this.template = ComponetMaker(li, Array(8).fill({
      title: "Demo thumbnail"

    }));
  }

  resquest(data) {

    let urlParams = this.createUrl(data);
    console.log( urlParams);
    console.log( this.type );
    this.GetDataResquest(urlParams);
  }


  createUrl(config) {

    let { typeSearch } = config;

    const data = {
      ts: this.props.ts,
      apikey: this.props.apikey,
      hash: this.props.hash,
      offset: this.state.offset,

    };

    switch (typeSearch) {
      case "comics":
        this.type = "comics";
        data.dateRange = config.dateInit+","+config.dateEnd;
        this.skeleton = li;

        break;

      case "characters":
        this.type = "characters";
        data.nameStartsWith	= config.hero;
        this.skeleton = Character;

        break;

      default:
        break;
    }



    const searchParams = new URLSearchParams(data);
    return searchParams.toString();
  }


  GetDataResquest(urlParams) {
    const marvelDomain = "http://gateway.marvel.com/v1/public/";
    let url = marvelDomain + this.type + "?" + urlParams;
    GetDataMarvel(url).then((data) => {
      let result = data.data.results;
      this.template = ComponetMaker( this.skeleton , result);
      this.setState(data);
    });
  }

  componentDidMount() {
    var elems = document.querySelectorAll('.tooltipped');
    var instances = M.Tooltip.init(elems, {});
  }

  componentDidUpdate() {
    var elems = document.querySelectorAll('.tooltipped');
    var instances = M.Tooltip.init(elems, {});
  }

  render() {
    return (
      <div>
        <MarvelComicsForm submit={this.resquest} />
        <div>
          <div class="row fix-grid">{this.template}</div>
          <span>{this.state.copyright}</span>
        </div>
      </div>);
  }
}


export default MarvelComics;
