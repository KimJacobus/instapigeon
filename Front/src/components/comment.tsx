import React, { useState } from "react";
import { FaReply } from "react-icons/fa";

interface Comment {
  text: string;
  date: string;
  replies: { text: string, date: string }[];
}

const CommentSection = () => {
  const [comments, setComments] = useState <Comment[]>([]);
  const [newComment, setNewComment] = useState ("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewComment(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const now = new Date();
    const date = `${now.getDate()}/${now.getMonth()+1}/${now.getFullYear()} ${now.getHours()}:${now.getMinutes()}`;
    const comment = {
      text: newComment,
      date: date,
      replies: []
    };
    setComments([...comments, comment]);
    setNewComment("");
  };

  const handleReply = (index:number, reply:string) => {
    const now = new Date();
    const date = `${now.getDate()}/${now.getMonth()+1}/${now.getFullYear()} ${now.getHours()}:${now.getMinutes()}`;
    const updatedComments = [...comments];
    updatedComments[index].replies.push({text: reply, date: date});
    setComments(updatedComments);
  };

  const [showReplyFormIndex, setShowReplyFormIndex] = useState(-1);

  const handleShowReplyForm = (index:number) => {
    setShowReplyFormIndex(index === showReplyFormIndex ? -1 : index);
  };

  return (
    <div>
      <h3>Commentaires</h3>
      {comments.length === 0 ? (
        <p>Aucun commentaire pour le moment</p>
      ) : (
        comments.map((comment, index) => (
          <div key={index}>
            <p>{comment.text}</p>
            <p>{comment.date}</p>
            {comment.replies.map((reply:any, replyIndex:any) => (
              <div key={replyIndex}>
                <p>{reply.text}</p>
                <p>{reply.date}</p>
                <hr />
              </div>
            ))}
            <button onClick={() => handleShowReplyForm(index)}>
              <FaReply /> Répondre
            </button>
            {showReplyFormIndex === index && (
              <form onSubmit={(event) => {
                event.preventDefault();
                const reply = (event.target as HTMLFormElement).elements.reply.value;
                if (reply !== "") {
                  handleReply(index, reply);
                  (event.target as HTMLFormElement).elements.reply.value = "";
                }
              }}>
                <input type="text" placeholder="Répondre..." name="reply" />
                <button type="submit">Répondre</button>
              </form>
            )}
            <hr />
          </div>
        ))
      )}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Ajouter un commentaire..."
          value={newComment}
          onChange={handleChange}
        />
        <button type="submit">Publier</button>
      </form>
    </div>
  );
};

export default CommentSection;
