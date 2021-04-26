import { useContext } from "react";
import { useTransaction } from "../../hooks/useTransactions";
import { Transaction } from "../../model/transactions";
import { Container } from "./styles";

export function TransactionsTable() {
  const { transactions } = useTransaction();

  function renderTransactions(transaction: Transaction) {
    return (
      <tr key={transaction.id}>
        <td> {transaction.title}</td>
        <td className={transaction.type}>
          {new Intl.NumberFormat("pt-br", {
            style: "currency",
            currency: "BRL",
          }).format(transaction.amount)}
        </td>
        <td>{transaction.category}</td>
        <td>
          {new Intl.DateTimeFormat("pt-br").format(
            new Date(transaction.createdAt)
          )}
        </td>
      </tr>
    );
  }

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th> Título </th>
            <th> Valor </th>
            <th> Categoria </th>
            <th> Data </th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction) => renderTransactions(transaction))}
        </tbody>
      </table>
    </Container>
  );
}
