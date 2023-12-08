import styled from 'styled-components';

export const FilterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5px;
  text-allign: center;
`;

export const FilterTitle = styled.h3`
  text-allign: center;
  padding: 15px;
  margin: 0;
`;

export const FilterInput = styled.input`
  width: 200px;
  height: 40px;
  border: 1px solid rgba(33, 33, 33, 0.2);
  border-radius: 4px;
  margin: 0;
  padding-left: 10px;
`;