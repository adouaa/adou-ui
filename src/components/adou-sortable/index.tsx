import { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import React from 'react';
import './index.scss';

interface SortableProps {}

const Sortable = ({}: SortableProps) => {
    return (
        <div className="sortable-wrapper">
            <h1>sortable</h1>
            <span className="sortable-icon">
                <i style={{ borderBottom: '7px solid #000' }} className="icon sort-up"></i>
                <i style={{ borderTop: '7px solid #000' }} className="icon sort-down"></i>
            </span>
        </div>
    );
};

export default Sortable;
