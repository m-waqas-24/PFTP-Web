import React, { useState, useEffect } from 'react';
import Datas from '../data/course/filter.json';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Styles } from "./styles/courseFilter.js";

import "../helper/helper";
import axios from 'axios';

function CourseFilter() {
    useEffect(() => {
        const getData = async () => {
            const domains = await axios.get(global.config.URL.onsite_api.public + 'domain-courses');
            setDomains(domains.data.domains);
            filter();
        }
        getData();
    }, []);

    const [domains, setDomains] = useState([])

    const [next, setNext] = useState(1);
    const handleMoreDomain = (DomianPerRow) => {
        setNext(next + DomianPerRow);
    };

    function filter() {

        const buttons = document.querySelector(".filter-btn-list").children;
        const items = document.querySelector(".filter-items").children;
        for (let i = 0; i < buttons.length; i++) {
            buttons[i].addEventListener("click", function () {

                for (let j = 0; j < buttons.length; j++) {
                    buttons[j].classList.remove("active");
                }

                this.classList.add("active");
                const target = this.getAttribute("data-target");

                for (let k = 0; k < items.length; k++) {
                    items[k].style.display = "none";

                    if (items[k].getAttribute("data-id") === target) {
                        items[k].style.display = "block";
                    }

                    if (target === "*") {
                        setNext(1);
                        items[k].style.display = "block";
                    } else {
                        setNext(items.length);
                    }
                }
            })
        }
    }
    return (
        <Styles>
            {/* Course Area */}
            <section className="course-filter">
                <Container>
                    <Row>
                        <Col md="12">
                            <div className="sec-title text-center">
                                <h4>{Datas.secTitle}</h4>
                            </div>
                        </Col>
                        <Col md="12">
                            <div className="filter-btns text-center">
                                <ul className="filter-btn-list list-unstyled list inline">
                                    <li data-target="*" className="active list-inline-item">Onsite Courses</li>
                                    {/* {domains.map((domain, i) => (
                                        <li data-target={domain.id} key={i} className="list-inline-item">{domain.name}</li>
                                    ))} */}

                                </ul>
                            </div>
                            <Row className="filter-items">
                                {
                                    domains.slice(0, next)?.map((domain, i) => (
                                        domain.courses.map((course, j) => (
                                            <Col lg="4" md="6" key={j} data-id={domain.id}>
                                                <Link to={process.env.PUBLIC_URL + 'onsite-course-detail/' + course.slug}>
                                                    <div className="course-item">

                                                        <div className="course-content">
                                                            <img src={global.config.URL.onsite_img.public + course.image} alt="" />
                                                            <h6 className="heading">{course.name}</h6>
                                                            <p className="desc">{course.description}</p>
                                                            <div className="course-face d-flex justify-content-between">
                                                                <div className="duration">
                                                                    <p><i className="las la-clock"></i>120</p>
                                                                </div>
                                                                <div className="rating">
                                                                    <ul className="list-unstyled list-inline">
                                                                        <li className="list-inline-item"><i className="las la-star"></i></li>
                                                                        <li className="list-inline-item"><i className="las la-star"></i></li>
                                                                        <li className="list-inline-item"><i className="las la-star"></i></li>
                                                                        <li className="list-inline-item"><i className="las la-star"></i></li>
                                                                        <li className="list-inline-item"><i className="las la-star-half-alt"></i>
                                                                        </li>
                                                                        <li className="list-inline-item">(4.5)</li>
                                                                    </ul>
                                                                </div>
                                                                <div className="student">
                                                                    <p><i className="las la-chair"></i>60</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </Col>
                                        ))
                                    ))
                                }


                                {next < domains?.length && (
                                    <Col lg="12" md="12">
                                        <Button
                                            className="mt-4 load-more"
                                            onClick={() => handleMoreDomain(next)}
                                        >
                                            Load more
                                        </Button>
                                    </Col>
                                )}

                            </Row>
                        </Col>
                        {/* <Col md="12" className="text-center">
                            <div className="viewall-btn">
                                <Link to={process.env.PUBLIC_URL + "/course-grid"}>View All Courses</Link>
                            </div>
                        </Col> */}
                    </Row>
                </Container>
            </section>
        </Styles>
    )
}

export default CourseFilter
