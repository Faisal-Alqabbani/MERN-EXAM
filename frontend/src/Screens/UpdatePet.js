import axios from "axios";
import React, { useEffect, useState } from "react";
import { Alert, Button, Card, Form } from "react-bootstrap";
import FormContainer from "../components/FormContainer";
import valid from "../utils/valid";
const UpdatePet = ({ history, match }) => {
  const [userData, setUserData] = useState({
    petName: "",
    petType: "",
    petDescription: "",
    skill1: "",
    skill2: "",
    skill3: "",
  });
  const [errors, setErrors] = useState({});
  const [err, setErr] = useState("");
  const [message, setMessage] = useState("");
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };
  useEffect(() => {
    const getPet = async () => {
      const { data } = await axios.get(
        `http://localhost:8000/api/pet/${match.params.id}`
      );
      setUserData(data.pet);
    };
    getPet();
  }, [match.params.id]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({});
    setMessage("");
    setErr("");
    const petName = userData.petName;
    const petType = userData.petType;
    const petDescription = userData.petDescription;
    const err = valid({ petName, petType, petDescription });
    if (err.errLength > 0) {
      return setErrors(err.errMsg);
    }
    try {
      const { data } = await axios.put(
        `http://localhost:8000/api/pet/${match.params.id}/update`,
        userData
      );
      setMessage(data.message);
    } catch (error) {
      setErr(error.response.data.message);
    }
  };
  return (
    <FormContainer>
      <Card className="p-3 my-3">
        {err && <Alert variant="danger">{err}</Alert>}
        {message && <Alert variant="success">{message}</Alert>}
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Pet Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter email"
              name="petName"
              onChange={handleChange}
              value={userData.petName || ""}
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
              value={userData.petType || ""}
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
              value={userData.petDescription || ""}
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
              value={userData.skill1}
            />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Skill2</Form.Label>
            <Form.Control
              type="text"
              placeholder="skill2"
              name="skill2"
              onChange={handleChange}
              value={userData.skill2}
            />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Skill3</Form.Label>
            <Form.Control
              type="text"
              placeholder="skill3"
              name="skill3"
              onChange={handleChange}
              value={userData.skill3}
            />
          </Form.Group>

          <Button variant="secondary" type="submit" className="mt-2">
            Edit a Pet
          </Button>
        </Form>
      </Card>
    </FormContainer>
  );
};

export default UpdatePet;
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
