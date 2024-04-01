import React, { Component } from 'react';

class NewsUpdate extends Component {
  render() {
    const { title, description, imageUrl , newsUrl} = this.props; // Destructure props

    return (
      <div className='my-3'>
        <div className="card" style={{ width: '290px', height:'450px' , textAlign:'center'}}>
          <img src={imageUrl} className="card-img-top" alt="News" height="250px" />
          <div className="card-body">
            <h6 className="card-title">{title}</h6>
            <p className="card-text">{description}.....</p>
            <a rel="noreferrer" href={newsUrl} className="btn btn-primary">
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsUpdate;
