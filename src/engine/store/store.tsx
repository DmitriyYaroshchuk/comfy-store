import { configureStore } from '@reduxjs/toolkit';
import themeReducer from '../../features/theme/themeSlice.ts';
import cartReducer from '../../features/cart/cartSlice.ts';
import userReducer from '../../features/user/userSlice.ts';
// ...

export const store = configureStore({
    reducer: {
        themeState: themeReducer,
        cartState: cartReducer,
        userState: userReducer,
    },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export type ReduxStore = {
    getState: () => RootState,
    dispatch: AppDispatch,
}