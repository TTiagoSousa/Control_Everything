import React, { useState, useEffect } from 'react';
import '../Savings_Transitions_History.scss';
import useFetchTotalNumberOfSavingsTransitions from '../../../../../../Hooks/Saving_Transitions/useFetchTotalNumberOfSavingTransitions';
import useFetchSavingsTransitions from '../../../../../../Hooks/Saving_Transitions/useFetchSavingTransitionWithPagination';
import * as Icon from '../../../../../../Imports/icons';
import * as Color from '../../../../../../Styles/Colors';
import LinearProgress from '@mui/material/LinearProgress';
import Pagination from '../../../../../../Components/Pagination/Pagination';
import { useTranslation } from 'react-i18next';
import useDisableOrEnableSavingTransition from '../../../../../../Hooks/Saving_Transitions/useDisableOrEnableSavingTransition';

const Savings_Transitions_History_Table = () => {

  const { t } = useTranslation();

  const { totalTransitions } = useFetchTotalNumberOfSavingsTransitions();

  const {
    savingTransitionsList, setSavingTransitionsList,
    perPage, setPerPage,
    page, setPage,
  } = useFetchSavingsTransitions();

  const { disableSavingTransition, enableSavingTransition } = useDisableOrEnableSavingTransition(setSavingTransitionsList);

  const [currentPage, setCurrentPage] = useState(page);
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    setPage(pageNumber);
  };

  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    const delay = 1500;
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, delay);

    return () => clearTimeout(timer);

  }, [currentPage]);

  const [expandedRows, setExpandedRows] = useState([]);

  useEffect(() => {
    // Reset expanded rows when page changes
    setExpandedRows([]);
  }, [currentPage]);

  const toggleRow = (index) => {
    let newExpandedRows = [...expandedRows];
    const currentIndex = newExpandedRows.indexOf(index);

    if (currentIndex === -1) {
      newExpandedRows = [index];
    } else {
      newExpandedRows.splice(currentIndex, 1);
    }

    setExpandedRows(newExpandedRows);
  };

  const isRowExpanded = (index) => {
    return expandedRows.includes(index);
  };

  return (
    <div className='Savings_Transitions_History_Table'>

      <div className="Filters">
        <div>
          <Pagination
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
              <th className="Transition_ID"><span>{t('Operation type')}</span></th>
              <th className="Buy_or_Sell"><span>{t('Amount')}</span></th>
              <th className="Amount"><span>{t('Currency')}</span></th>
              <th className="Platform"><span>{t('Platform')}</span></th>
              <th className="Date"><span>{t('Date')}</span></th>
              <th className='Actions'><span>{t('Actions')}</span></th>
            </tr>
          </thead>
          <tbody>
            {!isLoading && savingTransitionsList && savingTransitionsList.length === 0 ? 
              (
                <tr>
                  <td colSpan="3"><span>{t('No transitions')}</span></td>
                </tr>
              ) 
            : 
              (
                <>
                  {!isLoading && ( 
                    <>
                      {savingTransitionsList &&
                        savingTransitionsList.map((transition, index) => (
                          <React.Fragment key={transition.id}>
                            <tr
                              onClick={() => toggleRow(index)}
                              key={transition.id}
                              className={transition.isActive ? '' : 'inactive'} // Apply the 'inactive' class for inactive transitions
                            >
                              <td
                                className="Buy_or_Sell"
                                style={{
                                  color:
                                    transition.transitionType === 'DEPOSIT'
                                    ? '#00d27a'
                                    : '#ff3737',
                                }}
                              >
                                <span>
                                  {transition.transitionType === 'DEPOSIT'
                                    ? t('Deposit')
                                    : t('Withdrawal')}
                                </span>
                              </td>
                              <td
                                className="Amount"
                                style={{
                                  color: transition.amount < 0 ? '#ff3737' : '#00d27a',
                                }}
                              >
                                <span>{transition.amount}</span>
                              </td>
                              <td className="Currency">
                                <span>{transition.currencyCode}</span>
                              </td>
                              <td className='Platform'>
                                <div className='Content'>
                                  <div>
                                    <span>{transition.platform}</span>
                                  </div>
                                  <div>
                                    <img src={transition.platformIMG} alt="" />
                                  </div>
                                </div>
                              </td>
                              <td className="Date">
                                <span>{new Date(transition.date).toLocaleDateString()}</span>
                                <span>{new Date(transition.date).toLocaleTimeString()}</span>
                              </td>
                              <td className='Actions'>
                                {transition.isActive ? (
                                  // Render the disable button if the transition is active
                                  <button onClick={() => disableSavingTransition(transition.id)}>
                                    <div className="Delete_Icon" >
                                      <Icon.Trash Global_Color={Color.red}/>
                                    </div>
                                  </button>
                                  ) : (
                                  // Render the enable button if the transition is inactive
                                  <button onClick={() => enableSavingTransition(transition.id)}>
                                    <div className="Delete_Icon" >
                                      <Icon.Trash_Restore Global_Color={Color.red}/>
                                    </div>
                                  </button>
                                )}
                                <button>
                                  {/* Use an arrow function to pass the transition.id */}
                                  <div className="Modify_Icon" >
                                    <Icon.Settings Global_Color={Color.orange}/>
                                  </div>
                                </button>
                              </td>
                              {!transition.isActive && (
                                <>
                                  <div className="Cut_Line">
                                    <div></div>
                                  </div>
                                </>
                              )}
                            </tr>
                            {isRowExpanded(index) && (
                              <tr className="Extra_Content">
                                <td className='Description'>
                                  {transition.description ? (
                                    <>
                                      <div>
                                        <span>{transition.description}</span>
                                      </div>
                                    </>
                                  ) : (
                                    <button>{t('Add a description')}</button>
                                  )}
                                </td>
                                <td className="Date">
                                  <div>
                                    <span>{t('Date')} :</span>
                                  </div>
                                  <div>
                                    <span>{new Date(transition.date).toLocaleDateString()}</span>
                                    <span>{new Date(transition.date).toLocaleTimeString()}</span>
                                  </div>
                                </td>
                                <td className='Platform'>
                                  <div>
                                    <span>{t('Platform')} :</span>
                                  </div>
                                  <div className='Content'>
                                    <div>
                                      <span>{transition.platform}</span>
                                    </div>
                                    <div>
                                      <img src={transition.platformIMG} alt="" />
                                    </div>
                                  </div>
                                </td>
                                <td className='Actions'>
                                  <div>
                                    <span>{t('Actions')}</span>
                                  </div>
                                  <div>
                                    {transition.isActive ? (
                                      // Render the disable button if the transition is active
                                      <button onClick={() => disableSavingTransition(transition.id)}>
                                        <div className="Delete_Icon" >
                                          <Icon.Trash Global_Color={Color.red}/>
                                        </div>
                                      </button>
                                      ) : (
                                      // Render the enable button if the transition is inactive
                                      <button onClick={() => enableSavingTransition(transition.id)}>
                                        <div className="Delete_Icon" >
                                          <Icon.Trash_Restore Global_Color={Color.red}/>
                                        </div>
                                      </button>
                                    )}
                                    <button>
                                      {/* Use an arrow function to pass the transition.id */}
                                      <div className="Modify_Icon" >
                                        <Icon.Settings Global_Color={Color.orange}/>
                                      </div>
                                    </button>
                                  </div>
                                </td>
                              </tr>
                            )}
                          </React.Fragment>
                        )
                      )}
                    </>
                  )}   
                </>
              )
            }
          </tbody>
          {isLoading && 
            <tfoot>
              <tr>
                <td >
                    <LinearProgress />
                </td>
              </tr>
            </tfoot>
          }
        </table>
      </div>

      <div className="Filters">
        <div>
          <Pagination
            currentPage={currentPage} // Usar currentPage ao invés de page
            totalPages={Math.ceil( totalTransitions / perPage)}
            onPageChange={paginate}
          />
        </div>
      </div>
    </div>
  )
};

export default Savings_Transitions_History_Table;
