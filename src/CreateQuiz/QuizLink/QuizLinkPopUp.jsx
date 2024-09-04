import React from 'react'; 
import { v4 as uuidv4 } from 'uuid';
import styles from '../QuizLink/Style.module.css';
import CloseIcon from '@mui/icons-material/Close';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function QuizLinkPopUp({ closePopUp, quizLink }) {
    const baseUrl = process.env.REACT_APP_BASE_URL || 'https://QquizZ1.netlify.app/';
    const generatedQuizLink = quizLink || `${baseUrl}/quiz/${uuidv4()}`;

    const handleClosePopUp = () => {
        closePopUp(false);
    };

    const handleShare = () => {
        navigator.clipboard.writeText(generatedQuizLink)
            .then(() => {
                toast.success("Link copied to Clipboard!", {
                    position: "top-right",
                });
            })
            .catch((err) => {
                toast.error("Failed to copy link", {
                    position: "top-right",
                });
            });
    };

    return (
        <div>
            <ToastContainer />
            <div className={styles.overlay}>
                <div className={styles.parent}>
                    <div className={styles.cancelButton} onClick={handleClosePopUp}>
                        <CloseIcon />
                    </div>
                    <div className={styles.message}>
                        <h2>Congrats, your Quiz is Published!</h2>
                    </div>
                    <div className={styles.inputParent}>
                        <input 
                            className={styles.input} 
                            value={generatedQuizLink} 
                            readOnly 
                        />
                    </div>
                    <div className={styles.buttonContainer}>
                        <button className={styles.createButton} onClick={handleShare}>Share</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default QuizLinkPopUp;
