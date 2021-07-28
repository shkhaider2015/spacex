import { MockedProvider } from "@apollo/client/testing"
import App from './App';
import { mount, shallow } from "enzyme";
import TestRenderer from "react-test-renderer";
import { MyRouter } from "./Components/Routes";
import {BrowserRouter, MemoryRouter} from "react-router-dom";
import { SpaceX_Logo } from "./Static/Static";
import { mock } from "./Types/TestdDtaAndTypes";
import { LaunchDetails } from "./Components/LaunchDetails";
import { Launches } from "./Components/Launches";


describe("App.tsx Testing Cases", () => {
  let wrapper: any;
  beforeEach(() => {
    wrapper = shallow(<App />)
  })

  test("App.tsx : check if logo rendered", () => {
      expect(wrapper.find("img").prop("src")).toEqual(SpaceX_Logo)
  })

  test('App.tsx : Render Apollo Provider Mocking Test if it renders loading', () => {
    const component = TestRenderer.create(
      <MockedProvider>
        <BrowserRouter>
          <MyRouter />
        </BrowserRouter>
      </MockedProvider>
    )

    const tree:any = component.toJSON();
    expect(tree.props.id).toBe("loading")
  });

})

describe("Router : Test Case For Router Component", () => {
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