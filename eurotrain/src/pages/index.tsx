import { useState } from "react"
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


type routeInput = {
  startingStation: string
  destiny: string
}

const cities = [
  'Paris',
  'Roma',
  'Napoles',
  'Berlim'
]

export default function Home() {
  const [routeData, setRouteData] = useState<routeInput>({
    startingStation: cities[0],
    destiny: cities[1]
  })

  function sendData(e: any) {
    e.preventDefault()
    console.log(routeData);
  }
  return (
    <Container>
      <Row style={{height: '100vh'}}className="align-items-center justify-content-center">
        <Col lg={8}>
          <Card>
            <CardBody>
              <Form onSubmit={sendData}>
                <FormGroup>
                    <Label for='startingPoint'>
                      Selecione o ponto de partida
                    </Label>
                    <Input
                      id="startingPoint"
                      className="mb-3"
                      type="select"
                      defaultValue={routeData.startingStation}
                      onChange={(e) => {
                        setRouteData({...routeData, startingStation: e.target.value});
                      }}
                    >
                      {
                        cities.map(city => {
                          return (<option key={city}>
                          {city}
                        </option>)
                        })
                      }
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
                      defaultValue={routeData.destiny}
                      onChange={(e) => {
                        setRouteData({...routeData, destiny: e.target.value});
                      }}
                    >
                    {
                        cities.map(city => {
                          return (<option key={city}>
                          {city}
                        </option>)
                        })
                      }
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
