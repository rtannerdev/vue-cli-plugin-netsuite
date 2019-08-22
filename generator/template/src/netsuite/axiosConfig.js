import axios from 'axios';

function axiosConfig(){
    if (process.env.NODE_ENV !== 'production') {
        //const { NSEMAIL, NSPASSWORD, NSACCOUNT, NSROLE } = process.env;
        const NSEMAIL = process.env.VUE_APP_NSEMAIL;
        const NSPASSWORD = process.env.VUE_APP_NSPASSWORD;
        const NSACCOUNT = process.env.VUE_APP_NSACCOUNT;
        const NSROLE = process.env.VUE_APP_NSROLE;

        axios.defaults.headers = {
            'Content-Type': 'application/json;charset=utf-8',
            'User-Agent-x': 'SuiteScript-Call',
            Authorization:
                'NLAuth nlauth_account=' +
                NSACCOUNT +
                ', nlauth_email=' +
                NSEMAIL +
                ', nlauth_signature=' +
                NSPASSWORD +
                ', nlauth_role=' +
                NSROLE,
        };
    }
}

export default axiosConfig;