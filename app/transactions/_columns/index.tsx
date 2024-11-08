"use client";

import { Transaction } from "@prisma/client";
import { ColumnDef } from "@tanstack/react-table";
import TransactionTypeBadge from "../_components/type-badge";

export const transactionColumns: ColumnDef<Transaction>[] = [
  {
    id: "name",
    accessorKey: "name",
    header: "Nome",
  },
  {
    id: "type",
    accessorKey: "type",
    header: "Tipo",
    cell: ({ row: { original: transaction } }) => (
      <TransactionTypeBadge transaction={transaction} />
    ),
  },
  {
    id: "category",
    accessorKey: "category",
    header: "Categoria",
  },
  {
    id: "paymentMethod",
    accessorKey: "paymentMethod",
    header: "Método de Pagamento",
  },
  {
    id: "date",
    accessorKey: "date",
    header: "Data",
  },
  {
    id: "amount",
    accessorKey: "amount",
    header: "Valor",
  },
  {
    id: "actions",
    accessorKey: "actions",
    header: " ",
  },
];
