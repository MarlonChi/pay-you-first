import { css, styled } from "styled-components";

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 3rem;
`;

export const Label = styled.label`
  padding: 0.4rem 1.6rem;
`;

export const Input = styled.input`
  ${({ theme }) => css`
    background: transparent;
    border: 1px solid #fff;
    border-radius: 20rem;
    height: 4.5rem;
    color: #fff;
    padding: 1.2rem 0.8rem;

    &:disabled {
      opacity: 0.5;
    }

    ${({ isInvalid }) => isInvalid && `border-color: ${theme.colors.red}`}
  `}
`;
