import axios from "axios";
import { DataBaseState } from "../../Contexts/DataBase_Context";

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

  const enableSavingTransition = async (transitionId) => {
    try {
      const token = sessionStorage.getItem('token');
      console.log(token)

      // Send a DELETE request to the API to disable the transition
      await axios.post(`http://192.168.0.121:3000/saving-transitions/${userId}/${transitionId}/enable-savings-transition`, null,{
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      console.log(transitionId)
    
      // After successfully disabling the transition, update the UI state
      setSavingTransitionsList((prevTransitions) =>
        prevTransitions.map((transition) =>
          transition.id === transitionId ? { ...transition, isActive: true } : transition
        )
      );

      console.log(transitionId)
  
    } catch (error) {
      console.error(error);
    }
  };

  return { disableSavingTransition, enableSavingTransition };
}

export default useDisableOrEnableSavingTransition;