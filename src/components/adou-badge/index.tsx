import React from 'react';
import { withTranslation } from 'react-i18next';

interface BadgeProps {

}

const Badge = (props: BadgeProps) => {

    const renderBadge = () => {
        return <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
            99+
        </span>
    }

    return <div className="badge-wrapper">
        {renderBadge()}
    </div>;
}

export default withTranslation()(Badge);