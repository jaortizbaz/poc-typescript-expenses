import {useQuery} from "@tanstack/react-query";
import {useCallback} from "react";
import {useNavigate} from 'react-router-dom';
import {getExpenses} from "../../api/service/expense-service";
import {ExpensesTable} from "../../components/expenses-table";
import {Spinner} from "react-bootstrap";

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
                <button type="button" onClick={refetch}>
                    Load Expenses
                </button>
            </div>

            {query.isFetching && (
                <>
                    <Spinner animation={"border"} variant={"info"} />
                    <p style={{fontStyle: "oblique"}}>
                        Loading...
                    </p>
                </>
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
