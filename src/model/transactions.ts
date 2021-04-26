export interface Transaction {
  id: number;
  title: string;
  type: string;
  amount: number;
  category: string;
  createdAt: string;
}

export type TransactionInput = Omit<Transaction, "id" | "createdAt">;
