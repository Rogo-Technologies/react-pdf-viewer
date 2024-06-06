import * as React from 'react';

export const usePrevious = <T>(value: T): T => {
    const ref = React.useRef<T>(value);

    React.useEffect(() => {
        ref.current = value;
    }, [value]);

    return ref.current;
};
