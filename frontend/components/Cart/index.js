import { Card, CardTitle, CardBody, Badge, Button } from "reactstrap";
import Link from "next/link";
import { useContext } from "react";
import AppContext from "../../context/AppContext";

const Cart = () => {
  const appContest = useContext(AppContext);

  const { cart } = appContest;

  return (
    <div>
      <Card style={{ padding: "10px 5px" }}>
        <CardTitle
          style={{
            margin: 10,
            textAlign: "center",
            fontWeight: 600,
            fontSize: 25,
          }}
        >
          注文一覧
        </CardTitle>
        <hr />
        <CardBody style={{ padding: 10 }}>
          <div style={{ marginBottom: 6 }}>
            <small>料理：</small>
          </div>
          {cart.items
            ? cart.items.map((item) => {
                if (item.quantity > 0) {
                  return (
                    <div>
                      <div className="items-one" style={{ marginBottom: 15 }}>
                        <span>&nbsp; {item.price}</span>
                        <span id="item-name">&nbsp; {item.name}</span>
                      </div>
                      <div>
                        <Button
                          id="item-price"
                          style={{
                            height: 25,
                            padding: 0,
                            width: 15,
                            marginRight: 5,
                            marginLeft: 10,
                          }}
                          color="link"
                          onClick={() => appContest.addItem(item)}
                        >
                          +
                        </Button>
                        <Button
                          id="item-price"
                          style={{
                            height: 25,
                            padding: 0,
                            width: 15,
                            marginRight: 5,
                            marginLeft: 10,
                          }}
                          color="link"
                          onClick={() => appContest.removeItem(item)}
                        >
                          -
                        </Button>
                        <span id="item-quantity" style={{ marginLeft: 5 }}>
                          {item.quantity}
                        </span>
                      </div>
                    </div>
                  );
                }
              })
            : null}

          <div>
            <Badge style={{ width: 200, padding: 10 }} color="ligth">
              <h5 style={{ fontWeight: 100, color: "gray" }}>合計：</h5>
              <h3>{cart.total}円</h3>
            </Badge>
            <div>
              <Link href="/checkout">
                <Button style={{ width: "100%" }} color="primary">
                  <a>注文する</a>
                </Button>
              </Link>
            </div>
          </div>
        </CardBody>
      </Card>
      <style jsx>{`
        #item-price {
          font-size: 1.3em;
          color: rgba(97, 97, 97, 1);
        }
        #item-quantity {
          font-size: 0.95em;
          padding-bottom: 4px;
          color: rgba(158, 158, 158, 1);
        }
        #item-name {
          font-size: 1.3em;
          color: rgba(97, 97, 97, 1);
        }
      `}</style>
    </div>
  );
};

export default Cart;
