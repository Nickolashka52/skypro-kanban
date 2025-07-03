import styled from "styled-components";

export const CalendarWrapper = styled.div`
  width: 182px;
  margin-bottom: 20px;

  @media screen and (max-width: 660px) {
    max-width: 340px;
    width: 100%;
  }
`;

export const CalendarTitle = styled.h2`
  margin-bottom: 14px;
  padding: 0 7px;
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  color: #000;
`;

export const CalendarBlock = styled.div`
  display: block;
`;

export const CalendarMonth = styled.div`
  color: #94a6be;
  font-size: 14px;
  line-height: 25px;
  font-weight: 600;
`;

export const CalendarNav = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 14px;
  padding: 0 7px;

  @media screen and (max-width: 660px) {
    padding: 0;
  }
`;

export const NavActions = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const NavAction = styled.button.attrs(() => ({
  type: "button",
}))`
  width: 18px;
  height: 25px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  border: none;
  padding: 0;

  svg {
    fill: #94a6be;
    display: block;
  }

  &:focus {
    outline: none;
  }
`;

export const CalendarContent = styled.div`
  margin-bottom: 12px;
`;

export const DaysNames = styled.div`
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-between;
  margin: 7px 0;
  padding: 0 7px;

  @media screen and (max-width: 660px) {
    padding: 0;
  }
`;

export const DayName = styled.div`
  color: #94a6be;
  font-size: 10px;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.2px;
  user-select: none;

  &.weekend {
    /* если нужно можно добавить стили для выходных */
  }

  @media screen and (max-width: 660px) {
    font-size: 14px;
  }
`;

export const Cells = styled.div`
  width: 182px;
  height: 126px;
  display: flex;
  flex-wrap: wrap;

  @media screen and (max-width: 660px) {
    width: 344px;
    height: auto;
    justify-content: space-around;
  }
`;

export const Cell = styled.div`
  width: 22px;
  height: 22px;
  margin: 2px;
  border-radius: 50%;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;
  color: #94a6be;
  font-size: 10px;
  line-height: 1;
  letter-spacing: -0.2px;
  cursor: pointer;
  user-select: none;

  &.other-month {
    opacity: 0;
  }

  &.weekend {
    /* если нужно, можно стилизовать выходные */
  }

  &.cell-day:hover {
    color: #94a6be;
    background-color: #eaeef6;
  }

  &.active-day {
    background-color: #94a6be;
    color: #ffffff;
  }

  &.current {
    font-weight: 700;
  }

  @media screen and (max-width: 660px) {
    width: 42px;
    height: 42px;
    font-size: 14px;
  }
`;

export const CalendarPeriod = styled.div`
  padding: 0 7px;
`;

export const CalendarParagraph = styled.p`
  color: #94a6be;
  font-size: 10px;
  line-height: 1;
  user-select: none;

  span {
    color: #000000;
  }

  @media screen and (max-width: 660px) {
    font-size: 14px;
  }
`;
