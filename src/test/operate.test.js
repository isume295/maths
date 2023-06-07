import operate from '../logic/operate';

describe('operation function', () => {
  test('test + operation', () => {
    expect(operate('1', '2', '+')).toEqual('3');
  });

  test('test - operation', () => {
    expect(operate('2', '2', '-')).toEqual('0');
  });

  test('test * operation', () => {
    expect(operate('1', '2', '*')).toEqual('2');
  });

  test('test ÷ operation', () => {
    expect(operate('4', '2', '÷')).toEqual('2');
  });

  test('test % operation', () => {
    expect(operate('7', '2', '%')).toEqual('1');
  });
});
