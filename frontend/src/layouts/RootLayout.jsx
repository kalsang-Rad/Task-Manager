import { NavLink, Outlet } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";

const RootLayout = () => {
  return (
    <div>
      {/* <div className="my-4">
        <Nav activeKey="/home">
          <Nav.Item>
            <Nav.Link href="/home">Today</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-1">Tomorrow</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-2">This week</Nav.Link>
          </Nav.Item>
        </Nav>
      </div> */}
      <div className="">
        <div className="">
          <Outlet />
        </div>
        <div className="flex flex-row">
          <Form.Floating className="mb-3">
            <Form.Control
              id="floatingInputCustom"
              type="text"
              placeholder="A task "
            />
            <label htmlFor="floatingInputCustom">New Task</label>
          </Form.Floating>
          <Button variant="primary">Add Task</Button>{" "}
        </div>
      </div>
    </div>
  );
};

export default RootLayout;
