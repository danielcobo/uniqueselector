const getNth = require('./getNth.js');

test('getId() - double id', () => {
  const div = document.createElement('div');
  div.id = 'test';
  const div2 = document.createElement('div');
  div2.id = 'test';
  document.body.appendChild(div);
  document.body.appendChild(div2);
  expect(getNth(div)).toStrictEqual(1);
  expect(getNth(div2)).toStrictEqual(2);
});
