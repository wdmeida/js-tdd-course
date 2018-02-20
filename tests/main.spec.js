import { expect } from 'chai';

/*
  Desafio FizzBuzz

  Escreva uma lib que recebe um número e:

  Se o número for divisível por 3, no logar do número escreva 'Fizz'
  Se o número for divisível por 5, no logar do número escreva 'Buzz'
  Se o número for divisível por 3 e 5, no logar do número escreva 'FizzBuzz'
  Se não for múltiplo de nada, retorne o número.
*/


describe('Main', () => {
  it("should return 'Fizz' when multiple of 3", () => {
    expect(FizzBuzz(3)).to.equal('Fizz');
  });
});
