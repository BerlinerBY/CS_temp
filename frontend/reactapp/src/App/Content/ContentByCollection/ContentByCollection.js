import React from "react";
import './ContentByCollection.css'

class ContentByCollection extends React.Component {
    convertDate(date) {
        const date_obj = new Date(date);
        let month_lower = date_obj.toLocaleString('default', { month: 'short'});
        const month = month_lower.charAt(0).toUpperCase() + month_lower.slice(1);
        const day = date_obj.getDate();
        const year = date_obj.getFullYear();
        return month + ' ' + day + ', ' + year
    };
    getUrl(url) {
        let domain = new URL(url);
        if (domain.hostname.indexOf("www.") == -1){
            return domain.hostname
        } else {
            return domain.hostname.slice(4)
        }  
    };

    render() {
        const { items } = this.props;

        return (
            <div className="Content-items-in-collection">
                {items.length > 0 && (
                    <div className="Content-items">
                        {items.map(item => (
                            <div className="Content-item">
                                <div className="Content-item-image">
                                    <img src="https://i.imgur.com/h3b4KZI.jpeg" alt="" />
                                </div>
                                <div className="Content-item-body">
                                    <div className="item-title">
                                        <h3>{item.title}</h3>
                                    </div>
                                    <div className="item-description">
                                        <h4>{item.description}</h4>
                                    </div>
                                    <ul>
                                        <li><span>{this.convertDate(item.date_of_saving)}</span></li>
                                        <li><span>{this.getUrl(item.url_field)}</span></li>
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        )
    }
}

export default ContentByCollection;