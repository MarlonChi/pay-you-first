import { css, styled } from "styled-components";

export const Error = styled.label`
  ${({ theme }) => css`
    font-size: 1.2rem;
    color: ${theme.colors.red};
  `}
`;
