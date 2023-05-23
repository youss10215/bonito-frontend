import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserState } from './userType';

const initialState: UserState = {
  users: []
};

export const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setUsers: (state:any, action: PayloadAction<UserState>) => {
      state.users = action.payload.users;
    }
  }
})

// actions
export const { setUsers } = userSlice.actions;

// selectors
// export const users = (state: RootState) => state;

export default userSlice.reducer