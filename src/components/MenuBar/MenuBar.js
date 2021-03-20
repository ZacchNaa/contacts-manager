import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Icon, Image, Label, Menu } from "semantic-ui-react";
import Logo from "../../assets/images/logo.jpg";

export default function MenuBar() {
  const [activeItem, setActiveItem] = useState({});

  const handleItemClick = (e, { name }) => setActiveItem({ activeItem: name });

  return (
    <Menu secondary pointing>
      <Button
        basic
        as={Link}
        to="/"
        style={{ fontSize: "24px", padding: "10px" }}
      >
        <Image src={Logo} avatar size="mini" circular />
        <span style={{ paddingLeft: "40px" }}>MyContacts</span>
      </Button>

      <Menu.Item
        style={{ fontSize: "18px", paddingBottom: "15px" }}
        position="right"
        name="createcontact"
        active={activeItem === "createcontact"}
        onClick={handleItemClick}
      >
        <Button as={Link} to="/contact/create" labelPosition="right">
          <Button basic color="green">
            <Icon name="add" />
            Create
          </Button>
          <Label as="a" basic color="blue" pointing="left">
            Contact
          </Label>
        </Button>
      </Menu.Item>

      <Menu.Item
        style={{ fontSize: "18px", paddingBottom: "15px" }}
        name="sign-in"
        active={activeItem === "sign-in"}
        onClick={handleItemClick}
      >
        <Button as={Link} to="/auth/login" labelPosition="right">
          <Button basic color="red">
            <Icon name="sign-out" />
            Sign
          </Button>
          <Label as="a" basic color="orange" pointing="right">
            Out
          </Label>
        </Button>
      </Menu.Item>
    </Menu>
  );
}
