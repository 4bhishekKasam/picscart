<div className="col-md-4" key={row.id} style={{ marginBottom: "2rem" }}>
  <div className="info-header">
    <div className="info-container">{row.user.name}</div>
  </div>
</div>

let list;

if (imgList.length < 0) {
   list = (
    <div className="col-md-4" style={{ marginBottom: "2rem" }}>
      No Images to display
    </div>
  );
} else {
   list = _.map(imgList, (row, key) => {
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
      </div>
    );
  });
}

<ImageContainer imgList={this.state.imgList} />