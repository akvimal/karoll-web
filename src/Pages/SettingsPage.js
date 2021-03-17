import React from "react";
import JobRoles from "../components/JobRoles";
import Stacks from "../components/Stacks";

export default class StacksPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container">
        <Stacks></Stacks>
        <JobRoles></JobRoles>
      </div>
    );
  }
}
