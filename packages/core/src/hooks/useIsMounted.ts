'use client';

import * as React from 'react';

export const useIsMounted = (): React.MutableRefObject<boolean> => {
    const isMountedRef = React.useRef(false);

    React.useEffect(() => {
        isMountedRef.current = true;
        return () => {
            isMountedRef.current = false;
        };
    }, []);

    return isMountedRef;
};
