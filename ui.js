async function onWrite ({ data, api, prompts }) {
    const vueData={};
    for(const prompt of prompts ){
        vueData[prompt.id]=await api.getAnswer(prompt.id);
    }

    api.setData('vue',vueData);
}

module.exports = api => {
    api.describeConfig({
        id: 'com.vue.netsuite',
        name: 'Netsuite Vue Plugin Configuration',
        description: 'Application setup',
        files: {
            vue: {
                js: ['vue.config.js']
            }
        },
        onRead: ({ data, cwd }) => ({
            prompts: [
            {
                name: 'netsuiteFilename',
                message: 'Filename',
                description: 'Output filename to produce.  Do not include an extension',
                type: 'input',
                value: data.vue.netsuiteFilename,
            },
            {
                name: 'suitescriptFolderPath',
                message: 'Suitescript folder path',
                description: 'Path to suitescript project folder',
                type: 'input',
                value: data.vue.suitescriptFolderPath,
            },
            {
                name: 'useAxios',
                message: 'Use Axios',
                description: 'Use Axios to connect to services',
                type: 'confirm',
                value: data.vue.useAxios
            },
            {
                name: 'netsuiteAccountNumber',
                message: 'Netsuite Account Number',
                type: 'input',
                when: answers => answers.useAxios,
                value: data.vue.netsuiteAccountNumber
            }

            ]
        }),
        onWrite
    })
}

