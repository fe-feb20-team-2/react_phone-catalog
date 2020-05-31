import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import Dropdown from '../Dropdown/Dropdown';
import './SelectPerPage.scss';

const options = ['4', '8', '16', 'all'].map(item => (
  {
    value: item,
    title: item,
  }
));

const SelectPerPage: React.FC = () => {
  const history = useHistory();
  const location = useLocation();

  const searchParams = new URLSearchParams(location.search);
  const perPage = searchParams.get('perPage') || 'all';
  const [dropdownOptionValue, setDropdownOptionValue] = useState<string>(`${perPage}`);

  const setSearchParams = (selectOptionValue: string) => {
    setDropdownOptionValue(selectOptionValue);
    searchParams.set('page', '1');
    searchParams.set('perPage', selectOptionValue);
    history.push({ search: searchParams.toString() });
  };

  return (
    <div className="phones__dropdown--sortItemInPage">
      <p className="title">Item on page</p>
      <Dropdown
        options={options}
        value={dropdownOptionValue}
        onChange={(selectOptionValue) => (
          setSearchParams(selectOptionValue)
        )}
      />
    </div>
  );
};

export default SelectPerPage;
