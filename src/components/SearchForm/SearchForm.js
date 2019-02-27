import React, { Component } from "react";
import { Input, Button } from "semantic-ui-react";
import "./SearchForm.css";

export default class SearchForm extends Component {
  render() {
    return (
      <div className="search-form">
        <form onSubmit={this.props.getImage} className="container-form">
          <Input
            className="search-form-input"
            name="imageName"
            placeholder="Search Image"
          />
          <Button className="search-form-button" content="Search" />
        </form>
      </div>
    );
  }
}
