import React, { Component } from 'react';
import { backendAPI } from '../BackendAPI';
import { util } from '../Util';

export default class ChallengeCreate extends Component {    
    constructor(props) {
        super(props);
        this.state = { structure : [], errors : [] };
    }
    
    addConstant() {
        this.addToStructure({isFillable : false, text : "" });
    }
    
    addFillable() {
        this.addToStructure({isFillable : true, allowedLength : 0 });
    }
    
    addToStructure(element) {
        const updatedState = util.copy(this.state);
        updatedState.structure.push(element);
        updatedState.errors.push(true);
        this.setState(updatedState);
    }
    
    removeFromStructure() {
        const updatedState = util.copy(this.state);
        updatedState.structure.pop();
        updatedState.errors.pop();
        this.setState(updatedState);
    }
    
    submitForm() {
        backendAPI.createChallenge(this.state.structure, (response) => {
            console.log(response);
            this.setState({ structure : [], errors : [] });
        });
    }
    
    isValid(element) {
        if(element.isFillable) {      
            const value = element.allowedLength;
            return util.isInt(value) && value > 0 && value < 100;
        } else {
            return util.isEnglish(element.text) && (element.text.trim().length > 0);
        }
    }
    
    isErrorFree() {
        for(var i = 0; i < this.state.errors.length ; i++) {
            if(this.state.errors[i]) {
                return false;
            }
        }
        return true;
    }
    
    onChange(event) {
        const updatedState = util.copy(this.state);
        const index = parseInt(event.target.getAttribute("index"));
        const value = event.target.value;
        if(this.state.structure[index].isFillable) {
            updatedState.structure[index].allowedLength = parseInt(value);
        } else {
            updatedState.structure[index].text = value;
        }
        updatedState.errors[index] = !this.isValid(updatedState.structure[index]);
        this.setState(updatedState);
    }
    
    render() {
        return (
            <div>
            {this.state.structure.length === 0 ? 
                <div>
                    Do you want to start with 
                    <button onClick={this.addConstant.bind(this)}>
                        Constant
                    </button> or  
                    <button onClick={this.addFillable.bind(this)}>
                        Fillable
                    </button> ?
                </div> : 
                this.state.structure.map((element, i) => {
                    return <div key={i}>
                        <input 
                                className={this.state.errors[i] ? "invalid" : ""}
                                type="text"
                                value={(element.isFillable ? element.allowedLength : element.text)}
                                index={i}
                                onChange={this.onChange.bind(this)}
                            />   
                        {this.state.structure.length - 1 === i &&
                            <div>
                                <button onClick={(element.isFillable ? this.addConstant : this.addFillable).bind(this)}>Add</button>
                                <button onClick={this.removeFromStructure.bind(this)}>Remove</button>
                            </div>
                        }
                    </div>
                })
            }
            {this.state.structure.length > 1 && this.isErrorFree() && 
                <div>
                    <button onClick={this.submitForm.bind(this)}>Submit</button>
                </div>
            }
            </div>
        );
    }
}
