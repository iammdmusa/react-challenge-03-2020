import React, { Component } from "react";
import { observable, computed, action } from "mobx";
import { observer } from "mobx-react";
import items from "./items";

@observer
class FrameworksPage extends Component {
  @observable query = "";

  @action handleOnChange = e => {
    this.query = e.target.value;
  };

  @computed get results() {
    return items.filter(
      item =>
        item.title.toLowerCase().includes(this.query.toLowerCase()) ||
        item.description.toLowerCase().includes(this.query.toLowerCase())
    );
  }

  render() {
    return (
      <div className="block--framework">
        <h1>Search Frameworks</h1>
        <div className="block--search-box">
          <input
            onChange={this.handleOnChange}
            type="text"
            name="name"
            placeholder="Search ..."
          />
        </div>
        <div className="block--result">
          {this.results.length ? (
            this.results.map((item, index) => {
              return (
                <div className="block--result__content" key={index}>
                  <h1>{item.title}</h1>
                  <p>{item.description}</p> <br />
                </div>
              );
            })
          ) : (
            <div className="block--result__content">
              <p>no results found</p>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default FrameworksPage;
