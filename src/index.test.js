const uniqueSelector = require('./index.js');

test('uniqueSelector() - basic', () => {
  const div = document.createElement('div');
  div.id = 'test';
  const div2 = document.createElement('div');
  div2.id = 'test';
  document.body.appendChild(div);
  div.appendChild(div2);
  expect(uniqueSelector(div2)).toStrictEqual(
    'div:nth-child(1) > div:nth-child(1)'
  );
});

test('uniqueSelector() - id', () => {
  document.body.innerHTML = '';
  const div = document.createElement('div');
  div.id = 'test';
  const div2 = document.createElement('div');
  div2.id = 'test2';
  document.body.appendChild(div);
  div.appendChild(div2);
  expect(uniqueSelector(div2)).toStrictEqual('#test2');
});

test('uniqueSelector() - id option', () => {
  document.body.innerHTML = '';
  const div = document.createElement('div');
  div.id = 'test';
  const div2 = document.createElement('div');
  div2.id = 'test2';
  document.body.appendChild(div);
  div.appendChild(div2);
  expect(uniqueSelector(div, { id: false })).toStrictEqual('div:nth-child(1)');
});
