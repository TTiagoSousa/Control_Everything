import React, { useState, useEffect } from 'react';
import * as Icon from '../../../Imports/icons';
import * as Color from '../../../Styles/Colors';
import './Index.scss';
import Global_Button from '../../../Components/Buttons/Global_Button/Global_Button';
import { useTranslation } from 'react-i18next';

const Index = () => {

  const { t } = useTranslation();

  function LondonClock({ offset }) {
    const [time, setTime] = useState(new Date());
    
    useEffect(() => {
      const timer = setInterval(() => {
        setTime(new Date(new Date().getTime() + offset * 3600 * 1000));
      }, 1000);
    
      return () => clearInterval(timer);
    }, [offset]);
    
    return (
      <div className='Clocks'>
        <div className='Icon'>
          <div className="LondonIcon">
            <Icon.BigBen Global_Color={Color.blue_darker}/>
          </div>
        </div>
        <h2>{t('London')}</h2>
        <p>{time.toLocaleTimeString()}</p>
      </div>
    );
  }

  function NewYorkClock({ offset }) {
    const [time, setTime] = useState(new Date());
    
    useEffect(() => {
      const timer = setInterval(() => {
        setTime(new Date(new Date().getTime() + offset * 3600 * 1000));
      }, 1000);
    
      return () => clearInterval(timer);
    }, [offset]);
    
    return (
      <div className='Clocks'>
        <div className='Icon'>
          <div className="NewYorkIcon">
            <Icon.Chrysler_Building Global_Color={Color.blue_darker}/>
          </div>
        </div>
        <h2>{t('New York')}</h2>
        <p>{time.toLocaleTimeString()}</p>
      </div>
    );
  }

  function TokyoClock({ offset }) {
    const [time, setTime] = useState(new Date());
    
    useEffect(() => {
      const timer = setInterval(() => {
        setTime(new Date(new Date().getTime() + offset * 3600 * 1000));
      }, 1000);
    
      return () => clearInterval(timer);
    }, [offset]);
    
    return (
      <div className='Clocks'>
        <div className='Icon'>
          <div className="TokyoIcon">
            <Icon.Building_Gate Global_Color={Color.blue_darker}/>
          </div>
        </div>
        <h2>{t('Tokyo')}</h2>
        <p>{time.toLocaleTimeString()}</p>
      </div>
    );
  }

  function SydneyClock({ offset }) {
    const [time, setTime] = useState(new Date());
    
    useEffect(() => {
      const timer = setInterval(() => {
        setTime(new Date(new Date().getTime() + offset * 3600 * 1000));
      }, 1000);
    
      return () => clearInterval(timer);
    }, [offset]);
    
    return (
      <div className='Clocks'>
        <div className='Icon'>
          <div className="SydneyIcon">
            <Icon.Building_House Global_Color={Color.blue_darker}/>
          </div>
        </div>
        <h2>{t('Sydney')}</h2>
        <p>{time.toLocaleTimeString()}</p>
      </div>
    );
  }
  
  return (
    <div className='Index'>
      <section className='Apresatation'>
        <div className='Content'>
          <div className='Clocks_Div'>
            <LondonClock offset={0} />
            <NewYorkClock offset={-5} />
            <TokyoClock offset={9} />
            <SydneyClock offset={11} />
          </div>
          <div className='Button'>
            <Global_Button 
              Text={t('Login or Register')}
              to={'Auth'}
            />
          </div>
        </div>
      </section>  
    </div>
  )
};

export default Index;