const copy = {
    header: {
        home: {
            text: 'Home',
            link: '/',
        },
        help: {
            text: 'Submit a Ticket',
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
                inputVariant: 'nameField',
                inputType: 'text',
                placeholder: 'Person Doe',
            },
            {
                label: 'Email',
                inputVariant: 'emailField',
                inputType: 'email',
                placeholder: 'person@email.com',
            },
            {
                label: 'Tell us about the issue here:',
                inputVariant: 'textField',
                inputType: 'textarea',
                placeholder: '',
            },
        ],
    },
    adminPanel: {
        header: '',
        description: '',
        buttonText: '',
    },
}

export default copy
