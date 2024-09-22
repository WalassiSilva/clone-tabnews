"use client"
import {useState} from "react";

export default function Home() {
    const res = ["",
        "Pena de urubu, pena de galinha... Se vocês está com dor no cu... Dá uma risadinha.",
        "Trás carne pra fazer gostrognokof",
        "yabirifó (e pau). yabirifó (e rola)",
    ]
    const [value, setValue] = useState();
    return (
        <>
            <h1>Escolha entre "1", "2" e "3"</h1>
            <input type="text" value={value} onChange={(e) => setValue(e.target.value)}/>
            <p>{res[value]}</p>
        </>
    )
}