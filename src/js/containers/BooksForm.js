import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addBook, changeFilters } from '../actions';
import categories from '../data/bookCategories';

export class BooksForm extends React.Component {
  state = {
    title: '',
    author: '',
    category: 'Select Category',
    error: '',
  };

  handleChange = (target) =>
    this.setState(() => ({
      [target.name]: target.value,
    }));

  handleSubmit = () => {
    if(this.state.title && this.state.author && this.state.category !== 'Select Category'){this.props.addBook({
      title: this.state.title,
      author: this.state.author,
      category: this.state.category,
    });
    this.props.changeFilters('All');
    this.setState(() => ({
      title: '',
      author: '',
      category: 'Select Category',
      error: '',
    }));}else{
      this.setState(() => ({ error: 'Please enter title, author and valid category'}))
    }
  };

  render() {
    return (
      <div>
        <h2 className="add-new-title">Add new book</h2>
        {
          this.state.error && <div>{ this.state.error }</div>
        }
        <form
          className="form"
          onSubmit={e => {
            e.preventDefault();
            this.handleSubmit();
          }}
        >
          <input
            className="form-input"
            type="text"
            name="title"
            placeholder="Title"
            value={this.state.title}
            onChange={e => this.handleChange(e.target)}
          />
          <input
            className="form-input"
            type="text"
            name="author"
            placeholder="Author"
            value={this.state.author}
            onChange={e => this.handleChange(e.target)}
          />
          <select
            name='category'
            className="form-select"
            value={this.state.category}
            onChange={e => this.handleChange(e.target)}
          >
            {['Select Category'].concat(categories).map(category => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
          <button className="add-book-btn" type="submit">
            Add Book
          </button>
        </form>
      </div>
    );
  }
}

BooksForm.propTypes = {
  addBook: PropTypes.func.isRequired,
};

export default connect(
  null,
  { addBook, changeFilters },
)(BooksForm);
