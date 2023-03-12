import { Form, Button } from "semantic-ui-react";
import { login } from "../../utils/apiUtils";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const onSubmit = async (e) => {
    e.preventDefault();
    const values = new FormData(e.target);
    try {
      const data = await login(values);
      localStorage.setItem("user", JSON.stringify(data));
      // TODO: change navigation to tasks later
      navigate("/groups");
    } catch (err) {
      // TODO: error handling
      throw err;
    }
  };

  return (
    <Form onSubmit={onSubmit}>
      <Form.Group>
        <Form.Input name="id" placeholder="Username or Email" />
      </Form.Group>

      <Form.Group>
        <Form.Input name="password" placeholder="Password" type="password" />
      </Form.Group>

      <Form.Group>
        <Form.Checkbox name="remember_me">Remember me</Form.Checkbox>
      </Form.Group>

      <Form.Group>
        <Button primary type="submit">
          Submit
        </Button>
      </Form.Group>
    </Form>
  );
};
export default Login;
