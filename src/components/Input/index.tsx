import React, {
  useEffect,
  useRef,
  useState,
  useCallback,
} from 'react';

import { useField } from '@unform/core';

import * as S from './styles';

export type InputProps = {
  name: string;
  icon?: React.ReactNode;
  rest?: React.InputHTMLAttributes<HTMLInputElement>;
  isFilled?: boolean;
  isFocused?: boolean;
  placeholder?: string;
};

const Input = ({ name, icon: Icon, placeholder, ...rest }: InputProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  const { fieldName, defaultValue, registerField } = useField(name);

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);

    setIsFilled(!!inputRef.current?.value);
  }, []);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  return (
    <S.Container isFilled={isFilled} isFocused={isFocused}>
      {Icon && <S.Icon size={20} />}

      <input
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        ref={inputRef}
        defaultValue={defaultValue}
        placeholder={placeholder}
        {...rest}
      />
    </S.Container>
  );
};

export default Input;
