import axios from "axios";
import React, { useState } from "react";
import { Alert, Button, Card, Form } from "react-bootstrap";
import FormContainer from "../components/FormContainer";
import valid from "../utils/valid";
const NewForm = ({ history }) => {
  const [userData, setUserData] = useState({
    petName: "",
    petType: "",
    petDescription: "",
    skill1: "",
    skill2: "",
    skill3: "",
  });
  const [errors, setErrors] = useState({});
  const [err, setErr] = useState();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({});
    const petName = userData.petName;
    const petType = userData.petType;
    const petDescription = userData.petDescription;
    const err = valid({ petName, petType, petDescription });
    if (err.errLength > 0) {
      return setErrors(err.errMsg);
    }
    try {
      const { data } = await axios.post(
        "http://localhost:8000/api/pet",
        userData
      );
      history.push("/");
      console.log(data);
    } catch (error) {
      setErr(error.response.data.message);
    }
  };
  return (
    <FormContainer>
      <Card className="p-3 my-3">
        {err && <Alert variant="danger">{err}</Alert>}
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Pet Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter email"
              name="petName"
              onChange={handleChange}
            />
            <Form.Text className="text-danger">
              {errors.petName ? errors.petName : ""}
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Pet Types</Form.Label>
            <Form.Control
              type="text"
              placeholder="Pet Description"
              name="petType"
              onChange={handleChange}
            />
            <Form.Text className="text-danger">
              {errors.petType ? errors.petType : ""}
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Pet Description</Form.Label>
            <Form.Control
              type="text"
              placeholder="pet Description "
              name="petDescription"
              onChange={handleChange}
            />
            <Form.Text className="text-danger">
              {errors.petDescription ? errors.petDescription : ""}
            </Form.Text>
          </Form.Group>
          <h2>Skills Optinals</h2>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Skill1</Form.Label>
            <Form.Control
              type="text"
              placeholder="skill1"
              name="skill1"
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Skill2</Form.Label>
            <Form.Control
              type="text"
              placeholder="skill2"
              name="skill2"
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Skill3</Form.Label>
            <Form.Control
              type="text"
              placeholder="skill3"
              name="skill3"
              onChange={handleChange}
            />
          </Form.Group>

          <Button variant="primary" type="submit" className="mt-2">
            Add a Pet
          </Button>
        </Form>
      </Card>
    </FormContainer>
  );
};

export default NewForm;
// .then(res=>console.log(res)) // If successful, do something with the response.
// .catch(err=>{
//     const errorResponse = err.response.data.errors; // Get the errors from err.response.data
//     const errorArr = []; // Define a temp error array to push the messages in
//     for (const key of Object.keys(errorResponse)) { // Loop through all errors and get the messages
//         errorArr.push(errorResponse[key].message)
//     }
//     // Set Errors
//     setErrors(errorArr);
// })
