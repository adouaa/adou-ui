import styled from 'styled-components';

interface TooltipWrapperProps {
    $tooltipWidth: number;
    offset?: number;
    $borderColor?: string;
}

export const TooltipWrapper = styled.div<TooltipWrapperProps>`
    .adou-tooltip-wrapper {
        position: relative;
        width: fit-content;

        .tooltip-content {
            width: fit-content;
        }
    }

    .adou-tooltip {
        position: absolute;
        color: #fff;
        padding: 5px 10px;
        border-radius: 4px;
        font-size: 14px;
        opacity: 0;
        transform: scale(0);
        /* 初始状态为缩小 */
        transition:
            opacity 0.2s ease-in-out,
            transform 0.2s ease-in-out;
        /* 添加 transform 过渡效果 */
        // pointer-events: none;
        /* 防止鼠标事件穿透到 Tooltip 后面的元素 */
        z-index: 10000;

        &.show-tool-tip {
            opacity: 1;
            /* 显示时放大 */
            pointer-events: auto;
            /* 启用鼠标事件 */
        }

        &.adou-tooltip-top,
        &.adou-tooltip-top-left,
        &.adou-tooltip-top-right {
            bottom: 100%;
            left: 50%;
            transform: translate(-50%, -10px) scale(0);
            /* 初始状态为缩小 */

            &.show-tool-tip {
                transform: translate(-50%, -10px) scale(1);
                /* 显示时放大 */
            }
        }

        &.adou-tooltip-bottom,
        &.adou-tooltip-bottom-left,
        &.adou-tooltip-bottom-right {
            top: 100%;
            left: 50%;
            transform: translate(-50%, 10px) scale(0);
            /* 初始状态为缩小 */

            &.show-tool-tip {
                transform: translate(-50%, 10px) scale(1);
                /* 显示时放大 */
            }
        }

        &.adou-tooltip-left {
            right: 100%;
            top: 50%;
            transform: translate(-10px, -50%) scale(0);
            /* 初始状态为缩小 */

            &.show-tool-tip {
                transform: translate(-10px, -50%) scale(1);
                /* 显示时放大 */
            }
        }

        &.adou-tooltip-right {
            left: 100%;
            top: 50%;
            transform: translate(10px, -50%) scale(0);
            /* 初始状态为缩小 */

            &.show-tool-tip {
                transform: translate(10px, -50%) scale(1);
                /* 显示时放大 */
            }
        }
    }

    .adou-tooltip-arrow {
        position: absolute;
        width: 0;
        height: 0;
        border-style: solid;

        &.adou-tooltip-arrow-top {
            border-width: 5px 5px 0 5px;
            border-color: ${(props) => props.$borderColor} transparent transparent transparent;
            bottom: -5px;
            left: 50%;
            transform: translateX(-50%);
        }

        &.adou-tooltip-arrow-bottom {
            border-width: 0 5px 5px 5px;
            border-color: transparent transparent ${(props) => props.$borderColor} transparent;
            top: -5px;
            left: 50%;
            transform: translateX(-50%);
        }

        &.adou-tooltip-arrow-left {
            border-width: 5px 0 5px 5px;
            border-color: transparent transparent transparent ${(props) => props.$borderColor};
            right: -5px;
            top: 50%;
            transform: translateY(-50%);
        }

        &.adou-tooltip-arrow-right {
            border-width: 5px 5px 5px 0;
            border-color: transparent ${(props) => props.$borderColor} transparent transparent;
            left: -5px;
            top: 50%;
            transform: translateY(-50%);
        }

        &.adou-tooltip-arrow-top-left {
            border-width: 5px 5px 0 5px;
            border-color: ${(props) => props.$borderColor} transparent transparent transparent;
            bottom: -5px;
            left: ${(props) => props.$tooltipWidth * (props.offset || 0.2) + 'px'};
            transform: translateX(-50%);
        }

        &.adou-tooltip-arrow-top-right {
            border-width: 5px 5px 0 5px;
            border-color: ${(props) => props.$borderColor} transparent transparent transparent;
            bottom: -5px;
            left: ${(props) => props.$tooltipWidth * (props.offset || 0.8) + 'px'};
            transform: translateX(-50%);
        }

        &.adou-tooltip-arrow-bottom-left {
            border-width: 0 5px 5px 5px;
            border-color: transparent transparent ${(props) => props.$borderColor} transparent;
            top: -5px;
            left: ${(props) => props.$tooltipWidth * (props.offset || 0.2) + 'px'};
            transform: translateX(-50%);
        }

        &.adou-tooltip-arrow-bottom-right {
            border-width: 0 5px 5px 5px;
            border-color: transparent transparent ${(props) => props.$borderColor} transparent;
            top: -5px;
            left: ${(props) => props.$tooltipWidth * (props.offset || 0.8) + 'px'};
            transform: translateX(-50%);
        }
    }
`;
