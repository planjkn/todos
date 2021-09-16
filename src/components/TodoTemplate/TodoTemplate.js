import React, { useState } from 'react';
import styles from './TodoTemplate.scss';
import classNames from 'classnames/bind';
import axios from 'axios';
import DatePicker from '../date-picker';


const cx = classNames.bind(styles);

const TodoTemplate = ({children}) => {

    const date = new Date();
    const year = date.getFullYear();
    const monthNames = ["JAN", "FAB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
    const month = monthNames[date.getMonth()];
    const day = date.getDate();

    const apiKey = "65a81888180f2ee46a9ba2501b104012";
    const city = "Busan";
    const apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
    
    //axios 라이브러리
    const [icon, setIcon] = useState('');
    axios.get(apiUrl)
        .then(responseData => {
            console.log(responseData);
            const data = responseData.data;
            setIcon(data.weather[0].icon);
        })
        .catch(error => console.log(error));

    const imgSrc = `http://openweathermap.org/img/w/${icon}.png`;


    // const [icon, setIcon] = useState('');
    // fetch(apiUrl)
    //     .then(response => response.json())
    //     .then(responseData => {
    //         setIcon(responseData.weather[0].icon);
    //     })
    //     .catch(error => console.log(error));

    
    return (
        <div className={cx('TodoTemplate')}>
            <div className="app_header">
                <div className="date_area">

                    <DatePicker/>

                    {/* <div className="left_col">
                        <div className="day_area">{day}</div>
                    </div>
                    <div className="center_col">
                        <div className="month_area">{month}</div>
                        <div className="year_area">{year}</div>
                    </div> */}
                    <div className="right_col">
                        <img 
                            src={imgSrc}
                            alt ="weather"
                        />
                        {/* <img
                            src={`http://openweathermap.org/img/w/${apiData.weather[0].icon}.png`}
                            // src={`http://openweathermap.org/img/w/${iconName}.png`}
                            alt="weather status icon"
                            className="weather-icon"
                        /> */}

                    </div>
                </div>
                <div className={cx('app-title')}>TODO LIST</div>
            </div>
            <div className={cx('content')}>{children}</div>
        </div>
    );
};

export default TodoTemplate;