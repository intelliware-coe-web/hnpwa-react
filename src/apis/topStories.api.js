export const simpleFetch = (url) => fetch(url)
                                                            .then(
                                                                successResponse => successResponse.json(),
                                                                errorResponse => errorResponse.json()
                                                            );

export const TopStoriesAPI = {

    topFive: () => simpleFetch(`https://hacker-news.firebaseio.com/v0/topstories.json`)
    
};