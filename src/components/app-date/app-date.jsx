


 const AppDate =()=>{
  return (
    <div className="date">
        <select name="day">
            <option value="День" hidden>День</option>
            <option value="1">1</option>
            <option value="2">2</option>
        </select>

        <select name="month">
            <option value="Месяц" hidden>Месяц</option>
            <option value="Январь">Январь</option>
            <option value="Февраль">Февраль</option>
        </select>

        <select name="year">
            <option value="Год" hidden>Год</option>
            <option value="2015">2015</option>
            <option value="2016">2016</option>
        </select>
    </div>
  )
}
export default AppDate;