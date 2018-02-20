/*
  Desafio FizzBuzz

  Escreva uma lib que recebe um número e:

 x Se o número for divisível por 3, no logar do número escreva 'Fizz'
  Se o número for divisível por 5, no logar do número escreva 'Buzz'
  Se o número for divisível por 3 e 5, no logar do número escreva 'FizzBuzz'
  Se não for múltiplo de nada, retorne o número.
*/
import { expect } from 'chai';
import FizzBuzz from '../src/main';

describe('FizzBuzz', () => {
  it("should return 'Fizz' when multiple of 3", () => {
    expect(FizzBuzz(3)).to.equal('Fizz');
    expect(FizzBuzz(6)).to.equal('Fizz');
  });

  it("should return 'Buzz' when multiple of 5", () => {
    expect(FizzBuzz(5)).to.equal('Buzz');
    expect(FizzBuzz(10)).to.equal('Buzz');
  });

  it("should return 'FizzBuzz' when multiple of 3 and 5", () => {
    expect(FizzBuzz(15)).to.equal('FizzBuzz');
  });

  it('should return the number when non-multiple', () => {
    expect(FizzBuzz(7)).to.equal(7);
  });

  it('should return 0 when zero', () => {
    expect(FizzBuzz(0)).to.equal(0);
  });
});
