import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'
import image from './no-image.png'


export class News extends Component {
  static defaultProps = {
    category: 'general'
  };
  // articles in json (extracted using API key)
  // articles = [
  //   {
  //     "source": {
  //       "id": "bbc-sport",
  //       "name": "BBC Sport"
  //     },
  //     "author": null,
  //     "title": "Malan hits three consecutive fours in second over",
  //     "description": "Dawid Malan hits Logan van Beek for three consecutive fours in the second over as England make a bright start against the Netherlands in their Cricket World Cup match in Pune.",
  //     "url": "http://www.bbc.co.uk/sport/av/cricket/67355184",
  //     "urlToImage": "https://ichef.bbci.co.uk/news/1024/cpsprodpb/4AE6/production/_131647191_mmcriwcmalanthreefoursstillv2getty.00_00_04_16.still001.jpg",
  //     "publishedAt": "2023-11-08T09:37:18.756499Z",
  //     "content": "Dawid Malan hits Logan van Beek for three consecutive fours in the second over as England make a bright start against the Netherlands in their Cricket World Cup match in Pune.\r\nFOLLOW:England v Nethe… [+75 chars]"
  //   },
  //   {
  //     "source": {
  //       "id": "bbc-sport",
  //       "name": "BBC Sport"
  //     },
  //     "author": null,
  //     "title": "World Cup: England v Netherlands - clips, radio & text",
  //     "description": "Follow live text, in-play video clips and radio commentary as England play the Netherlands in the Men's Cricket World Cup 2023.",
  //     "url": "http://www.bbc.co.uk/sport/live/cricket/66859126",
  //     "urlToImage": "https:////m.files.bbci.co.uk/modules/bbc-morph-sport-seo-meta/1.23.3/images/bbc-sport-logo.png",
  //     "publishedAt": "2023-11-08T08:37:19.5530803Z",
  //     "content": "Right then. The World Cup group stage is finally at the endgame and the semi-finals are taking shape.\r\nFor those not scrapping for the final four, there is still Champions Trophy qualification to pla… [+72 chars]"
  //   },
  //   {
  //     "source": {
  //       "id": "espn-cric-info",
  //       "name": "ESPN Cric Info"
  //     },
  //     "author": null,
  //     "title": "PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com",
  //     "description": "Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com",
  //     "url": "http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket",
  //     "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg",
  //     "publishedAt": "2020-04-27T11:41:47Z",
  //     "content": "Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]"
  //   },
  //   {
  //     "source": {
  //       "id": "espn-cric-info",
  //       "name": "ESPN Cric Info"
  //     },
  //     "author": null,
  //     "title": "What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com",
  //     "description": "Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com",
  //     "url": "http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again",
  //     "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg",
  //     "publishedAt": "2020-03-30T15:26:05Z",
  //     "content": "Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]"
  //   }
  // ]
  // constructor to access articles and pass to it the state (this.state)
  constructor() {

    super();
    this.state = {
      articles: this.articles,
      page: 1,
      loading: false

    }
  };
  /// use componentdidmount instead of create news
  async componentDidMount() {
    // -----------this block of code is modified and now the upper block works
    // let url =
    //   `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&from=2023-11-08&to=2023-11-08&sortBy=popularity&apiKey=407ffa20327948f6aff605fc3ebee6be&pagesize=${this.props.pagesize}&page=1`;
     let url = 
        `https://newsapi.org/v2/top-headlines?country=us&apiKey=407ffa20327948f6aff605fc3ebee6be&category=${this.props.category}&pagesize=${this.props.pagesize}&page=1`;
    try {
      this.setState({ loading: true })
      let response = await fetch(url); // Fetch the data
      let data = await response.json(); // Parse the response as JSON
      this.setState({ articles: data.articles, loading: false })  // for setting the state of articles

    } catch (error) {
      console.error('An error occurred:', error);
    }
  }


  // to handle next button on the end of page
  handlePreviousClick = async () => {


    let url =
      `https://newsapi.org/v2/top-headlines?country=us&apiKey=407ffa20327948f6aff605fc3ebee6be&category=${this.props.category}&pagesize=${this.props.pagesize}&page=${this.state.page - 1}`;

    this.setState({ loading: true })

    let response = await fetch(url); // Fetch the data
    let data = await response.json(); // Parse the response as JSON

    this.setState({
      page: this.state.page - 1,
      articles: data.articles,
      loading: false
    })
  }
  // to handle next button on the end of page
  handleNextClick = async () => {

    let url =
      `https://newsapi.org/v2/top-headlines?country=us&apiKey=407ffa20327948f6aff605fc3ebee6be&category=${this.props.category}&pagesize=${this.props.pagesize}&page=${this.state.page + 1}`;

    console.log(url)
    let response = await fetch(url); // Fetch the data
    let data = await response.json(); // Parse the response as JSON

    this.setState({
      page: this.state.page + 1,
      articles: data.articles
    })




  }

  render() {


    return (

      <div style={{ paddingTop: '50px' }}>

        <h2 className="my-3" style={{ textAlign: 'center' }}>News Monkey - Top headlines</h2>
        {this.state.loading && <Spinner />}
        <div className="container my-3">
          <div className="row">




            {!this.state.laoding && this.state.articles && this.state.articles.map((element) => {

              if (element && element.title && element.description) {

                return <div className="col">
                  <NewsItem
                    title={element.title.slice(0, 50)}
                    imageUrl={element.urlToImage ? element.urlToImage : image}
                    newsUrl={element.url} description={element.description.slice(0, 90)}
                    author={element.author ? element.author : 'Unkonwn'}
                    date={element.publishedAt} />
                </div>
              }
              else {
                return null;
              }
            })}

          </div>
          <div className="container d-flex justify-content-between">
            <button disabled={this.state.page <= 1} type="button" className="btn btn-info" onClick={this.handlePreviousClick}>Previous </button>
            <button type="button" className="btn btn-info" onClick={this.handleNextClick}>Next</button>
          </div>
        </div>


      </div>
    )
  }

}

export default News
