import { icon } from '@fortawesome/fontawesome-svg-core'
import { title } from 'process'
import React from 'react'

const OurClient = () => {

    const ourClient = [
        {
            id: 1,
            // icon = <FontAwesomeIcon icon={faRocket} />,
            title: "Mobile Development",
            subTitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
            content: <li>
                <ul>Native & Cross Platform Development</ul>
                <ul>API Integration for Additional Functionality</ul>
                <ul>Optimal Perforamnce & High Level Security</ul>
            </li>
        },
        {
            id: 2,
            // icon = <FontAwesomeIcon icon={faRocket} />,
            title: "Web Development",
            subTitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
            content: <li>
                <ul>Native & Cross Platform Development</ul>
                <ul>API Integration for Additional Functionality</ul>
                <ul>Optimal Perforamnce & High Level Security</ul>
            </li>
        },
        {
            id: 3,
            // icon = <FontAwesomeIcon icon={faRocket} />,
            title: "Software Development",
            subTitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
            content: <li>
                <ul>Native & Cross Platform Development</ul>
                <ul>API Integration for Additional Functionality</ul>
                <ul>Optimal Perforamnce & High Level Security</ul>
            </li>
        },
        {
            id: 3,
            // icon = <FontAwesomeIcon icon={faRocket} />,
            title: "Digital Product Design",
            subTitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
            content: <li>
                <ul>Native & Cross Platform Development</ul>
                <ul>API Integration for Additional Functionality</ul>
                <ul>Optimal Perforamnce & High Level Security</ul>
            </li>
        }
    ]

    return (
        <div id='ourClientWrapper'>
            <div id='ourClientContainer'>
                <div id='headerContainer'>
                    <h1>What We Do Best</h1>
                    <h4>Delivering excellence across every stage of your digital transformation</h4>
                </div>
                <div id='serviceCardContainer'>
                    <div id='cardContent'>
                        {ourClient.map((item) => {
                            return (
                                <div id='card'>
                                    <h3>{item.title}</h3>
                                    <p>{item.subTitle}</p>
                                    <ul>
                                        {item.content}
                                    </ul>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>

        </div>
    )
}

export default OurClient
