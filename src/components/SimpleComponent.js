import React, { Component } from 'react';

export class SimpleComponent extends Component {
    
    state = {
        mood: 'happy'
    }
    render() {
        return (
            <div onClick={() => {
                this.setState({
                    mood: 'sad'
                })
            }
            }>
                {this.state.mood}
            </div>
        );
    }
}

export default SimpleComponent;
