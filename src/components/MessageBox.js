import React from "react";
import {Button, Modal, ModalBody, ModalFooter, ModalHeader} from "reactstrap";
import {FTUTrans} from './ParentComponent';

export var showMessageBox = async function (
    _message,
    _title = <FTUTrans ns="common" name="msg.message"/>,
    _func
) {
    await this.setState({
        open: true,
        color: "modal-primary",
        background : '#164397',
        buttonColor: '#164397',
        showConfirmBtn: false,
        title: _title,
        message: _message,
        onClose: _func,
        type: "message"
    });
    let focus = setInterval(() => {
        if (document.getElementById("btnCloseMessage")) {
            document.getElementById("btnCloseMessage").focus();
        } else {
            clearInterval(focus);
        }
    }, 5);
};

export var showErrorBox = async function (
    _message,
    _title = <FTUTrans ns="common" name="msg.error"/>,
    _func
) {
    await this.setState({
        open: true,
        color: "modal-danger",
        background : '',
        buttonColor: '#164397',
        showConfirmBtn: false,
        title: _title,
        message: _message,
        onClose: _func,
        type: "Error"
    });
    let focus = setInterval(() => {
        if (document.getElementById("btnCloseMessage")) {
            document.getElementById("btnCloseMessage").focus();
        } else {
            clearInterval(focus);
        }
    }, 5);
};

export var showWarningBox = async function (
    _message,
    _title = <FTUTrans ns="common" name="msg.warning"/>
) {
    await this.setState({
        open: true,
        color: "modal-warning",
        background : '',
        buttonColor: '#ffc107',
        showConfirmBtn: false,
        title: _title,
        message: _message,
        type: "warning",
    });
    let focus = setInterval(() => {
        if (document.getElementById("btnCloseMessage")) {
            document.getElementById("btnCloseMessage").focus();
        } else {
            clearInterval(focus);
        }
    }, 5);
};

export var showConfirm = async function (
    _message,
    _onConfirm,
    _onNotConfirm = null,
    _title = <FTUTrans ns="common" name="msg.confirm"/>
) {
    await this.setState({
        open: true,
        color: '',
        background : '#164397',
        buttonColor: '#164397',
        showConfirmBtn: true,
        title: _title,
        message: _message,
        onConfirm: _onConfirm,
        onNotConfirm: _onNotConfirm,
        type: "confirm"
    });
    document.getElementById("btnConfirmYes").focus();
};

class MessageBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            showConfirmBtn: false
        };
        showMessageBox = showMessageBox.bind(this);
        showErrorBox = showErrorBox.bind(this);
        showWarningBox = showWarningBox.bind(this);
        showConfirm = showConfirm.bind(this);
    }

    onClose = () => {
        this.setState({open: false});
        if(this.state.onNotConfirm && this.state.type === "confirm"){
            this.state.onNotConfirm();
        }
        if(this.state.onClose){
            this.state.onClose();
        }
    };

    onConfirm = () => {
        this.setState({open: !this.state.open});
        this.state.onConfirm();
    };

    render() {
        return (
            <div>
                <Modal style={{width: "30%", top: "30%"}}
                       id={"messageBox"}
                       isOpen={this.state.open}
                       toggle={this.onClose}
                       backdrop="static"
                       className={this.state.color}>
                    <ModalHeader
                        style={{background: this.state.background}}
                        toggle={this.onClose}>
                        {this.state.title}
                    </ModalHeader>
                    <ModalBody style={{wordBreak: "break-word"}}>{this.state.message}</ModalBody>
                    <ModalFooter>
                        <Button style={{background: this.state.buttonColor, color: 'white'}}
                                id={"btnConfirmYes"}
                                onClick={this.onConfirm}
                                hidden={!this.state.showConfirmBtn}>
                            <FTUTrans ns="common" name="msg.btnYes"/>
                        </Button>
                        <Button style={{background: this.state.buttonColor, color: 'white'}}
                                onClick={this.onClose}
                                hidden={!this.state.showConfirmBtn}>
                            <FTUTrans ns="common" name="msg.btnNo"/>
                        </Button>
                        <Button style={{background: this.state.buttonColor, color: 'white'}}
                                id={"btnCloseMessage"}
                                onClick={this.onClose}
                                hidden={this.state.showConfirmBtn}>
                            <FTUTrans ns="common" name="msg.btnClose"/>
                        </Button>
                    </ModalFooter>
                </Modal>
            </div>
        );
    }
}

export default (MessageBox);
