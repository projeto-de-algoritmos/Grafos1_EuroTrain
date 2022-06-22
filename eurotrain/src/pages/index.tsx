import { Container,
  Card,
  CardBody,
  Form,
  Button,
  FormGroup,
  Label,
  Input,
  Row, 
  Col} from "reactstrap"

export default function Home() {
  return (
    <Container className="align-middle">
      <Row style={{height: '100vh'}}className="align-items-center justify-content-center">
        <Col lg={8}>
          <Card>
            <CardBody>
              <Form>
                <FormGroup>
                    <Label for='startingPoint'>
                      Selecione o ponto de partida
                    </Label>
                    <Input
                      id="startingPoint"
                      className="mb-3"
                      type="select"
                    >
                    <option>
                      Large Select
                    </option>
                  </Input>
                </FormGroup>
                <FormGroup>
                    <Label for='endingPoint'>
                      Selecione o ponto de partida
                    </Label>
                    <Input
                      id="endingPoint"
                      className="mb-3"
                      type="select"
                    >
                    <option>
                      Large Select
                    </option>
                  </Input>
                </FormGroup>
                <Row className="justify-content-end">
                  <Col xs="auto"><Button color="primary">Procurar</Button></Col>
                </Row>
              </Form>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>

  )
}
