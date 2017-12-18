import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
    setFilteredUsers,
} from '../../actions/user';

class SearchBox extends Component {
    constructor(props){
        super(props);

        this.isTyping = null;
    }
    search() {
        this.inActiveTime = 0;
        if(this.inActiveTime > 60) {

        }
    };

    onChange(event) {
        clearTimeout(this.isTyping);
        const text = event.target.value;
        this.isTyping = setTimeout(() => {
            const filteredUsers = this.props.users.filter((user) => user.login.includes(text));
            this.props.setFilteredUsers(filteredUsers);
        }, 1000);
    }

    render() {
        return (
            <div className="search-wrap">
                <input type="text"
                       className="form-control"
                       placeholder="Search User"
                       onChange={this.onChange.bind(this)}
                />
            </div>
        )
    }
}


const mapStateToProps = state => ({
    users: state.user.list,
});

const mapDispatchToProps = dispatch => bindActionCreators({
    setFilteredUsers,
}, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(SearchBox);