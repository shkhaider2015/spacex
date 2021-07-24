import { gql } from "@apollo/client";

const limit: number = 10;

export const LAUNCHES = gql`{
  launches(limit: ${limit}) {
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