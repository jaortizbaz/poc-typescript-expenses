import Table from 'react-bootstrap/Table';
import {Expense} from "../entities/Expense";
import {ExpenseItem} from "./expense-item";
import {MouseEventHandler} from "react";

interface ExpensesTableProps {
    expenses: Expense[],
    onEdit: MouseEventHandler,
    onRemove: MouseEventHandler
}

export function ExpensesTable({expenses, onEdit, onRemove}: ExpensesTableProps) {
    return (
        <Table striped hover>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Date</th>
                    <th>Description</th>
                    <th>Category</th>
                    <th>Amount</th>
                    <th>Discount</th>
                    <th>Total</th>
                    <th>Options</th>
                </tr>
            </thead>
            <tbody>
                {expenses.map((expense, index) => (
                    <ExpenseItem
                        key={index}
                        expense={expense}
                        index={index}
                        onEdit={onEdit}
                        onRemove={onRemove}
                    />
                ))}
            </tbody>
        </Table>
    );
}
