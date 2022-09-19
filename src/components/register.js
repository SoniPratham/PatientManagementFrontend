import axios from "axios";
import React, { useEffect, useState } from "react";
import { Container, Form, Card, Button } from "react-bootstrap";
import { Navigate, useParams } from "react-router-dom";

export default function Student(props) { 
return (
    <div className="my-3">
      <Container>
        <Card>
          <Form onSubmit={patientIds != null ? updateStudent : savePatient}>
            <Card.Header>
              <strong>{patientIds!=null? "Update Student Information":"Add Student Information"}</strong>
            </Card.Header>
            <Card.Body>
              <Form.Group className="mb-3">
                <Form.Label>Id</Form.Label>
                <Form.Control
                  name="patientId"
                  value={patientId}
                  type="text"
                  placeholder="Enter patientId"
                  onChange={textChanged}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  name="name"
                  value={name}
                  type="text"
                  placeholder="Enter name"
                  onChange={textChanged}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Address</Form.Label>
                <Form.Control
                  name="address"
                  value={address}
                  type="text"
                  placeholder="Enter address"
                  onChange={textChanged}
                />
              </Form.Group>
            </Card.Body>
            <Card.Footer>
              <Button variant="primary" type="submit">
                {patientIds != null ? "Update" : "Submit"}
              </Button>
            </Card.Footer>
          </Form>
        </Card>
      </Container>
    </div>
  );
}
}
