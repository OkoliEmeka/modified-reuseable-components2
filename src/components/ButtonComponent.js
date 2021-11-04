import React from "react";
import styled from "styled-components";

const Button = styled.button`
  border: none;
  background-color: #e7e9eb;
  color: #555;
  margin-bottom: 16px;
  width: 100%;
  padding-top: 20px;
  padding-right: 0px;
  padding-bottom: 20px;
  padding-left: 0px;
  text-align: center;
  vertical-align: middle;
  display: inline-block;
  text-decoration: none !important;
  border-radius: 5px;
  font-size: 15px;
`;
const Button1 = styled(Button)`
  grid-column: 1/2;
  grid-row: 1/2;
`;
const Button2 = styled(Button)`
  grid-column: 2/3;
  grid-row: 1/2;
`;
const Button3 = styled(Button)`
  grid-column: 3/4;
  grid-row: 1/2;
`;

const Button4 = styled(Button)`
  grid-column: 1/2;
  grid-row: 2/3;
`;
const Button5 = styled(Button)`
  grid-column: 2/3;
  grid-row: 2/3;
`;
const Button6 = styled(Button)`
  grid-column: 3/4;
  grid-row: 2/3;
`;
const Button7 = styled(Button)`
  grid-column: 1/2;
  grid-row: 3/4;
`;
const Button8 = styled(Button)`
  grid-column: 2/3;
  grid-row: 3/4;
`;
const Button9 = styled(Button)`
  grid-column: 3/4;
  grid-row: 3/4;
`;
const Button10 = styled(Button)`
  grid-column: 1/2;
  grid-row: 4/5;
`;
const Button11 = styled(Button)`
  grid-column: 2/3;
  grid-row: 4/5;
`;
const Button12 = styled(Button)`
  grid-column: 3/4;
  grid-row: 4/5;
`;
const Button13 = styled(Button)`
  grid-column: 1/2;
  grid-row: 5/6;
`;
const Button14 = styled(Button)`
  grid-column: 2/3;
  grid-row: 5/6;
`;
const Button15 = styled(Button)`
  grid-column: 3/4;
  grid-row: 5/6;
`;

function ButtonComponent({ text, className }) {
  return (
    <div className="button-container">
      <Button1>HTML Elements</Button1>
      <Button2>HTML Attributes</Button2>
      <Button3>HTML Browser</Button3>
      <Button4>HTML Input</Button4>
      <Button5>HTML Elements</Button5>
      <Button6>HTML Attributes</Button6>
      <Button7>HTML Browser</Button7>
      <Button8>HTML Input</Button8>
      <Button9>HTML Elements</Button9>
      <Button10>HTML Attributes</Button10>
      <Button11>HTML Browser</Button11>
      <Button12>HTML Input</Button12>
      <Button13>HTML Elements</Button13>
      <Button14>HTML Attributes</Button14>
      <Button15>HTML Browser</Button15>
    </div>
  );
}

export default ButtonComponent;
