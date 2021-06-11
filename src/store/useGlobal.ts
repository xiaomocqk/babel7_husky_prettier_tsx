import { createContext, useContext } from 'react';

export const globalState = {
    user: {
        name: 'momomomooo',
    },
};

export type IGlobalState = typeof globalState;

export const GlobalContext = createContext<IGlobalState>({} as IGlobalState);

export default function useGlobal(): IGlobalState {
    const globalState = useContext(GlobalContext);

    return globalState;
}
