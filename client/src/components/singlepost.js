import React, { useState } from "react";

const Singlepost = () => {
  const [commentsVisible, setCommentsVisible] = useState(false);
  const [comments, setComments] = useState([
    "This is a great post!",
    "I totally agree with this.",
    "Amazing insights, thank you for sharing!",
  ]);
  const [newComment, setNewComment] = useState("");
  const [isLiked, setIsLiked] = useState(false); // State to toggle like/unlike

  const toggleComments = () => {
    setCommentsVisible(!commentsVisible);
  };

  const toggleLike = () => {
    setIsLiked(!isLiked); // Toggle the like/unlike state
  };

  const handleAddComment = () => {
    if (newComment.trim()) {
      setComments([...comments, newComment]);
      setNewComment("");
    }
  };

  return (
    <>
      {/* Material Icons CSS */}
      <link
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
        rel="stylesheet"
      />

      <div
        className="container"
        style={{
          display: "flex",
          justifyContent: "center",
          padding: "20px",
          maxWidth: "1200px",
          margin: "2% auto 0 auto",
        }}
      >
        <div className="row" style={{ width: "100%" }}>
          <div className="col s12">
            <div
              className="card"
              style={{ width: "100%", maxWidth: "600px", margin: "auto" }}
            >
              <div className="card-image">
                <img
                  src="https://images.unsplash.com/photo-1530631673369-bc20fdb32288?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Post Visual"
                  className="responsive-img"
                  style={{
                    maxHeight: "200px",
                    objectFit: "cover",
                    width: "100%",
                  }}
                />
                <span className="card-title">Patrick Jane</span>
              </div>
              <div className="card-content">
                <p style={{ fontSize: "16px", fontWeight: "bold" }}>
                  Title: This is an amazing post
                </p>
                <p style={{ fontSize: "14px" }}>
                  Here is the content of the post. You can toggle the comments
                  below or add your own comment.
                </p>
              </div>
              <div className="card-action" style={{ display: "flex", gap: "10px" }}>
                {/* Show Comments Button */}
                <button
                  className="btn-small waves-effect waves-light"
                  onClick={toggleComments}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "5px",
                  }}
                >
                  <span className="material-icons" style={{ fontSize: "16px" }}>
                    comment
                  </span>
                  {commentsVisible ? "Hide Comments" : "Show Comments"}
                </button>

                {/* Like/Unlike Button */}
                <button
                  className="btn-small waves-effect waves-light"
                  onClick={toggleLike}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "5px",
                  }}
                >
                  <span
                    className="material-icons"
                    style={{ fontSize: "16px" }}
                  >
                    {isLiked ? "thumb_down" : "thumb_up"}
                  </span>
                  {isLiked ? "Unlike" : "Like"}
                </button>
              </div>
              {commentsVisible && (
                <div className="card-content">
                  <h6 style={{ fontSize: "16px" }}>Comments:</h6>
                  {comments.length > 0 ? (
                    comments.map((comment, index) => (
                      <p
                        key={index}
                        style={{
                          margin: "5px 0",
                          fontSize: "14px",
                          wordWrap: "break-word",
                        }}
                      >
                        - {comment}
                      </p>
                    ))
                  ) : (
                    <p className="grey-text" style={{ fontSize: "14px" }}>
                      No comments yet.
                    </p>
                  )}
                  <div style={{ marginTop: "20px" }}>
                    <div className="input-field">
                      <input
                        type="text"
                        placeholder="Write a comment..."
                        value={newComment}
                        onChange={(e) => setNewComment(e.target.value)}
                        style={{ fontSize: "14px" }}
                      />
                    </div>
                    <button
                      className="btn waves-effect waves-light"
                      onClick={handleAddComment}
                      style={{
                        fontSize: "12px",
                        lineHeight: "30px",
                        padding: "0 20px",
                        marginTop: "10px",
                      }}
                    >
                      Add Comment
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Singlepost;