import React from 'react';
import styles from './TodoTemplate.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const TodoTemplate = ({children}) => {
    return (
        <div className={cx('TodoTemplate')}>
            <div className={cx('app-title')}>TODO LIST</div>
            <div className={cx('content')}>{children}</div>
        </div>
    );
};

export default TodoTemplate;