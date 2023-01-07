import { IonContent, IonHeader, IonPage, IonText, IonTitle, IonToolbar } from '@ionic/react';
import { IonInput, IonItem, IonLabel, IonList, IonSelect, IonSelectOption, IonTextarea, IonButton } from '@ionic/react';
import './Profile.css';
const Profile: React.FC = () => {
    return (

        <IonPage>

            <IonContent class="ion-padding">
                <IonHeader>

                </IonHeader>
                <div className='profile_main'>
                    <img className="profile_plant1" src='https://s3-alpha-sig.figma.com/img/cc08/0798/31419334b147b46a8e618481c70d5805?Expires=1673827200&Signature=USXG5sStltIK2RiKcslc-ZASBR-~u6KNz~~LN47jeRgwXzjyCNC8fnG1Jr1Ix2RzWtN1B0oMjvd9NOqBAQsPIlt93n510JGehuNLmkJC5G5Djit1arsv5ErD3~4vqLvI2UVbFBXrHVlvPMW4-FmJTcbFHz43SiB23Ze1k1JjGqCQh0aHX7DS87jGghaG0SbhU4IabRwNc6hyp-Ms2mSjPbKzTt2HnmvewrgwVOv1vJJLk5~iT2hhN6oketiuf~tvnWWVIdX2XQgTSFp-c~b3QCXgosq8h7D5qJczpI4qQGnclkY5b5aEftcepmtkqcv~K3ibsUPmJz6bVyttBBDugA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4' alt='Profile_plant1'/>
                    <img className="profile_plant2" src="https://s3-alpha-sig.figma.com/img/4f6f/e5d0/e447d715c6dd5ba6df1ffe4a385db4f4?Expires=1673827200&Signature=cKCjzSKV6ZGgBjV7zkmnWFXGJp-ThK22o~oTg2pBQpz8c-AiH5FrTJSvJYEJht3W7ZJp-7hKQf4rIRRVNQajLuJxjIc-RriBzrLpn1-4BVWTN5N7e3fIuPzvBa-9AilyDgzup0lAEFxtJRsfmuRg9oVYplfjeIenAP4Ut~9S9l1bqLqMP3zQRnqrBBogDq0TGU1v8fXtQdPHzrl6PihCquVzL94jKplsOjcznWbrK6bC-Rf0WmDd2nAc-C5N1KpGaGUTIXNe-tcoeaI4il1kQW4Z3ca4q1VX8G25NVVKLK1zavhOLON8ukXCTTtU3iKnHvvXmTvVz26829IpHpb0rQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="profile_plant2"/>
                    <p className="profile_head">Profile</p>
                    <div className="profile_pic"></div>


                    <div className="profile_input_text" >

                        <div className='inputs'>
                            <IonLabel className='profile_label' position="stacked" >Name</IonLabel>
                            <IonInput className="profile_input"></IonInput>


                            <IonLabel className="profile_label" position="stacked" >Age</IonLabel>
                            <IonInput className="profile_input" ></IonInput>

                            <IonLabel className="profile_label" position="stacked" >Email</IonLabel>
                            <IonInput className="profile_input"></IonInput>


                            <IonLabel className="profile_label" position="stacked" >Gender</IonLabel>
                            <IonSelect className="profile_input" placeholder="Select Gender">
                                <IonSelectOption value="apples">Male</IonSelectOption>
                                <IonSelectOption value="oranges">Female</IonSelectOption>
                                <IonSelectOption value="bananas">others</IonSelectOption>
                            </IonSelect>

                            <IonLabel className="profile_label" position="stacked" >Mobile</IonLabel>
                            <IonInput className="profile_input" ></IonInput>

                            <IonLabel className="profile_label" position="stacked" >Interest</IonLabel>
                            <IonTextarea className="profile_input"></IonTextarea>


                        </div>
                        <IonButton shape="round" className="profile_btn">Create Profile</IonButton>
                    </div>


                </div>

            </IonContent>
        </IonPage>
    );
};
export default Profile;
