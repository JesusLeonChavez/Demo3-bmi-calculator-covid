import React, { useState } from "react";
import "./Calculator.css"

const Calculator = () => {
  const [bmi, setBmi] = useState();
  const [result, setResult] = useState();
  const [height, setHeight] = useState();
  const [weight, setWeight] = useState();

  const handleBmi = () => {
    let val = (
      [Number(weight) / Number(height) / Number(height)] * 10000
    ).toFixed(1);

    setBmi(val);

    if (val < 18.5) {
      setResult("Bajo Peso, no corre peligro de contraer covid, pero necesita alimentarse más.");
    } else if (val > 18.5 && val <= 24.9) {
      setResult("Saludable, no corre peligro de contraer covid.");
    } else if (val > 24.9 && val < 30) {
      setResult("Exceso de Peso, corre con peligro de contraer covid");
    } else if(val > 30) {
      setResult("Obeso, tiene altas probabilidades de contraer covid");
    } else {
      setResult("Error, ingrese datos reales");
    }
  };

  return (
    <div class="container">
        <div class="containerForm">
            <h2>Covid BMI Calculador</h2>
            <ul class="formInput">
                <li>
                    <input
                        class="inputFields"
                        type="text"
                        onChange={(e) => setHeight(e.target.value)}
                        placeholder="Altura en cm"
                        required
                    />
                </li>
                <li>
                    <input
                        class="inputFields"
                        type="text"
                        onChange={(e) => setWeight(e.target.value)}
                        placeholder="Peso en kg"
                        required
                    />
                </li>
                <li id="center-btn">
                    <button 
                    type="submit" class="join-btn"
                    onClick={handleBmi}>Calcular</button>
                </li>
            </ul>
        </div>

        <div class="resultIBM">
            <h2>Resultado del calculo</h2>
            <h1>{bmi}</h1>
            <h2>{result}</h2> 
            <p>Tome sus precausiones</p>
        </div>
    </div>
  );
};

export default Calculator;