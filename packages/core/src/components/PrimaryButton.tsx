import * as React from 'react';
import { TextDirection, ThemeContext } from '../theme/ThemeContext';
import { classNames } from '../utils/classNames';

export const PrimaryButton: React.FC<{
    children?: React.ReactNode;
    testId?: string;
    onClick(): void;
}> = ({ children, testId, onClick }) => {
    const { direction } = React.useContext(ThemeContext);
    const isRtl = direction === TextDirection.RightToLeft;
    const attrs = testId ? { 'data-testid': testId } : {};

    return (
        <button
            className={classNames({
                'rpv-core__primary-button': true,
                'rpv-core__primary-button--rtl': isRtl,
            })}
            type="button"
            onClick={onClick}
            {...attrs}
        >
            {children}
        </button>
    );
};
