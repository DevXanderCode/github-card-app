import React from "react";
import "./App.css";
import CardLst from "./components/CardList";
import Form from "./components/Form";

class App extends React.Component {
  state = {
    profiles: [],
  };

  addNewProfile = (profileData) => {
    this.setState((prevState) => ({
      profiles: [...prevState.profiles, profileData],
    }));
  };
  render() {
    return (
      <div>
        <div className="header">{this.props.title}</div>
        <Form onSubmit={this.addNewProfile} />
        <CardLst profiles={this.state.profiles} />
      </div>
    );
  }
}

export default App;
