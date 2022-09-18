import formData from 'form-data'
import Mailgun from 'mailgun.js'

export default (context, inject) => {
  const config = {
    username: 'api',
    key: context.env.mailgunKey,
  }

  const mailgun = new Mailgun(formData)
  const mgClient = mailgun.client(config)
  inject('mgClient', mgClient)
}