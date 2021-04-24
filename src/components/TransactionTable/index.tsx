import { useEffect } from "react";
import { Container } from "./styles";

export function TransactionsTable() {
  useEffect(() => {
    fetch("http://localhost:3000/api/transactions")
      .then((response) => response.json())
      .then((response) => console.log(response));
  }, []);

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
          <tr>
            <td> Desenvolvimento de website</td>
            <td className="deposit">R$ 12.000</td>
            <td>Desenvolvimento</td>
            <td>20/01/2021</td>
          </tr>
          <tr>
            <td> Aluguel</td>
            <td className="withdraw">- R$ 1.200</td>
            <td>Desenvolvimento</td>
            <td>20/01/2021</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}
