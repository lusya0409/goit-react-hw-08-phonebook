import styled from 'styled-components';

export const List = styled.ul`
  margin: ${props => props.theme.spasing(10)};
  width: 100%;
`;

export const Item = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  gap: ${props => props.theme.spasing(2)};

  border-bottom: 1px solid ${props => props.theme.colors.gray};
`;
export const SpanName = styled.span`
  display: block;
  width: 150px;
`;
