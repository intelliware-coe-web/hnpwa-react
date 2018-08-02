const initialState = {
    searchParameters: "bananaMonkeyCarberator",
    news: [
      {
        url: 'www.example.com',
        author: 'tdurden',
        title: 'Tesla Asks Suppliers for Cash Back to Help Turn a Profit',
        timeAgo: '1 day',
        points: '42',
        numberOfComments: '22'
      },
      {
        url: 'www.example.com',
        author: 'jhabdas',
        title: 'BPG Image format ',
        timeAgo: '9 hours',
        points: '185',
        numberOfComments: '60'
      }
    ]
  };

  export const selectNews = (news) => ({ type: 'NEWS_SELECTED', news });

  const rootReducer = (state = initialState, action) => {
    switch(action.type) {
      case 'NEWS_SELECTED':
        return Object.assign({}, state, { selectedNews: action.news});

      default: return state;
    }

  };

  export default rootReducer;
