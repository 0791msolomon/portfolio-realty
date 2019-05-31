import React from "react";
import { Typeahead } from "react-bootstrap-typeahead";
class TypeAhead extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      state: "",
      states: [
        "Alabama - AL",
        "Alaska - AK",
        "Arizona - AZ",
        "Arkansas - AR",
        "California - CA",
        "Colorado -CO",
        "Connecticut - CT",
        "Delaware - DE",
        "Florida - FL",
        "Georgia - GA",
        "Hawaii -HI",
        "Idaho - ID",
        "Illinois - IL",
        "Indiana - IN",
        "Iowa - IO",
        "Kansas - KS",
        "Kentucky - KY",
        "Louisiana - LA",
        "Maine - ME",
        "Maryland - MD",
        "Massachusetts - MA",
        "Michigan - MI",
        "Minnesota - MN",
        "Mississippi - MS",
        "Missouri - MO",
        "Montana - MT",
        "Nebraska - NE",
        "Nevada - NV",
        "New Hampshire - NH",
        "New Jersey - NJ",
        "New Mexico - NM",
        "New York - NY",
        "North Carolina - NC",
        "North Dakota - ND",
        "Ohio - OH",
        "Oklahoma - OK",
        "Oregon - OR",
        "Pennsylvania - PA",
        "Rhode Island - RI",
        "South Carolina - SC",
        "South Dakota - SD",
        "Tennessee - TN",
        "Texas - TX",
        "Utah - UT",
        "Vermont - VT",
        "Virginia - VA",
        "Washington - WA",
        "West Virginia - WV",
        "Wisconsin - WI",
        "Wyoming - WY"
      ]
    };
  }

  render() {
    return (
      <div className="col-lg-4 col-sm-10">
        <Typeahead
          onChange={selected => {
            this.props.change(selected);
          }}
          options={this.state.states}
          placeholder="Enter a state..."
        />
      </div>
    );
  }
}
export default TypeAhead;

{
  /* <input
type="text"
className="form-control"
placeholder="Search by state..."
value={this.state.search}
onChange={e => this.setState({ search: e.target.value })}
/> */
}
