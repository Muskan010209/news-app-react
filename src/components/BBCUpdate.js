import React, { Component } from 'react';

class BBCUpdate extends Component {
  render() {
    const { title, description, imageUrl , newsUrl} = this.props; // Destructure props

    return (
      <div>
        <div className="card" style={{ width: '290px', height:'450px' , textAlign:'center'}}>
          <img src={imageUrl} className="card-img-top" alt="News" />
          <div className="card-body">
            <h6 className="card-title">{title}</h6>
            <p className="card-text">{description}.....</p>
            <a href={newsUrl} className="btn btn-primary">
              Read
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default BBCUpdate;