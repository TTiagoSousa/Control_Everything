import axios from "axios";
import { useState } from "react";
import { DataBaseState } from "../../Contexts/DataBase_Context";
import useFetchSavingsTransitions from "./useFetchSavingsTransitions";

const useDisableOrEnableSavingTransition = (setSavingTransitionsList) => {

    const { userId, authenticated } = DataBaseState();

    const disableSavingTransition = async (transitionId) => {
        try {
          const token = sessionStorage.getItem('token');
    
          // Send a DELETE request to the API to disable the transition
          await axios.delete(`http://192.168.0.121:3000/saving-transitions/${userId}/${transitionId}/disable-savings-transition`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
    
          // After successfully disabling the transition, update the UI state
          setSavingTransitionsList((prevTransitions) =>
            prevTransitions.map((transition) =>
              transition.id === transitionId ? { ...transition, isActive: false } : transition
            )
          );
    
          console.log(transitionId)
        } catch (error) {
          console.error(error);
        }
      };

      return { disableSavingTransition };
}

export default useDisableOrEnableSavingTransition;