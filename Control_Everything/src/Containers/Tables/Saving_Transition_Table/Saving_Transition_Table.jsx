import React, { useState, useEffect } from 'react';
import './Saving_Transition_Table.scss';
import useFetchSavingsTransitions from '../../../Hooks/Saving_Transitions/useFetchSavingsTransitions';
import useFetchTotalTransitions from '../../../Hooks/Saving_Transitions/useFetchTotalTransitions';
import LinearProgress from '@mui/material/LinearProgress';
import * as Icon from '../../../Imports/icons';
import * as Color from '../../../Styles/Colors';
import * as Component from '../../../Imports/components'
import useDisableOrEnableSavingTransition from '../../../Hooks/Saving_Transitions/useDisableOrEnableSavingTransition';

const Saving_Transition_Table = () => {

  const {
    savingTransitionsList, setSavingTransitionsList,
    perPage, setPerPage,
    page, setPage,
  } = useFetchSavingsTransitions();

  const { totalTransitions } = useFetchTotalTransitions();
  
  const { disableSavingTransition } = useDisableOrEnableSavingTransition(setSavingTransitionsList);

  const [currentPage, setCurrentPage] = useState(page);
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    setPage(pageNumber); // Adicionado para atualizar a página atual na Api.Savings_User()
  };

  const [transactionsPerPage, setTransactionsPerPage] = useState(perPage);
  const handleTransactionsPerPageChange = (event) => {
    const newPerPage = parseInt(event.target.value);
    setTransactionsPerPage(newPerPage);
    setPerPage(newPerPage); // Atualiza o valor no estado global
    setPage(1); // Volta para a primeira página quando o número de transações por página é alterado
  };

  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    // Show the LinearProgress when the currentPage changes
    setIsLoading(true);

    // Simulate a 3-second delay
    const delay = 800;
    const timer = setTimeout(() => {
      setIsLoading(false); // Hide the LinearProgress after the delay
    }, delay);

    return () => clearTimeout(timer); // Cleanup the timer on component unmount

  }, [currentPage]);

  return (
    <div className='Saving_Transition_Table'>
      <div className="Filters">
        <div>
          <Component.Pagination 
            currentPage={currentPage} // Usar currentPage ao invés de page
            totalPages={Math.ceil( totalTransitions / perPage)}
            onPageChange={paginate}
          />
        </div>
      </div>
      <div className='Table_Wrapper'>
        <table>
          <thead>
            <tr>
              <th className="Transition_ID"><span>Transition ID</span></th>
              <th className="Buy_or_Sell"><span>Buy/Sell</span></th>
              <th className="Data"><span>Data</span></th>
              <th className="Hour"><span>Hour</span></th>
              <th className="Platform"><span>Platform</span></th>
              <th className="Currency"><span>Currency</span></th>
              <th className="Amount"><span>Amount</span></th>
              <th className="Modify"><span>Modify</span></th>
            </tr>
          </thead>
            {isLoading && 
              <div className='Loading'>
                <LinearProgress />
              </div>
            }
          <tbody>
            {!isLoading && ( 
              <>
                {savingTransitionsList &&
                  savingTransitionsList.map((transition) => (
                    <tr
                      key={transition.id}
                      className={transition.isActive ? '' : 'inactive'} // Apply the 'inactive' class for inactive transitions
                    >
                      <td className="Transition_ID">
                        <span>{transition.transitionID}</span>
                      </td>
                      <td
                        className="Buy_or_Sell"
                        style={{
                          color: transition.transitiontype === 'Deposit' ? '#00d27a' : '#ff3737',
                        }}
                      >
                        <span>{transition.transitiontype}</span>
                      </td>
                      <td className="Data">
                        <span>{transition.data}</span>
                      </td>
                      <td className="Hour">
                        <span>{transition.hour}</span>
                      </td>
                      <td className="Platform">
                        <span>{transition.platform}</span>
                      </td>
                      <td className="Currency">
                        <span>{transition.currencyType}</span>
                      </td>
                      <td
                        className="Amount"
                        style={{
                          color: transition.amount < 0 ? '#ff3737' : '#00d27a',
                        }}
                      >
                        <span>{transition.amount}</span>
                      </td>
                      <td className="Modify">
                      {transition.isActive ? (
                        // Render the disable button if the transition is active
                        <button>
                          <div className="Delete_Icon" onClick={() => disableSavingTransition(transition.id)}>
                            <Icon.Trash Global_Color={Color.red}/>
                          </div>
                        </button>
                      ) : (
                        // Render the enable button if the transition is inactive
                        <button>
                          <div className="Delete_Icon" >
                            <Icon.Trash Global_Color={Color.red}/>
                          </div>
                        </button>
                      )}
                        <button >
                          {/* Use an arrow function to pass the transition.id */}
                          <div className="Modify_Icon">
                            <Icon.Settings Global_Color={Color.orange}/>
                          </div>
                        </button>
                      </td>
                      {!transition.isActive && (
                        <div className="Cut_Line"> </div>
                      )}
                    </tr>
                  ))
                }
              </>
            )}
          </tbody>
        </table>
      </div>    
      <div className="Filters">
        <div>
          <Component.Pagination 
            currentPage={currentPage} // Usar currentPage ao invés de page
            totalPages={Math.ceil( totalTransitions / perPage)}
            onPageChange={paginate}
          />
        </div>
      </div>
    </div>
  )
};

export default Saving_Transition_Table;