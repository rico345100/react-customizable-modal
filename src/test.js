import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import Modal from './index';

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

				<CustomModal visible={this.state.showModal} onClose={this.closeModal} />
			</div>
		);
	}
}

ReactDOM.render(
	<div>
		<App />
	</div>
, document.getElementById('entry'));