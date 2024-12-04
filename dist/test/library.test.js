'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const chai_1 = require('chai');
const library_1 = require('../library');
describe('Library Class', () => {
  let library;
  beforeEach(() => {
    library = new library_1.Library('testBooks');
    localStorage.clear();
  });
  it('should add a book and return its id', () => {
    const book = {
      id: '1',
      title: 'Test Book',
      author: 'Test Author',
      year: 2023,
      isBorrowed: false,
    };
    const id = library.add(book);
    const addedBook = library.findById(id);
    (0, chai_1.expect)(addedBook).to.not.be.undefined;
    (0, chai_1.expect)(
      addedBook === null || addedBook === void 0 ? void 0 : addedBook.title
    ).to.equal('Test Book');
  });
  it('should remove a book by id', () => {
    const book = {
      id: '1',
      title: 'Test Book',
      author: 'Test Author',
      year: 2023,
      isBorrowed: false,
    };
    const id = library.add(book);
    library.remove(id);
    const removedBook = library.findById(id);
    (0, chai_1.expect)(removedBook).to.be.undefined;
  });
  it('should update a book', () => {
    const book = {
      id: '1',
      title: 'Test Book',
      author: 'Test Author',
      year: 2023,
      isBorrowed: false,
    };
    const id = library.add(book);
    const updatedBook = Object.assign(Object.assign({}, book), {
      title: 'Updated Book',
      id,
    });
    library.update(updatedBook);
    const foundBook = library.findById(id);
    (0, chai_1.expect)(
      foundBook === null || foundBook === void 0 ? void 0 : foundBook.title
    ).to.equal('Updated Book');
  });
  it('should return all books', () => {
    const book1 = {
      id: '1',
      title: 'Book 1',
      author: 'Author 1',
      year: 2021,
      isBorrowed: false,
    };
    const book2 = {
      id: '2',
      title: 'Book 2',
      author: 'Author 2',
      year: 2022,
      isBorrowed: false,
    };
    library.add(book1);
    library.add(book2);
    const allBooks = library.getAll();
    (0, chai_1.expect)(allBooks.length).to.equal(2);
  });
});
//# sourceMappingURL=library.test.js.map
