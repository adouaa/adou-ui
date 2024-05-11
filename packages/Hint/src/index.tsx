import { withTranslation } from 'react-i18next';
import "./index.scss";
import React from 'react';

interface HintProps {
    hintContent: HintItem[];
    bgc?: string;
    color?: string;
}

interface Text {
    value: string;
    highlight?: boolean;
    textColor?: string;
    textBgcolor?: string;
}

interface HintContent {
    text: Text[];
}

interface HintItem {
    title: string;
    content: HintContent[];
}


const Hint = ({hintContent, bgc = "#cff4fc", color = "#087990"}: HintProps) => {

    const renderHint = () => {
        return hintContent.map((item, index) =>
            <div className="hint-item" key={index}>
                <div className="hint-title">
                    <div>
                        <i className='fa-solid fa-circle-info me-2'></i>
                        <span>{item.title}</span>
                    </div>
                </div>
                <div className="hint-content">
                    {item.content.map((content, i) =>
                        <div className="hint-content-item">
                            <span className="index me-2">{i + 1}.</span>
                            {content.text.map((text, j) =>
                                <span className="hint-text-item">
                                    <span className="value" key={j} style={{
                                        color: text.textColor,
                                        margin: text.highlight && j !== 0 ? "0 4px" : "0",
                                        backgroundColor: text.textBgcolor
                                    }}>
                                        {text.value}
                                    </span>
                                </span>
                            )}
                        </div>
                    )}
                </div>
            </div>
        )
    }

    return <div className="hint-wrapper" style={{backgroundColor: bgc, color}}>
        {renderHint()}
    </div>;
}

export default withTranslation()(Hint);

