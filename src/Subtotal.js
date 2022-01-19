import "./Subtotal.css";
import React from "react";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "./StateProvider";
import { getBasketTotal } from "./Reducer";
import { useHistory } from "react-router-dom";
function Subtotal() {
  const history = useHistory();
  const [{ basket, user }, dispatch] = useStateValue();
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket.length} items): <strong>{value}</strong>
            </p>
            <small className="subtotal_gift">
              <input type="checkbox" />
              This order contains a gift
            </small>
          </>
        )}
        // decimalScale={2}
        value={Math.round(getBasketTotal(basket))} // part of homework
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
      {/* To push the user to a page programmatically, we will use history.  */}
      <button onClick={(e) => history.push("/payment")}>
        Proceed to Checkout
      </button>
    </div>
  );
}
export default Subtotal;
