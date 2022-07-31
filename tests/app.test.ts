import app from '../src/app';

describe('App test', () => {
  it('should return Hello World', () => {
    const response = app();
    expect(response).toEqual('Hello World');
  });
});
