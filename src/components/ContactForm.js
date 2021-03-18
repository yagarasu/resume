import React, { useState } from 'react'
import classnames from 'classnames/bind'
import useLocalStorage from 'react-use-localstorage'
import { Form, Field } from 'react-final-form'
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome'
import { faPaperPlane, faSpinner, faCheck, faExclamationTriangle } from '@fortawesome/free-solid-svg-icons'
import styles from './ContactForm.module.css'
import useService from '../services/useService'

const cx = classnames.bind(styles)

const validate = ({ name, email, message }) => {
  const errors = {}

  if (!name) {
    errors.name = 'Your name is required'
  }
  if (!email) {
    errors.email = 'Your email is required'
  } else if (!/[a-z0-9._-]+@[a-z0-9._-]+/.test(email)) {
    errors.email = 'Your email looks odd'
  }
  if (!message) {
    errors.message = 'Please write a message'
  } else if (message.length < 10) {
    errors.message = 'Your message is a bit short.'
  }

  return errors
}

const ErrorMessage = ({ meta }) =>
  (meta.error && meta.touched && <span className={cx('validation-error')}><Icon icon={faExclamationTriangle} /> {meta.error}</span>) || null

const STATE_INIT = 'STATE_INIT'
const STATE_BUSY = 'STATE_BUSY'
const STATE_DONE = 'STATE_DONE'
const STATE_ERROR = 'STATE_ERROR'
const STATE_DEBOUNCE = 'STATE_DEBOUNCE'

const ContactForm = () => {
  const [contactSent, setContactSent] = useLocalStorage("contact", null)
  const [state, setState] = useState(STATE_INIT)
  const { ContactService } = useService(['ContactService'])
  const hndSubmit = async values => {
    setState(STATE_BUSY)
    try {
      if ((Date.now() - contactSent) < 1000 * 60 * 60 * 8) {
        setState(STATE_DEBOUNCE)
        return
      }
      await ContactService.sendContactForm(values)
      setState(STATE_DONE)
      setContactSent(Date.now())
    } catch (e) {
      setState(STATE_ERROR)
      console.log('There was an error when submitting the contact form', e)
    }
  }
  const icon = state === STATE_BUSY ? faSpinner : state === STATE_DONE ? faCheck : faPaperPlane
  return (
    <Form onSubmit={hndSubmit} validate={validate}>
      {({ handleSubmit, ...props }) => (
        <form onSubmit={handleSubmit} className={cx('form', state)} id="contact">
          {state === STATE_DEBOUNCE ? (
            <div className={cx('debounce')}>
              <p><Icon icon={faExclamationTriangle} /> You already sent the contact form before. Give me a couple of hours to catch up on my e-mail and I'll reply as soon as possible.</p>
            </div>
          ) : state === STATE_DONE ? (
            <div className={cx('done')}>
              <p>Your message has been sent. Thank you for your interest.</p>
            </div>
          ) : (
            <>
              {state === STATE_ERROR && (
                <div className={cx('error')}>
                  <p><Icon icon={faExclamationTriangle} /> There was a problem sending the message. Please try again.</p>
                </div>
              )}
              <Field name="name">
                {props => (
                  <>
                  <input placeholder="Name" className={cx('field')} disabled={state === STATE_BUSY} {...props.input} />
                  <ErrorMessage meta={props.meta} />
                  </>
                )}
              </Field>
              <Field name="email">
                {props => (
                  <>
                  <input placeholder="E-mail" className={cx('field')} disabled={state === STATE_BUSY} {...props.input} />
                  <ErrorMessage meta={props.meta} />
                  </>
                )}
              </Field>
              <Field name="message">
                {props => (
                  <>
                  <textarea placeholder="Message" className={cx('field')} disabled={state === STATE_BUSY} {...props.input} />
                  <ErrorMessage meta={props.meta} />
                  </>
                )}
              </Field>
            </>
          )}
          <button type="submit" className={cx('submit')} disabled={[STATE_BUSY, STATE_DONE].includes(state)}>
            Submit <Icon icon={icon} pulse={state === STATE_BUSY} />
          </button>
        </form>
      )}
    </Form>
  )
}

export default ContactForm
