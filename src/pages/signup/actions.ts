import { UserApi } from '../../services/userapi';
import { FluxConstants } from './constants';

import { User } from '../../models/user';
import * as Redux from 'redux';

export default class Actions {

    static sendRequest(data: User, outAction: Redux.Action) {

        // User registration
        UserApi.SignUp(
            data,
            outAction
        );
    }
};

