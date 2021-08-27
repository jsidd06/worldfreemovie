import React from "react";
import {Link} from "react-router-dom"
// reactstrap components
import {
  Card,
  CardBody,
  CardImg,
  CardTitle,
  CardText,
  Row,
  Col,
} from "reactstrap";
import data from "../../components/Data/Data";
import ReactPaginate from "react-paginate";

function Example() {
  return (
    <>
      <Row>
        {data.map((item, index) => (
          <Col md="2" sm="12">
            <Card key={index} className="text-center mb-4">
              <CardImg
                style={{ maxWidth: 200, maxHeight: 250 }}
                className="m-auto pt-4"
                src={item.image}
              ></CardImg>
              <CardBody>
                <CardTitle>{item.MovieName}</CardTitle>
                <CardText>{item.Description.substring(0, 70)}...</CardText>
                <Link to={`/downloadscreen/${item.id}`}>Download Now</Link>
              </CardBody>
            </Card>
          </Col>
        ))}
      </Row>
      <div className="text-center mt-5 mb-5">
        <ReactPaginate
          previousLabel={"Back"}
          nextLabel={"next"}
          breakLabel={"..."}
          breakClassName={"break-me"}
          pageCount={data.length / 5}
          marginPagesDisplayed={2}
          pageRangeDisplayed={3}
          onPageChange={(e) => console.log(e.selected)}
          containerClassName={"pagination"}
          activeClassName={"active"}
        />
      </div>
    </>
  );
}

export default Example;
