import { createContext } from "react";

export interface Order {
  optionType: string;
  transactionType: string;
  strikePrice: string;
  numberOfLots: string;
  instrumentType: string;
}

export type AppContextType = {
  orders: Order[];
  addOrder: (order: Order) => void;
  removeOrder: (index: number) => void;
};

export const AppContext = createContext<AppContextType | null>(null);
