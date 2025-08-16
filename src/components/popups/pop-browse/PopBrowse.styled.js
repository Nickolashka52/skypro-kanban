import styled from "styled-components";

export const PopBrowseWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9;
`;

export const PopBrowseContainer = styled.div`
  width: 100%;
  max-width: 630px;
  padding: 0 16px;
`;

export const PopBrowseBlock = styled.div`
  background: #fff;
  border-radius: 10px;
  border: 0.7px solid #d4dbe5;
  padding: 40px 30px 38px;
  position: relative;
`;

export const PopBrowseContent = styled.div`
  .categories__theme {
    opacity: 1;
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
  margin-bottom: 20px;
  width: 100%;
  overflow: hidden;
`;

export const PopBrowseForm = styled.form`
  max-width: 370px;
  width: 100%;
  display: block;
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Subtitle = styled.p`
  color: #000;
  font-size: 14px;
  font-weight: 600;
  line-height: 1;
  margin-bottom: 14px;
`;

export const Textarea = styled.textarea`
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
  height: 200px;
  resize: none;

  &:read-only {
    cursor: default;
  }

  &::placeholder {
    font-weight: 400;
    font-size: 14px;
    line-height: 1px;
    color: #94a6be;
    letter-spacing: -0.14px;
  }
`;

export const StatusBlock = styled.div`
  margin-bottom: 11px;
`;

export const StatusItem = styled.div`
  display: inline-block;
  border-radius: 24px;
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  background: #94a6be;
  color: #ffffff;
  padding: 11px 14px 10px;
  font-size: 14px;
  line-height: 1;
  letter-spacing: -0.14px;
  margin-right: 7px;
  margin-bottom: 7px;
  white-space: nowrap;
`;

export const CategoriesTheme = styled.div`
  display: inline-block;
  width: auto;
  height: 30px;
  padding: 8px 20px;
  border-radius: 24px;
  margin-right: 7px;
  background-color: ${({ $bg }) => $bg || "#ffe4c2"};
  color: ${({ $color }) => $color || "#ff6d00"};
  opacity: ${({ $active }) => ($active ? "1" : "0.4")};
  font-size: 14px;
  font-weight: 600;
  line-height: 14px;
  white-space: nowrap;
`;

export const PopBrowseBtnBrowse = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const BtnGroup = styled.div`
  display: flex;
  gap: 8px;
`;

export const BtnEdit = styled.button`
  height: 30px;
  padding: 0 14px;
  border-radius: 4px;
  border: 0.7px solid var(--palette-navy-60, #565eef);
  outline: none;
  background: transparent;
  color: #565eef;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;

  &:hover {
    background-color: #33399b;
    color: #ffffff;
  }
`;

export const BtnDelete = styled.button`
  height: 30px;
  padding: 0 14px;
  border-radius: 4px;
  border: 0.7px solid var(--palette-navy-60, #565eef);
  outline: none;
  background: transparent;
  color: #565eef;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;

  &:hover {
    background-color: #33399b; // Изменено с #ff0000
    color: #ffffff;
    border-color: #33399b; // Изменено с #ff0000
  }
`;

export const BtnClose = styled.button`
  height: 30px;
  padding: 0 14px;
  border-radius: 4px;
  background: #565eef;
  border: none;
  outline: none;
  color: #ffffff;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;

  &:hover {
    background-color: #33399b;
  }
`;

// Медиа-запросы для мобильных устройств
export const MobileStyles = styled.div`
  @media (max-width: 660px) {
    ${PopBrowseWrapper} {
      top: 70px;
    }

    ${PopBrowseContainer} {
      padding: 0;
    }

    ${PopBrowseBlock} {
      border-radius: 0;
      padding: 20px 16px 32px;
    }

    ${PopBrowseWrap} {
      flex-direction: column;
    }

    ${Textarea} {
      height: 37px;
      max-width: 100%;
    }

    ${PopBrowseBtnBrowse} {
      flex-direction: column;
    }

    ${BtnGroup} {
      width: 100%;
      margin-bottom: 10px;
    }

    ${BtnEdit}, ${BtnDelete}, ${BtnClose} {
      width: 100%;
      height: 40px;
    }
  }
`;

export const Input = styled.input`
  width: 100%;
  padding: 0;
  border: none;
  background: transparent;
  font-size: 20px;
  font-weight: 600;
  color: #000;
  outline: none;
`;

export const StatusList = styled.div`
  display: flex;
  flex-wrap: nowrap;
  overflow: hidden; // Убираем скролл полностью
  gap: 4px;
  width: 100%;
  padding-bottom: 2px;
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera */
  }
`;

export const StatusItemEdit = styled.div`
  display: inline-flex;
  border-radius: 24px;
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  background: ${({ $active }) => ($active ? "#94A6BE" : "#FFFFFF")};
  color: ${({ $active }) => ($active ? "#FFFFFF" : "#94A6BE")};
  padding: 8px 12px;
  font-size: 14px;
  line-height: 1;
  letter-spacing: -0.14px;
  margin-right: 0;
  white-space: nowrap;
  cursor: pointer;
  flex-shrink: 0; // Запрещаем сжатие элементов
  transition: background-color 0.2s ease, color 0.2s ease;

  &:hover {
    background: ${({ $active }) => ($active ? "#94A6BE" : "#EAEEF6")};
  }
`;

export const BtnSave = styled.button`
  height: 30px;
  padding: 0 14px;
  border-radius: 4px;
  background: #565eef;
  border: none;
  outline: none;
  color: #ffffff;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;

  &:hover {
    background-color: #33399b;
  }
`;

export const BtnCancel = styled.button`
  height: 30px;
  padding: 0 14px;
  border-radius: 4px;
  border: 0.7px solid var(--palette-navy-60, #565eef);
  outline: none;
  background: transparent;
  color: #565eef;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;

  &:hover {
    background-color: #33399b;
    color: #ffffff;
  }
`;
