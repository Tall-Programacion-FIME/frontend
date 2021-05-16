import React from "react";
import { create } from "react-test-renderer";
import App from "./App";

let component: any;

describe("<App />", () => {
  beforeEach(() => {
    component = create(<App />);
  });

  it("Renderiza correctamente", () => {
    expect(component).toBeDefined();
  });
});
