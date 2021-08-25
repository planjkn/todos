import React, { useCallback } from 'react';
import { List } from 'react-virtualized';
import TodoListItem from '../TodoListItem';
import styles from './TodoList.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const TodoList = ({ todos, onRemove, onToggle }) => {

    // return (
    //     <div className={cx('TodoList')}>
    //         {todos.map(todo => (
    //             <TodoListItem todo={todo} key={todo.id} onRemove={onRemove} onToggle={onToggle} />
    //         ))}
    //     </div>
    // );

    // ====================== rowRenderer 함수 추가 ====================== //

    const rowRenderer = useCallback(
        ({ index, key, style }) => {   // index, key, style 이렇게 3가지를 객체 타입으로 받아와서 사용함
            const todo = todos[index];
            return (
                <TodoListItem todo={todo} key={key} onRemove={onRemove} onToggle={onToggle} style={style} />   // return 부분에 있던게 이쪽 함수 안으로 오게됨.
            )
        }, [onRemove, onToggle, todos],
    );

    return (
        <List 
            className="TodoList"
            width={400}     // 전체 크기 width
            height={320}    // 전체 크기 height
            rowCount={todos.length}  // item 항목 갯수
            rowHeight={30}      // 1개 항목당 높이
            rowRenderer={rowRenderer}    // 항목 렌더링에 쓰는 함수
            list={todos}        // 배열의 이름
            style={{ outline: 'none' }}     // List를 이용하는데 기본으로 적용되어있는 outline을 none으로 설정했음.
        />
    );

};

export default React.memo(TodoList);