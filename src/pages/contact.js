import React from "react"
import { useForm } from "react-hook-form"
import { Form, Row, Col, Container } from 'react-bootstrap'
import styled from 'styled-components'
import Layout from '../components/layout'
import { PageBanner } from '../components/containers'
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { BlackButton } from '../components/Typography'
import { cardAnimation } from "../components/Article"


const FancyInput = styled(Form.Control).attrs(props => ({
  className: "my-3",
}))`
  border: none;
  box-shadow: 0 2px 0 rgba(1, 177, 169, 0.5);
  transition: all 0.3s ease;
  &:focus {
    box-shadow: 0 5px 0 rgba(1, 177, 169, 0.8) !important;
    background: rgba(1, 177, 169, 0.1);
  }
`

const AnimatedForm = styled(Form)`
animation: 0.3s ${cardAnimation} ease;
`

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}

const Contact = () => {
  const { register, handleSubmit, watch, errors } = useForm()
  const onSubmit = data => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact_form", ...data }),
    })
      .then(() => alert("Form submitted"))
      .catch(error => console.log(error))
  }

  watch("email", "nane", "subject")

  return (
    <Layout pageTitle="Contact" pageDescription="Let's connect">
      <PageBanner title="Let's connect" subtitle="" icon={faEnvelope} />
      <Container>
        <Row className="justify-content-center h-100">
          <Col xs={12} md={6} className="text-center">
            <AnimatedForm onSubmit={handleSubmit(onSubmit)} data-netlify="true">
              <input
                ref={register}
                type="hidden"
                name="form-name"
                value="contact_form"
              />

              <FancyInput
                ref={register({ required: true })}
                name="name"
                placeholder={`Firstname Lastname`}
              />
              {errors.name && <span>This field is required</span>}
              <FancyInput
                ref={register({ required: true })}
                name="email"
                placeholder={`name@email.com`}
              />
              {errors.email && <span>This field is required</span>}
              <FancyInput
                ref={register({ required: true })}
                name="subject"
                placeholder={`e.g., "We've got a job for you!" #wishfulthinking`}
              />
              {errors.subject && <span>This field is required</span>}
              <FancyInput
                ref={register({ required: true })}
                name="text"
                as="textarea"
                placeholder="What's up?"
                className="w-100"
              />
              {errors.text && <span>This field is required</span>}
              <BlackButton
                className="btn-dark text-center mx-auto d-block"
                type="submit"
              >
                Submit
              </BlackButton>
            </AnimatedForm>
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}

export default Contact
