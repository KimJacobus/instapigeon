import { useState } from 'react';
import { usePostComment } from '../../hooks/usePostComment';
import { useDeleteComment } from '../../hooks/useDeleteComment';

const CommentSectionTest = ({ postId }: { postId: string }) => {
  const { comments, addComment } = usePostComment();
  const { deleteData } = useDeleteComment('http://localhost:5000/comments');

  const [newComment, setNewComment] = useState('');

  const handleAddComment = (event: React.FormEvent) => {
    event.preventDefault();
    if (newComment.trim() !== '') {
      addComment({ text: newComment, id: postId });
      setNewComment('');
    }
  };

  const handleDeleteComment = (id: string) => {
    deleteData(id);
  };

  return (
     <div>
        <h2>Commentaires</h2>
        {comments.length === 0 ? (
           <p>Pas encore de commentaires</p>
        ) : (
           comments.map((comment, index) => (
              <div key={index}>
                 <p>{comment}</p>
                 <button onClick={() => handleDeleteComment(comment.id)}>
                    Supprimer
                 </button>
              </div>
           ))
        )}
        <form onSubmit={handleAddComment}>
           <label>
              Commentaire :
              <input
                 type="text"
                 value={newComment}
                 onChange={(e) => setNewComment(e.target.value)}
              />
           </label>
           <button type="submit">Poster</button>
        </form>
     </div>
  )
};
export default CommentSectionTest;