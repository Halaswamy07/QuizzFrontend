import React, { useState } from 'react'; // Removed useEffect import
import DashboardComponent from '../Dashboard/DashboardComponent';
import AnalyticsComponent from '../Analytics/AnalyticsComponent';
import CreateQuizComponent from '../CreateQuiz/CreateQuizComponent';
import styles from "../MainDashboard/Style.module.css"; 
import QnaComponent from '../Qna.jsx/QnaComponent';
import { useNavigate } from 'react-router-dom';

function MainDashBoardComponent() {
  const [activeComponent, setActiveComponent] = useState('dashboard');
  const [showCreateQuizPopUp, setShowCreateQuizPopUp] = useState(false);
  const navigate = useNavigate();

  

  const handleQnaClick = () => {
    setActiveComponent('qna');
    
  }

  const handleCreateQuizePopUp = () => {
    setShowCreateQuizPopUp(true);
  }

  const closeCreateQuiz = (flag) => {
    setShowCreateQuizPopUp(flag);
  }

  const handleLogout = () => {
    window.localStorage.clear();
    navigate('/');
  }

  const renderComponent = () => {
    switch (activeComponent) {
      case 'dashboard':
        return <DashboardComponent />;
      case 'analytics':
        return <AnalyticsComponent onQnaClick={handleQnaClick} />;
      case 'qna':
        return <QnaComponent />;
      default:
        return null;
    }
  };

  return (
    <>
      <div className={styles.fullScreenDiv}>
        <div className={styles.dashboardContainer}>
          <div className={styles.sidebar}>
            <div className={styles.logo}>
              <h1>Quizzie</h1>
            </div>
            <div className={styles.menu}>
              <button onClick={() => setActiveComponent('dashboard')}>Dashboard</button>
              <button onClick={() => setActiveComponent('analytics')}>Analytics</button>
              <button onClick={handleCreateQuizePopUp}>Create Quiz</button>
            </div>
            <div className={styles.logout}>
              <button onClick={handleLogout}>Logout</button>
            </div>
          </div>
          <div className={styles.compRender}>
            {renderComponent()}
          </div>
          {
            showCreateQuizPopUp && (
              <CreateQuizComponent closePopUp={closeCreateQuiz} />
            )
          }
        </div>
      </div>
    </>
  )
}

export default MainDashBoardComponent;
