import Input from "../Input/Input";
import Button from "../Button/Button";
import "./styles.css";

function LoginForm() {
  return (
    <form className="login_form">
      <h2 className="login_title">LoginForm</h2>

      <Input
        name="email"
        type="email"
        placeholder="Enter your email"
        label="Email"
      />

      <Input
        name="password"
        type="password"
        placeholder="Enter your password"
        label="Password"
      />

      <Button name="Login" type="submit" />
    </form>
  );
}

export default LoginForm;