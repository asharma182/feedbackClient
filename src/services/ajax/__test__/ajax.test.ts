import * as API from '../index'
import axios from 'axios';

jest.mock('axios');

describe('test createfeedback form ', () => {
    const mock_response = {
        "message": "Saved Data"
    }

    it("returns false if no data is returned by the API", async () => {
        global.fetch = jest.spyOn(API, 'createFeedbackForm').mockImplementation(() => {
            return Promise.resolve(new Response(JSON.stringify(mock_response)));
        });
        const response = await API.createFeedbackForm();
        const data =  JSON.parse(response._bodyInit)
        expect(fetch).toHaveBeenCalledTimes(1);
        expect(data.message).toBe('Saved Data');
      });
})