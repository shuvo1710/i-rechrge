import React from 'react';
import { Container } from 'react-bootstrap';
import "./HistoryTable.css"

const HistoryTable = () => {
    return (
        <section>
            <Container className='px-0'>
                <div className='transactionContainer'>
                    <div className='transactionBody'>
                        <h2>Transaction History</h2>
                        <div>
                            <table className='historyTable'>
                                <thead className='bgThead'>
                                    <tr>
                                        <th>TRX</th>
                                        <th>AMOUNT</th>
                                        <th>CHARGE</th>
                                        <th>POST BALANCE</th>
                                        <th>DETAILS</th>
                                        <th>DATE</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>Mark</td>
                                        <td>Otto</td>
                                        <td>@mdo</td>
                                        <td>@mdo</td>
                                        <td>@mdo</td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>Mark</td>
                                        <td>Otto</td>
                                        <td>@mdo</td>
                                        <td>@mdo</td>
                                        <td>@mdo</td>
                                    </tr>
                                </tbody>
                            </table>

                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default HistoryTable;