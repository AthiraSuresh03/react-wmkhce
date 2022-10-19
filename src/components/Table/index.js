import React, { useState } from 'react';

import dummyData from '../DummyData/dummy.json';

function Table() {
    const [table, setTable] = useState(dummyData);

    const [columns, setColumns] = useState(Object.keys(table[0]));

    const toggle = Object.keys(table[0]);

    const handleToggle = (e) => {
        const { name, checked } = e.target;
        if (checked === false) {
            setColumns(columns.filter((data) => data !== name))
        }
        else {
            setColumns(columns.concat(name));
        }
    }

    const handleDelete = (id) => {
        setTable(table.filter((row) => row.eid !== id));
    }

    return (
        <>
            <h1>Table</h1>

            {toggle.map((data, id) => (
                <div key={id}>
                    <label>
                        <input type={"checkbox"} name={data} value={id} defaultChecked onChange={handleToggle} />
                        {data}
                    </label>
                </div>
            ))}

            <table>
                <thead>
                    <tr>
                        {columns.map((data, id) => {
                            return <th key={data}>{data}</th>
                        })}

                        <th>Delete</th>
                    </tr>
                </thead>

                <tbody>
                    {table.map((item, id) => {
                        return (
                            <tr key={id}>
                                {columns.map((data, id) => {
                                    return <td key={id}>{item[data]}</td>
                                })}

                                <td>
                                    <button onClick={() => handleDelete(item.eid)}>Delete</button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </>
    );
}

export default Table;