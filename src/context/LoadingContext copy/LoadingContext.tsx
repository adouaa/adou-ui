// LoadingContext.js
import React, { createContext, useContext, useState } from 'react';
import Loading from './Loading';

export const LoadingContext = createContext<any | null>(null);

export const LoadingProvider = ({ children }) => {
    const [loading, setLoading] = useState(false);

    const showLoading = () => setLoading(true);
    const hideLoading = () => setLoading(false);

    return (
        <LoadingContext.Provider value={{ loading, showLoading, hideLoading }}>
            {children}
            <div className="loading-wrapper">{loading && <Loading />}</div>
        </LoadingContext.Provider>
    );
};

export const useLoading = () => {
    return useContext(LoadingContext);
};
