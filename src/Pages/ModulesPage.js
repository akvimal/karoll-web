import React from "react";
import Modules from "../components/Modules";

export default class ModulesPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container">
        <Modules></Modules>{" "}
      </div>
    );
  }
}
