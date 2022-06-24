import { Card, CardBody } from "reactstrap";

export default function City({city}) {
  return (
  <Card style={{width: 250}}>
    <CardBody>
      {city}
    </CardBody>
  </Card>
  )
}