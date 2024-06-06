import { classNames, TextDirection, ThemeContext } from '@rogo-technologies/react-pdf-viewer-core';
import * as React from 'react';

export const PropertyItem: React.FC<{
    label: string;
    value: string;
}> = ({ label, value }) => {
    const { direction } = React.useContext(ThemeContext);
    const isRtl = direction === TextDirection.RightToLeft;

    return (
        <dl
            className={classNames({
                'rpv-properties__item': true,
                'rpv-properties__item--rtl': isRtl,
            })}
        >
            <dt className="rpv-properties__item-label">{label}:</dt>
            <dd className="rpv-properties__item-value">{value || '-'}</dd>
        </dl>
    );
};
