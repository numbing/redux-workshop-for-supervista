import React, { Component } from "react";
import { connect } from "react-redux";
import { getWeather } from "../actions/getData";

class Weather extends Component {
  componentDidMount() {
    this.props.getWeather();
  }
  render() {
    if (!this.props.weatherData) {
      return <h1>Loading...</h1>;
    }
    console.log("props", this.props.weatherData);
    return (
      <div>
        <h1 style={{ color: "red" }}>{this.props.name}</h1>
        <h2 style={{ color: "red" }}>{this.props.weatherData.temp}</h2>
      </div>
    );
  }
}

const mapStateToPorps = state => ({
  name: state.weatherReducer.data.name,
  weatherData: state.weatherReducer.data.main
});

export default connect(
  mapStateToPorps,
  { getWeather }
)(Weather);
