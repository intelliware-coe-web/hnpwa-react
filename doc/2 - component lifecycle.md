## Week 2 - Component Lifecycle

Full documentation at https://reactjs.org/docs/react-component.html

![Lifecycle diagram](https://raw.githubusercontent.com/intelliware-coe-web/hnpwa-react/master/doc/2%20-%20component%20lifecycle.png)
### Mounting 

These methods are called in the following order when an instance of a component is being created and inserted into the DOM:

- **constructor()**
  - Initializing local state by assigning an object to this.state.
  - Binding event handler methods to an instance.
  - **Avoid copying props into state! This is a common mistake.**
- **render()**
  - Only required method in a class component.
  - Does not modify component state, it returns the same result each time it’s invoked.
  - Does not directly interact with the browser.
  - Should look at this.props and this.state and return a React element (via JSX).
- **componentDidMount()**
  - Invoked immediately after a component is mounted (inserted into the DOM).
  - This is a good place to instantiate the network request.
  - This method is a good place to set up any subscriptions.

### Updating

An update can be caused by changes to props or state. These methods are called in the following order when a component is being re-rendered:

- **render()**
- **componentDidUpdate()**
  -  Invoked immediately after updating occurs.
  - **This method is not called for the initial render**
  - Good opportunity to operate on the DOM.
  - Also a good place to do network requests.
  - **Don't forget to compare new props with previous props, especially if you're making network requests.**
- **UNSAFE_componentWillReceiveProps()**
  - Legacy function, pretty equivalent to *componentDidUpdate()*.

### Unmounting

This method is called when a component is being removed from the DOM:

- **componentWillUnmount()**
  - Perform any necessary cleanup (timers, canceling network requests, or cleaning up any subscriptions...).
