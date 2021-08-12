const clientes = {
  firestorePath: 'clientes',
  firestoreRefType: 'collection', // or 'doc'
  moduleName: 'clientes',
  statePropName: 'data',
  namespaced: true, // automatically added
  sync: {
    preventInitialDocInsertion: true,
  },
}

export default clientes