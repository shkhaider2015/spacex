import { ILaunches } from "../Types/queryTypes";
import { Card, Button } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';
// import PlaceHolderGif from "../Static/Frametitle.gif";
import { PlaceHolderGif } from "../Static/Static";

type Titem = {
    item : ILaunches,
    isWait : boolean
}

export const LaunchCard = ({ item, isWait }:Titem) => 
{
  const navigate = useNavigate();

    return <Card className="shadow w-75">
    <Card.Img variant="top" src={ !isWait ? item.links.flickr_images[0] : PlaceHolderGif  } height="300vh"  />
    <Card.Body>
      <Card.Title> { !isWait ? item.mission_name : <img alt="jh" src={PlaceHolderGif} width="70%" height="12px" /> } </Card.Title>
      <Card.Text>
        {
        isWait
        ?  <div className="flex-column" >
            <img alt='s' src={PlaceHolderGif} width="93%" height="6px" />
            <img alt='s' src={PlaceHolderGif} width="80%" height="6px" />
           </div>
        : item.details.slice(0, 60) + '  .....' 
           }
      </Card.Text>
      {
        isWait
        ? <img alt="" src={PlaceHolderGif} width="100%" height="25px" />
        : <Button className="w-100" variant="primary" onClick={() => navigate(item.id)} >View Details</Button>
      }
    </Card.Body>
  </Card>
}