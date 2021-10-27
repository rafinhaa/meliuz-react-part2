import React from "react";
import { useSelector } from "react-redux";
import { IAllPersons } from "../../store/modules/types";

const Footer = () => {
const state = useSelector((state: IAllPersons) => state.persons); 
  return (
    <div>Footer {state.length}</div>
  );
};

export default Footer;