import React from "react";
import { connect } from "react-redux";
class IndividualListing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      randomNames: ["Mark", "Denise", "Richard", "Courtney", "Allen", "Marie"]
    };
  }
  componentDidMount = () => {
    window.scrollTo(0, 0);
  };
  renderName = () => {
    let name = this.state.randomNames[
      Math.floor(Math.random() * this.state.randomNames.length)
    ];
    return (
      <small style={{ marginLeft: "5%", alignSelf: "flex-start" }}>
        <span style={{ fontWeight: "bold" }}>{name}</span> with{" "}
        <span style={{ fontWeight: "bold" }}>Mock Realty</span>
      </small>
    );
  };
  render() {
    console.log(this.props.activeListing);
    return (
      <div
        className="container"
        style={{
          marginTop: "3%",
          marginBottom: "3%",
          display: "flex",
          flexDirection: "column"
        }}
      >
        <small
          style={{
            marginLeft: "5%",
            alignSelf: "flex-start",
            fontWeight: "bold"
          }}
        >
          Presented by:
        </small>
        {this.renderName()}
        <img className=" img-responsive" src={this.props.activeListing.img} />
      </div>
    );
  }
}
const mapStateToProps = ({ activeListing }) => {
  return {
    activeListing
  };
};
export default connect(mapStateToProps)(IndividualListing);
