const siteUrl = "http://3.19.45.33:7180/api/v1/"; //staging
// const siteUrl = "http://192.168.1.107:7180/api/v1/";  local afzal


export default function APIRequest(variables, endpoint, apiMethod, token, id) {
    var init = (apiMethod == "GET" ? {
        method: "GET",
        headers: {
            'Content-Type': "application/json",
            // 'Authorization': token ? token : '',
            "Authorization": "Basic YXV0dG86YXV0dG9AMTIz",
            "access_token": token?`bearer ${token}`:""
        }
    } :
        {
            method: apiMethod,
            headers: {
                'Content-Type': "application/json",
                // 'Authorization': token ? token : ''
                "Authorization": "Basic YXV0dG86YXV0dG9AMTIz",
                "access_token": token?`bearer ${token}`:""
            },
            body: JSON.stringify(variables)
        })
    return fetch(siteUrl + endpoint, init)
        .then(res => res.json()
            .then(data => {
                var apiData = {
                    status: res.status,
                    data: data
                }
                console.log("ApiData=====>>>>", apiData)
                return apiData;
            }))
        .catch(err => {
            console.log("err" + JSON.stringify(err))
            var apiData = {
                status: 900,
                data: "Please check your internet connection."
            }
            return apiData
        });
};
