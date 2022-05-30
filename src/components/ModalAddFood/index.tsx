import { useRef } from 'react';
import { FiCheckSquare } from 'react-icons/fi';

import * as S from './styles';
import Modal from '../Modal';
import Input from '../Input';

import { Food } from '../../types';
import { FormHandles } from '@unform/core';

type ModalAddFoodProps = {
  isOpen: boolean,
  setIsOpen: () => void,
  handleAddFood: (data: Food) => void
}

const ModalAddFood = ({ isOpen, setIsOpen, handleAddFood }: ModalAddFoodProps) => {

  const formRef = useRef<FormHandles>(null);

  const handleSubmit = (data: Food) => {
    handleAddFood(data);
    setIsOpen();
  };

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <S.Form ref={formRef} onSubmit={handleSubmit}>
        <h1>Novo Prato</h1>
        <Input name="image" placeholder="Cole o link aqui" />

        <Input name="name" placeholder="Ex: Moda Italiana" />
        <Input name="price" placeholder="Ex: 19.90" />

        <Input name="description" placeholder="Descrição" />
        <button type="submit" data-testid="add-food-button">
          <p className="text">Adicionar Prato</p>
          <div className="icon">
            <FiCheckSquare size={24} />
          </div>
        </button>
      </S.Form>
    </Modal>
  );
}

export default ModalAddFood;
