import React from 'react'

function books() {
    return (
        <>
           <h1> MY BOOK LIST</h1>
            <table className='table'>
                <tr>
                    <th>Sl No.</th>
                    <th>Book Name</th>
                    <th>Click to Open</th>
                </tr>
                <tr>
                    <td>1</td>
                    <td>Head First Python</td>
                    <td >
                        Download
                    </td>
                </tr>


            </table>
        </>
    )
}

export default books;