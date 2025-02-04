class Profile:
    def __init__(self, role: str):
        self.role = role
        self.permissions = self.get_permissions()

    def get_permissions(self):
        """Define as permissões de cada role"""
        return {
            "elderly": ["read_own_data", "add_symptom", "receive_notifications"],
            "guardian": ["read_own_data", "manage_elderly_data"],
            "doctor": ["read_patient_data", "prescribe_medications", "edit_medications"]
        }.get(self.role, [])

    def has_permission(self, action: str) -> bool:
        """Verifica se o perfil tem permissão para realizar a ação"""
        return action in self.permissions
