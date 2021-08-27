import React from "react";
import { Card, CardBody, CardImg, CardText, CardTitle } from "reactstrap";
import data from "../../components/Data/Data";

function DownloadScreen(props) {
  const id = props.match.params.id;
  const item = data.find((item) => item.id === id);
  return (
    <>
      <Card className="text-center mb-4">
        <CardImg
          style={{ maxWidth: 200, maxHeight: 250 }}
          className="m-auto pt-4"
          src={item.image}
        ></CardImg>
        <CardBody>
          <CardTitle>MovieName:- {item.MovieName}</CardTitle>
          <CardText>Description:- {item.Description}</CardText>
          <a href={item.Link}>Google Drive Link</a>
        </CardBody>
      </Card>
    </>
  );
}

export default DownloadScreen;
