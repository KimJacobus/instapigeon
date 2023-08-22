import Comment from "../../components/comment"


const Home = () => {
  return (
    <>
      <div
        className="background"
        style={{
          display: "absolute",
          backgroundColor: "#D9D9D9",
          width: "100vw",
          height: "100%",
        }}
      >
      {/**<Grid />
       * <StandardImageList />
       * <SimpleBackdrop />
       */} 
      
     <Comment/>
      </div>
    </>
  )
}

export default Home
