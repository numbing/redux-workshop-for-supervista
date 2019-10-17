import React, { Component } from "react";
import { connect } from "react-redux";

class CharechterCard extends Component {
  render() {
    if (!this.props.data) {
      return <h1>Loading..</h1>;
    }
    return (
      <div className="Information">
        {this.props.data.map(e => (
          <ul key={e.name} className="dataWrapper">
            <li>{e.name}</li>
            <li>{e.hair_color}</li>
            <li>{e.birth_year}</li>
          </ul>
        ))}
      </div>
    );
  }
}
const mapStateToProps = state => ({
  data: state.dataReducer.data.results
});

export default connect(mapStateToProps)(CharechterCard);
