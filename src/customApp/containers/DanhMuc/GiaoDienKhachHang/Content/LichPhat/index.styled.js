import styled from "styled-components";

const FilterWrap = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  @media only screen and (max-width: 930px) {
    width: 100%;
    & > * {
      flex-basis: calc(50% - 5px);
    }
    .search {
      flex-basis: 100%;
    }
  }
  @media only screen and (max-width: 420px) {
    & > * {
      flex-basis: 100%;
    }
  }
  .treeSelect {
    height: 40px;
    .ant-select-selection-item {
      color: rgb(197, 194, 194);
    }
    .ant-select-selector {
      height: 100%;
      background: rgb(23 33 104);
      border: 1px solid rgba(58, 89, 229, 0.2);
    }
    .ant-select-selection-placeholder,
    .ant-select-arrow .anticon {
      color: rgb(197, 194, 194);
    }
  }
`;

export { FilterWrap };
