# react-customizable-modal
Customizable Modal component for React

![Desktop](/screenshots/desktop.png)
![Mobile](/screenshots/mobile.png)

## Features
- Fancy styled modal
- Mobile Support

## Usage

1. Install via NPM

```bash
$ npm install --save-dev react-customizable-modal
```

2. Load to browser(need web bundler, such as Webpack or Browserify, also need to plugin to load CSS. Else, you have to load css from HTML)
```javascript
// CommonJS
require('react-customizable-modal/style.css');
var Modal = require('react-customizable-modal');

// ES2015 Modular Syntax
import 'react-customizable-modal/style.css';
import Modal from 'react-customizable-modal';
```

## Example
Above examples can found here: [https://github.com/rico345100/react-customizable-modal-example](https://github.com/rico345100/react-customizable-modal-example).


### Simple Modal
Example for creating simple custom modal:

```javascript
import 'react-customizable-modal/style.css';
import Modal from 'react-customizable-modal';

class CustomModal extends Component {
	static propTypes = {
		visible: PropTypes.bool.isRequired,
		onClose: PropTypes.func
	}
	static defaultProps = {
		onClose: () => {}
	}
	render() {
		return (
			<Modal name="Custom Modal" visible={this.props.visible} onSubmit={this.props.onClose} onClose={this.props.onClose}>
				<h1>Helloworld!</h1>
			</Modal>
		)
	}
}

class App extends Component {
	state = {
		showModal: false
	}
	toggleModal = () => {
		this.setState({ showModal: !this.state.showModal });
	}
	closeModal = () => {
		this.setState({ showModal: false });
	}
	render() {
		return (
			<div>
				<h1>Modal Test</h1>
				<button onClick={this.toggleModal}>Toggle</button>

				{/* Modal must be render always, and control visiblity via visible props */}
				<CustomModal visible={this.state.showModal} onClose={this.closeModal} />
			</div>
		);
	}
}
```

### Form Modal
Example for creating custom modal has form(using with [react-bootstrap](https://www.npmjs.com/package/react-bootstrap)):

```javascript
import React, { Component, PropTypes } from 'react';
import { FormGroup, ControlLabel, FormControl } from 'react-bootstrap';
import Modal from 'react-customizable-modal';

class AddAccountModal extends Component {
	static propTypes = {
		onClose: PropTypes.func,
		visible: PropTypes.bool.isRequired
	}
	state = {
		name: '',
		age: ''
	}
	onAdd = () => {
		console.log('Add: ', this.state);
	}
	onClose = () => {
		this.props.onClose();
	}
	handleChange(key, ev) {
		this.setState({
			[key]: ev.target.value
		});
	}
	render() {
		const { visible } = this.props;
		const { name, age } = this.state;

		return (
			<Modal name="Add Account" onSubmit={this.onAdd} onClose={this.onClose} submitText="Add" closeText="Close" visible={visible}>
				<div className="form-horizontal">
					<FormGroup>
						<ControlLabel>Name</ControlLabel>
						<FormControl type="text" value={name} onChange={this.handleChange.bind(this, 'name')} />
					</FormGroup>

					<FormGroup>
						<ControlLabel>Age</ControlLabel>
						<FormControl type="text" value={age} onChange={this.handleChange.bind(this, 'age')} />
					</FormGroup>
				</div>
			</Modal>
		);
	}
}

export default AddAccountModal;
```


## API
### props
- string name: Name of the modal. It displays both Desktop and Mobile device.
- boolean visible: Set visibility. This is using when animate modal on show/hide.
- optional number zIndex: Z-Index of modal component. This is useful when you want to make some kind of nested modals with right order.
- optional string className: Add class.
- optional function onSubmit: Invoked when submit the form.
- optional function onClose: Invoked when close the form.
- optional boolean noSubmit: On true, no submit button in the modal. Default is false.
- optional string submitText: Text on the submit button. Default is "Submit".
- optional string closeText: Text on the close button. Default is "Close".


## License
MIT. Free to use.