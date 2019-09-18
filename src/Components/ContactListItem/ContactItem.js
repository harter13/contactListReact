import React from "react";

class  ContactListItem extends React.Component {

render(){

    const {name, desc, foto, gender } = this.props;
    const url=`https://randomuser.me/api/portraits/${gender}/${foto}.jpg`

    return(
        <li>
            <div className="media">
                <div className="media-left align-self-center">
                <img
                    className="rounded-circle"
                    src={url}
                />
            </div>
            <div className="media-body">
                <h4>{name}</h4>
                <p>
                    {desc}
                </p>
            </div>
            <div className="media-right align-self-center">
                <a href="#" className="btn btn-default" onClick={this.onBtnClick}>
                    Contact Now
                </a>
            </div>
            </div>
        </li>
    )
}
}

export default ContactListItem;
