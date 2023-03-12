import { Grid } from "semantic-ui-react";
import Login from "./Login";
import Hero from "./Hero";
import "./landing.css";

const Landing = () => {
  return (
    <>
      <div id="landing">
        <Grid divided="vertically">
          <Grid.Row columns={2}>
            <Grid.Column md={12}>
              <Hero />
            </Grid.Column>
            <Grid.Column md={12} className="bg-white">
              <div id="auth-container">
                <Login />
              </div>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    </>
  );
};

export default Landing;
