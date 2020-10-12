import React from "react"
import Scrollspy from "react-scrollspy"
import { Card, Row, Col } from "react-bootstrap"

const data = [
    {
        name: "Confused about hydration? Don't sweat it.",
        url: "https://beginnertriathlete.com/cms/article-detail.asp?articleid=2986",
        imageUrl: "",
        preview: "At first glance, hydration seems simple. We’ve all heard the same stale quips a million times: “Drink before you’re thirsty” “Pickle juice prevents cramps” “Avoid diuretics like excess caffeine and alcohol” “If your pee is clear, no need to fear” “If your pee is dark, urine trouble” Easy, right?",
    },
    {
        name: "Bavaria's Viehschied: When the cows come home",
        url: "https://www.gonomad.com/108572-bavarias-viehscheid-when-the-cows-come-home",
        imageUrl: "",
        preview: "Bavaria has all the reason and means to abandon tradition, and yet tradition persists, fending off gentrification and 21st-century luxury."
    },
    {
        name: "Easter and Dandelions",
        url: "https://thetrek.co/appalachian-trail/easter-and-dandelions/",
        imageUrl: "",
        preview: "Dandelion came up to see me this weekend. Well, she actually wasn’t Dandelion until much later in this story. So for now I’ll use her off-trail name, her real name—Laura."
    },
    {
        name: "Fresh Ground and the Leapfrog Café",
        url: "https://thetrek.co/appalachian-trail/fresh-ground-and-the-leapfrog-cafe/",
        imageUrl: "",
        preview: "If you ever thru-hike the Appalachian Trail—and if you are approached by a stout man in his early 50s with a neatly trimmed salt-and-pepper beard—and if he asks you in a lively Southern twang, “Y’all want some hot breakfast? All you can eat, all free”—then take ease, friend."
    }
]

export default function Writing() {
    return (
        <div>
            <Row className="justify-content-center">
                <Col md={2} sm={8}>
                    <Scrollspy
                        items={data}
                        currentClassName="is-current"
                    >
                        {data.map((article, index) => (
                            <li>
                                <a href={`#section-${index}`}>{article.name}</a>
                            </li>
                        ))}
                    </Scrollspy>
                </Col>
                <Col md={8} sm={8}>
                    {data.map((article, index) => (
                        <section id={`section-${index}`}>
                            <Card className="m-5 border border-bottom border-right-0 border-top-0 border-left-0">
                                <Card.Body>
                                    <Card.Title>
                                        {article.name}
                                    </Card.Title>
                                    <Card.Text>
                                        {article.preview}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </section>
                    ))}
                </Col>
            </Row>
        </div>
    )
}
