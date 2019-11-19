import React, { Component } from "react";
import { connect } from "react-redux";
import { getusers } from "../actions/action";
import Nav from "../components/nav";
import jwt_decode from "jwt-decode";
import Gallerie from "../components/gallerie";
import { Link } from "react-router-dom";
import Footer from "../components/footer";

class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      emailR: "",
      passwordR: "",
      firstnameR: "",
      lastnameR: "",
      pictureR: ""
    };
  }

  componentDidMount = () => {
    this.props.getusers();
  };

  render() {
    if (localStorage.getItem("token")) {
      const token = localStorage.getItem("token");
      var decoded = jwt_decode(token);
      console.log(decoded);
    }

    return (
      <div>
        <Nav />

        {this.props.users.map(
          el =>
            el._id == decoded.id && (
              <div className="profile">
                <div className="presentation">
                  <span className="name">
                    <h2>
                      {el.lastname.charAt(0).toUpperCase() +
                        el.lastname.slice(1)}
                    </h2>
                    <h2>
                      {el.firstname.charAt(0).toUpperCase() +
                        el.firstname.slice(1)}
                    </h2>
                  </span>
                  {/* <img  className="cover "src="https://maje.com.ni/media/news/4fdce7e8a71711e8bd821a2df7d7a5d9.jpg"></img> */}
                </div>

                <div className="gallerie">
                  <span className="gallerie-title">
                    <h1>Gallerie</h1>
                  </span>
                  <div my-pics>
                    <Gallerie />
                  </div>
                </div>
              </div>
            )
        )}
        <div>
          <Footer />
        </div>
      </div>
    );
  }
}
const MapStateToProps = state => ({ ...state });
export default connect(
  MapStateToProps,
  { getusers }
)(Profile);
