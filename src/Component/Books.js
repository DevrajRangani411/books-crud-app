import React, { Component } from 'react';
import { Input, FormGroup, Label, Modal, ModalHeader, ModalBody, ModalFooter, Table, Button } from 'reactstrap';
import { connect } from "react-redux";
import { fetchCoursesRequest, createCourseRequest, deleteCourseRequest, updateCourseRequest } from "../Redux/Courses/courseActions";

class Books extends Component {
  state = {
    books: [],
    newBookData: {
      title: '',
      rating: ''
    },
    editBookData: {
      id: '',
      title: '',
      rating: ''
    },
    newBookModal: false,
    editBookModal: false
  }
  componentWillMount() {
    // if(this.state.books !== this.props.courseData.course)
    this._refreshBooks();
  }
  
  toggleNewBookModal() {
    this.setState({
      newBookModal: ! this.state.newBookModal
    });
  }
  toggleEditBookModal() {
    this.setState({
      editBookModal: ! this.state.editBookModal
    });
  }
  addBook() {
    this.props.createCourseRequest(this.state.newBookData)
   
      let { books } = this.props.courseData.course;

      this.setState({ books, newBookModal: false, newBookData: {
        title: '',
        rating: ''
      }});
      setTimeout(()=> {
        this._refreshBooks();
      }, 500);
  }
  updateBook() {
    
    this.props.updateCourseRequest(this.state.editBookData)
   
      this.setState({
        editBookModal: false, editBookData: { id: '', title: '', rating: '' }
      })
      setTimeout(()=> {
        this._refreshBooks();
      }, 500);
  }
  editBook(id, title, rating) {
    this.setState({
      editBookData: { id, title, rating }, editBookModal: ! this.state.editBookModal
    });
    this._refreshBooks()
  }
  deleteBook(id) {
     this.props.deleteCourseRequest(id);
     setTimeout(()=> {
      this._refreshBooks();
    }, 1200);
  }
  _refreshBooks() {
    this.props.fetchCoursesRequest();
    this.setState({
      books:this.props.courseData.course
    })
  }
  render() {
    const { courseData } = this.props;
    let books = courseData.course.map((book) => {
      return (
        <tr key={book.id}>
          <td>{book.title}</td>
          <td>{book.rating}</td>
          <td>
            <Button color="success" size="sm" className="mr-2" onClick={this.editBook.bind(this, book.id, book.title, book.rating)}>Edit</Button>
            <Button color="danger" size="sm" onClick={this.deleteBook.bind(this, book.id)}>Delete</Button>
          </td>
        </tr>
      )
    })
    
    return (
      <div className="Books container">

      <h1>Books App</h1>

      <Button className="my-3" color="primary" onClick={this.toggleNewBookModal.bind(this)}>Add Book</Button>

      <Modal isOpen={this.state.newBookModal} toggle={this.toggleNewBookModal.bind(this)}>
        <ModalHeader toggle={this.toggleNewBookModal.bind(this)}>Add a new book</ModalHeader>
        <ModalBody>
          <FormGroup>
            <Label for="title">Title</Label>
            <Input id="title" value={this.state.newBookData.title} onChange={(e) => {
              let { newBookData } = this.state;

              newBookData.title = e.target.value;

              this.setState({ newBookData });
            }} />
          </FormGroup>
          <FormGroup>
            <Label for="rating">Rating</Label>
            <Input id="rating" value={this.state.newBookData.rating} onChange={(e) => {
              let { newBookData } = this.state;

              newBookData.rating = e.target.value;

              this.setState({ newBookData });
            }} />
          </FormGroup>

        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={this.addBook.bind(this)}>Add Book</Button>{' '}
          <Button color="secondary" onClick={this.toggleNewBookModal.bind(this)}>Cancel</Button>
        </ModalFooter>
      </Modal>

      <Modal isOpen={this.state.editBookModal} toggle={this.toggleEditBookModal.bind(this)}>
        <ModalHeader toggle={this.toggleEditBookModal.bind(this)}>Edit a new book</ModalHeader>
        <ModalBody>
          <FormGroup>
            <Label for="title">Title</Label>
            <Input id="title" value={this.state.editBookData.title} onChange={(e) => {
              let { editBookData } = this.state;

              editBookData.title = e.target.value;

              this.setState({ editBookData });
            }} />
          </FormGroup>
          <FormGroup>
            <Label for="rating">Rating</Label>
            <Input id="rating" value={this.state.editBookData.rating} onChange={(e) => {
              let { editBookData } = this.state;

              editBookData.rating = e.target.value;

              this.setState({ editBookData });
            }} />
          </FormGroup>

        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={this.updateBook.bind(this)}>Update Book</Button>{' '}
          <Button color="secondary" onClick={this.toggleEditBookModal.bind(this)}>Cancel</Button>
        </ModalFooter>
      </Modal>


        <Table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Rating</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {books}
          </tbody>
        </Table>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    courseData: state.course,
  };
};

const mapStateToDispatch = (dispatch) => {
  return {
    fetchCoursesRequest: () => dispatch(fetchCoursesRequest()),
    createCourseRequest: (data) => dispatch(createCourseRequest(data)),
    deleteCourseRequest: (data) => dispatch(deleteCourseRequest(data)),
    updateCourseRequest: (data) => dispatch(updateCourseRequest(data)),

  };
};
export default connect(mapStateToProps, mapStateToDispatch)(Books);

