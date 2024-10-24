import { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import React from "react";
import "./index.scss";

interface SpinnerProps {}

const Spinner = ({}: SpinnerProps) => {
  return (
    <div className="spinner-wrapper">
      <div className="loader"></div>
    </div>
  );
};

export default Spinner;
