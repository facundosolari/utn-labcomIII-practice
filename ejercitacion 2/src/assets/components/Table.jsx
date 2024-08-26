import { useState } from 'react'
import PropTypes from "prop-types"

const Table = ({ netIncomes }) => {

    const totalIncome = netIncomes.reduce((accumulator, netIncomes) => {
        return accumulator + netIncomes.income;
    }, 0);

    const promIncome = totalIncome / netIncomes.length;
    return (
        <div>
            <table>
                <tbody>
                    {netIncomes.map(({ brand, income }, index) => (
                        <tr key={index}>
                            <td>{brand}</td>
                            <td>{income}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <p>{promIncome}</p>
        </div>

    )
};

Table.propTypes = {
    brand: PropTypes.string,
    income: PropTypes.number
};

export default Table