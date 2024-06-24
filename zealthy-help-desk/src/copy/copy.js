const copy = {
  header: {
    home: {
      text: 'Home',
      link: '/',
    },
    help: {
      text: 'Help',
      link: '/create-a-ticket',
    },
    admin: {
      text: 'Admin',
      link: '/admin-panel',
    },
  },
  home: {
    header: 'Healthcare the way it should be.',
    description: "Needing some help? We're just one click away.",
    buttonText: 'Get Help',
  },
  createATicket: {
    header: 'Help Desk',
    description: 'Submit your ticket below.',
    buttonText: 'Submit',
    form: [
      {
        label: 'Name',
        inputVariant: 'smallText',
        inputType: 'text',
        ticketValue: 'cust_name',
        placeholder: 'Person Doe',
      },
      {
        label: 'Email',
        inputVariant: 'smallText',
        inputType: 'email',
        ticketValue: 'cust_email',
        placeholder: 'person@email.com',
      },
      {
        label: 'Issue Topic',
        inputVariant: 'smallText',
        inputType: 'text',
        ticketValue: 'subject_line',
        placeholder: 'Issue with Pharmacy Portal',
      },
      {
        label: 'Tell us about the issue here:',
        inputVariant: 'textField',
        inputType: 'textarea',
        ticketValue: 'issue',
        placeholder: '',
      },
    ],
  },
  adminPanel: {
    titles: ['Name', 'Subject', 'Issue', 'Status', 'Date', 'Email Customer'],
  },
  emailPortal: {
    header: '',
    description: 'Email the customer using the portal below.',
    buttonText: 'Send Email',
    form: [
      {
        label: 'Subject Line:',
        inputVariant: 'smallText',
        inputType: 'text',
        ticketValue: 'subject_line',
        placeholder: 'An Update About Your Help Desk Ticket',
      },
      {
        label: 'Email Body:',
        inputVariant: 'textField',
        inputType: 'textarea',
        ticketValue: 'email_body',
        placeholder: '',
      },
    ],
  },
}

export default copy
