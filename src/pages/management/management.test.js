import { fireEvent, render,screen } from "@testing-library/react"
import EmployeeManagement from './management'
import { Provider } from 'react-redux';
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from '../../data/counterSlice' 
import userEvent from "@testing-library/user-event";

test('on initial render, update button and delete button are disabled',async () => {

    const store = configureStore({
        reducer: {counterReducer}
      })

    render(<Provider store={store}><EmployeeManagement /></Provider>)

    expect(await screen.findByRole('button',{name:/update/i})).toBeDisabled()
    expect(await screen.findByRole('button',{name:/delete/i})).toBeDisabled()  
    
})