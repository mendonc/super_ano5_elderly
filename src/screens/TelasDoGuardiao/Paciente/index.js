import React, { useState } from 'react';
import { Container, SectionTitleContainer, SectionTitle, IconContainer, SearchInput } from './styles';
import Header from '../../../components/ComponentsGuardiao/Header';
import PesquisaIcon from '../../../assets/Pesquisa.svg';
import FiltroIcon from '../../../assets/Filtro.svg';
import PatientList from './PatientList';
import FilterMenu from './FilterMenu';
import { initialPatients } from './patientData';

export default () => {
    const [patients, setPatients] = useState(initialPatients);
    const [filteredPatients, setFilteredPatients] = useState(initialPatients);
    const [searchText, setSearchText] = useState('');
    const [isSearching, setIsSearching] = useState(false);
    const [filterVisible, setFilterVisible] = useState(false);
    const [activeFilters, setActiveFilters] = useState([]);

    // Alterna o estado favorito de um paciente
    const toggleFavorite = (id) => {
        const updatedPatients = patients.map((patient) =>
            patient.id === id ? { ...patient, isFavorite: !patient.isFavorite } : patient
        );
        setPatients(updatedPatients);
        setFilteredPatients(updatedPatients);
    };

    // Pesquisa por nome de paciente
    const handleSearch = (text) => {
        setSearchText(text);
        const filtered = patients.filter((patient) =>
            patient.name.toLowerCase().includes(text.toLowerCase())
        );
        setFilteredPatients(filtered);
    };

    // Atualiza os filtros ativos
    const toggleFilter = (filterType) => {
        let updatedFilters = [...activeFilters];
        if (updatedFilters.includes(filterType)) {
            updatedFilters = updatedFilters.filter((filter) => filter !== filterType);
        } else {
            updatedFilters.push(filterType);
        }
        setActiveFilters(updatedFilters);

        // Aplica os filtros
        let filtered = patients;
        if (updatedFilters.includes('favoritos')) {
            filtered = filtered.filter((patient) => patient.isFavorite);
        }
        setFilteredPatients(filtered);
    };

    // Limpa todos os filtros
    const clearFilters = () => {
        setActiveFilters([]);
        setFilteredPatients(patients);
    };

    return (
        <Container>
            <Header />

            {/* Título e Ícones */}
            <SectionTitleContainer>
                <SectionTitle>Pacientes</SectionTitle>
                <IconContainer>
                    <PesquisaIcon width={20} height={20} onPress={() => setIsSearching(!isSearching)} />
                    <FiltroIcon width={20} height={20} style={{ marginLeft: 15 }} onPress={() => setFilterVisible(!filterVisible)} />
                </IconContainer>
            </SectionTitleContainer>

            {/* Campo de Pesquisa */}
            {isSearching && (
                <SearchInput
                    placeholder="Digite o nome do paciente..."
                    value={searchText}
                    onChangeText={(text) => handleSearch(text)}
                />
            )}

            {/* Menu de Filtro */}
            {filterVisible && (
                <FilterMenu
                    activeFilters={activeFilters}
                    toggleFilter={toggleFilter}
                    clearFilters={clearFilters}
                />
            )}

            {/* Lista de Pacientes */}
            <PatientList
                patients={filteredPatients}
                toggleFavorite={toggleFavorite}
            />
        </Container>
    );
};
