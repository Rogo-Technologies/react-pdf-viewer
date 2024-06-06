import * as React from 'react';

export const ModalOverlay: React.FC<{
    children?: React.ReactNode;
}> = ({ children }) => <div className="rpv-core__modal-overlay">{children}</div>;
