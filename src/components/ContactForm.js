import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames/bind'
import { Form, Field } from 'react-final-form'
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome'
import styles from './ContactForm.module.css'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'

const cx = classnames.bind(styles)

const ContactForm = ({ onSubmit }) => {
  return (
    <Form onSubmit={onSubmit}>
      {({ handleSubmit, ...props }) => (
        <form onSubmit={handleSubmit} className={cx('form')}>
          <Field name="name" component="input" placeholder="Name" className={cx('field')} />
          <Field name="email" component="input" placeholder="E-mail" className={cx('field')} />
          <Field name="message" component="textarea" placeholder="Message" className={cx('field')} />
          <button type="submit" className={cx('submit')}>Submit <Icon icon={faPaperPlane} /></button>
        </form>
      )}
    </Form>
  )
}

ContactForm.propTypes = {
  onSubmit: PropTypes.func
}

export default ContactForm
