import { ILaunches } from "../Types/queryTypes";
import { Card, Button } from "react-bootstrap";

type Titem = {
    item : ILaunches
}

export const LaunchCard = ({ item }:Titem) => 
{
    return <Card style={{ width: '18rem' }}>
        {console.log("Image : ", item.links.flickr_images ? item.links.flickr_images[0] : 'null' )}
    <Card.Img variant="top" src={item.links.flickr_images ? item.links.flickr_images[0] : '../logo.svg' } height="300px" />
    <Card.Body>
      <Card.Title> {item.rocket.rocket.name} </Card.Title>
      <Card.Text>
        { item.details ? item.details.slice(0, 50) + ' ...': ""}
      </Card.Text>
      <Button variant="primary">View Details</Button>
    </Card.Body>
  </Card>
}