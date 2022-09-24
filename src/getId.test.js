const getId = require('./getId.js');

test('getId() - basic', () => {
  const div = document.createElement('div');
  div.id = 'test';
  document.body.appendChild(div);
  expect(getId(div)).toStrictEqual('test');
});

test('getId() - double id', () => {
  const div = document.createElement('div');
  div.id = 'test';
  const div2 = document.createElement('div');
  div2.id = 'test';
  document.body.appendChild(div);
  document.body.appendChild(div2);
  expect(getId(div)).toStrictEqual(undefined);
});
