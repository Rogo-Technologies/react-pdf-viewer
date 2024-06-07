'use client';

import * as React from 'react';

export const StackContext = React.createContext<{
    currentIndex: number;
    decreaseNumStacks: () => void;
    increaseNumStacks: () => void;
    numStacks: number;
}>({
    currentIndex: 0,
    decreaseNumStacks: () => {},
    increaseNumStacks: () => {},
    numStacks: 0,
});
