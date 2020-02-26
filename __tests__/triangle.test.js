/* eslint-disable no-undef */
import { Triangle } from './../src/triangle.js';

describe('Triangle', () => {

  test('should correctly create a triangle object with three lengths', () => {
    let triangle = new Triangle(2,4,5);
    expect(triangle.side1).toEqual(2);
    expect(triangle.side2).toEqual(4);
    expect(triangle.side3).toEqual(5);
  });

  test('should correctly determine whether three lengths are not a triangle', () => {
    let notTriangle = new Triangle(3,9,22);
    expect(notTriangle.checkType()).toEqual('not a triangle');
  });

  test('should correctly determine whether three lengths make a scalene triangle', () => {
    let scaleneTriangle = new Triangle(4,5,7);
    expect(scaleneTriangle.checkType()).toEqual('scalene triangle');
  });

  test('should correctly determine whether three lengths make an isoceles triangle', () => {
    let isoscelesTriangle = new Triangle(5,5,7);
    expect(isoscelesTriangle.checkType()).toEqual('isosceles triangle');
  });

  test('should correctly determine whether three lengths make an equilateral triangle', () => {
    let equilateralTriangle = new Triangle(3,3,3);
    expect(equilateralTriangle.checkType()).toEqual('equilateral triangle');
  });

  test('should not allow words as arguments', () => {
    let words = new Triangle("la", "de", "da");
    expect(words.checkType()).toEqual('error');
  });

  test('should not accept arrays as arguments', () => {
    let array = new Triangle([7],[4],[5]);
    expect(array.checkType()).toEqual('error');
  });

  test('should not accept strings as arguments, even if they contain numbers', () => {
    let stringArg = new Triangle("1","2","1.5");
    expect(stringArg.checkType()).toEqual('error');
  });

  test('should not accept negative numbers as arguments', () => {
    let negativeArg = new Triangle(-5,-5,-5);
    expect(negativeArg.checkType()).toEqual('error');
  });
});