import React, { useState } from "react"
import { useForm } from "react-hook-form"
import styled from "styled-components"
import Layout from "../components/layout"
import { PageBanner, PageContainer } from "../components/containers"
import { BlackButton, LabelText } from "../components/Typography"
import { cardAnimation } from "../utils/animations"

const FancyInput = styled.input`
  margin: ${props => props.theme.spacing[4]} auto;
  border: none;
  border: 1px solid ${props => props.theme.colors.primaryTint};
  box-shadow: 0px 0px 1px 1px ${props => props.theme.colors.primary};
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
  box-shadow: 0px 0px 1px 1px ${props => props.theme.colors.primary};
  transition: all 0.3s ease;
  width: 100%;
  accent-color: none;
  font-family: 'Inter', sans-serif;
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

const ResponseBox = styled.div`
  display: flex;
  flex-direction: column;
  max-width: calc(100% - 6rem);
  margin: 1rem 3rem;
  padding: 2rem;
  align-items: center;
  text-align: center;
  justify-content: center;
  border-radius: ${props => props.theme.borderRadii[2]};
`

const SuccessBox = styled(ResponseBox)`
  background-color: ${props => props.theme.colors.primaryTint};
`

const ErrorBox = styled(ResponseBox)`
  background-color: ${props => props.theme.colors.errorTint};
`

const ErrorText = styled(LabelText)`
  color: ${props => props.theme.colors.error};
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
  name: string
  email: string
  subject: string
  message: string
}

interface ISubmitResult {
  success: boolean
  error: boolean
  message: string | null
}

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const [submitResult, setSubmitResult] = useState<ISubmitResult>({
    success: false,
    error: false,
    message: null,
  })
  const { register, handleSubmit, formState } = useForm<IContactForm>()
  const onSubmit = async (data: IContactForm) => {
    setLoading(true);
    try {
      const result = await fetch("/.netlify/functions/hello", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })
      if (result.status === 200) {
        setSubmitResult({
          success: true,
          error: false,
          message: "Successfully submitted form.",
        })
      }
    } catch (err) {
      setSubmitResult({
        message: "Error submitting form. Please try again",
        success: false,
        error: true,
      })
    } finally {
      setIsSubmitted(true)
      setLoading(false)
    }
  }

  return (
    <Layout pageTitle="Contact" pageDescription="Let's connect">
      <PageBanner title="Let's connect" subtitle="" />
      <PageContainer>
        {isSubmitted ? (
          <>
            {submitResult.success && (
              <SuccessBox>
                <LabelText>{submitResult.message}</LabelText>
              </SuccessBox>
            )}
            {submitResult.error && (
              <ErrorBox>
                <ErrorText>{submitResult.message}</ErrorText>
              </ErrorBox>
            )}
          </>
        ) : (
            <AnimatedForm onSubmit={handleSubmit(onSubmit)} data-netlify="true">
            <FancyInput
              {...register('name', { required: true })}
              name="name"
              placeholder={`Your Name`}
            />
            {formState.errors.name && <span>This field is required</span>}
            <FancyInput
              {...register('email', { required: true })}
              name="email"
              placeholder={`Your Email Address`}
            />
            {formState.errors.email && <span>This field is required</span>}
            <FancyInput
              {...register('subject', { required: true })}
              name="subject"
              placeholder={`Subject`}
            />
            {formState.errors.subject && <span>This field is required</span>}
            <FancyTextArea
              {...register('message', { required: true })}
              name="message"
              placeholder="Message"
            />
            {formState.errors.message && <span>This field is required</span>}
            <BlackButton type="submit">Submit</BlackButton>
          </AnimatedForm>
          )}
      </PageContainer>
    </Layout>
  )
}

export default Contact
