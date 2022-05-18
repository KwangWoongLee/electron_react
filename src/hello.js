import React, { Component } from 'react' ;
const {ipcRenderer} = window.require('electron');


class Hello extends Component {
    constructor(props) {
        super (props)
        ipcRenderer.on('bye', ()=>{
            this.OnBye();
        });
        this.state = {
            count: 0
        }
    }

    OnBye(){
        if(this.state.count > 3)
            this.setState( { count: 'bye' } )
    }

    CountFunction() {
        ipcRenderer.send('hi','hi');
        this.setState( { count: this .state.count + 1 } )
    }
    render() {
        return (
            <div className= 'HelloCount' >
                <div> { this.state.count } </div>
                <button onClick= { (e) => this.CountFunction() } >Hello World</button>
            </div>
        );
    }
}
export  default Hello;