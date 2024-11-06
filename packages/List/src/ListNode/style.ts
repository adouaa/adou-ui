import styled from "styled-components";

interface ListNodeWrapperProps {
  $activeFontColor?: string;
  $activeBgc?: string;
}

export const ListNodeWrapper = styled.div<ListNodeWrapperProps>`
  .list-node-wrapper {
    color: #606266;
    font-size: 14px;

    .node-item-list {
      .left-content {
        // 使用 display 会出现 hover背景色和 active高亮色宽度比较短，但是没事。。
        display: flex;
        align-items: center;
        /* display: inline-block; // 这个加上就会把这个盒子的宽度变成跟内容的宽度一样，而不会是根据父容器的宽度 */
        padding: 3px 20px 3px 14px;
        // white-space: wrap;
        position: relative;
        /* 添加相对定位--好像没用 */
        min-width: 120px;
        cursor: pointer;

        &:hover {
          background-color: #f6f6f6;
        }

        &.active {
          color: ${(props) => props.$activeFontColor};
          background-color: ${(props) => props.$activeBgc};
        }

        .tag1 {
          font-size: 12px;
          padding: 2px 6px;
          border-radius: 6px;
          background-color: #f0f9eb;
          color: #6dc442;
          white-space: nowrap;
        }

        .tag2 {
          font-size: 12px;
          padding: 2px 6px;
          border-radius: 6px;
          background-color: #fef0f0;
          color: #f67878;
          white-space: nowrap;
        }

        .item-name {
          word-break: break-all; // 树节点 的名字太长让它换行
        }

        .right-content {
          padding: 1px;
          position: absolute;
          border-radius: 4px;
          // top: 2px;
          right: 10px;
          color: #606266;
          background-color: #fff;
          z-index: 999;

          i {
            margin: 0 4px;
          }
        }
        .icon {
          transition: all 0.3s ease;
        }
      }

      .has-children {
      }

      .no-children {
        /* padding-left: 10px; */
      }
    }

    .children {
      /* padding-left: 10px; */
      max-height: 0;
      /* 初始状态下高度为0 */
      overflow-y: hidden;

      /* 隐藏溢出内容 */
      &.not-expand {
        transition: max-height 0.25s ease; //这个加上过度效果会出现点击的节点的内部闪现x轴滚动条
      }

      &.expanded {
        overflow-y: clip; // 这句话加上就不会出现很多歌滚动条。。。
        transition: max-height 0.3s ease;
        /* 添加过渡效果 */
        max-height: 1000px;
        /* 展开时高度自动适应内容 */
      }
    }
  }
`;
