import React from "react";
import "./index.scss";
interface DrawerProps {
    actRef?: any;
    clickOutside?: boolean;
    children?: React.ReactNode;
    title?: React.ReactNode;
    placement?: "start" | "end" | "top" | "bottom";
    width?: string | number;
    height?: string | number;
    showMask?: boolean;
    maskClosable?: boolean;
    showCloseButton?: boolean;
    className?: string;
    headerClassName?: string;
    bodyClassName?: string;
    onClose?: () => void;
    onOpen?: () => void;
    trigger?: React.ReactNode;
    closeOnEsc?: boolean;
}
declare const Drawer: React.ForwardRefExoticComponent<DrawerProps & React.RefAttributes<any>>;
export default Drawer;
