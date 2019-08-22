module.exports = [
    {
        name: 'filename',
        message: 'Filename',
        description: 'Output filename to produce.  Do not include an extension',
        type: 'input',
    },
    {
        name: 'suitescriptFolderPath',
        message: 'Suitescript folder path',
        description: 'Path to SuiteScript project folder.  Should be absolute path.',
        type: 'input',
    },
    {
        name: 'useAxios',
        message: 'Use Axios',
        description: 'Use Axios to connect to services',
        type: 'confirm',
        default: true
    },
    {
        name: 'netsuiteAccountNumber',
        message: 'Netsuite Account Number',
        type: 'input',
        when: answers => answers.useAxios
    }
]