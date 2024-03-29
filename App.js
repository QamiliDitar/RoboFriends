import React from "react";
import CardList from "./CardList";
import { robots } from "./robots";
import SearchBox from "./SearchBox";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      robots: robots,
      searchfield: "",
      name: "ditar",
    };
  }
  

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value });
  };

  changeName = () => {
    this.setState({ name: "erin" });
    console.log(this.state.name)
  };

  render() {
    const filteredRobots = this.state.robots.filter((robots) => {
      return robots.name
        .toLowerCase()
        .includes(this.state.searchfield.toLowerCase());
    });
    return (
      <div className="tc">
        <button onClick={() => this.changeName()}></button>
        <p>{this.name}</p>
        <h1 className="f1">RoboFriends</h1>
        <SearchBox searchChange={this.onSearchChange} />
        <CardList robots={filteredRobots} />
      </div>
    );
  }
}

export default App;
