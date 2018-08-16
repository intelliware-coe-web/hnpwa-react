export const simpleFetch = (url, onSuccess, onError) => fetch(url)
                                                            .then(
                                                                successResponse => successResponse.json(),
                                                                errorResponse => errorResponse.json()
                                                            );

export const UserProfileAPI = {

    byId: userId => simpleFetch(`https://hacker-news.firebaseio.com/v0/user/${userId}.json`)
    
};