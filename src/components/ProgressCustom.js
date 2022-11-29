import React from "react";
import {Dialog} from 'primereact/dialog';
import {ProgressSpinner} from 'primereact/progressspinner';

export var showProgress = async function () {
    this.state.count++;
    await this.setState({open: true});
};
export var hideProgress = function (forceHide = false) {
    this.state.count--;
    if (forceHide) {
        this.state.count = 0;
        this.setState({open: false});
    } else if (this.state.count <= 0) {
        this.state.count = 0;
        this.setState({open: false});
    }
};

class ProgressCustom extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            open: false
        };
        showProgress = showProgress.bind(this);
        hideProgress = hideProgress.bind(this);
    }

    render() {
        return (
            <div>
                <Dialog showHeader={false} className={"progressCustom"}
                        style={{boxShadow: "none"}} closeOnEscape={false}
                        contentStyle={{backgroundColor: "rgb(0,0,0,0)", border: "none", boxShadow: "none"}}
                        visible={this.state.open}
                        onHide={hideProgress}
                >
                    <ProgressSpinner/>

                </Dialog>
            </div>
        );
    }
}

export default (ProgressCustom);
