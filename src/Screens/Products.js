import React from 'react'
import { Box } from "@mui/system";
import  { useState } from "react";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";

function Products() {
  const [show, setShow] = useState(true);

  return (
    <>
      <Box style={{ paddingLeft: "90px" , paddingRight: "90px" ,}}>
        <Alert show={show} variant="success">
          {/* <Alert.Heading>This is Home page!!!</Alert.Heading> */}
          <h1>This is Products page!!!</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
          <hr />
          <div className="d-flex justify-content-end">
            <Button  color="primary" style={{border:"2px solid #ffafcc", padding:"10px",backgroundColor:"#ffc8dd"}} onClick={() => setShow(false)} variant="outline-success">
              Close me y'all!
            </Button>
          </div>
        </Alert>

        {!show && <Button color="primary" onClick={() => setShow(true)}>Show Alert</Button>}
      </Box>
    </>
  );
}

// render(<Home />);
export default Products;
