import { MockedProvider } from "@apollo/client/testing"
import App from './App';
import { shallow } from "enzyme";
import TestRenderer from "react-test-renderer";
import { MyRouter } from "./Components/Routes";
import {BrowserRouter} from "react-router-dom";
import { SpaceX_Logo } from "./Static/Static";


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
