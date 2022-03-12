import React from "react";
import { Container } from "react-bootstrap";

const Home = () => {
  return (
    <Container>
      <div class="row" id="container">
        <form id="login-form" class="">
          <div class="card" class="center">
            <div class="card-header">
              <h2>Member Login</h2>
            </div>
            <div class="card-content">
              <div>
                <label class="form-label" for="email-input-login">
                  Email
                </label>
                <input type="text" class="form-input" id="email-input-login" />
              </div>
              <div>
                <label for="password-input-login" class="form-label">
                  Password
                </label>
                <input
                  type="password"
                  id="password-input-login"
                  class="form-input"
                />
              </div>
            </div>
            <div class="card-action">
              <button type="submit" id="login-btn" class="btn">
                Login!
              </button>
              <a type="button" class="btn" href="/signup">
                Sign up
              </a>
            </div>
          </div>
        </form>
      </div>
    </Container>
  );
};

export default Home;
