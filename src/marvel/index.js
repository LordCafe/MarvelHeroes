import React, { Component } from "react";
import { GetDataMarvel } from "./helpers";
import { ComponetMaker } from "../helpers";
import li from "./li";
import MarvelComicsForm from "./search";
class MarvelComics extends Component {

  constructor (props) {
    super(props);
    this.state = {
      copyright: "localhost",
      offset: 0
    }

    this.resquest = this.resquest.bind(this)
    this.template = ComponetMaker(li, Array(8).fill({
      title: "Demo thumbnail"

    }));
  }

  resquest(data) {

    let urlParams = this.createUrl( data );
    this.GetDataResquest(urlParams);
  }


  createUrl( config ) {
    console.log( config );
    const data = {
      ts: this.props.ts,
      apikey : this.props.apikey,
      hash : this.props.hash,
      offset : this.state.offset,
      dateRange: config.dateInit+","+config.dateEnd
    };
    const searchParams = new URLSearchParams(data);
    return searchParams.toString();
  }


  GetDataResquest(urlParams ) {
    const marvelDomain = "http://gateway.marvel.com/v1/public/comics";
    let url = marvelDomain + "?" + urlParams;
    GetDataMarvel(url).then((data) => {
      let result = data.data.results;
      this.template = ComponetMaker(li, result);
      this.setState(data);
    });
  }

  componentDidMount() {

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
