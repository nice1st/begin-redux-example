// 리덕스와 연동된 컨테이너 컴포넌트 작성

import React, { Component } from "react";
import Todos from "components/Todos";
import { connect } from "react-redux";
import { TodoActions } from 'store/actionCreators';

class TodoContainer extends Component {
    handlerChange = (e) => {
        TodoActions.changeInput(e.target.value);
    }

    handlerInsert = () => {
        const { input } = this.props;
        TodoActions.insert(input);
        TodoActions.changeInput('');
    }

    handlerToggle = (id) => {
        TodoActions.toggle(id);
    }

    handlerRemove = (id) => {
        TodoActions.remove(id);
    }
    
    render() {
        const { handlerChange, handlerInsert, handlerRemove, handlerToggle } = this;
        const { input, todos } = this.props;

        return (
            <Todos
                onChange = { handlerChange }
                onInsert = { handlerInsert }
                onToggle = { handlerToggle }
                onRemove = { handlerRemove }
                input = { input }
                todos = { todos }
            />
        );
    }
}

export default connect(
    ({ todo }) => ({
        input: todo.get('input')
        , todos: todo.get('todos')
    })
    // , (dispatch) => ({ TodoActions: bindActionCreators(todoActions, dispatch) })
)(TodoContainer);