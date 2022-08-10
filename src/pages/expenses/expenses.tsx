import {useQuery} from "@tanstack/react-query";
import {useCallback} from "react";
import {getExpenses} from "../../api/service/expense-service";
import {ExpensesTable} from "../../components/expenses-table";

export function Expenses() {
    const query = useQuery(['expenses'], () => getExpenses());
    const refetch = useCallback(() => {
        query.refetch()
    }, [query]);

    const onEdit = useCallback(() => {
        console.log('edit clicked')
    }, []);

    const onRemove = useCallback(() => {
        console.log('remove clicked')
    }, []);

    return (
        <>
            <div>
                <button onClick={refetch}>
                    Load Expenses
                </button>
                <button onClick={refetch}>
                    Create Expense
                </button>
            </div>

            {query.isFetching && (
                <p style={{fontStyle: "oblique"}}>
                    Loading...
                </p>
            )}

            {query.data && query.data.length && (
                <ExpensesTable
                    expenses={query.data}
                    onEdit={onEdit}
                    onRemove={onRemove}
                />
            )}
        </>
    );
}
