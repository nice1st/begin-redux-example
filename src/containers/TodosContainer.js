// 리덕스와 연동된 컨테이너 컴포넌트 작성

import React, { Component } from "react";
import Todos from "components/Todos";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as todoActions from 'store/modules/todo';

class TodoContainer extends Component {
    handlerChange = (e) => {
        const { TodoActions } = this.props;
        TodoActions.changeInput(e.target.value);
    }

    handlerInsert = () => {
        const { input, TodoActions } = this.props;
        TodoActions.insert(input);
        TodoActions.changeInput('');
    }

    handlerToggle = (id) => {
        const { TodoActions } = this.props;
        TodoActions.toggle(id);
    }

    handlerRemove = (id) => {
        const { TodoActions } = this.props;
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
    , (dispatch) => ({ TodoActions: bindActionCreators(todoActions, dispatch) })
)(TodoContainer);