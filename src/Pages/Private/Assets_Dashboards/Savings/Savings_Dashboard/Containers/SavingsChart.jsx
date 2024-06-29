import React, { useEffect } from 'react';
import * as echarts from 'echarts';
import '../Savings_Dashboard.scss';
import { ThemeState } from '../../../../../../Contexts/Theme_Context';
import * as Color from '../../../../../../Styles/Colors';
import ReactECharts from "echarts-for-react";
import { useTranslation } from 'react-i18next';

const SavingsPieChart = ({ data, selectedCurrency }) => {

  const { t } = useTranslation();

  const { mode } = ThemeState();

  const labelColor = mode === 'dark_mode' ? Color.gray : Color.gray;

  const filteredData = data
    .map(platform => {
      const currency = platform.currencies.find(cur => cur.code === selectedCurrency);
      return currency ? { name: platform.platformName, value: currency.total } : null;
    })
    .filter(item => item !== null);

  const options = {
    tooltip: {
      trigger: 'item'
    },
    series: [
      {
        name: t('Savings'),
        width: 'auto',
        type: 'pie',
        radius: '50%',
        center: ['50%', '50%'],
        data: filteredData,
        animationType: 'scale',
        animationDelay: function (idx) {
          return Math.random() * 200;
        },
        label: {
          color: labelColor,
          fontSize: 15,
          fontWeight: 'bolder'
        }
      }
    ]
  };

  return (
    <div className='SavingsPieChart'>
        <ReactECharts
        option={options}
        opts={{ renderer: 'canvas' }}
        style={{ height: "100%", width: "100%" }}
      />
    </div>
  );
};

export default SavingsPieChart;