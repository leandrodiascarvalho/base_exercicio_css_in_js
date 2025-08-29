import styled from 'styled-components'

export const Form = styled.form`
  display: flex;
  gap: 8px;
  margin-bottom: 32px;
`
export const Campo = styled.input`
  flex: 1;
  padding: 8px;
  border-radius: 4px;
  border: 1px solid #ccc;
`
export const BotaoPesquisar = styled.button`
  background: var(--cor-principal);
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 8px 16px;
  cursor: pointer;
  font-weight: bold;
  &:hover {
    background: #855a64;
  }
`
