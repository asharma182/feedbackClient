import renderer from 'react-test-renderer';
import {Form}  from '../index'

describe('test for snapshot', () => {
    it('renders correctly when there are no items', () => {
        const tree = renderer.create(<Form />).toJSON();
        expect(tree).toMatchSnapshot();
    });
})