import axios from "axios";
import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import FormContainer from "../components/FormContainer";

const AllPets = () => {
  const [pets, setPets] = useState([]);
  useEffect(() => {
    const quer = async () => {
      const { data } = await axios.get("http://localhost:8000/api/pet");
      setPets(data.pets);
    };
    quer();
  }, []);

  return (
    <FormContainer>
      <h3>This pets are looking for a good home</h3>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {pets.map((item, index) => (
            <tr key={index}>
              <td>{item.petName}</td>
              <td>{item.petType}</td>
              <td>
                <Link to={`/pet/${item._id}`} className="btn btn-primary">
                  Detail
                </Link>
                <Link
                  className="btn btn-secondary mx-3"
                  to={`/update/${item._id}`}
                >
                  Update
                </Link>{" "}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </FormContainer>
  );
};

export default AllPets;
