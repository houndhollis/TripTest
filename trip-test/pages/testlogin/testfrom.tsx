import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
// 이거 필수
import styled from "@emotion/styled";

const TestSchedule: React.FunctionComponent<any> = () => {
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date())

    const SYear = startDate.getFullYear()
    const EYear = endDate.getFullYear()
    const SMonth = String(startDate.getMonth() + 1).padStart(2,'0')
    const EMonth = String(endDate.getMonth() + 1).padStart(2,'0')
    const Sday =  String(startDate.getDate()).padStart(2,'0')
    const Eday = String(endDate.getDate()).padStart(2,'0')

    const onAir = (e:React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        const pageUrl = `https://flight.naver.com/flights/international/ICN-FUK-${SYear}${SMonth}${Sday}/FUK-ICN-${EYear}${EMonth}${Eday}?adult=1&fareType=Y`;
        document.location.href = pageUrl;
    }

    return (
        <ScheContainer>
            가는날
            <SdatePicker
                selected={startDate}
                onChange={(date: Date) => setStartDate(date)}
            />
            오는날
            <SdatePicker
                selected={endDate}
                onChange={(date: Date) => setEndDate(date)}
            />
            <button onClick={onAir}>찾아보기</button>
        </ScheContainer>
    );
};

export default TestSchedule;

const ScheContainer = styled.div`
    width: 100%;
    height: 100%;
    padding: 30px;
`;

const SdatePicker = styled(DatePicker)`
    background-color: #2864ff;
    color: #fff;
    margin-top: 3px;
    margin-bottom: 8px;
    width: 300px;
    height: 42px;
    padding: 8px 20px;
    box-sizing: border-box;
    border: none;
    border-radius: 5px;
`;




// import { ko } from "date-fns/esm/locale";
// locale={ko}