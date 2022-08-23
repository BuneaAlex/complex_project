import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({

    name: 'counter',
    initialState: {
      value: 0,
      employees: Array(0),
      projects: Array(0)
    },
    reducers: {
      updateCounter: (state) => {
        state.value += 1
      },
      updateEmployees: (state, action) => {
          state.employees = action.payload;
      },
      updateProjects: (state,action) => {
          state.projects = action.payload;
      }

    }

})

export default counterSlice.reducer;

export const {updateCounter, updateEmployees, updateProjects} = counterSlice.actions;