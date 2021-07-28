import { useQuery } from "@apollo/client";
import React from "react";
import { LAUNCHES } from "../Query/Queries";
import { ILaunches } from "../Types/queryTypes";
import { LaunchCard } from "./LaunchCard";
import Loader from "react-loader-spinner";

export const Launches = (): JSX.Element => {
    const { loading, error, data } = useQuery(LAUNCHES);
    const [isWait, setIsWait] = React.useState<boolean>(true);

    React.useEffect(
        () => {
            if(!loading && !error)
            {
                setTimeout(() => {
                    setIsWait(!isWait);
                }, 2500);
            }
            // eslint-disable-next-line
        }, [data]
    )
    

    if (loading) {
        return <div id="loading" style={{ height : '70vh', display : 'grid', placeItems : 'center' }} >
            <Loader type="Bars" color="#005288" height={80} width={80} />
        </div>
    }

    if (error) {
        return <div>
            {error.message}
        </div>
    }
    
    return <div className="row" >
        {
            data?.launches?.filter(
                (item: ILaunches) => {
                    if (!item.links.flickr_images.length || !item.details) {
                        return false;
                    }
                    return true
                }
            )
                .map(
                    (item: ILaunches, index: number) => <div key={index} className="col-lg-4 col-md-6 col-sm-12 col-12 mt-5 d-flex justify-content-center text-center" > <LaunchCard item={item} isWait={isWait} /> </div>
                )
        }
    </div>
}