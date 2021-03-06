import { ListGroup } from "react-bootstrap";
import SearchBar from "../components/SearchBar";
import { Component } from "react";

class CommentList extends Component {
  state = {
    filterText: "",
  };

  handleFilterTextChange = (FilterText) => {
    this.setState({ filterText: FilterText, filteredComments: [] });
  };

  render() {
    const filterText = this.state.filterText;
    let comments;
    // eslint-disable-next-line no-lone-blocks
    {
      if (filterText !== "") {
        let filteredComments = this.props.comments.filter(function (comment) {
          return (
            comment.comment.toLowerCase().includes(filterText.toLowerCase()) ||
            comment.author.toLowerCase().includes(filterText.toLowerCase())
          );
        });
        comments = filteredComments;
      } else {
        comments = this.props.comments;
      }
    }
    return this.props.comments.length !== 0 ? (
      <div className='bg-dark' style={{ height: "30vh", overflow: "scroll" }}>
        <SearchBar
          currentText={this.state.filterText}
          onFilterTextChange={this.handleFilterTextChange}
        />
        <ListGroup>
          {comments.map((comment) => {
            return (
              <ListGroup.Item key={comment._id} className='bg-dark'>
                Author: {comment.author} Comment: {comment.comment} Rating:{" "}
                {comment.rate}
              </ListGroup.Item>
            );
          })}
        </ListGroup>
      </div>
    ) : (
      <h6>No Comments, add one!</h6>
    );
  }
}

export default CommentList;
