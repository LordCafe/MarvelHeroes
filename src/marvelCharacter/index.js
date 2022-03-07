import React, { Component } from "react";
import { GetDataMarvel } from "../marvelSearch/helpers";
import { ComponetMaker } from "../helpers";


class MarvelComicsCharacter extends Component {

  constructor (props) {
    super(props);
    this.state = {
      copyright: "localhost",
      id: this.getId(),
      all: [],
      comic: {
        title: "comic",
        image: "https://grainy-gradients.vercel.app/noise.svg",
        url: "#"
      }
    }
  }

  getId() {
    let id = window.location.href.substring(window.location.href.lastIndexOf('/') + 1);
    return id;
  }
  resquest(data) {
    let urlParams = this.createUrl(data);
    this.GetDataResquest(urlParams);
  }


  createUrl(config) {

    const data = {
      ts: this.props.ts,
      apikey: this.props.apikey,
      hash: this.props.hash,
    };
    const searchParams = new URLSearchParams(data);
    return searchParams.toString();
  }

  Storys() {
    let render = [];
    try {
      let story = this.state.all.stories;
      render = story.items.map((data) => {
        return (<li>{data.name}</li>);
      });
    } catch (error) {

    }


    return render;

  }

  GetDataResquest(urlParams) {
    const marvelDomain = "http://gateway.marvel.com/v1/public/characters/" + this.state.id;
    let url = marvelDomain + "?" + urlParams;
    GetDataMarvel(url).then((data) => {
      let result = data.data.results;
      let image = this.ChooseImage(result[0].thumbnail);
      let title = result[0].name;
      this.setState({
        all: result[0],
        comic: {
          title: title,
          image: image,
          url: result[0].urls[0].url
        }
      })

    });
  }

  Onload(event) {
    let current = event.target;
    current.classList.add("visibleImg");
  }


  componentDidMount() {
    this.resquest();
  }

  componentDidUpdate() {
    console.log(this.state.all);
  }

  ChooseImage(thumbnail) {
    let newImage = "https://grainy-gradients.vercel.app/noise.svg";
    try {

      let image = thumbnail.path + "/portrait_uncanny." + thumbnail.extension;
      newImage = image.replace("http", "https")
      // Declara una nueva variable de estado, la cual llamaremos “count”
    } catch (error) {

    }
    return newImage;
  }

  render() {
    return (
      <div class="character-page row">
        <div class="col s12">
          <h2>{this.state.comic.title}</h2>
          <div class="col s12">
            <div class="row">
              <div class="col s6">

                <figure>
                  <a href={this.state.comic.url} >
                    <img
                      class="tooltipped"
                      data-position="right"
                      data-tooltip="I am a tooltip"
                      src={this.state.comic.image}
                      alt="Trulli"
                      onLoad={this.Onload}
                    />

                  </a>

                  <figcaption>{this.state.comic.title}</figcaption>
                </figure>

              </div>
              <div class="col s6">
                <ul class="collection">
                  {this.Storys()}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

    );
  }
}


export default MarvelComicsCharacter;
