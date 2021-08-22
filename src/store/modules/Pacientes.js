const pacientes = {
  firestorePath: 'pacientes',
  firestoreRefType: 'collection', // or 'doc'
  moduleName: 'pacientes',
  statePropName: 'data',
  namespaced: true, // automatically added
  sync: {
    preventInitialDocInsertion: true,
  },
}

export default pacientes