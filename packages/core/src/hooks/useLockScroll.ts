'use client';

import * as React from 'react';

export const useLockScroll = (): void => {
    React.useEffect(() => {
        const originalStyle = window.getComputedStyle(document.body).overflow;
        document.body.style.overflow = 'hidden';

        return (): void => {
            document.body.style.overflow = originalStyle;
        };
    }, []);
};
