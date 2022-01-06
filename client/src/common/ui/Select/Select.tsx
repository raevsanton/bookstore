import React from 'react';
import { useSelector } from 'react-redux';
import { selectTheme } from '../../../store/theme/selectors';

interface Props {
  value: string;
  options: Array<{
    value: string;
    label: string;
  }>;
  disabled?: boolean;
  placeholder: string;
  onChange?(value): void;
  [key: string]: unknown;
}

export const Select = (props: Props) => {
  const { darkMode } = useSelector(selectTheme);
  const { options, value, disabled, placeholder, onChange } = props;

  return (
    <select
      disabled={disabled}
      name="main__sort"
      className={`main__sort ${darkMode && 'dark-select'}`}
      onChange={onChange}
      value={value}
    >
      <option value="" label={placeholder} hidden />
      {options.map((option, index: number) => (
        <option value={option.value} label={option.label} key={index} />
      ))}
    </select>
  );
};
