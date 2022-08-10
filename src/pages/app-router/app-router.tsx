import React from "react";
import {Container, Nav, Navbar, NavDropdown} from "react-bootstrap";
import {
    BrowserRouter as Router,
    Link,
    Routes,
    Route
} from "react-router-dom";
import {Expenses} from "../expenses";
import {ExpenseForm} from "../expenses/expense-form/expense-form";

export function AppRouter() {
    return (
        <Router>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Nav className="me-auto">
                        <Nav.Link href="/">Expenses</Nav.Link>
                    </Nav>
                    <NavDropdown title="Create" id="basic-nav-dropdown">
                        <NavDropdown.Item href="/new">Create Expense</NavDropdown.Item>
                    </NavDropdown>
                </Container>
            </Navbar>
            <Routes>
                <Route path="/" element={<Expenses />} />
                <Route path="/new" element={<ExpenseForm />} />
            </Routes>
        </Router>
    );
}
