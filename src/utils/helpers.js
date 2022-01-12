export const getDaysInMonth = (month, year) => {
  // Dates are 1-indexed, so day 0 is the last day of the previous month
  return new Date(year, month + 1, 0).getDate()
}

export const getMonthStartingDay = (month, year) => {
  // return the day of the week for the first day of the month
  //! why are the months 0-indexed??
  return new Date(year, month - 1, 1).getDay()
}
