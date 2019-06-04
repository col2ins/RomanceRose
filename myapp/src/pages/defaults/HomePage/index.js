import React from 'react';

import Content from '../../../components/Content';

import AboutUs from './AboutUs/AboutUs';
import Services from '../../../components/Services/Services';
import OurSuccess from '../../../components/OurSuccess/OurSuccess';
import Showcases from '../../../components/Showcases/Showcases';
import PartyPreparing from '../../../components/PartyPreparing/PartyPreparing';
import Products from '../../../components/Products/Products';
import Testimonials from '../../../components/Testimonials/Testimonials';
import Blog from '../../../components/Blog/Blog';
import Partners from '../../../components/Partners/Partners';


class HomePage extends React.Component {
    buildContent() {
        let data = [];

        data.push(<AboutUs key="01" />)
        data.push(<Services key="02" />)
        data.push(<OurSuccess key="03" />)
        data.push(<Showcases key="04" />)
        data.push(<PartyPreparing key="05" />)
        data.push(<Products key="06" />)
        data.push(<Testimonials key="07" />)
        data.push(<Blog key="08" />)
        data.push(<Partners key="09" />)

        return data;
    }
    render() {
        return (
            <div className="app-home-page">
                <Content data={this.buildContent()} />
            </div>
        )
    }
}

export default HomePage;