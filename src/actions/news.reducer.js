const initialState = {
    selectedItem: null,
    list: [
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

  // Action Types
  export const NEWS_ITEM_SELECTED = 'NEWS_ITEM_SELECTED';

  // Action Creators
  export const selectNewsItem = (newsItem) => ({ type: NEWS_ITEM_SELECTED, newsItem });

  // Reducer
  const newsReducer = (state = initialState, action) => {

    switch(action.type) {
      
      case NEWS_ITEM_SELECTED:
        return Object.assign({}, state, { selectedItem: action.newsItem});

      default: return state;

    }

  };

  export default newsReducer;
