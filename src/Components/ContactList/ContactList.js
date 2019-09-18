import React from "react";
import ContactItem from "../ContactListItem/ContactItem";

const ContactList = ({ContactList}) => {
    //console.log("Test => ",ContactList);
    const item = ContactList.map((item) =>{
        return(
            <ContactItem name ={item.name} desc={item.desc} foto={item.foto} gender={item.gender}/>
        )

    })


    return(
        <div className="row">
            <div className="col-md-10 offset-md-1 row-block">
                <ul id="sortable">
                    {item}
                </ul>
            </div>
        </div>
    )
}

export default ContactList;