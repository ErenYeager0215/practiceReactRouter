import React, { useRef, useState, useEffect } from "react";

export const BirthDate = () => {
  const birthYearRef = useRef(null);
  const birthMonthRef = useRef(null);
  const birthDayRef = useRef(null);

  const [birthYear, setBirthYear] = useState();
  const [birthMonth, setBirthMonth] = useState();
  const [birthDay, setBirthDay] = useState();

  const setYear = () => {
    for (let i = new Date().getFullYear(); 1920 <= i; i--) {
      const option = document.createElement("option");
      const date = new Date(Date.UTC(i));
      const jc = new Intl.DateTimeFormat("ja-JP-u-ca-japanese", {
        year: "numeric",
      }).format(date);
      option.value = `${i}(${jc})`;
      option.text = `${i}(${jc})`;
      // ref.currentでDOMに直接アクセスできる
      birthYearRef.current.appendChild(option);
    }
  };

  const setMonth = () => {
    for (let i = 1; i <= 12; i++) {
      const option = document.createElement("option");
      option.value = i;
      option.text = i;
      birthMonthRef.current.appendChild(option);
    }
  };

  const setDay = () => {
    for (let i = 1; i <= 31; i++) {
      const option = document.createElement("option");
      option.value = i;
      option.text = i;
      birthDayRef.current.appendChild(option);
    }
  };

  const selectBirthYear = (e) => {
    setBirthYear(e.target.value);
  };

  const selectBirthMonth = (e) => {
    setBirthMonth(e.target.value);
  };

  const selectBirthDay = (e) => {
    setBirthDay(e.target.value);
  };

  useEffect(() => {
    setYear();
    setMonth();
    setDay();
  }, []);

  return (
    <div>
      <p>生年月日</p>
      <label>
        <select
          ref={birthYearRef}
          value={birthYear}
          onChange={selectBirthYear}
        ></select>
        年
      </label>
      <label>
        <select
          ref={birthMonthRef}
          value={birthMonth}
          onChange={selectBirthMonth}
        ></select>
        月
      </label>
      <label>
        <select
          ref={birthDayRef}
          value={birthDay}
          onChange={selectBirthDay}
        ></select>
        日
      </label>
    </div>
  );
};
