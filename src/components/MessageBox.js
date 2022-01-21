import Alert from "react-bootstrap/Alert";
export default function MessageBox(props) {
  console.log(props);
  return <Alert variant={props.variant || "info"}>{props.children}</Alert>;
}
