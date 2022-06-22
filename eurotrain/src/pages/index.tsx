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
    <Container>
      <Card>
        <CardBody>
          <Form>
            <FormGroup>
                <Label for='startingPoint'>
                  Selecione o ponto de partida
                </Label>
                <Input
                  id="startingPoint"
                  bsSize="lg"
                  className="mb-3"
                  type="select"
                >
                <option>
                  Large Select
                </option>
              </Input>
            </FormGroup>
            <FormGroup>
                <Label for='startingPoint'>
                  Selecione o ponto de partida
                </Label>
                <Input
                  id="startingPoint"
                  bsSize="lg"
                  className="mb-3"
                  type="select"
                >
                <option>
                  Large Select
                </option>
              </Input>
            </FormGroup>
          </Form>
        </CardBody>
      </Card>
    </Container>

  )
}
