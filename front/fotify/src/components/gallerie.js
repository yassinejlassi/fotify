import React, { Component } from "react";
import Nav from "./nav";
import axios from "axios";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import jwt_decode from "jwt-decode";

import { getuser, getusers } from "../actions/action";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

class Gallerie extends Component {
  constructor(props) {
    super(props);

    this.state = {
      show: false,
      photoR: "",
      id: "",
      nameR: ""
    };
  }
  componentDidMount = () => {
    this.props.getuser();
  };
  // componentWillUpdate = () => {
  //x
  // }

  handleClose = () => {
    this.setState({ show: !this.state.show });
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  registerph = () => {
    if (localStorage.getItem("token")) {
      const token = localStorage.getItem("token");
      var decoded = jwt_decode(token);

      console.log(decoded);
    }
    const { photoR, nameR } = this.state;
    axios
      .post("http://localhost:5000/users/" + decoded.id, {
        photo: { name: nameR, src: photoR }
      })

      .then(res => {
        console.log(res);
        this.props.getusers();
        this.props.history.push("/users");
      })

      .catch(err => console.log(err.response.data));
  };

  render() {
    if (localStorage.getItem("token")) {
      const token = localStorage.getItem("token");
      var decoded = jwt_decode(token);
    }

    return (
      <div className="Gallerie-container">
        <Button variant="primary" onClick={this.handleClose}>
          <h1>+</h1>
        </Button>

        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Add Picture</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h3>source</h3>
            <input
              placeholder="source"
              type="text"
              name="photoR"
              onChange={this.handleChange}
            ></input>
            <br></br>
            <h3>title</h3>
            <input
              placeholder="title"
              type="text"
              name="nameR"
              onChange={this.handleChange}
            ></input>
            <br></br>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>
              Close
            </Button>
            <Button
              variant="secondary"
              onClick={() => {
                this.handleClose();
                this.registerph();
              }}
            >
              Save
            </Button>
          </Modal.Footer>
        </Modal>
        {this.props.users.map(
          el =>
            el._id == decoded.id && (
              <div className="my-gallerie">
                {el.photo.map(p => (
                  <div className="cadre">
                    <img className="pic-posted" src={p.src}></img>
                    <h5 className="pic-title">{p.name}</h5>
                  </div>
                ))}
              </div>
            )
        )}
      </div>
    );
  }
}
const MapStateToProps = state => ({ ...state });
export default connect(
  MapStateToProps,
  { getuser, getusers }
)(withRouter(Gallerie));
