import { useState, useEffect, useRef, ReactNode } from 'react';
import { useParams } from 'react-router-dom';
import React from 'react';

interface FormItemProps {
    width?: any;
    name?: string;
    children?: ReactNode;
}

const FormItem = ({ width, name, children }: FormItemProps) => {
    return (
        <div className="form-item-wrapper">
            <div className="form-item-content">
                <div className="label-box"></div>
                <div className="form-box">
                    <div className="form-content">{children}</div>
                    <div className="suffix-content"></div>
                </div>
            </div>
        </div>
    );
};

export default FormItem;
