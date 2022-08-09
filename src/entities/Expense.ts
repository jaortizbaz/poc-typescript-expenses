import {ExpenseDTO} from "../api/repository/expense-api";

export class Expense {
    constructor(private dto: ExpenseDTO) {
    }
    date() {
        return this.dto.expenseDate;
    }
    description() {
        return this.dto.description;
    }
    category() {
        return this.dto.category;
    }
    amount() {
        return this.dto.amount;
    }
    discount() {
        return this.dto.discount;
    }
    total() {
        return this.dto.total;
    }
}
