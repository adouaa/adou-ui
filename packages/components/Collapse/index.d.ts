import React from 'react';
import './index.scss';
interface CollapseProps {
    header?: any;
    children?: any;
    firstShow?: boolean;
}
declare const Collapse: ({ header, children, firstShow }: CollapseProps) => React.JSX.Element;
export default Collapse;
