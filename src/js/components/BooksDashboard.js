import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { switchAddBookMode } from '../actions/books';
import BookList from './BookList';
import BooksFormModal from './BooksFormModal';

export const BooksDashboard = ({ addBookMode, switchAddBookMode }) => (
  <div id="app">
    <div id="container">
      <BooksFormModal
        addBookMode={addBookMode}
        switchAddBookMode={switchAddBookMode}
      />
      <BookList />
    </div>
  </div>
);

const mapStateToProps = state => ({
  addBookMode: state.addBookMode,
});

BooksDashboard.propTypes = {
  addBookMode: PropTypes.bool.isRequired,
  switchAddBookMode: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, { switchAddBookMode })(BooksDashboard);
