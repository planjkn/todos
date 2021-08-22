import React, { useState, useCallback } from 'react';
import { MdAddCircleOutline } from 'react-icons/md';
import styles from './TodoInsert.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const TodoInsert = ( {onInsert} ) => {
    const [value, setValue] = useState('');

    const onChange = useCallback(e => {
        setValue(e.target.value);
    }, []);

    const onSubmit = useCallback(
        e => {
            onInsert(value);
            setValue('');
            e.preventDefault(); //submit 새로고침 방지
        }, [onInsert, value]
    );

    return (
        <form className={cx('TodoInsert')} onSubmit={onSubmit}>
            <input placeholder="할 일을 입력하세요" 
                    value={value}
                    onChange={onChange}
            />
            <button type="submit">
                <MdAddCircleOutline />
            </button>
        </form>
    );
};

export default TodoInsert;