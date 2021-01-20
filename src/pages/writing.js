import React from "react";
import { Row, Col } from "react-bootstrap";
import Layout from "../components/layout";
import Article from "../components/Article";
import { PageBanner, FancyContainer } from "../components/containers";
import { faPencilAlt } from "@fortawesome/free-solid-svg-icons";

const data = [
    {
        name: "Confused about hydration? Don't sweat it.",
        url: "https://beginnertriathlete.com/cms/article-detail.asp?articleid=2986",
        imageUrl: "",
        preview: "At first glance, hydration seems simple. We’ve all heard the same stale quips a million times: “Drink before you’re thirsty” “Pickle juice prevents cramps” “Avoid diuretics like excess caffeine and alcohol” “If your pee is clear, no need to fear” “If your pee is dark, urine trouble” Easy, right?",
        date: "September 24, 2017",
    },
    {
        name: "Bavaria's Viehschied: When the cows come home",
        url: "https://www.gonomad.com/108572-bavarias-viehscheid-when-the-cows-come-home",
        imageUrl: "",
        preview: "Bavaria has all the reason and means to abandon tradition, and yet tradition persists, fending off gentrification and 21st-century luxury.",
        date: "September 24, 2017",
    },
    {
        name: "Easter and Dandelions",
        url: "https://thetrek.co/appalachian-trail/easter-and-dandelions/",
        imageUrl: "",
        preview: "Dandelion came up to see me this weekend. Well, she actually wasn’t Dandelion until much later in this story. So for now I’ll use her off-trail name, her real name—Laura.",
        date: "September 24, 2017",
    },
    {
        name: "Fresh Ground and the Leapfrog Café",
        url: "https://thetrek.co/appalachian-trail/fresh-ground-and-the-leapfrog-cafe/",
        imageUrl: "",
        preview: "If you ever thru-hike the Appalachian Trail—and if you are approached by a stout man in his early 50s with a neatly trimmed salt-and-pepper beard—and if he asks you in a lively Southern twang, “Y’all want some hot breakfast? All you can eat, all free”—then take ease, friend.",
        date: "September 24, 2017",
    }
]

export default function Writing() {
    return (
      <Layout>
        <PageBanner
          title="Writing"
          subtitle="Perhaps not relevant to web dev but I like to write so these are here."
          icon={faPencilAlt}
        />
        <FancyContainer>
          <Row>
            {/* <Col xs={12} md={2}>
              <Scrollspy items={data} currentClassName="is-current">
                {data.map((article, index) => (
                  <SpyItem className="py-2" key={index}>
                    <SpyLink href={`#section-${index}`}>{article.name}</SpyLink>
                  </SpyItem>
                ))}
              </Scrollspy>
            </Col> */}
            <Col xs={12}>
              {data.map((article, index) => (
                <Article index={index} article={article} />
              ))}
            </Col>
          </Row>
        </FancyContainer>
      </Layout>
    )
}
