import React, { useState } from 'react'
import { Container, Table } from 'react-bootstrap'

export default function Calendar() {
  const [date, setDate] = useState(new Date())

  const [year, setYear] = useState(2022)

  console.log({ date })
  return (
    <Container>
      <Table>
        <thead>
          <tr>
            <td>Monday</td>
            <td>Tuesday</td>
            <td>Wednesday</td>
            <td>Thursday</td>
            <td>Friday</td>
            <td>Saturday</td>
            <td>Sunday</td>
          </tr>
        </thead>
      </Table>
    </Container>
  )
}
