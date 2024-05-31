import React, { ReactNode } from "react";
import classNames from "classnames";
import "./index.css"

type color = "primary" | "secondary" | "danger" | "success" | "warning" | "info" | "light" | "dark";

interface buttonProps {
    type?: color
    size?: 'sm' | 'md' | 'lg';
    children?: ReactNode;
    className?: string;
    round?: boolean;
    textColor?: color;
    outlineColor?: color;
    disabled?: boolean;
    label?: string;
    prefixIcon?: string;
    suffixIcon?: string;
    loading?: boolean;
    spinerType?: "border" | "grow";
    spinerColor?: color;
    fontSize?: string;
    onClickOK?: () => void;
}
const Button: React.FC<buttonProps> = (props: buttonProps) => {
    const { fontSize = "14px", spinerType = "border", spinerColor, loading, suffixIcon, prefixIcon, children, type, size, className, round, textColor, disabled, outlineColor, onClickOK } = props;

    const handleOnClick = () => {
        onClickOK && onClickOK();
    }
    const cls = classNames({
        "btn": true,
        [`btn-${type}`]: type, // 是 true就会加上这个类名
        [`btn-${size}`]: size,
        [`rounded`]: round,
        [`text-${textColor}`]: textColor,
        [`btn-outline-${outlineColor}`]: outlineColor,
        disabled,
        [className as string]: className,
    })

    const renderPrefixIcon = () => {
        return (
            <i className={`${prefixIcon}`}></i>
        )
    }

    const rendersuffixIcon = () => {
        return (
            <i className={`${suffixIcon}`}></i>
        )
    }


    /* const renderLoading = () => {
        return React.Children.map(children, (child: any) => {
            if (!React.isValidElement(child)) {
                child = <span className="m-1">{child}</span>
                const enhancedChild = React.cloneElement(child!, {
                    style: {
                    }
                } as React.Attributes);
                return enhancedChild;
            }
        });
    }; */

    const renderLabel = () => {
        return React.Children.map(children, (child: any) => {
            
            if (!React.isValidElement(child)) {
                child = <span>{child}</span>
                const enhancedChild = React.cloneElement(child, {
                    style: {
                        margin: "0 0.5rem",
                        fontSize
                    }
                } as React.Attributes);
                return enhancedChild;
            }
        });
    }

    const renderLoadingIcon = () => {
        let hasLoader = false;
        React.Children.map(children, (child: any) => {
            if (child.props?.className?.includes("loader")) {
                hasLoader = true;
            }
        });
        if (hasLoader) {
            return React.Children.map(children, (child: any) => {
                if (child.props?.className.includes("loader")) {
                    return child;
                }
            });
        } else {
            return <>
                <div className={`spinner-${spinerType} spinner-${spinerType}-sm text-${spinerColor}`} role="status">
                </div>
            </>
        }
    }


    return (
        <span className="button-wrapper">
            <button
                style={{ cursor: "pointer" }}
                onClick={handleOnClick}
                className={cls}
                disabled={loading}
            >
                {loading ?
                    <div className="d-flex align-items-center">
                        {renderLoadingIcon()}
                        {renderLabel()}
                    </div> :
                    <>
                        {prefixIcon && renderPrefixIcon()}
                        {renderLabel()}
                        {suffixIcon && rendersuffixIcon()}
                    </>}
            </button>
        </span>
    );
}

export default Button;