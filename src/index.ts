import { DependencyList, useCallback, useEffect, useRef } from 'react';

type Callback = (...args: unknown[]) => unknown;
export const useRealMemoCallback = <T extends Callback>(callback: T, deps: DependencyList) => {
    const callbackRef = useRef<T>(callback);

    useEffect(() => {
        callbackRef.current = callback;
    }, deps);

    return useCallback<T>(() => {
        return callbackRef.current();
    }, []);
};
