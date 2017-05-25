import React, { Component, PropTypes } from 'react';

class Modal extends Component {
	static propTypes = {
		name: PropTypes.string.isRequired,
		zIndex: PropTypes.number,
		className: PropTypes.string,
		onSubmit: PropTypes.func,
		onClose: PropTypes.func,
		noSubmit: PropTypes.bool,
		submitText: PropTypes.string,
		closeText: PropTypes.string,
		visible: PropTypes.bool.isRequired
	}
	static defaultProps = {
		className: '',
		onSubmit: () => {},
		onClose: () => {},
		noSubmit: false,
		submitText: 'Submit',
		closeText: 'Close'
	}
	render() {
		const { name, zIndex, className, children, onSubmit, onClose, noSubmit, submitText, closeText, visible } = this.props;
		const hasZIndex = typeof zIndex !== 'undefined';
		const style = {};

		if(hasZIndex) {
			style.zIndex = zIndex;
		}

		return (
			<div className={"modal-background" + (visible ? " show" : "")} style={style}>
				<div className={"modal" + (visible ? " show" : "") + (className ? ` ${className}` : "")}>
					<div className="modal-close" onClick={onClose}>×</div>

					<div className="modal-title">
						<div className="back" onClick={onClose}>
							<i className="fa fa-arrow-circle-o-left" />
						</div>
						<div className="text">{name}</div>
					</div>

					<div className="modal-body">{children}</div>

					<div className="modal-buttons">
						<button className={"modal-buttons__close" + (noSubmit ? " full-width" : "")} onClick={onClose}>{closeText}</button>
						{!noSubmit && <button className="modal-buttons__submit" onClick={onSubmit}>{submitText}</button>}
					</div>
				</div>
			</div>
		);
	}
}

export default Modal;