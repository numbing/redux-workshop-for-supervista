import React, { Component } from "react";
import { connect } from "react-redux";
import { getData } from "../actions/getData";
import CharechterCard from "./CharechterCard";

class StarWars extends Component {
  componentDidMount() {
    this.props.getData();
  }
  render() {
    return (
      <div>
        <h1>
          we count all star wars Charechters and they are: {this.props.count}
        </h1>
        <CharechterCard />
      </div>
    );
  }
}

const mapStateToPorps = state => ({
  count: state.dataReducer.data.count
});

export default connect(
  mapStateToPorps,
  { getData }
)(StarWars);
