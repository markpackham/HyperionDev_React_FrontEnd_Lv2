// Learning about React Bootstrap Card from
// Cards (no date) React Bootstrap.
// Available at: https://react-bootstrap.github.io/docs/components/cards/ (Accessed: 09 October 2023).
import Card from "react-bootstrap/Card";
import Dropdown from "react-bootstrap/Dropdown";
import PropTypes from "prop-types";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

// Learning about PropTypes.shape for validating objects from
// Ferrari, C. (2019) How to specify the shape of an object with proptypes, DEV Community.
// Available at: https://dev.to/cesareferrari/how-to-specify-the-shape-of-an-object-with-proptypes-3c56 (Accessed: 09 October 2023).
// We validate ProductCard rather than Products
ProductCard.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    img: PropTypes.string.isRequired,
  }).isRequired,
  totalPrice: PropTypes.number.isRequired,
  updateTotalPrice: PropTypes.func.isRequired,
};

export default function ProductCard({ product, updateTotalPrice, totalPrice }) {
  // Colors used for Dropdown Menu
  // green/success used as default,
  // using State so only specific button impacted rather than all of them
  const [buttonColor, setButtonColor] = useState("success");
  const nav = useNavigate();

  // Get total product price
  function handlePurchase(price) {
    updateTotalPrice(price);
    nav("/products", { state: totalPrice + price });
  }

  // Switch dropdown button color based on selection
  const handleDropdownColor = (colorChosen) => {
    setButtonColor(colorChosen);
  };

  return (
    <Card id="product-cards">
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Dropdown>
          {/* button color depends on which dropdown menu item selected
          colors based on Bootstrap btn colors of success, danger and primary */}
          <Dropdown.Toggle
            variant={buttonColor}
            id="dropdown-basic"
            className="mb-2 mt-2"
          >
            Dropdown button
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item
              value="danger"
              onClick={() => handleDropdownColor("danger")}
              href="#/action-1"
            >
              Red
            </Dropdown.Item>
            <Dropdown.Item
              value="primary"
              href="#/action-2"
              onClick={() => handleDropdownColor("success")}
            >
              Green
            </Dropdown.Item>
            <Dropdown.Item
              value="success"
              href="#/action-3"
              onClick={() => handleDropdownColor("primary")}
            >
              Blue
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        <Card.Text>{product.description}</Card.Text>
        <Card.Text>Price: £{product.price}</Card.Text>
        <Card.Img src={product.img} className="m-4" />
        <Button
          onClick={() => handlePurchase(product.price)}
          className="btn btn-info"
        >
          Buy
        </Button>
      </Card.Body>
    </Card>
  );
}
