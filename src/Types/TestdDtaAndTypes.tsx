import { LAUNCHES } from "../Query/Queries"
import { PlaceHolderGif } from "../Static/Static"
import { ILaunches } from "./queryTypes"

const mockData:ILaunches = {
    id : '23',
    launch_success : true,
    mission_name : 'misson test',
    launch_year : '2009',
    details : 'Test Details',
    rocket : {
      rocket : {
        country : 'Pakistan',
        name : 'Haider',
        wikipedia : 'https://www.bbcurdu.com',
        diameter : {
          meter : 2.9
        },
        height : {
          meter : 2.9
        }
      },
    },
    links : {
      wikipedia : 'https://www.bbcurdu.com',
      flickr_images : [PlaceHolderGif]
    }
  
  }
  
  export const mock:any = [
    {
      request : {
        query : LAUNCHES
      },
      result : {
        data : {
          launches : [mockData]
        }
      }
    }
  ]
  