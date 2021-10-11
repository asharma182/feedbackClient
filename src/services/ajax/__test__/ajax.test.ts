import {createFeedbackForm} from '../index'
const axios = require('axios');

jest.mock('axios');

describe('test createfeedback form ', () => {
    it('returns the title of the first album', async () => {
        const data = {        
            "name": "Jyoti Bala Sharma",
            "age": 39,
            "feedback": "Note that the API is entirely asynchronous. To get data back from the server, you"
        }
        // axios.get.mockResolvedValue({
        //     data: [
        //       {
        //         userId: 1,
        //         id: 1,
        //         title: 'My First Album'
        //       },
        //       {
        //         userId: 1,
        //         id: 2,
        //         title: 'Album: The Sequel'
        //       }
        //     ]
        //   });
        const title = await createFeedbackForm(data);  // Run the function
        expect(title).toEqual('quidem molestiae enim');  // Make an assertion on the result
      });
})