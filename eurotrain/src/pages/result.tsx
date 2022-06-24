import City from "components/city";
import Pointer from "components/pointer";
import { useRouter } from "next/router";
import { Col, Container, Row } from "reactstrap";

type routeInput = {
  startingStation: string
  destiny: string
}

export default function Result() {
  const router = useRouter();
  const data = router.query as routeInput;
  Pointer
  
  return (
  <Container>
    <Row>    
      <Col xs="auto" style={{display: 'flex'}}>
        <City city={data.startingStation} />
        <Pointer time={'bla bla'} />
      </Col> 
    </Row>
  </Container>
  )
}
