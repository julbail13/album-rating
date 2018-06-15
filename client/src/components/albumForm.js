import React, { Component } from 'react'
import uuid from 'uuid'

class AlbumForm extends Component {
  constructor(){
    super();
    this.state = {
      newAlbum:{}
    }
  }

  handleSubmit(e){
    if(this.refs.title.value === '' || this.refs.artist.value === ''){
      alert('Title and Artist is required');
    } else {
      this.setState({ newAlbum: {
        id: uuid.v4(),
        title: this.refs.title.value,
        artist: this.refs.artist.value
        }
      }, () => {
        this.props.addAlbum(this.state.newAlbum);
        this.refs.title.value = ''
        this.refs.artist.value = ''
      });
    }
    e.preventDefault()
  }

  render() {
    return (
      <div>
        <h1>Add Album</h1>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <div className="form-group">
            <label htmlFor="title" >Title</label>
            <input id="title" type="text" ref="title" className="form-control" />
          </div>
          <div className="form-group">
            <label htmlFor="artist">Artist</label>
            <input id="artist" type="text" ref="artist" className="form-control" />
          </div>
          <div className="form-group">
            <input className="btn btn-primary" type="submit" value="Submit" />
          </div>
        </form>
      </div>
    )
  }
}

export default AlbumForm
