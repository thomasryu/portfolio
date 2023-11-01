import { createContext, useContext } from "react";
import type { ScrollingValue } from "@/types";

export const ScrollingContext = createContext<ScrollingValue>({
  disabled: false,
  setDisabled: () => {},
});

export const useScrollingContext = () => useContext(ScrollingContext);
