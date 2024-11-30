import Link from "next/link";
import { Card, CardBody, CardImg, CardTitle, Col, Row } from "reactstrap";

const RestaurantList = () => {
  return (
    <Row>
      <Col xs="6" sm="4">
        <Card style={{ margin: "0. 0.5rem 20px 0.5rem" }}>
          <CardImg
            src="http://localhost:1337/uploads/2_863fd2bfd6.jpeg"
            top={true}
            style={{ height: 250 }}
          />
          <CardBody>
            <CardTitle>Itarian Restaurant</CardTitle>
            <CardTitle>イタリアのレストランです</CardTitle>
          </CardBody>
          <div className="card-footer">
            <Link href="/restaurants?id=1" as="/restaurants/1">
              <a className="btn btn-primary">もっと見る</a>
            </Link>
          </div>
        </Card>
      </Col>

      <style jsx>
        {`
          a {
            color: white;
          }
          a:link {
            text-decoration: none;
            color: white;
          }
          a:hover {
            color: white;
          }
          .card-columns {
            column-count: 3;
          }
        `}
      </style>
    </Row>
  );
};

export default RestaurantList;
