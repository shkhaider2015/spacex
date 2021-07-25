import React from 'react';
import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom"
import { LAUNCHES } from "../Query/Queries";
import { ILaunches } from '../Types/queryTypes';
import { Carousel } from "react-bootstrap";



export const LaunchDetails = () => {
    const { launchid } = useParams();
    const { loading, error, data } = useQuery(LAUNCHES);
    const [details, setDetails] = React.useState<ILaunches>();

    React.useEffect(
        () => {
            data.launches.map(
                (item: ILaunches) => {
                    if (item.id === launchid) {
                        setDetails(item);
                    }
                    return null
                }
            )
            // eslint-disable-next-line
        }, [data]
    )

    if (loading) {
        return <div> ...Loading </div>
    }
    if (error) {
        return <div> Error </div>
    }


    return <div className="row" >
        <div className="col-lg-12  " >
            <div className="d-flex flex-row justify-content-center" >
                <span className="display-1 p-5" >{details?.mission_name}</span>
                <div className="d-flex flex-column p-5 pb-0 display-10" >
                    <span> {details?.launch_year} </span>
                    <span className={details?.launch_success ? "text-success" : "text-danger"} > 
                    {details?.launch_success ? "Successful" : "Failed"} 
                    </span>
                </div>
            </div>
        </div>

        <div className="row  mt-2" >
            <div className="col-3" ></div>
            <div className="col-6 text-center " >
                <p className="lead" > {details?.details} </p> 
            </div>
            <div className="col-3" ></div>
        </div>

        <div className="row mt-3 pb-5" >
            <span className="col-lg-2" ></span>
            <Carousel className="col-lg-8 pl-0 " >
                {
                    details?.links.flickr_images.map(
                        (image:string, index:number) => <Carousel.Item key={index} interval={1000}>
                        <img
                            className="d-block w-100"
                            src={image}
                            alt={`Slide No ${index}`}
                            height="500px"
                        />
                    </Carousel.Item>
                    )
                }
            </Carousel>
            <span className="col-lg-2" ></span>
        </div>
    </div>
}