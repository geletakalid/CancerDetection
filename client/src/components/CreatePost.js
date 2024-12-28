import React, { useState } from 'react';
import 'materialize-css/dist/css/materialize.min.css';

const CreatePost = () => {
  const [title, setTitle] = useState('');
  const [body, setDescription] = useState('');
  const [file, setFile] = useState(null);

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', 'doctorpost'); // Your upload preset
    formData.append('cloud_name', 'dbb3wygqs'); // Your cloud name

    fetch('https://api.cloudinary.com/v1_1/dbb3wygqs/image/upload', {
      method: 'POST',
      body: formData,
    })
    .then(response => response.json())
    .then(data => {
      const pic = data.secure_url;

      return fetch('/createpost', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title,
          body,
          pic, 
        }),
      });
    })
    .then(postResponse => {
      if (!postResponse.err) {
        console.log(postResponse.err)
        console.log('Post created successfully!');
        setTitle('');
        setDescription('');
        setFile(null);
      } else {
        console.log(postResponse.err);
      }
    })
    .catch(error => {
      console.error('Error creating post:', error);
    });
  };

  return (
    <div className="container" style={{ marginTop: '20px' }}>
      <div className="row">
        <div 
          className="col s12" 
          style={{ 
            maxWidth: '800px', 
            width: '100%', 
            margin: '0 auto', 
            boxSizing: 'border-box',
            padding: '0 10px',
            '@media (min-width: 400px)': {
              width: '50%'
            }
          }}
        >
          <div 
            className="card-panel" 
            style={{ 
              padding: '20px', 
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
              width: '100%',
              boxSizing: 'border-box'
            }}
          >
            <h2 className="center">Create Post</h2>
            <form onSubmit={handleSubmit}>
              <div className="row">
                <div className="input-field col s12">
                  <i className="material-icons prefix">title</i>
                  <input 
                    id="title" 
                    type="text" 
                    value={title} 
                    onChange={handleTitleChange} 
                  />
                  <label htmlFor="title">Title</label>
                </div>
              </div>
              <div className="row">
                <div className="input-field col s12">
                  <i className="material-icons prefix">description</i>
                  <textarea 
                    id="description" 
                    className="materialize-textarea" 
                    value={body} 
                    onChange={handleDescriptionChange} 
                  ></textarea>
                  <label htmlFor="description">Description</label>
                </div>
              </div>
              <div className="file-field input-field">
                <div className="btn">
                  <i className="material-icons left">attach_file</i>
                  <span>File</span>
                  <input type="file" onChange={handleFileChange} />
                </div>
                <div className="file-path-wrapper">
                  <input className="file-path validate" type="text" />
                </div>
              </div>
              <button className="btn waves-effect waves-light" type="submit" style={{ width: '100%' }}>
                Create Post
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatePost;