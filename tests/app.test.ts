import App from '../src/app';

describe('App test', () => {
  it('should return Sortudo e Feliz', () => {
    const response = new App(7);
    expect(response.getMessage()).toEqual('Número Sortudo e Feliz.');
  });

  it('should return Sortudo e Não-Feliz', () => {
    const response = new App(21);
    expect(response.getMessage()).toEqual('Número Sortudo e Não-Feliz.');
  });

  it('should return Não-Sortudo e Feliz', () => {
    const response = new App(28);
    expect(response.getMessage()).toEqual('Número Não-Sortudo e Feliz.');
  });

  it('should return Não-Sortudo e Não-Feliz', () => {
    const response = new App(142);
    expect(response.getMessage()).toEqual('Número Não-Sortudo e Não-Feliz.');
  });

  it('should return Sortudo e Não-Feliz', () => {
    const response = new App(37);
    expect(response.getMessage()).toEqual('Número Sortudo e Não-Feliz.');
  });

  it('should return Não-Sortudo e Feliz', () => {
    const response = new App(100);
    expect(response.getMessage()).toEqual('Número Não-Sortudo e Feliz.');
  });
});
