import React, { useReducer } from 'react';
import './App.css';
import { Provider } from 'react-redux';
import store from './app/redux/store';
import { PlaceHolder } from './app/components/PlaceHolder';
import { ReadMessageRedux } from './app/components/ReadMessageRedux';
import { SaveMessageRedux } from './app/components/SaveMessageRedux';
import { SaveMessage } from './app/components/SaveMessage';
import { ReadMessage } from './app/components/ReadMessage';

export const StoreContext = React.createContext();

function reducer(state, action) {
  switch (action.type) {
    case 'set':
      console.log('Setting Value: ' + action.payload )

      return { 
        ...state,
        message: {
          value: action.payload
        }
      };
    default:
      throw new Error();
  }
}

const initialState = {
  message: {
    value: ''
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="App">
      <div>
        <h1>Redux</h1>
        <Provider store={store}>
          <div className="">
            <SaveMessageRedux/>
            <PlaceHolder number={1}>
              <PlaceHolder number={2}>
                <PlaceHolder number={3}>
                  <ReadMessageRedux/>
                </PlaceHolder>
              </PlaceHolder>
            </PlaceHolder>
          </div>
        </Provider>
      </div>
      <div>
        <h1>React Hooks</h1>
        <StoreContext.Provider value={{ state, dispatch }}>
          <div className="">
            <SaveMessage/>
            <PlaceHolder number={1}>
              <PlaceHolder number={2}>
                <PlaceHolder number={3}>
                  <ReadMessage/>
                </PlaceHolder>
              </PlaceHolder>
            </PlaceHolder>
          </div>
        </StoreContext.Provider>
      </div>
    </div>
  );
}

export default App;
