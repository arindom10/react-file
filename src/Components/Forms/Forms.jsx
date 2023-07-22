import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Container } from "react-bootstrap/esm";

const Forms = () => {
    const [email, setEmail] = useState("");
    const [value, setValue] = useState("");
    const handleSubmit = () => {
        console.log(email);
        console.log(value);
    };
    return (
        <Container className="my-5">
            <Form>
                <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                >
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                        onChange={(e) => setEmail(e.target.value)}
                        type="email"
                        placeholder="name@example.com"
                    />
                </Form.Group>
                <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlTextarea1"
                >
                    <Form.Label>Example textarea</Form.Label>
                    <Form.Control
                        onChange={(e) => setValue(e.target.value)}
                        as="textarea"
                        rows={3}
                    />
                </Form.Group>
                <Button onClick={() => handleSubmit()} variant="primary">
                    Submit
                </Button>
            </Form>
        </Container>
    );
};

export default Forms;
