import app from '../src/app';

describe('App test', () => {
  it('should return Sortudo e Feliz', () => {
    const response = app(7);
    expect(response).toEqual('Número Sortudo e Feliz.');
  });

  it('should return Sortudo e Não-Feliz', () => {
    const response = app(21);
    expect(response).toEqual('Número Sortudo e Não-Feliz.');
  });

  it('should return Não-Sortudo e Feliz', () => {
    const response = app(28);
    expect(response).toEqual('Número Não-Sortudo e Feliz.');
  });

  it('should return Não-Sortudo e Não-Feliz', () => {
    const response = app(142);
    expect(response).toEqual('Número Não-Sortudo e Não-Feliz.');
  });

  it('should return Sortudo e Não-Feliz', () => {
    const response = app(37);
    expect(response).toEqual('Número Sortudo e Não-Feliz.');
  });

  it('should return Não-Sortudo e Feliz', () => {
    const response = app(100);
    expect(response).toEqual('Número Sortudo e Feliz.');
  });
});
