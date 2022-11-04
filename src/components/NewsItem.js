import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description,imageUrl,newsUrl,author,date,source } = this.props;
    return (
        <>
        <div className="card my-2" >
        <span className="position-absolute top-0 start-50 translate-middle badge rounded-pill bg-danger">
    {source}
    <span className="visually-hidden">unread messages</span>
  </span>
          <img src={imageUrl} className="card-img-top" alt="..."  style={{height:"11rem"}}/>
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text" style={{height:"4.4rem",overflow:"hidden"}}>
              {description}
            </p>
            <p className="card-text" style={{height:"4.4rem",overflow:"hidden",fontSize:'13px',color:'rgb(0,0,0,0.7)'}}>
             By {author?author:"unknown"} on {new Date(date).toGMTString()}
            </p>
            <a target="_blank" href={newsUrl} className="btn btn-sm btn-dark">
              Read More
            </a>
          </div>
        </div>
      </>
    );
  }
}

export default NewsItem;
