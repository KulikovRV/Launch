import React from 'react';

function InputCity({ setCity, city }) {
  return (
    <div className="d-flex flex-column justify-content-start string optional web_vacancies_search_form_city">
      <div className="input-group">

        <select className="form-control select optional" name="web_vacancies_search_form[level]" id="web_vacancies_search_form_level" value={city} onChange={(e) => setCity(e.target.value)}>
          <option value="">Город</option>
          <option value="Netherlands">Netherlands</option>
          <option value="Japan">Japan</option>
          <option value="Germany">Germany</option>
          <option value="UK">UK</option>
          <option value="Sweden">Sweden</option>
          <option value="Romania">Romania</option>
          <option value="Saint Petersburg">Saint Petersburg</option>
          {/* <option value="senior">Синьор</option> */}
        </select>
      </div>
    </div>
  );
}

export default InputCity;
