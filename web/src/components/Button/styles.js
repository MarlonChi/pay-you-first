import { css, styled } from "styled-components";

export const Button = styled.button`
  ${({ theme }) => css`
    background: ${theme.colors.white};
    border: none;
    border-radius: 20rem;
    height: 4.5rem;
    color: ${theme.colors.raisinBlack};
    padding: 1.2rem 0.8rem;
    max-width: 18.7rem;
    width: 100%;
    cursor: pointer;
  `}
`;
