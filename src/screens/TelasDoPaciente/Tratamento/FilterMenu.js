import React from 'react';
import { Text } from 'react-native';
import { 
    FilterMenuContainer, 
    FilterOption, 
    ClearFiltersButton 
} from './styles';

export default function FilterMenu({ activeFilters, toggleFilter, clearFilters }) {
    return (
        <FilterMenuContainer>
            <FilterOption
                onPress={() => toggleFilter('favoritos')}
                active={activeFilters.includes('favoritos')}
            >
                <Text style={{ color: activeFilters.includes('favoritos') ? '#007BFF' : '#333' }}>
                    Favoritos
                </Text>
            </FilterOption>
            <FilterOption
                onPress={() => toggleFilter('acompanhamento')}
                active={activeFilters.includes('acompanhamento')}
            >
                <Text style={{ color: activeFilters.includes('acompanhamento') ? '#007BFF' : '#333' }}>
                    Em Acompanhamento
                </Text>
            </FilterOption>
            <ClearFiltersButton onPress={clearFilters}>
                <Text style={{ color: '#FF0000', fontWeight: 'bold' }}>
                    Limpar Filtros
                </Text>
            </ClearFiltersButton>
        </FilterMenuContainer>
    );
}
