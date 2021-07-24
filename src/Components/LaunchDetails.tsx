import React from 'react';
import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom"
import { LAUNCHES } from "../Query/Queries";
import { ILaunches } from '../Types/queryTypes';



export const LaunchDetails = () =>
{
    const { launchid } = useParams();
    const {loading, error, data} = useQuery(LAUNCHES);
    const [details, setDetails] = React.useState<ILaunches>();
    
    React.useEffect(
    () => {
            data.launches.map(
                (item:ILaunches) => {
                    if(item.id === launchid)
                    {
                        setDetails(item);
                    }
                    return null
                }
            )
            // eslint-disable-next-line
        }, [data]
    )

    if(loading)
    {
        return <div> ...Loading </div>
    }
    if(error)
    {
        return <div> Error </div>
    }
    

    return <div>
        {
            details?.id
        }
    </div>
}