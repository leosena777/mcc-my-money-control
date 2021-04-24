import React from "react";
import { Summary } from "../Sumary";
import { TransactionsTable } from "../TransactionTable";
import { Container } from "./styles";

export function Dashboard() {
  return (
    <Container>
      <Summary />
      <TransactionsTable />
    </Container>
  );
}
