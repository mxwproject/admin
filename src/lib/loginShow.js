import axios from 'axios';
import cookie from 'js-cookie';

export default () => {
    return new Promise((resolve, reject) => {
        if(!cookie.get('adminName')){
            return reject('-1');
        } else {
            return resolve('1');
        }
    });
};