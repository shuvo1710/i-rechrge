import React from 'react';
import Banner from '../../Components/Banner/Banner';
import HistoryTable from '../../Components/HistoryTable/HistoryTable';

const TransactionPage = () => {
    const data = {
        heading:'Transaction Histories',
        img:'Transaction.png',
        breadCrumb: [
            {
              title: 'Home',
              link: '/home'
            }, {
              title: 'Feature',
      
            }
          ]
      }

    return (
        <div>
            <Banner data={data}></Banner>
            <HistoryTable></HistoryTable>
        </div>
    );
};

export default TransactionPage;