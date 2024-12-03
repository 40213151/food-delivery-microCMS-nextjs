import { CardElement } from "@stripe/react-stripe-js";

const CardSection = (props) => {
  return (
    <div>
      <div>
        <label htmlFor="card-element">クレジット/デビットカード</label>

        <div>
          <fieldset>
            <div className="form-for">
              <div id="card-element" style={{ width: "100%" }}></div>
              <CardElement />
            </div>
            <br />
            <div className="order-button-wrapper">
              <button onClick={props.submitOrder}>注文を確認</button>
            </div>
          </fieldset>
        </div>
      </div>
      <style>
        {`
          .order-button-wrapper {
            display: flex;
            width: 100%;
            align-items: flex-end;
            justify-content: flex-end;
          }
        `}
      </style>
    </div>
  );
};

export default CardSection;
