import {Expense} from "../entities/Expense";
import {MouseEventHandler} from "react";

interface ExpenseItemProps {
    expense: Expense,
    index: number,
    onEdit: MouseEventHandler,
    onRemove: MouseEventHandler,
}

export function ExpenseItem({expense, index, onEdit, onRemove}: ExpenseItemProps) {
    return (
        <tr>
            <td style={{textAlign: "left"}}>#{index}</td>
            <td style={{textAlign: "left"}}>{expense.expenseDate()}</td>
            <td style={{textAlign: "left"}}>{expense.description()}</td>
            <td style={{textAlign: "left"}}>{expense.category()}</td>
            <td style={{textAlign: "right"}}>{expense.amount()}</td>
            <td style={{textAlign: "right"}}>{expense.discount()}</td>
            <td style={{textAlign: "right"}}>{expense.total()}</td>
            <td style={{textAlign: "right"}}>
                <button onClick={onEdit}>Edit</button>
                <button onClick={onRemove}>Remove</button>
            </td>
        </tr>
    );
}
