import React, { Component } from 'react'

export class NewsItem extends Component {
  render(props) {

    // this will decide the description , details of the news item s
    let {title , description , imageUrl , newsUrl,author , date} = this.props;
    return (
      <div>
        <div id='card-item'className="card my-3" style={{width: '16rem'}}>
          <img src={imageUrl} className="card-img-top" alt="..."  style = {{maxWidth :'280px' , maxHeight:'160px'}}/>
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description} ...</p>
            <p className="card-text"><small class="text-body-secondary">By {author} on {new Date(date).toGMTString()} </small></p>
            <a href={newsUrl} target = "_blank"className="btn btn-sm btn-info" key ={newsUrl}>Read More</a>
          </div>
        </div>
      </div>
    )
  }
}

export default NewsItem
