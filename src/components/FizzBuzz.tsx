import { FC, useState } from "react";

const FizzBuzz: FC = () => {
  const [input, setInput] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    switch (true) {
      case value % 15 === 0:
        setInput("fizzbazz");
        return;
      case value % 3 === 0:
        setInput("fizz");
        return;
      case value % 5 === 0:
        setInput("bazz");
        return;
      default:
        setInput(value.toString());
    }
  };

  return (
    <div>
      <h1>FizzBuzz</h1>
      <p>
        ε₯ε:{" "}
        <input type="number" data-testid="input" onChange={handleChange} />
      </p>
      <p>
        εΊε: <span data-testid="output">{input}</span>
      </p>
    </div>
  );
};

export default FizzBuzz;
