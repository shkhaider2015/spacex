import { ILaunches } from "../Types/queryTypes";
import { Card, Button } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';

type Titem = {
    item : ILaunches
}

export const LaunchCard = ({ item }:Titem) => 
{
  const navigate = useNavigate();

    return <Card className="shadow" style={{ width: '18rem' }}>
    <Card.Img variant="top" src={item.links.flickr_images[0] } height="300px" />
    <Card.Body>
      <Card.Title> {item.rocket.rocket.name} </Card.Title>
      <Card.Text>
        { item.details ? item.details.slice(0, 50) + ' ......': ``}
      </Card.Text>
      <Button variant="primary" onClick={() => navigate(item.id)} >View Details</Button>
    </Card.Body>
  </Card>
}