import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

function UperButton() {
  return (
    <DropdownButton id="dropdown-basic-button" title="English">
      <Dropdown.Item href="#/action-1">Frances</Dropdown.Item>
      <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
      <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
    </DropdownButton>
  );
}

export default UperButton;
