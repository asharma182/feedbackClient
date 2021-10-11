import renderer from 'react-test-renderer';
import {EditFeedbackPage} from '../EditFeedbackPage';
import { getOneFeedback, updateFeedback } from '../../../services/ajax';
import React from 'react'
jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'), // to use the real parts of react-router-dom for everything except the hooks in mocking.
    useParams: () => ({
      id: '1',
    }),
    useRouteMatch: () => ({ url: '/editFeedback/1' }),
  }));

describe('test for snapshot', () => {
it('renders correctly when there are no items', () => {
    // const spy = jest.spyOn(React, "useParams").mockImplementationOnce(
    //     () =>
    //       new Promise((resolve) =>
    //         resolve({
    //           title: "Hello World!",
    //           content: "My first post."
    //         })
    //       )
    //   );
    
    const tree = renderer.create(<EditFeedbackPage />).toJSON();
    expect(tree).toMatchSnapshot();
  });
})
