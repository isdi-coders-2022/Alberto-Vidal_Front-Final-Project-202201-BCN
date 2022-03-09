import Project from "./components/Project";

const App = () => {
  const props = {
    author: {
      name: "kiv",
      avatar:
        "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
    },
    preview:
      "https://i.pinimg.com/474x/c0/68/bb/c068bb6bf2f3f07bca71fad7ed33966c.jpg",
  };
  return (
    <>
      <h1>helloworld</h1>
      <Project project={props} />
    </>
  );
};

export default App;
