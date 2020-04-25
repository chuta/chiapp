import React ,{ Component }from "react";
import { FiCast , FiLayers , FiUsers } from "react-icons/fi";

const ServiceList = [
    {
        icon: <FiCast />,
        title: 'Run your own Bitcoin node',
        description: 'Customize and build your very own Solar Powered Raspberry Pi4 running RaspiBlitz OS, Bitcoin/ Lightning Node. Your own bank with the ability to accept cryptocurrency at your business with the payment processor!'
    },
    {
        icon: <FiLayers />,
        title: '3D Design & Printing',
        description: 'From Idea to Product! When it comes to having an idea, the hardest part is bring that idea to life. BlockSpace Technologies makes that process as easy as possible by working with you the entire way! From Idea to Prototype, we can do it all.'
    },
    {
        icon: <FiUsers />,
        title: 'PCB Electronic Board Printing',
        description: 'We Design, Print and assemble large, high-density Printed Circuit Boards faster than any third-party vendor and for less. Send us your Gerber files from any PCB Design tool and we will do the rest.'
    },
    
]


class ServiceThree extends Component{
    render(){
        const {column } = this.props;
        const ServiceContent = ServiceList.slice(0 , this.props.item);
        
        return(
            <React.Fragment>
                <div className="row">
                    {ServiceContent.map( (val , i) => (
                        <div className={`${column}`} key={i}>
                            <a href="/service-details">
                                <div className="service service__style--2">
                                    <div className="icon">
                                        {val.icon}
                                    </div>
                                    <div className="content">
                                        <h3 className="title">{val.title}</h3>
                                        <p>{val.description}</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                    ))}
                </div>
            </React.Fragment>
        )
    }
}
export default ServiceThree;
