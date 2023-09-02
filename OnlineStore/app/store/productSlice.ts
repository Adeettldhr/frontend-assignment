const { createSlice, createAsyncThunk } = require('@reduxjs/toolkit');

export const STATUSES = Object.freeze({
    IDLE: 'idle',
    ERROR: 'error',
    LOADING: 'loading',
});

const productSlice = createSlice({
    name: 'product',
    initialState: {
        data: [],
        status: STATUSES.IDLE,
    searchTerm: '',
    searchResults: [],
    },
    reducers: {
    setSearchResults: (state:any, action:any) => {
      state.searchResults = action.payload;
    },
    setSearchTerm: (state: { searchTerm: any; }, action: { payload: any; }) => {
      state.searchTerm = action.payload;
    },

    },
    extraReducers: (builder: { addCase: (arg0: any, arg1: (state: any, action: any) => void) => { (): any; new(): any; addCase: { (arg0: any, arg1: (state: any, action: any) => void): { (): any; new(): any; addCase: { (arg0: any, arg1: (state: any, action: any) => void): void; new(): any; }; }; new(): any; }; }; }) => {
        builder
            .addCase(fetchProducts.pending, (state: { status: string; }, action: any) => {
                state.status = STATUSES.LOADING;
            })
            .addCase(fetchProducts.fulfilled, (state: { data: any; status: string; }, action: { payload: any; }) => {
                state.data = action.payload;
                state.status = STATUSES.IDLE;
            })
            .addCase(fetchProducts.rejected, (state: { status: string; }, action: any) => {
                state.status = STATUSES.ERROR;
            });
    },
});

export const { setProducts, setStatus, setSearchResults, setSearchTerm  } = productSlice.actions;
export default productSlice.reducer;



// Thunks
export const fetchProducts = createAsyncThunk('products/fetch', async () => {
    const res = await fetch('https://fakestoreapi.com/products');
    const data = await res.json();
    return data;
});

