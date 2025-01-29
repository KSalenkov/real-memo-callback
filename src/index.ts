import { useCallback, useEffect, useRef } from 'react';

type Callback = (...args: unknown[]) => unknown;
export const useRealMemoCallback = <T extends Callback>(callback: T) => {
    const callbackRef = useRef<T>(callback);

    useEffect(() => {
        callbackRef.current = callback;
    });

    return useCallback((...args: unknown[]) => {
        return callbackRef.current(...args);
    }, []) as T;
};
