import styled from "styled-components";

export const PopBrowseWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  min-width: 375px;
  min-height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 0;
`;

export const PopBrowseContainer = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  padding: 0 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.4);
`;

export const PopBrowseBlock = styled.div`
  display: block;
  margin: 0 auto;
  background-color: #ffffff;
  max-width: 630px;
  width: 100%;
  padding: 40px 30px 38px;
  border-radius: 10px;
  border: 0.7px solid #d4dbe5;
  position: relative;
`;

export const PopBrowseContent = styled.div`
  display: block;
  text-align: left;

  .categories__theme {
    opacity: 1;
  }

  .theme-down {
    display: none;
    margin-bottom: 20px;
  }

  .theme-top {
    display: block;
  }
`;

export const PopBrowseTopBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 18px;
`;

export const PopBrowseTitle = styled.h3`
  color: #000;
  font-size: 20px;
  font-weight: 600;
  line-height: 24px;
`;

export const PopBrowseWrap = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`;

export const PopBrowseForm = styled.form`
  max-width: 370px;
  width: 100%;
  display: block;
  margin-bottom: 20px;
`;

export const PopBrowseBtnGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-between;

  button {
    height: 30px;
    margin-bottom: 10px;
    padding: 0 14px;
  }

  .btn-group {
    display: flex;
    gap: 8px;
  }
`;

export const FormBrowseBlock = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FormBrowseArea = styled.textarea`
  max-width: 370px;
  width: 100%;
  outline: none;
  padding: 14px;
  background: #eaeef6;
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  border-radius: 8px;
  font-size: 14px;
  line-height: 1;
  letter-spacing: -0.14px;
  margin-top: 14px;
  height: 200px;

  &::placeholder {
    font-weight: 400;
    font-size: 14px;
    line-height: 1px;
    color: #94a6be;
    letter-spacing: -0.14px;
  }
`;

export const StatusWrapper = styled.div`
  margin-bottom: 11px;
`;

export const StatusParagraph = styled.p`
  margin-bottom: 14px;
  color: #000;
  font-size: 14px;
  font-weight: 600;
  line-height: 1;
`;

export const StatusThemes = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: flex-start;
`;

export const StatusTheme = styled.div`
  border-radius: 24px;
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  color: #94a6be;
  padding: 11px 14px 10px;
  margin-right: 7px;
  margin-bottom: 7px;

  p {
    font-size: 14px;
    line-height: 1;
    letter-spacing: -0.14px;
  }

  &._gray {
    background: #94a6be;
    color: #ffffff;
  }

  &._hide {
    display: none;
  }
`;

export const ButtonBorder = styled.button`
  border-radius: 4px;
  border: 0.7px solid var(--palette-navy-60, #565eef);
  outline: none;
  background: transparent;
  color: #565eef;
  cursor: pointer;

  &:hover {
    background-color: #33399b;
    color: #ffffff;
  }

  &._hover03:hover {
    background-color: #33399b;
    color: #ffffff;
  }
`;

export const ButtonBackground = styled.button`
  border-radius: 4px;
  background: #565eef;
  border: none;
  outline: none;
  color: #ffffff;
  cursor: pointer;

  &:hover {
    background-color: #33399b;
  }

  &._hover01:hover {
    background-color: #33399b;
  }
`;

export const CategoriesWrapper = styled.div`
  margin-bottom: 20px;
`;

export const CategoriesThemes = styled.div`
  display: flex;
  flex-wrap: nowrap;
  align-items: flex-start;
  justify-content: flex-start;
`;

export const CategoriesParagraph = styled.p`
  margin-bottom: 14px;
  color: #000;
  font-size: 14px;
  font-weight: 600;
  line-height: 1;
`;

export const CategoriesTheme = styled.div`
  display: inline-block;
  width: auto;
  height: 30px;
  padding: 8px 20px;
  border-radius: 24px;
  margin-right: 7px;
  opacity: 0.4;

  p {
    font-size: 14px;
    font-weight: 600;
    line-height: 14px;
    white-space: nowrap;
  }

  &._orange {
    background-color: #ffe4c2;
    color: #ff6d00;
  }

  &._active-category {
    opacity: 1 !important;
  }
`;

// Медиа-запросы для мобильной версии
export const MobileStyles = styled.div`
  @media screen and (max-width: 660px) {
    ${PopBrowseWrapper} {
      top: 70px;
    }

    ${PopBrowseContainer} {
      padding: 0;
      justify-content: flex-start;
    }

    ${PopBrowseBlock} {
      border-radius: 0;
    }

    ${PopBrowseWrap} {
      display: block;
    }
  }

  @media screen and (max-width: 495px) {
    ${PopBrowseBlock} {
      padding: 20px 16px 32px;
    }

    ${PopBrowseContent} {
      .theme-down {
        display: block;
        margin-bottom: 20px;
      }

      .theme-top {
        display: none;
      }
    }

    ${PopBrowseForm} {
      max-width: 100%;
    }

    ${PopBrowseBtnGroup} {
      flex-direction: column;
      
      button {
        width: 100%;
        height: 40px;
      }

      .btn-group {
        width: 100%;
        margin-bottom: 10px;
        
        button {
          margin-right: 0;
          flex: 1;
        }
      }
    }

    ${FormBrowseArea} {
      max-width: 100%;
      height: 37px;
    }
  }
`;