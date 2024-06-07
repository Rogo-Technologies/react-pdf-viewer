'use client';

import * as React from 'react';
import { StackContext } from './StackContext';

export const useEscapeStack = (handler: () => void): void => {
    const stackContext = React.useContext(StackContext);

    const keyUpHandler = React.useCallback(
        (e: KeyboardEvent): void => {
            if (e.key === 'Escape' && stackContext.currentIndex === stackContext.numStacks) {
                handler();
            }
        },
        [stackContext.currentIndex, stackContext.numStacks],
    );

    React.useEffect(() => {
        document.addEventListener('keyup', keyUpHandler);
        return (): void => {
            document.removeEventListener('keyup', keyUpHandler);
        };
    }, [stackContext.currentIndex, stackContext.numStacks]);
};
