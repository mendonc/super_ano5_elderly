import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { FilterMenuContainer, FilterOption, ClearFiltersButton } from './styles';

export default function FilterMenu({ activeFilters, toggleFilter, clearFilters }) {
    return (
        <FilterMenuContainer>
            <FilterOption
                onPress={() => toggleFilter('favoritos')}
                style={{
                    backgroundColor: activeFilters.includes('favoritos') ? '#dbf0f7' : '#fff',
                }}
            >
                <Text>Favoritos</Text>
            </FilterOption>
            <FilterOption
                onPress={() => toggleFilter('acompanhamento')}
                style={{
                    backgroundColor: activeFilters.includes('acompanhamento') ? '#dbf0f7' : '#fff',
                }}
            >
                <Text>Em Acompanhamento</Text>
            </FilterOption>
            <ClearFiltersButton onPress={clearFilters}>
                <Text>Limpar Filtros</Text>
            </ClearFiltersButton>
        </FilterMenuContainer>
    );
}
