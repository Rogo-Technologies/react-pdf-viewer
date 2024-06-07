import { Icon } from '@rogo-technologies/react-pdf-viewer-core';
import * as React from 'react';

export const SearchIcon: React.FC = () => (
    <Icon ignoreDirection={true} size={16}>
        <path
            d={`M10.5,0.5c5.523,0,10,4.477,10,10s-4.477,10-10,10s-10-4.477-10-10S4.977,0.5,10.5,0.5z
            M23.5,23.5
            l-5.929-5.929`}
        />
    </Icon>
);
