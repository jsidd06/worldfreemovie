import React from 'react'
import {Form,Label,Input,Button} from 'reactstrap'

function AdminScreen() {
    return (
        <>
        <h1 className="mt-5" style={{textAlign: 'center'}}>Uploads Data</h1>
        <div className="container">
            <Form>
                <div className="form-group">
                    <Label>Movie Image</Label>
                    <Input className="form-control" type="file" name="movieImage" />
                </div>
                <div className="form-group">
                    <Label>Movie Name</Label>
                    <Input className="form-control" type="text" name="movieName"/>
                </div>
                <div className="form-group">
                    <Label>Movie Description</Label>
                    <Input className="form-control" type="text" name="movieDescription"/>
                </div>
                <div className="form-group">
                    <Label>Movie Url</Label>
                    <Input className="form-control" type="url" name="movieUrl"/>
                </div>
                <Button type="submit" class="btn btn-primary">Upload</Button>
            </Form>
        </div>
        </>
    )
}

export default AdminScreen
