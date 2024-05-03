import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { TechContainer } from "./App";
import { SliderWithRadioGroup } from "./App";
import { BudgetInput } from "./App";
import { BookBtn } from "./App";
import { Logoo } from "./App";
import { InvestmentCalculator } from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Logoo />
    <div className="App">
      <TechContainer />
      <SliderWithRadioGroup />
      <BudgetInput />
      <BookBtn />
      <InvestmentCalculator />
    </div>
  </StrictMode>
);
