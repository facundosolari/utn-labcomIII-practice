import { useState } from 'react'
import Table from './assets/components/Table';

function App() {

  const netIncomes = [{brand: "McDonalds", income: 1291283}, {brand: "Burger King", income: 1927361}, {brand: "KFC", income: 1098463}];
  return (
    <div>
      <Table netIncomes={netIncomes} />
    </div>

  )
}

export default App
