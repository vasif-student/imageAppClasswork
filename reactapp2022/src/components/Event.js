import React, { Component } from 'react'

class Event extends Component {
    constructor(props) {
        super(props);
        this.state = {
            status: "https://gecexchanges.com/wp-content/uploads/teach-english-in-thailand-banner.jpg"
        }
    }

    StatusHandler = (e) => {
        this.setState({
            status: this.state.status === "https://gecexchanges.com/wp-content/uploads/teach-english-in-thailand-banner.jpg" ? "Image is hidden" : "https://gecexchanges.com/wp-content/uploads/teach-english-in-thailand-banner.jpg"
        })
    }

  render() {
    const {status} = this.state; 
    return (
      <div>
          <button style={{padding: "10px 50px", borderRadius: "5px", border: "1px solid #000", cursor: "pointer"}} onClick={this.StatusHandler}>{status}</button>
          <br/>
          <br/>
          <img id="image" src={status} width="500" />
          <br />
          <br />
          <hr />
      </div>
    )
  }
}

export default Event