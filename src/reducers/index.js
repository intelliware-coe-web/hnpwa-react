

const initialState = {
    searchParameters: "bananaMonkeyCarberator",
    news: [
      {
        url: 'www.example.com',
        user: 'tdurden',
        title: 'Tesla Asks Suppliers for Cash Back to Help Turn a Profit',
        timeAgo: '1 day',
        points: '42',
        numberOfComments: '22'
      },
      {
        url: 'www.example.com',
        user: 'jhabdas',
        title: 'BPG Image format ',
        timeAgo: '9 hours',
        points: '185',
        numberOfComments: '60'
      }
    ]
  };

  const rootReducer = (state = initialState, action) => state;

  export default rootReducer;