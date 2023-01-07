import { IonContent, IonHeader, IonPage, IonText, IonTitle, IonToolbar } from '@ionic/react';
import { IonInput, IonItem, IonLabel, IonList, IonSelect, IonSelectOption, IonTextarea, IonButton } from '@ionic/react';
import './Forgetpass.css';

const Forgetpass: React.FC = () => {
  return (
    <IonPage>
      <IonContent class="ion-padding">
        <IonHeader>
        </IonHeader>
        <div className='main'>
          <div className='header'>
            <p className='forget_head'>Reset Password</p>
            <h6 className='forget_sub'>Please Enter your Email ID to reset your password</h6>
          </div>

          <div className="main-content">


          <div className='input-text'>
            <IonLabel className='forget_label' position="stacked" >Enter Email</IonLabel>
            <IonInput className="forget_input" placeholder='Enter email'></IonInput>

            </div>

            <IonButton shape='round' className="forget_btn">Submit</IonButton>

          </div>

        </div>
      </IonContent>
    </IonPage>
  );
};

export default Forgetpass;