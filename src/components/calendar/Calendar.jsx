import { useState, useEffect } from "react";
import {
  CalendarWrapper,
  CalendarTitle,
  CalendarBlock,
  CalendarNav,
  CalendarMonth,
  NavActions,
  NavAction,
  CalendarContent,
  DaysNames,
  DayName,
  Cells,
  Cell,
  CalendarPeriod,
  CalendarParagraph,
} from "./Calendar.styled";

const Calendar = ({ selectedDate, onDateChange, readOnly = false }) => {
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  const [internalSelectedDate, setInternalSelectedDate] = useState(() => {
    if (selectedDate) {
      const date = new Date(selectedDate);
      return isNaN(date) ? new Date() : date;
    }
    return new Date();
  });

  useEffect(() => {
    if (selectedDate) {
      const date = new Date(selectedDate);
      if (!isNaN(date)) {
        setInternalSelectedDate(date);
        setCurrentMonth(date.getMonth());
        setCurrentYear(date.getFullYear());
      }
    }
  }, [selectedDate]);

  const goToPrevMonth = () => {
    setCurrentMonth((prev) => {
      if (prev === 0) {
        setCurrentYear((y) => y - 1);
        return 11;
      }
      return prev - 1;
    });
  };

  const goToNextMonth = () => {
    setCurrentMonth((prev) => {
      if (prev === 11) {
        setCurrentYear((y) => y + 1);
        return 0;
      }
      return prev + 1;
    });
  };

  const handleDayClick = (day) => {
    if (readOnly) return;
    const newDate = new Date(currentYear, currentMonth, day);
    setInternalSelectedDate(newDate);
    if (onDateChange) {
      onDateChange(newDate.toISOString());
    }
  };

  const monthNames = [
    "Январь",
    "Февраль",
    "Март",
    "Апрель",
    "Май",
    "Июнь",
    "Июль",
    "Август",
    "Сентябрь",
    "Октябрь",
    "Ноябрь",
    "Декабрь",
  ];
  const monthName = monthNames[currentMonth];

  const generateCalendarDays = () => {
    const days = [];
    const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();
    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

    const startDayIndex = firstDayOfMonth === 0 ? 6 : firstDayOfMonth - 1;

    for (let i = 0; i < startDayIndex; i++) {
      days.push(<Cell key={`empty-start-${i}`} className="empty-cell" />);
    }

    const today = new Date();
    for (let i = 1; i <= daysInMonth; i++) {
      const isCurrent =
        i === today.getDate() &&
        currentMonth === today.getMonth() &&
        currentYear === today.getFullYear();

      const isSelected =
        i === internalSelectedDate.getDate() &&
        currentMonth === internalSelectedDate.getMonth() &&
        currentYear === internalSelectedDate.getFullYear();

      days.push(
        <Cell
          key={`curr-${i}`}
          className={`cell-day ${isCurrent ? "current" : ""} ${
            isSelected ? "active-day" : ""
          }`}
          onClick={() => !readOnly && handleDayClick(i)}
        >
          {i}
        </Cell>
      );
    }

    const totalCells = 42;
    const remainingCells = totalCells - days.length;
    for (let i = 0; i < remainingCells; i++) {
      days.push(<Cell key={`empty-end-${i}`} className="empty-cell" />);
    }

    return days;
  };

  return (
    <CalendarWrapper>
      <CalendarTitle>Даты</CalendarTitle>
      <CalendarBlock>
        <CalendarNav>
          <CalendarMonth>{`${monthName} ${currentYear}`}</CalendarMonth>
          {!readOnly && (
            <NavActions>
              <NavAction data-action="prev" onClick={goToPrevMonth}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="6"
                  height="11"
                  viewBox="0 0 6 11"
                >
                  <path d="M5.72945 1.95273C6.09018 1.62041 6.09018 1.0833 5.72945 0.750969C5.36622 0.416344 4.7754 0.416344 4.41218 0.750969L0.528487 4.32883C-0.176162 4.97799 -0.176162 6.02201 0.528487 6.67117L4.41217 10.249C4.7754 10.5837 5.36622 10.5837 5.72945 10.249C6.09018 9.9167 6.09018 9.37959 5.72945 9.04727L1.87897 5.5L5.72945 1.95273Z" />
                </svg>
              </NavAction>
              <NavAction data-action="next" onClick={goToNextMonth}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="6"
                  height="11"
                  viewBox="0 0 6 11"
                >
                  <path d="M0.27055 9.04727C-0.0901833 9.37959 -0.0901832 9.9167 0.27055 10.249C0.633779 10.5837 1.2246 10.5837 1.58783 10.249L5.47151 6.67117C6.17616 6.02201 6.17616 4.97799 5.47151 4.32883L1.58782 0.75097C1.2246 0.416344 0.633778 0.416344 0.270549 0.75097C-0.0901831 1.0833 -0.090184 1.62041 0.270549 1.95273L4.12103 5.5L0.27055 9.04727Z" />
                </svg>
              </NavAction>
            </NavActions>
          )}
        </CalendarNav>
        <CalendarContent>
          <DaysNames>
            <DayName>пн</DayName>
            <DayName>вт</DayName>
            <DayName>ср</DayName>
            <DayName>чт</DayName>
            <DayName>пт</DayName>
            <DayName className="weekend">сб</DayName>
            <DayName className="weekend">вс</DayName>
          </DaysNames>
          <Cells>{generateCalendarDays()}</Cells>
        </CalendarContent>
        <CalendarPeriod>
          <CalendarParagraph className="date-end">
            Срок исполнения:{" "}
            <span className="date-control">
              {internalSelectedDate.toLocaleDateString("ru-RU")}
            </span>
          </CalendarParagraph>
        </CalendarPeriod>
      </CalendarBlock>
    </CalendarWrapper>
  );
};

export default Calendar;
