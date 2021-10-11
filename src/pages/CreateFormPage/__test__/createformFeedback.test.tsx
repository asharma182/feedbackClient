import renderer from 'react-test-renderer';
import {CreateFormPage} from '../CreateFormPage';

describe('test for snapshot', () => {
it('renders correctly when there are no items', () => {
    const tree = renderer.create(<CreateFormPage />).toJSON();
    expect(tree).toMatchSnapshot();
  });
})
