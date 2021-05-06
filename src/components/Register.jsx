import React, { Component } from 'react';
import { Form, Row, Col, Alert } from 'react-bootstrap';
import pass from '../data/pass';

export default class Register extends Component {
  state = {
    name: '',
    lastName: '',
    email: '',
    password: '',
    address: '',
    city: '',
    postalCode: '',
  };

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <div className="container">
          <br /> <hr />
          <div className="">
            <article className="card-body mx-auto" style={{ maxWidth: 400 }}>
              <h4 className="card-title mt-3 text-center">Create Account</h4>
              <p className="text-center">Get started with your free account</p>

              <form
                onSubmit={this.handleSubmit}
                value={this.state.name}
                onChange={(e) =>
                  this.setState({
                    name: e.currentTarget.value,
                  })
                }
              >
                <div
                  onSubmit={this.handleSubmit}
                  className="form-group input-group"
                >
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      {' '}
                      <i className="fa fa-user" />{' '}
                    </span>
                  </div>
                  <input
                    name
                    className="form-control"
                    placeholder="Name"
                    type="text"
                  />

                  <input
                    name
                    className="form-control"
                    placeholder="Surname"
                    type="text"
                  />
                </div>{' '}
                {/* form-group// */}
                <div
                  className="form-group input-group"
                  onSubmit={this.handleSubmit}
                >
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      {' '}
                      <i className="fa fa-envelope" />{' '}
                    </span>
                  </div>
                  <input
                    name
                    className="form-control"
                    placeholder="Email address"
                    type="email"
                  />
                </div>{' '}
                <div className="form-group input-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      {' '}
                      <i className="fa fa-lock" />{' '}
                    </span>
                  </div>
                  <input
                    value={this.state.password}
                    className="form-control"
                    placeholder="Create password"
                    type="password"
                    onChange={(e) =>
                      this.setState({ password: e.currentTarget.value })
                    }
                  />
                </div>{' '}
                {this.state.password &&
                this.state.password.length > 8 &&
                pass(this.state.password) ? (
                  <Alert variant="success" className="alerts mx-auto">
                    Password valid
                  </Alert>
                ) : (
                  <Alert variant="danger" className="alerts mx-auto">
                    Should contain at least 8 chars, 1 digit, 1 letter
                  </Alert>
                )}
                {/* form-group// */}
                <div
                  className="form-group input-group"
                  onSubmit={this.handleSubmit}
                >
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      {' '}
                      <i className="fa fa-lock" />{' '}
                    </span>
                  </div>
                  <input
                    className="form-control"
                    placeholder="Repeat password"
                    type="password"
                  />
                </div>{' '}
                {/* form-group// */}
                <Form.Row>
                  <Form.Group
                    as={Col}
                    md="6"
                    controlId="validationCustom03"
                    onSubmit={this.handleSubmit}
                  >
                    <Form.Label></Form.Label>
                    <Form.Control type="text" placeholder="City" required />
                    <Form.Control.Feedback type="invalid">
                      Please provide a valid city.
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group
                    as={Col}
                    md="3"
                    controlId="validationCustom04"
                    onSubmit={this.handleSubmit}
                  >
                    <Form.Label></Form.Label>
                    <Form.Control type="text" placeholder="State" />
                    <Form.Control.Feedback type="invalid">
                      Please provide a valid state.
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group
                    as={Col}
                    md="3"
                    controlId="validationCustom05"
                    onSubmit={this.handleSubmit}
                  >
                    <Form.Label></Form.Label>
                    <Form.Control type="text" placeholder="Zip" required />
                    <Form.Control.Feedback type="invalid">
                      Please provide a valid zip.
                    </Form.Control.Feedback>
                  </Form.Group>
                </Form.Row>
                {/*  */}
                {/*  */}
                <form action="" onSubmit={this.handleSubmit}>
                  <div class="form-group">
                    <label></label>
                    <input
                      type="text"
                      id="datepicker"
                      className="form-control"
                      placeholder="Date Of Birth"
                    />
                  </div>
                </form>
                {/*  */}
                <div className="form-group">
                  <button type="submit" className="btn btn-primary btn-block">
                    {' '}
                    Create Account
                  </button>
                </div>{' '}
                {/* form-group// */}
                <p className="text-center">
                  Have an account? <a href>Log In</a>{' '}
                </p>
              </form>
            </article>
          </div>{' '}
          {/* card.// */}
        </div>
      </div>
    );
  }
}
