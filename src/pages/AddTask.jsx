import { useNavigate } from "react-router-dom";
import Header from "../components/header/Header";
import PopNewCard from "../components/popups/pop-new-card/PopNewCard";
import { Wrapper } from "../components/Shared.styled";
import Main from "../components/main/Main";
import useTask from "../hooks/useTask";

const AddTask = () => {
  const navigate = useNavigate();
  const { fetchTasks } = useTask(); 

  const handleClose = () => {
    fetchTasks(); 
    navigate("/"); 
  };

  return (
    <Wrapper>
      <Header />
      <Main />
      <div className="add-task-page">
        <PopNewCard onClose={handleClose} />
      </div>
    </Wrapper>
  );
};

export default AddTask;
