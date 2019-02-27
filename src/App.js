import React, { Component } from "react";
import Header from "./components/Header/Header";
import SearchForm from "./components/SearchForm/SearchForm";
import ImageContainer from "./components/ImageContainer/ImageContainer";
import "./App.css";

const API_KEY =
  "a7ee15abc7f10acfab9b132e1861813075962cdd94de9c5e10330f22e1a29e39";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imgList: "",
      imgName: "",
      start: 1
    };
    this.getImage = this.getImage.bind(this);
    this.nextPage = this.nextPage.bind(this);
    this.pager = this.pager.bind(this);
  }

  getImage = e => {
    e.preventDefault();
    const imgName = e.target.elements.imageName.value.trim();
    this.setState({ imgName: imgName }, () => console.log(this.state.imgName));

    const url = `https://api.unsplash.com/search/photos?client_id=${API_KEY}&query=${imgName}&page=${
      this.state.start
    }`;

    fetch(url)
      .then(res => res.json())
      .then(data =>
        this.setState({ imgList: data.results }, () =>
          console.log(this.state.imgList)
        )
      );
  };

  nextPage(e) {
    e.preventDefault();
    this.setState({ start: this.state.start + 1 }, () => this.pager());
  }

  pager(e) {
    const url = `https://api.unsplash.com/search/photos?client_id=${API_KEY}&query=${
      this.state.imgName
    }&page=${this.state.start}`;

    fetch(url)
      .then(res => res.json())
      .then(data =>
        this.setState(
          {
            imgList: this.state.imgList.concat(data.results)
          },
          () => console.log(this.state.imgList)
        )
      );
  }

  render() {
    return (
      <div className="wrapper">
        <Header />
        <SearchForm getImage={this.getImage} />

        <ImageContainer
          imgList={this.state.imgList}
          loadImage={this.nextPage}
        />
      </div>
    );
  }
}

export default App;
