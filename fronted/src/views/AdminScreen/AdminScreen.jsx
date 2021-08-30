import React, { useState } from "react";
import { Form, Label, Input, Button } from "reactstrap";
import axios from "axios";

function AdminScreen() {
  const submitHandler = () => {
      axios.post('/admin',{
          movieName:movieName,
          movieUrl:movieUrl,
          movieDescription:movieDescription,
          movieImage:movieImage,
      }).then(function (response) {
          console.log(response);
      }).catch(function (error) {
          console.log(error);
      })
  };
  const [movieName, SetMovieName] = useState("");
  const [movieDescription, SetMovieDescription] = useState("");
  const [movieUrl, SetMovieUrl] = useState("");
  const [movieImage, SetMovieImage] = useState("");
  return (
    <>
      <h1 className="mt-5" style={{ textAlign: "center" }}>
        Uploads Data
      </h1>
      <div className="container">
        <Form>
          <div className="form-group">
            <Label>Movie Image</Label>
            <Input
              onChange={e=>{SetMovieImage(e.target.value)}}
              className="form-control"
              type="file"
              name="movieImage"
            />
          </div>
          <div className="form-group">
            <Label>Movie Name</Label>
            <Input
              onChange={e=>{SetMovieName(e.target.value)}}
              className="form-control"
              type="text"
              name="movieName"
            />
          </div>
          <div className="form-group">
            <Label>Movie Description</Label>
            <Input
              onChange={e=>{SetMovieDescription(e.target.value)}}
              className="form-control"
              type="text"
              name="movieDescription"
            />
          </div>
          <div className="form-group">
            <Label>Movie Url</Label>
            <Input
              onChange={e=>{SetMovieUrl(e.target.value)}}
              className="form-control"
              type="url"
              name="movieUrl"
            />
          </div>
          <Button type="submit" onClick={submitHandler} class="btn btn-primary">
            Upload
          </Button>
        </Form>
      </div>
    </>
  );
}

export default AdminScreen;
