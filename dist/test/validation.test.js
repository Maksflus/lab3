'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const chai_1 = require('chai');
const validation_1 = require('../validation');
describe('Validation Class', () => {
  it('should validate a book with errors', () => {
    const errors = validation_1.Validation.validateBook('', '', 'notANumber');
    (0, chai_1.expect)(errors).to.have.property('bookTitle');
    (0, chai_1.expect)(errors).to.have.property('bookAuthor');
    (0, chai_1.expect)(errors).to.have.property('bookYear');
  });
  it('should validate a book without errors', () => {
    const errors = validation_1.Validation.validateBook(
      'Test Title',
      'Test Author',
      '2023'
    );
    (0, chai_1.expect)(Object.keys(errors).length).to.equal(0);
  });
  it('should validate a user with errors', () => {
    const errors = validation_1.Validation.validateUser('', 'invalidEmail');
    (0, chai_1.expect)(errors).to.have.property('userName');
    (0, chai_1.expect)(errors).to.have.property('userEmail');
  });
  it('should validate a user without errors', () => {
    const errors = validation_1.Validation.validateUser(
      'Test User',
      'test@example.com'
    );
    (0, chai_1.expect)(Object.keys(errors).length).to.equal(0);
  });
});
//# sourceMappingURL=validation.test.js.map
