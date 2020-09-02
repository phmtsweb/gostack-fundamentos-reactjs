import styled, { css } from 'styled-components';

interface ContainerProps {
  size?: 'small' | 'large';
  currentPage: 'list' | 'import';
}

export const Container = styled.div<ContainerProps>`
  background: #5636d3;
  padding: 30px 0;

  header {
    width: 1120px;
    margin: 0 auto;
    padding: ${({ size }) => (size === 'small' ? '0 20px ' : '0 20px 150px')};
    display: flex;
    align-items: center;
    justify-content: space-between;

    nav {
      a {
        color: #fff;
        text-decoration: none;
        font-size: 16px;
        transition: opacity 0.2s;
        position: relative;
        display: inline-block;
        opacity: 0.6;

        & + a {
          margin-left: 32px;
        }

        &:hover {
          opacity: 0.6 !important;
        }

        &:after {
          content: '';
          width: 100%;
          height: 2px;
          position: absolute;
          bottom: -10px;
          left: 0;
          margin: 0 auto;
        }
      }

      ${({ currentPage }) =>
        currentPage === 'list'
          ? css`
              #list:after {
                background-color: #ff872c;
              }
              #list {
                opacity: 1;
              }
            `
          : css`
              #import:after {
                background-color: #ff872c;
              }
              #import {
                opacity: 1;
              }
            `}
    }
  }
`;
