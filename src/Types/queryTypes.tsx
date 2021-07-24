type Tdiameter = {
    meter : number
}
type Theight = {
    meter : number
}
type Trocket = {
    country : string,
    name : string,
    wikipedia : string,
    diameter : Tdiameter,
    height : Theight
}

type Tlinks = {
    wikipedia : string,
    flickr_images : string[]
}

export interface ILaunches {
    id : string,
    launch_success : boolean,
    mission_name : string,
    launch_year : string,
    details : string,
    rocket : {
        rocket : Trocket,
    },
    links : Tlinks
}