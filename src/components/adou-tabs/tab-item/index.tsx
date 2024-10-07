import React from 'react';
import { withTranslation } from 'react-i18next';

interface TabItemProps {
    extraContent?: any;
    label?: string;
    url?: string;
    children?: any;
    active?: boolean;
    contentPadding?: string;
    clearOnChange?: boolean;
}

const TabItem = (props: TabItemProps) => {
    const { extraContent, label, url, children, active, contentPadding = '0px', clearOnChange } = props;
    return (
        <>
            {/* clearOnChange为true，则进行组件的销毁和重建 */}
            {clearOnChange ? (
                active && (
                    <div
                        style={{
                            padding: contentPadding || '0px 10px',
                        }}
                    >
                        {children}
                    </div>
                )
            ) : (
                // clearOnChange为true，不进行组件的销毁和重建，直接使用 d-none来进行切换
                <div
                    className={`${active ? '' : 'd-none'}`}
                    style={{
                        padding: contentPadding || '0px 10px',
                    }}
                >
                    {children}
                </div>
            )}
        </>
    );
};

export default withTranslation()(TabItem);
