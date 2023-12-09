import styled from 'styled-components';


export const List = styled.ul`
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
`;

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 15px;
  max-width: 100%;

  margin: 0;
  padding: 0px;
  list-style: none;
`;

export const ButtonItem = styled.button`
  width: 40.2px;
  align-self: center;

  padding: 10px;
  color: white;
  background-color: #4d83c2;
  cursor: pointer;

  border-radius: 5px;
`;

export const Text = styled.p`
  padding: 15px;
  margin: 0;
`;