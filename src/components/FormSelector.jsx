import React, { useState } from "react";
import styled from "@emotion/styled";

import Error from "./Error";

const Button = styled.input`
  margin-top: 20px;
  font-weight: bold;
  font-size: 20px;
  padding: 10px;
  background-color: #f6931a;
  border: none;
  width: 60%;
  border-radius: 10px;
  color: #fff;
  transition: background-col-3or 0.3s ease;

  &:hover {
    background-color: #bf6900;
    cursor: pointer;
  }
`;
const ButtonClear = styled.input`
  margin-top: 20px;
  font-weight: bold;
  font-size: 20px;
  padding: 10px;
  background-color: #972323;
  border: none;
  width: 40%;
  border-radius: 10px;
  color: #fff;
  transition: background-col-3or 0.3s ease;

  &:hover {
    background-color: #3d1010;
    cursor: pointer;
  }
`;
const LabelWeight = styled.label`
  font-family: "Bebas Neue", cursivel;
  color: #f6931a;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 2rem;
  text-align: center;
  display: block;
`;
const Label = styled.label`
  font-family: "Bebas Neue", cursivel;
  color: #fff;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 1.5rem;
  display: block;
`;
const Select = styled.select`
  width: 100%;
  display: block;
  padding: 1rem;
  -webkit-appearance: none;
  border-radius: 10px;
  border: none;
  font-size: 1.2rem;
`;
const Formulario = ({ sendKg, sendLb }) => {
  const [error, setError] = useState({ exist: false, description: "" });
  const [kg, setKg] = useState({
    "K1.25": 0,
    "K2.5": 0,
    "K5": 0,
    "K10": 0,
    "K15": 0,
    "K20": 0,
    "K25": 0,
  });
  const [lb, setLb] = useState({
    "L5": 0,
    "L10": 0,
    "L15": 0,
    "L20": 0,
    "L25": 0,
    "L30": 0,
    "L35": 0,
    "L40": 0,
    "L45": 0,
  });

  const ClearForm = () => {
      setKg({
        "K1.25": 0,
        "K2.5": 0,
        "K5": 0,
        "K10": 0,
        "K15": 0,
        "K20": 0,
        "K25": 0,
      });
      setLb({
        "L5": 0,
        "L10": 0,
        "L15": 0,
        "L20": 0,
        "L25": 0,
        "L30": 0,
        "L35": 0,
        "L40": 0,
        "L45": 0,
      })

      sendKg(kg);
      sendLb(lb);
  };
  const handleChange = (e) => {
    const typeWeight = e.target.id;
    if (typeWeight.slice(0, 1) === "K") {
      setKg({
        ...kg,
        [e.target.id]: e.target.value,
      });
    } else if (typeWeight.slice(0, 1) === "L") {
      setLb({
        ...lb,
        [e.target.id]: e.target.value,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendKg(kg);
    sendLb(lb);
  };

  return (
    <form onSubmit={handleSubmit} className="position-relative mb-2">
      {error.exist ? (
        <Error setError={setError} description={error.description} />
      ) : null}
      <div class="m-3">
        <LabelWeight>KILOGRAMOS</LabelWeight>
        <div className="row m-0">
          <div className="col-3">
            <Label>1.25Kg</Label>
            <Select onChange={handleChange} value={kg["K1.25"]} id="K1.25">
              <option value="0">0</option>
              <option value="2">2</option>
              <option value="4">4</option>
            </Select>
          </div>
          <div className="col-3">
            <Label>2.5Kg</Label>
            <Select onChange={handleChange} value={kg["K2.5"]} id="K2.5 ">
              <option value="0">0</option>
              <option value="2">2</option>
              <option value="4">4</option>
            </Select>
          </div>
          <div className="col-3">
            <Label>5Kg</Label>
            <Select onChange={handleChange} value={kg.K5} id="K5"> 
              <option value="0">0</option>
              <option value="2">2</option>
              <option value="4">4</option>
            </Select>
          </div>
          <div className="col-3">
            <Label>10Kg</Label>
            <Select onChange={handleChange} value={kg.K10} id="K10" >
              <option value="0">0</option>
              <option value="2">2</option>
              <option value="4">4</option>
            </Select>
          </div>
          <div className="col-3">
            <Label>15Kg</Label>
            <Select onChange={handleChange} value={kg.K15} id="K15" >
              <option value="0">0</option>
              <option value="2">2</option>
              <option value="4">4</option>
            </Select>
          </div>
          <div className="col-3">
            <Label>20Kg</Label>
            <Select onChange={handleChange} value={kg.K20} id="K20" >
              <option value="0">0</option>
              <option value="2">2</option>
              <option value="4">4</option>
            </Select>
          </div>
          <div className="col-3">
            <Label>25Kg</Label>
            <Select onChange={handleChange} value={kg.K25} id="K25" >
              <option value="0">0</option>
              <option value="2">2</option>
              <option value="4">4</option>
            </Select>
          </div>
        </div>
      </div>
      <div class="m-3">
        <LabelWeight>LIBRAS</LabelWeight>
        <div className="row m-0">
          <div className="col-3">
            <Label>5Lb</Label>
            <Select onChange={handleChange} value={lb.L5} id="L5"> 
              <option value="0">0</option>
              <option value="2">2</option>
              <option value="4">4</option>
            </Select>
          </div>
          <div className="col-3">
            <Label>10Lb</Label>
            <Select onChange={handleChange} value={lb.L10} id="L10" >
              <option value="0">0</option>
              <option value="2">2</option>
              <option value="4">4</option>
            </Select>
          </div>
          <div className="col-3">
            <Label>15Lb</Label>
            <Select onChange={handleChange} value={lb.L15} id="L15" >
              <option value="0">0</option>
              <option value="2">2</option>
              <option value="4">4</option>
            </Select>
          </div>
          <div className="col-3">
            <Label>20Lb</Label>
            <Select onChange={handleChange} value={lb.L20} id="L20" >
              <option value="0">0</option>
              <option value="2">2</option>
              <option value="4">4</option>
            </Select>
          </div>
          <div className="col-3">
            <Label>25Lb</Label>
            <Select onChange={handleChange} value={lb.L25} id="L25" >
              <option value="0">0</option>
              <option value="2">2</option>
              <option value="4">4</option>
            </Select>
          </div>
          <div className="col-3">
            <Label>30Lb</Label>
            <Select onChange={handleChange} value={lb.L30} id="L30" >
              <option value="0">0</option>
              <option value="2">2</option>
              <option value="4">4</option>
            </Select>
          </div>
          <div className="col-3">
            <Label>35Lb</Label>
            <Select onChange={handleChange} value={lb.L35} id="L35" >
              <option value="0">0</option>
              <option value="2">2</option>
              <option value="4">4</option>
            </Select>
          </div>
          <div className="col-3">
            <Label>40Lb</Label>
            <Select onChange={handleChange} value={lb.L40} id="L40" >
              <option value="0">0</option>
              <option value="2">2</option>
              <option value="4">4</option>
            </Select>
          </div>
          <div className="col-3">
            <Label>45Lb</Label>
            <Select onChange={handleChange} value={lb.L45} id="L45" >
              <option value="0">0</option>
              <option value="2">2</option>
              <option value="4">4</option>
            </Select>
          </div>
        </div>
      </div>
      <Button type="submit" value="Calcular" />
      <ButtonClear type="button" onClick={ClearForm} value="Borrar" />
    </form>
  );
};

export default Formulario;
