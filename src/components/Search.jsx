import React from "react";
import { FaSearch } from "react-icons/fa";

import { useState } from "react";
import styled from "styled-components";

import { useNavigate } from "react-router-dom";

const Search = () => {
  const [input, setInput] = useState("");
  const navigate = useNavigate()

  const handleSearch = (e) => {
    setInput(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    navigate('searched/' + input)
  };

  return (
    <FormStyle onSubmit={submitHandler}>
      <FaSearch />
      <input
        onChange={handleSearch}
        type="text"
        placeholder="search"
        value={input}
      />
    </FormStyle>
  );
};

const FormStyle = styled.form`
  margin: 20px 320px;
  position: relative;
  width: 100%;
  input {
    width: 620px;
    border: none;
    background: linear-gradient(35deg, #494949, #313131);
    font-size: 24px;
    color: white;
    padding: 16px 48px;
    border: none;
    border-radius: 16px;
    outline: none;
  }
  svg {
    position: absolute;
    top: 50%;
    left: 0%;
    transform: translate(100%, -50%);
    color: white;
  }
`;
export default Search;
