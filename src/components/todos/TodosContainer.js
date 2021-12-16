import React, { Component } from "react";
import { connect } from 'react-redux';
import ToDo from "./Todo";

class ToDosContainer extends Component {

    renderToDos = () => this.props.todos.map((todo, id) => <ToDo key={id} text={todo} />)

    render() {
        return (
            <ol>
                {this.renderToDos()}
            </ol>
        )
    }
}

const mapStateToProps = state => {
    return {
        todos: state.todos
    }
}

export default connect(mapStateToProps)(ToDosContainer);