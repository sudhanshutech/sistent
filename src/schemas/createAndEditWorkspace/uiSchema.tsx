const createAndEditWorkspaceUiSchema = {
  organization: {
    'ui:disabled': false,
    'ui:widget': 'select'
  },
  'ui:order': ['organization', 'name', 'description']
};

export default createAndEditWorkspaceUiSchema;
