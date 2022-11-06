
export const localStorageManager = {
    
    getDataByKey: (key) => window.localStorage.getItem(key),

    setData: (key, value) => {
        window.localStorage.setItem(key, value);
    },

    setDatasInObj: (obj) => {
        Object.keys(obj).forEach((item) => {
            window.localStorage(item, obj[item]);
        })
    }
}