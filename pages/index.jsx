"use client";
import { useState } from "react";

export default function Home() {
  const [value, setValue] = useState("");
  const res = [
    "",
    "Pena de urubu, pena de galinha... ",
    "Trás carne pra fazer gostrognokof",
    "yabirifó (_ ___). yabirifó (_ ____)",
  ];

  return (
    <>
      <h1>Escolha entre "1", "2" e "3"</h1>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      {/* <p>{value !== "1" || value !== "2" || value !== "3"  ? "Olá! Estou aqui pra estudar no curso.dev" : res[value]}</p> */}
      <p>
        {!value ||
          (+value > res.length - 1 &&
            "Olá! Estou aqui pra estudar no curso.dev")}
      </p>
      <p>{value && res[value]}</p>
    </>
  );
}
