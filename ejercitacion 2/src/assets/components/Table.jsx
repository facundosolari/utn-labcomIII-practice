import { useState } from 'react'
import PropTypes from "prop-types"

const Table = ({ netIncomes }) => {

    const totalIncome = netIncomes.reduce((total, netIncomes) => {
        return total + netIncomes.income;
    }, 0);

    const promIncome = totalIncome / netIncomes.length;
    return (
        <div>
            <table>
                <tbody>
                    {netIncomes.map(({brand, income}) => (
                        <tr>
                            <td>{brand}</td>
                            <td>{income}</td>
                        </tr>
                    ))}
                </tbody>
                <p>Prom: {promIncome}</p>
            </table>
            
        </div>

    )
};

Table.propTypes = {
    netIncomes: PropTypes.array,
};

export default Table