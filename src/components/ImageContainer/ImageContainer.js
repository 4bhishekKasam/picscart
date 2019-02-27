import React, { Component } from "react";
import _ from "lodash";
import "./ImageContainer.css";

export default class ImageContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { imgList } = this.props;

    return (
      <div className="flex-container">
        {imgList &&
          _.map(imgList, (row, key) => {
            return (
              <div
                className="col-md-4"
                key={row.id}
                style={{ marginBottom: "2rem" }}
              >
                <div className="info-header">
                  <div className="info-container">{row.user.name}</div>
                </div>

                <div className="box">
                  <img className="box-img" src={row.urls.thumb} alt={row.id} />
                  <div className="overlay">
                    <div className="text">{row.description}</div>
                  </div>
                </div>

                <div className="info-box">
                  <div className="info-container">
                    {row.likes}{" "}
                    <img src="https://img.icons8.com/ios/25/e74c3c/hearts.png"/>
                  </div>
                </div>
              </div>
            );
          })}
        {imgList && (
          <div className="footer">
            <div className="load-container">
              <form onSubmit={this.props.loadImage}>
                <div className="load-btn">
                  <button className="button-load">More Images</button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    );
  }
}
