import { DataBaseState } from "../../Contexts/DataBase_Context";
import http from "../../Services/httpService";

const useDisableOrEnableSavingTransition = (setSavingTransitionsList) => {

  const { userId } = DataBaseState();

  const disableSavingTransition = async (transitionId) => {

    console.log("Comcou")

    try {
    
      // Send a DELETE request to the API to disable the transition
      await http.delete(`saving-transitions/${userId}/${transitionId}/disable-savings-transition`);
    
      // After successfully disabling the transition, update the UI state
      setSavingTransitionsList((prevTransitions) =>
        prevTransitions.map((transition) =>
          transition.id === transitionId ? { ...transition, isActive: false } : transition
        )
      );
    
    } catch (error) {
      console.error(error);
    }
  };

  const enableSavingTransition = async (transitionId) => {
    try {

      // Senda DELETE request to the API to disable the transition
      await http.post(`saving-transitions/${userId}/${transitionId}/enable-savings-transition`);
    
      // After successfully disabling the transition, update the UI state
      setSavingTransitionsList((prevTransitions) =>
        prevTransitions.map((transition) =>
          transition.id === transitionId ? { ...transition, isActive: true } : transition
        )
      );
  
    } catch (error) {
      console.error(error);
    }
  };

  return { disableSavingTransition, enableSavingTransition };
}

export default useDisableOrEnableSavingTransition;