import React, { Component } from "react";
import { FaFacebookF , FaLinkedinIn , FaTwitter } from "react-icons/fa";

let TeamContent = [
    {
        images: '01',
        title: 'Chimezie Chuta',
        designation: 'Snr. Blockchain Solutions Architect',
        socialNetwork: [
            {
                icon: <FaFacebookF />,
                url: 'https://web.facebook.com/chimezie.chuta'
            },
            {
                icon: <FaLinkedinIn />,
                url: 'https://www.linkedin.com/in/chimeziechuta/'
            },
            {
                icon: <FaTwitter />,
                url: 'https://twitter.com/mezie16'
            },
        ]
    },
    {
        images: '02',
        title: 'Layllen Sawyerr',
        designation: 'Head of Compliance',
        socialNetwork: [
            {
                icon: <FaFacebookF />,
                url: 'https://web.facebook.com/LayllenSawyerr/'
            },
            {
                icon: <FaLinkedinIn />,
                url: 'https://www.linkedin.com/in/layllen-sawyerr/'
            },  
            {
                icon: <FaTwitter />,
                url: 'https://twitter.com/layllensawyerr'
            },
        ]
    },
    {
        images: '03',
        title: 'Christian Roesch',
        designation: 'International Business Development',
        socialNetwork: [
            {
                icon: <FaFacebookF />,
                url: '#'
            },
            {
                icon: <FaLinkedinIn />,
                url: 'https://www.linkedin.com/in/christiaan-roesch-69a00321/'
            },
            {
                icon: <FaTwitter />,
                url: '#'
            },
        ]
    
    }
];


class Team extends Component{
    render(){
        const {column} = this.props;
        return(
            <React.Fragment>
                {TeamContent.map((value , i ) => (
                    <div className={`${column}`} key={i}>
                        <div className="team">
                            <div className="thumbnail">
                                <img src={`/assets/images/team/team-${value.images}.jpg`} alt="Blog Images"/>
                            </div>
                            <div className="content">
                                <h4 className="title">{value.title}</h4>
                                <p className="designation">{value.designation}</p>
                            </div>
                            <ul className="social-icon" >
                                {value.socialNetwork.map((social, index) =>
                                    <li key={index}><a href={`${social.url}`}>{social.icon}</a></li>
                                )}
                            </ul>
                        </div>
                    </div>
                ))}
            </React.Fragment>
        )
    }
}
export default Team;