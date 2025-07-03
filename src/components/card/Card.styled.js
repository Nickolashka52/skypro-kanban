import styled from "styled-components";

export const cardThemes = {
  orange: {
    background: "#ffe4c2",
    color: "#ff6d00",
  },
  green: {
    background: "#b4fdd1",
    color: "#06b16e",
  },
  purple: {
    background: "#e9d4ff",
    color: "#9a48f1",
  },
  gray: {
    background: "#94a6be",
    color: "#ffffff",
  },
};

export const CardsItem = styled.div`
  padding: 5px;
  animation-name: card-animation;
  animation-duration: 500ms;
  animation-timing-function: linear;
`;

export const CardsCard = styled.div`
  width: 220px;
  height: 130px;
  background-color: #ffffff;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: stretch;
  padding: 15px 13px 19px;
`;

export const CardGroup = styled.div`
  width: 100%;
  height: 20px;
  margin-bottom: 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const CardTheme = styled.div`
  width: auto;
  height: 20px;
  padding: 5px 14px;
  border-radius: 18px;
  background-color: ${({ $themeName }) =>
    cardThemes[$themeName]?.background || cardThemes.gray.background};
  color: ${({ $themeName }) =>
    cardThemes[$themeName]?.color || cardThemes.gray.color};
`;

export const CardThemeText = styled.p`
  font-size: 10px;
  font-weight: 600;
  line-height: 10px;
  margin: 0;
  color: ${({ $themeName }) =>
    cardThemes[$themeName]?.color || cardThemes.gray.color};
`;

export const CardBtn = styled.div`
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 2px;
  cursor: pointer;

  div {
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background-color: #94a6be;
  }
`;

export const CardContent = styled.div`
  height: 64px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
`;

export const CardTitleLink = styled.a`
  text-decoration: none;
  color: #000000;

  &:hover,
  &:focus {
    color: #33399b;
  }
`;

export const CardTitle = styled.h3`
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  margin-bottom: 10px;
`;

export const CardDate = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  svg {
    width: 13px;
    height: 13px;
    flex-shrink: 0;
  }

  p {
    margin-left: 6px;
    font-size: 10px;
    line-height: 13px;
    color: #94a6be;
    letter-spacing: 0.2px;
  }
`;
