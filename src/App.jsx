import { useEffect, useState } from "react";
import * as styles from "./appStyle";
import "./style.css";
import { styled } from "styled-components";
import Header from "./components/Header";
import axios from "axios";

function App() {
  const navList = ["about us", "contact"];

  return (
    <div>
      <Header navList={navList} />
      <h1>hai</h1>
    </div>
  );
}

export default App;
