import moxios from 'moxios';
import { storeFactory } from '../../test/testUtils';
import { getSecretWord } from './'

// describe('get secret word action creator', () => {
//   beforeEach(() => {
//     moxios.install()
//   });

//   afterEach(() => {
//     moxios.uninstall()
//   });

//   test('adds response word to state', () => {
//     const secretWord = 'party';
//     const store = storeFactory();

//     moxios.wait(() => {
//       const require = moxios.requests.mostRecent()

//       request.respondWith({
//         status: 200,
//         response: secretWord
//       })

//       return store.dispatch(getSecretWord())
//         .then(() => {
//           const newState = store.getState();
//           expect(newState.secretWord).toBe(secretWord)
//         })
//     })
//   })
// })