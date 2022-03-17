export const Endpoints = {
    user: {
        register: 'user/register',
        login: 'user/login'
    },
    tips: {
        create: 'tips/create',
        getId: 'tips/:id',
        getAll: 'tips/',
        update: 'tips/',
        delete: 'tips/',
        getMine: 'tips/mine'
    },
    mile: {
        create: 'mile/create',
        getAll: 'mile/',
        getId: 'mile/:id',
        update: 'mile/',
        delete: 'mile/',
        getMine: 'mile/mine'
    }
}

export const APIURL = 'http://localhost:3000/'
