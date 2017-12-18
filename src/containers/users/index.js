import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
    getUsersList,
    selectUser,
} from '../../actions/user';

class Users extends Component {
    componentDidMount(){
        this.props.getUsersList();
    }

    render() {
        return (
            <ul className="users-list">
                {
                    this.props.users.map((item, index) => (
                        <li key={index}>
                            <img alt={item.login} src={item.avatar_url} />
                            <a onClick={() => this.props.selectUser(item)}>
                                {item.login}
                            </a> - <a target="_blank" href={item.html_url}>Github Repo</a>
                        </li>
                    ))
                }
            </ul>
        )
    }
}


const mapStateToProps = state => ({
    users: state.user.filteredList,
});

const mapDispatchToProps = dispatch => bindActionCreators({
    getUsersList,
    selectUser,
}, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Users);