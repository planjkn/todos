import React from 'react';
import {
    MdCheckBoxOutlineBlank,
    MdCheckBox,
    MdRemoveCircleOutline
} from 'react-icons/md';
import styles from './TodoListItem.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const TodoListItem = ( { todo, onRemove, onToggle, style } ) => {
    const { id,  text, checked } = todo;
    
    return (
        <div className="TodoListItem-virtualized" style={style}>
            <div className={cx('TodoListItem')}>
                <div className={cx('checkbox', { checked })} onClick={() => onToggle(id)}>
                    {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
                    <div className={cx('text', 'line-break')}>{text}</div>
                </div>
                <div className={cx('remove')} onClick={() => onRemove(id)}>
                    <MdRemoveCircleOutline />
                </div>
            </div>
        </div>
    );
};

export default React.memo(TodoListItem);