import React from "react";
import { Row, Col, Spinner } from "react-bootstrap";
import MoviePageHeader from "../components/MoviePageHeader";
import MovieCarousel from "../components/MovieCarousel";
import SearchResults from "../components/SearchResults";

class MoviePage extends React.Component {
  render() {
    return (
      <>
        {(() => {
          switch (true) {
            case this.props.data.length === 0:
              return (
                <Row
                  className='flex-column mb-5 ml-2 align-items-center'
                  style={{ height: "80vh" }}>
                  <Col md={{ span: 6, offset: 3 }}>
                    <Spinner animation='border' variant='light' role='status'>
                      <span className='sr-only'>Loading...</span>
                    </Spinner>
                  </Col>
                </Row>
              );
            case this.props.data.length > 0 &&
              this.props.data[0].Response === "True":
              return this.props.data.length === 1 ? (
                <>
                  <SearchResults
                    data={this.props.data}
                    moviePageHeadline={"Search Results"}
                    onShowCommentsClick={this.props.onShowCommentsClick}
                  />
                </>
              ) : (
                <Row className='flex-column mb-5 ml-2'>
                  <>
                    <Col className='mb-5'>
                      <MoviePageHeader moviePageHeadline={"Movies"} />
                    </Col>
                    {this.props.data.map((saga, i) => (
                      <Col className='mb-5' key={i}>
                        <h3 className='pt-2'>{this.props.movieRowTitles[i]}</h3>
                        <MovieCarousel
                          carouselSaga={saga}
                          onShowCommentsClick={this.props.onShowCommentsClick}
                        />
                      </Col>
                    ))}
                  </>
                </Row>
              );
            case this.props.data.length > 0 &&
              this.props.data[0].Response === "False":
              return (
                <Row className='flex-column mb-5 ml-2'>
                  <Col>
                    <h1>{this.props.data[0].Error}</h1>
                  </Col>
                </Row>
              );
            default:
              return <h1>This was never supposed to happen</h1>;
          }
        })()}
      </>
    );
  }
}

export default MoviePage;
