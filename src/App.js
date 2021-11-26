import React from "react";
import Header from "./components/Header";
import Balance from "./components/Balance";
import IncomeList from "./components/IncomeList";
import ExpenseList from "./components/ExpenseList";
import AddTransaction from "./components/AddTransaction";
import { GlobalContextProvider } from "./context/GlobalState";
import "./App.css";
import { Grid } from "@mui/material";

const App = () => {
  return (
    <GlobalContextProvider>
      <div className="app-wrapper">
        <Grid container spacing={2}>
          <Grid item md={6} lg={6}>
            <Header />
          </Grid>

          <Grid item md={6} lg={6}>
            <Balance />
          </Grid>

          <Grid item md={12} lg={12}>
            <AddTransaction />
          </Grid>
          <Grid item md={6} lg={6}>
            <IncomeList />
          </Grid>

          <Grid item md={6} lg={6}>
            <ExpenseList />
          </Grid>
        </Grid>
      </div>
    </GlobalContextProvider>
  );
};

export default App;
