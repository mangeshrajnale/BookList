import React, { Component } from 'react';
import Book from "./Book";
import booksData from "./Data"
class BookList extends Component {
  constructor(props){
    super(props);
    this.state={
      books: booksData
    };
  }
  render() {
    return (
      <div>
        <h2>Best Selling Books this Week</h2>
        {this.state.books.map(book => (
          <Book key={book.id} info={book} /> 
        ))}
      </div>
      
    )
  }
}
export default BookList;