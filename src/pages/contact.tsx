import React, { useState } from "react"
import { useForm } from "react-hook-form"
import styled from 'styled-components'
import Layout from '../components/layout'
import { PageBanner, PageContainer } from '../components/containers'
import { BlackButton } from '../components/Typography'
import { cardAnimation } from "../utils/animations";


const FancyInput = styled.input`
  margin: ${props => props.theme.spacing[4]} auto;
  border: none;
  border: 1px solid ${props => props.theme.colors.primaryTint};
  box-shadow: 1px 3px 0 1px ${props => props.theme.colors.primary};
  transition: all 0.3s ease;
  width: 100%;
  accent-color: none;
  font-size: ${props => props.theme.fontSizes.sm};
  padding: ${props => props.theme.spacing[2]};
  border-radius: ${props => props.theme.borderRadii[1]};
  outline: none;
  background-color: ${props => props.theme.colors.light};
  &:focus {
    box-shadow: 2px 3px 0 2px ${props => props.theme.colors.primary};
    background-color: ${props => props.theme.colors.lightTint};
  }
`

const FancyTextArea = styled.textarea`
  margin: ${props => props.theme.spacing[4]} auto;
  border: 1px solid ${props => props.theme.colors.primaryTint};
  box-shadow: 1px 3px 0 1px ${props => props.theme.colors.primary};
  transition: all 0.3s ease;
  width: 100%;
  accent-color: none;
  font-size: ${props => props.theme.fontSizes.sm};
  padding: ${props => props.theme.spacing[2]};
  border-radius: ${props => props.theme.borderRadii[1]};
  outline: none;
  background-color: ${props => props.theme.colors.light};
  &:focus {
    box-shadow: 2px 3px 0 2px ${props => props.theme.colors.primary};
    background-color: ${props => props.theme.colors.lightTint};
  }
`

const AnimatedForm = styled.form`
  animation: 0.3s ${cardAnimation} ease;
  display: flex;
  flex-direction: column;
  max-width: 500px;
  width: 100%;
  margin: auto;
  align-items: center;
`

interface IContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface ISubmitResult {
  success: boolean;
  error: boolean;
  message: string | null;
}

const Contact = () => {
  const [submitResult, setSubmitResult] = useState<ISubmitResult>({
    success: false,
    error: false,
    message: null,
  });
  const { register, handleSubmit, watch, errors, setError } = useForm()
  const onSubmit = async (data: IContactForm) => {
    try {
      const result = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      setSubmitResult({
        success: true,
        error: false,
        message: "Successfully submitted form."
      })

    } catch(err){
      setSubmitResult({
        message: "Error submitting form. Please try again",
        success: false,
        error: true,
      })
    }
  }

  return (
    <Layout pageTitle="Contact" pageDescription="Let's connect">
      <PageBanner title="Let's connect" subtitle="" />
      <PageContainer>
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
                placeholder={`Name`}
              />
              {errors.name && <span>This field is required</span>}
              <FancyInput
                ref={register({ required: true })}
                name="email"
                placeholder={`Email Address`}
              />
              {errors.email && <span>This field is required</span>}
              <FancyInput
                ref={register({ required: true })}
                name="subject"
                placeholder={`Subject`}
              />
              {errors.subject && <span>This field is required</span>}
              <FancyInput
                ref={register({ required: true })}
                name="message"
                placeholder="Message"
              />
              {errors.text && <span>This field is required</span>}
              <BlackButton type="submit">
                Submit
              </BlackButton>
            </AnimatedForm>
      </PageContainer>
    </Layout>
  )
}

export default Contact
