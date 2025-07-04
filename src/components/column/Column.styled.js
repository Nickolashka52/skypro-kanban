import styled from "styled-components";

export const MainColumn = styled.div`
  width: 100%;
  margin: 0;
  display: block;

  /* Адаптив */
  @media screen and (max-width: 1200px) {
    width: 100%;
    margin: 0 auto;
    display: block;
  }
`;

export const ColumnTitle = styled.div`
  padding: 0 10px;
  margin: 15px 0;

  p {
    color: #94a6be;
    font-size: 14px;
    font-weight: 600;
    line-height: 1;
    text-transform: uppercase;
    margin: 0;
  }
`;

export const Cards = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  position: relative;

  @media screen and (max-width: 1200px) {
    overflow-y: auto;
  }
`;
