const { createSlice } = require('@reduxjs/toolkit');

const cartSlice = createSlice({
    name: 'cart',
    initialState: [],
    reducers: {
        add(state: any[], action: { payload: any; }) {
            state.push(action.payload);
        },
        remove(state: any[], action: { payload: any; }) {
            return state.filter((item: { id: any; }) => item.id !== action.payload);
        },
    },
});

export const { add, remove } = cartSlice.actions;
export default cartSlice.reducer;
