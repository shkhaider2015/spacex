import { gql } from "@apollo/client";

const limit: number = 20;

export const LAUNCHES = gql`{
  launches(limit: ${limit}) {
    id
    launch_success
    mission_name
    launch_year
    details
    rocket {
      rocket {
        country
        name
        wikipedia
        diameter {
          meters
        }
        height {
          meters
        }
      }
    }
    links {
      wikipedia
      flickr_images
    }
  }
}`

