import React, { useEffect, useState } from 'react'
import { Container, Table } from 'react-bootstrap'
import { getDaysInMonth, getMonthStartingDay } from './../utils/helpers'
import { WEEKDAYS, MONTHS } from '../utils/constants'

export default function Calendar() {
  const [date, setDate] = useState(new Date())

  const [month, setMonth] = useState(date.getMonth())
  const [year, setYear] = useState(date.getFullYear())
  const [days, setDays] = useState([])

  console.log(days)

  useEffect(() => {})

  return (
    <Container>
      <Table>
        <thead>
          <tr>
            {WEEKDAYS.map((day, index) => {
              return <th key={index}>{day}</th>
            })}
          </tr>
        </thead>
        <tbody></tbody>
      </Table>
    </Container>
  )
}
