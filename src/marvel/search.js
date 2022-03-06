import React, { Component } from "react";

class MarvelComicsForm extends Component {

  constructor (props) {
    super(props);
    this.state = {
      offset: 0,
      dateInit: "2018-06-12",
      dateEnd: "2022-06-12"
    }

    this.ChangeDate = this.ChangeDate.bind(this);

  }


  ChangeDate(event) {
    let value = event.target.value;
    let data = event.target.dataset.date;
    let newState;
    switch (data) {
      case "init":
        newState = { dateInit: value }
        break;
      case "end":
        newState = { dateEnd: value }
        break;
    }
    this.setState(newState);
  }

  componentDidMount() {

  }

  render() {
    return (
      <div class="row">
        <form class="col s12 marvel-form">
          <div class="row">

            <div class={"col s2"} >

              <label for="meeting-time">Fecha inicio de la busqueda:</label>

              <input type="date"
                id="meeting-time"
                name="meeting-time"
                value={this.state.dateInit}
                min="2018-06-07"
                data-date="init"
                max="2025-06-14"
                onChange={this.ChangeDate}

              />
            </div>


            <div class={"col s2"} >

              <label for="meeting-time">Fecha de limite de la busqueda:</label>

              <input type="date"
                id="meeting-time2"
                name="meeting-time"
                value={this.state.dateEnd}
                min="2018-06-07"
                data-date="end"
                max="2025-06-14"
                onChange={this.ChangeDate}

              />
            </div>

            <div class="col s3">
              <button class="btn waves-effect waves-light" type="submit" onClick={(event) => {
                event.preventDefault();
                this.props.submit(this.state);
              }} name="action"> Buscar más / Ver
                <i class="material-icons right">send</i>
              </button>
            </div>

          </div>
        </form>
      </div>


    );
  }
}


export default MarvelComicsForm;
