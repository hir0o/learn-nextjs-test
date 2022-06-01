import { render, fireEvent } from "@testing-library/react";
import FizzBuzz from "../src/components/FizzBuzz";

let inputElement: HTMLElement, outputElement: HTMLElement;

beforeEach(() => {
  const { getByTestId } = render(<FizzBuzz />);
  inputElement = getByTestId("input");
  outputElement = getByTestId("output");
});

describe("Fizz Bazz 問題の答えを表示する", () => {
  describe('入力エリアに3の倍数を入力したら、出力エリアに"fizz"を表示する', () => {
    it('入力エリアに3を入力したら、出力エリアに"fizz"を表示する', () => {
      fireEvent.change(inputElement, { target: { value: "3" } });
      expect(outputElement.textContent).toBe("fizz");
    });
    it('入力エリアに6を入力したら、出力エリアに"fizz"を表示する', () => {
      fireEvent.change(inputElement, { target: { value: "6" } });
      expect(outputElement.textContent).toBe("fizz");
    });
  });

  describe('入力エリアに5の倍数を入力したら、出力エリアに"bazz"を表示する', () => {
    it('入力エリアに5を入力したら、出力エリアに"bazz"を表示する', () => {
      fireEvent.change(inputElement, { target: { value: "5" } });
      expect(outputElement.textContent).toBe("bazz");
    });
    it('入力エリアに10を入力したら、出力エリアに"bazz"を表示する', () => {
      fireEvent.change(inputElement, { target: { value: "10" } });
      expect(outputElement.textContent).toBe("bazz");
    });
  });
  describe('入力エリアに3と5の倍数を入力したら、出力エリアに"fizzbazz"を表示する', () => {
    it('入力エリアに15を入力したら、出力エリアに"fizzbazz"を表示する', () => {
      fireEvent.change(inputElement, { target: { value: "15" } });
      expect(outputElement.textContent).toBe("fizzbazz");
    });
    it('入力エリアに30を入力したら、出力エリアに"fizzbazz"を表示する', () => {
      fireEvent.change(inputElement, { target: { value: "30" } });
      expect(outputElement.textContent).toBe("fizzbazz");
    });
  });
  describe("入力エリアに3と5の倍数以外を入力したら、出力エリアにその数字を表示する", () => {
    it('入力エリアに1を入力したら、出力エリアに"1"を表示する', () => {
      fireEvent.change(inputElement, { target: { value: "1" } });
      expect(outputElement.textContent).toBe("1");
    });

    it('入力エリアに2を入力したら、出力エリアに"2"を表示する', () => {
      fireEvent.change(inputElement, { target: { value: "2" } });
      expect(outputElement.textContent).toBe("2");
    });
  });
});

export {};
