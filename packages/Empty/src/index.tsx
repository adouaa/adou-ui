import React from "react";
import "./index.scss";

interface EmptyProps {
    text?: string,
    style?: any
}

const Empty = ({ text = "提示", style }: EmptyProps) => {

    return <div style={style} className="empty">
        <svg className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6463" width="70" height="90"><path d="M511.49551 64.648392c-247.341295 0-447.677019 200.335724-447.677019 447.677019s200.335724 447.677019 447.677019 447.677019 447.677019-200.335724 447.677019-447.677019S758.837828 64.648392 511.49551 64.648392zM509.817288 612.492762c-32.456203 0-58.757219-25.741267-58.757219-58.198493L451.060069 281.771455c0-32.456203 26.301016-58.19747 58.757219-58.19747 31.896454 0 58.19747 25.741267 58.19747 58.19747l0 272.522814C568.014758 586.751494 541.713742 612.492762 509.817288 612.492762zM511.49551 665.654542c37.492916 0 67.711148 30.218232 67.711148 67.711148 0 37.492916-30.218232 67.711148-67.711148 67.711148-37.492916 0-67.711148-30.218232-67.711148-67.711148C443.785386 695.872774 474.003618 665.654542 511.49551 665.654542z" fill="#F77207" p-id="6464"></path></svg>
        <span className="text">{text}</span>
    </div>
}

export default Empty;