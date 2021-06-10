import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Card, Col, Modal, Row } from "react-bootstrap";

const GetPet = ({ match, history }) => {
  const [pet, setPet] = useState({});
  const [load, setLoad] = useState(false);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  useEffect(() => {
    const getPet = async () => {
      const { data } = await axios.get(`/api/pet/${match.params.id}`);
      setPet(data.pet);
    };
    getPet();
  }, [match.params.id]);

  const deletePet = async () => {
    try {
      await axios.delete(`/api/pet/${match.params.id}/delete`);
      history.push(`/`);
    } catch (error) {
      console.log("error");
    }
  };
  const addLike = async () => {
    try {
      const { data } = await axios.put(`/api/pet/${match.params.id}/like`);
      setPet(data.pet);
      setLoad(true);
    } catch (error) {
      console.log("error");
    }
  };
  return (
    <div className="mt-2">
      <div className="d-flex justify-content-between">
        <h2>Deitals About: {pet.petName}</h2>
        <Button variant="outline-danger" onClick={handleShow}>
          {" "}
          Delete
        </Button>
      </div>

      <Card className="p-2 my-2">
        <Row>
          <Col sm={3}>
            {" "}
            <h2>Pet Type:</h2>
          </Col>
          <Col sm={5}>
            <h2>{pet.petType}</h2>
          </Col>
        </Row>
        <Row>
          <Col sm={3}>
            {" "}
            <h2>Pet Description:</h2>
          </Col>
          <Col sm={5}>
            <h2>{pet.petDescription}</h2>
          </Col>
        </Row>
        <Row>
          <Col sm={3}>
            {" "}
            <h2>Skills:</h2>
          </Col>
          <Col sm={5}>
            {pet.skill1 ? (
              <>
                <h2>{pet.skill1}</h2>
                <h2>{pet.skill2}</h2>
                <h2>{pet.skill3}</h2>
              </>
            ) : (
              <h2 className="text-danger">There is no skills</h2>
            )}
          </Col>
        </Row>
        <Row>
          <Col sm={4}>
            <Button variant="success" disabled={load} onClick={addLike}>
              Like Garfield
            </Button>{" "}
            <p>({pet.likes}) likes</p>
          </Col>
        </Row>
      </Card>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header>
          <Modal.Title>Delete Pet</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure you eante to delete ({pet.petName}){" "}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="danger" onClick={deletePet}>
            delete
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default GetPet;
