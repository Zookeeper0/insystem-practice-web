import styled from "styled-components";

export const PageContent = styled.div`
  display: flex;
  padding: 16px;
  flex-direction: column;
  gap: 16px;
`;

export const PageTitBox = styled.h3`
  display: flex;
  height: 28px;
  padding: 0 4px;
  color: ${(props) => props.theme.colors.black80};
  font-size: 1.9rem;
  font-weight: 600;
  align-items: center;
  gap: 4px;
`;

export const PageContentBox = styled.div`
  display: flex;
  height: calc(100vh - 128px);
  padding: 20px;
  background: ${(props) => props.theme.colors.white100};
  border-radius: 6px;
  box-shadow: ${(props) => props.theme.shadows.field};
  flex-direction: column;
  gap: 16px;
`;
