const { expect } = require('chai');

const xxxId = require('../index');


describe('Validate generated ids', () => {
  it('should generate id with 3 length each', () => {
    const regex = /[a-z0-9]{3}-[a-z0-9]{3}-[a-z0-9]{3}/;
    expect(regex.test(xxxId(3))).to.equal(true);
    expect(regex.test(xxxId(0))).to.equal(true);
    expect(regex.test(xxxId(4))).to.equal(false);
  });
  it('should generate id with 4 length each', () => {
    const regex = /[a-z0-9]{4}-[a-z0-9]{4}-[a-z0-9]{4}/;
    expect(regex.test(xxxId(3))).to.equal(false);
    expect(regex.test(xxxId(0))).to.equal(false);
    expect(regex.test(xxxId(4))).to.equal(true);
  });
});
