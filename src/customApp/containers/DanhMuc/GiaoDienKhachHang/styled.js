import styled from "styled-components";

export const StyledButton = styled.div`
  background-color: ${(props) =>
    props.isSelected ? "#013CC6CC" : "#66718CCC"};
  border: 1px solid ${(props) => (props.isSelected ? "#013CC6CC" : "#66718CCC")};
  color: #fff;
  padding: 8px 16px;

  cursor: pointer;
  font-size: 16px;
  font-weight: 500;
  /* line-height: 24px; */
  transition: all 0.3s ease;
  width: 200px;
  border-radius: 5px;
  text-align: center;
  @media screen and (max-width: 750px) {
    width: calc(50% - 5px);
  }
  &:hover {
    background-color: #013cc6cc;
    border-color: #013cc6cc;
    color: #fff;
  }
`;
export const Layout = styled.div`
  padding: 0pc 0px 20px 0px;
`;
export const MenuContent = styled.div`
  display: flex;
  margin-bottom: 20px;
  gap: 10px !important;
  /* flex-wrap: wrap; */
  @media only screen and (max-width: 750px) {
    flex-wrap: wrap;
    & > * {
      flex-basis: calc(50% - 5px);
    }
  }
  @media only screen and (max-width: 420px) {
    & > * {
      flex-basis: 100%;
    }
  }
`;
