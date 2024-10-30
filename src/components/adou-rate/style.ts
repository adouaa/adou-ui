import styled from 'styled-components';

interface RateWrapperProps {
    $activeBgc?: string;
}

export const RateWrapper = styled.div<RateWrapperProps>`
    display: inline-flex;
    align-items: center;

    .star-box {
        width: 40px;
        cursor: pointer;
        height: 31px;
    }

    .rate-star {
        position: relative;
        display: inline-block;
        width: 25px;
        height: 25px;
        background: gray;
        clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);
        cursor: pointer;
        transform: scale(1.2);
        transition: all 0.3s;

        &::before {
            content: '';
            position: absolute;
            top: -2px;
            left: -2px;
            right: -2px;
            bottom: -2px;
            background: inherit;
            border-radius: 5px;
            /* 调整圆角半径 */
            z-index: -1;
        }

        &.full,
        &.half {
            background: ${(prop) => prop.$activeBgc || '#f7ba2a'};
            transform: scale(1);
        }

        &.enter {
            transform: scale(1.3) !important;
        }

        .rate-half {
            position: absolute;
            top: 0;
            left: 0;
            width: 50%;
            height: 100%;
            background-color: transparent;
            clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 50% 70%, 50% 91%, 2% 35%, 39% 35%);
        }

        &:hover .rate-half {
            background-color: rgba(0, 0, 0, 0.1);
        }
    }
`;
