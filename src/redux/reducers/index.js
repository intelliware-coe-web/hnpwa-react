// this is a mock reducer so that we have a mock initial state
export default () => ({
  newsList: [{
    title: "Some News 1",
    author: "Xufeng",
    createdDate: "2018-06-01",
  }, {
    title: "Some News 2",
    author: "Peter",
    createdDate: "2018-07-01",
    responses: ["Great article!", "Very interesting!"]
  }, {
    title: "Some News 3",
    author: "Cesar",
    createdDate: "2018-07-20",
    responses: ["Great article!"]
  }],
  selectedNewsIndex: 2,
});
