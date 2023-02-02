import { PetsList } from "../PetsList/PetsList";
import ModalAddsPet from "../ModalAddsPet/ModalAddsPet";
import { ModalAddPetPageOne } from "../ModalAddsPet/ModalAddPetPages/ModalAddPetPageOne";
import { ModalAddPetPageTwo } from "../ModalAddsPet/ModalAddPetPages/ModalAddPetPageTwo";
import { useState } from 'react';
import SvgInsert from "../Svg/Svg";

import scss from './pets-data.module.scss';


function PetsData() {

  const [modalActivePageOne, setModalActivePageOne] = useState(false);
  const [modalActivePageTwo, setModalActivePageTwo] = useState(false);

  return (
        <>
          <div className={scss.petsData_title_box}>
                <div className={scss.petsData_title_box}>
                    <h2 className={scss.petsData_title}>My pets:</h2> 
                </div>
                <div className={scss.addPetModal_buttonBox}>
                    <button className={scss.addPetModal_button} type='button' onClick={() => setModalActivePageOne(true)}>Add pet<SvgInsert id='icon-add-pet'/></button>
                </div>
            </div>
                <div className={scss.petsData__container}>
                    <ModalAddsPet active={modalActivePageOne} setActive={setModalActivePageOne}>
                        <ModalAddPetPageOne />
                        <div className={scss.petModal_box_btn}>
                            <button className={scss.petModal_button} type='button' onClick={() => setModalActivePageTwo(true) || setModalActivePageOne(false)}>Next</button>
                            <button className={scss.petModal_button} type='button' onClick={() => setModalActivePageOne(false)}>Cansel</button>
                        </div>
                        
                    </ModalAddsPet>
                    <ModalAddsPet active={modalActivePageTwo} setActive={setModalActivePageTwo}>
                        <ModalAddPetPageTwo />
                        <div className={scss.petModal_box_btn}>
                            <button className={scss.petModal_button} type='button' onClick={() => setModalActivePageTwo(false) || setModalActivePageOne(false)}>Done</button>
                            <button className={scss.petModal_button} type='button' onClick={() => setModalActivePageTwo(false) || setModalActivePageOne(true)}>Back</button>
                        </div>
                    </ModalAddsPet>
                    <div>
                        <PetsList />
                    </div>
        
                </div>  
        </>

    )
}

export default PetsData;