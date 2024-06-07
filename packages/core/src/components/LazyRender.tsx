'use client';

import * as React from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { type VisibilityChanged } from '../types/VisibilityChanged';

export const LazyRender: React.FC<{
    attrs?: React.HTMLAttributes<HTMLDivElement>;
    children?: React.ReactNode;
    testId?: string;
}> = ({ attrs, children, testId }) => {
    const [visible, setVisible] = React.useState(false);
    const containerAttrs = testId ? { ...attrs, 'data-testid': testId } : attrs;

    const handleVisibilityChanged = (params: VisibilityChanged): void => {
        if (params.isVisible) {
            setVisible(true);
        }
    };

    const containerRef = useIntersectionObserver({
        once: true,
        onVisibilityChanged: handleVisibilityChanged,
    });

    return (
        <div ref={containerRef} {...containerAttrs}>
            {visible && children}
        </div>
    );
};
