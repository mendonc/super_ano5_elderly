import React from 'react';
import { FlatList } from 'react-native';
import MedicamentoCard from './MedicamentoCard';

const MedicamentoList = ({ medicamentos, onEdit, onDelete }) => {
  return (
    <FlatList
      data={medicamentos}
      keyExtractor={(item, index) => (item.id ? item.id.toString() : index.toString())}
      renderItem={({ item }) => (
        <MedicamentoCard medicamento={item} onEdit={onEdit} onDelete={onDelete} />
      )}
    />
  );
};
export default MedicamentoList;