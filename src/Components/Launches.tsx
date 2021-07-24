import React from 'react'
import { useQuery } from "@apollo/client";
import { LAUNCHES } from "../Query/Queries";
import { ILaunches } from "../Types/queryTypes";
import { LaunchCard } from "./LaunchCard";

export const Launches = () : JSX.Element => {
    const {loading, error, data} = useQuery(LAUNCHES);

    if(loading)
    {
        return <div>
            ...Loading
        </div>
    }

    if(error)
    {
        return <div>
            {error.message}
        </div>
    }

    if(data)
    {
        return <div className="row" >
            {
                // data.launches.map(
                //     (item:ILaunches) => <div className="col-lg-4" style={{ borderBottom : '1px dotted black' }} >
                //         <text> Success : { item.launch_success }</text> <br />
                //         <text> Rocket Name : { item.rocket.rocket.name }</text> <br />
                //         <text> Mission Name : {item.mission_name} </text>
                //     </div>
                // )
                // data.launches.map(
                //     (item:ILaunches, index:number) =>  <LaunchCard key={index} item={item} />
                // )
                data.launches.filter(
                    (item:ILaunches) => {
                        if(!item.links.flickr_images.length || !item.details)
                        {
                            return false;
                        }
                        return true
                    }
                )
                .map(
                    (item:ILaunches, index:number) => <div className="col-lg-4 mt-5" > <LaunchCard key={index} item={item} /> </div>
                )
            }
        </div>
    }

    return <text>jjhjhh</text>
}