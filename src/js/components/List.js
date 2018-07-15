import React, { Component } from "react";
import { connect } from "react-redux";
import { deleteArticle } from "../actions/index";
// Connects a portion of the redux state 
// to the props of a react component
const mapStateToProps = state => {
    return {
        articles: state.articles
    };
};

const mapDispatchToProps = dispatch => {
    return {
        deleteArticle: id => dispatch(deleteArticle(id))
    };
};

const ConnectedList = ({ articles, deleteArticle }) => (
    <ul className="list-group list-group-flush" >
        {
            articles.map(el => (
                <li className="list-group-item" key={el.id} onClick={() => deleteArticle(el.id)}>
                    {el.title}
                </li>
            ))
        }
    </ul>
);

const List = connect(mapStateToProps, mapDispatchToProps)(ConnectedList);
// const List = new ConnectedList();
export default List;