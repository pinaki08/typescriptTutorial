import ButtonGroup from "react-bootstrap/ButtonGroup";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";


function Bgroup() {
  return (
    <>
      {["Home", "Shop", "Stores", "Mega menu", "Pages", "Acount"].map(
        (variant) => (
          <DropdownButton
            as={ButtonGroup}
            key={variant}
            id={`dropdown-variants-${variant}`}
            variant={variant.toLowerCase()}
            title={variant}
          >
            
            <Dropdown.Item eventKey="1">Home1</Dropdown.Item>
            <Dropdown.Item eventKey="2">Home2</Dropdown.Item>
            <Dropdown.Item eventKey="3" active>
              Home3
            </Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
          </DropdownButton>
        )
      )}
    </>
  );
}

export default Bgroup;
