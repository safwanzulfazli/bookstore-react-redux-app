import React from 'react';
import { shallow } from 'enzyme';
import { Collection } from '../../components/Collection';
import dummyBooks from '../fixtures/books';
import bookCategories from '../fixtures/categories';

describe('Collection', () => {
  let wrapper;
  let books;
  let categories;
  let changeFilter;
  let filter;
  let removeBook;
  let switchAddBookMode;
  let switchProgressUpdate;

  beforeEach(() => {
    books = dummyBooks;
    categories = bookCategories;
    filter = '';
    changeFilter = jest.fn();
    removeBook = jest.fn();
    switchAddBookMode = jest.fn();
    switchProgressUpdate = jest.fn();
    wrapper = shallow(
      <Collection
        collection={books}
        itemForProgressUpdate={books[0]}
        filter={filter}
        changeFilter={changeFilter}
        removeBook={removeBook}
        switchAddBookMode={switchAddBookMode}
        progressUpdateMode={{ on: false, id: '' }}
        switchProgressUpdate={switchProgressUpdate}
      />,
    );
  });

  test('it should render properly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('it should call changeFilters with new category', () => {
    wrapper.find('CategoryFilter').prop('handleChange')(categories[0]);
    expect(changeFilter).toHaveBeenLastCalledWith(categories[0]);
  });

  test('it should call removeBook with id of an existing book', () => {
    wrapper.find('CollectionItem').at(2).prop('handleRemove')(books[2].id);
    expect(removeBook).toHaveBeenLastCalledWith(books[2].id);
  });
});
