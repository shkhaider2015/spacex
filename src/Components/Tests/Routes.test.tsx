import { mount} from "enzyme";
import { MemoryRouter } from "react-router-dom";
import { MyRouter } from "../Routes";
import { Launches } from "../Launches";
import { LaunchDetails } from "../LaunchDetails";
import { MockedProvider } from "@apollo/client/testing";
import { ILaunches } from "../../Types/queryTypes";
import { PlaceHolderGif } from "../../Static/Static";
import { LAUNCHES } from "../../Query/Queries";

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

describe("MyRouter : Test Router Component", () => {
  let wrapper: any;
  let testNo : number = 0;
  let testEntry: string;

  beforeEach(() => {
    switch(testNo)
    {
      case 0:
        testEntry = "/";
        break;
      case 1:
        testEntry = "/1";
        break;
      case 3:
        testEntry = "/test/test";
        break;
      default: 
        testEntry = "/def/def/def";
        break;
    }

    wrapper = mount(
      <MockedProvider mocks={mock} >
        <MemoryRouter initialEntries={[testEntry]} >
          <MyRouter />
        </MemoryRouter>
      </MockedProvider>
    )

    testNo++;
  })

  test('MyRouter : Check for Launch Page', () => {
    expect(wrapper.find(LaunchDetails)).toHaveLength(0);
    expect(wrapper.find(Launches)).toHaveLength(1);
  });

  test('MyRouter : Check for launchDetails Page', () => {
    expect(wrapper.find(Launches)).toHaveLength(0);
    expect(wrapper.find(LaunchDetails)).toHaveLength(1);
  });

  test('MyRouter : Check for 404 Page', () => {
    expect(wrapper.find(Launches)).toHaveLength(0);
    expect(wrapper.find(LaunchDetails)).toHaveLength(0);
    expect(wrapper.find("h1").text()).toBe("404")
  });
})