import React from 'react';
import { connect } from 'react-redux';
import { addBookToLibrary, fetchRemoveBook } from '../thunks/book';
import { switchAddBookMode } from '../actions/book';

export const Book = ({
  book, addBookToLibrary, fetchRemoveBook, username, switchAddBookMode,
}) => {
  const addToCollection = () => {
    const path = `/v1/users/${username}/collection`;
    addBookToLibrary(path, { collection_item: { book_id: book.id } })
      .then(() => switchAddBookMode());
  };

  const removeFromCollection = () => {
    fetchRemoveBook(username, book.item_id)
      .then(() => switchAddBookMode());
  };

  const addBookBtn = (
    <button
      type="button"
      className="add-book-btn"
      onClick={addToCollection}
    >
      Add To Collection
    </button>
  );

  const removeBookBtn = (
    <button
      type="button"
      className="add-book-btn"
      onClick={removeFromCollection}
    >
      Remove From Collection
    </button>
  );

  return (
    <div>
      <h2>
        {book.title}
        {' '}
        :
        {' '}
        {book.subtitle }
      </h2>
      <div>
        <img src={book.thumbnail} alt={book.title} />
      </div>
      <div>
        <h3>
        By:
          {' '}
          <small>{book.authors}</small>
        </h3>
        <h3>Description:</h3>
        <p>
          { book.description }
        </p>
        <p>
          <strong>No. of pages: </strong>
          {' '}
          {book.page_count}
        </p>
        <p>
          <strong>ISBN: </strong>
          {' '}
          {book.isbn}
        </p>
        <p>
          <strong>Publish Date: </strong>
          {' '}
          {book.published_date}
        </p>
        {book.included ? removeBookBtn : addBookBtn}
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  username: state.currentUser.data.username,
});

export default connect(mapStateToProps, { addBookToLibrary, fetchRemoveBook, switchAddBookMode })(Book);
