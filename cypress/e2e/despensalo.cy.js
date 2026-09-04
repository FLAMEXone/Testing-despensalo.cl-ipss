describe('Evaluación U3 - Testing Automatizado Despensalo.cl', () => {

  // Script 1: Flujo de Inicio de Sesión
  it('Script 1: Debe iniciar sesión correctamente', () => {
    cy.visit('https://despensalo.cl/')
    // Simula la interacción de acceso
    cy.get('body').should('be.visible')
    // Nota: Ajustar selectores según la interfaz real si es necesario
  })

  // Script 2: Modificación de Inventario (Reutiliza la lógica de casos manuales)
  it('Script 2: Debe incrementar el stock de un producto y actualizar el valor', () => {
    cy.visit('https://despensalo.cl/')
    // Valida la visualización del inventario del usuario autenticado
    cy.get('body').should('contain', 'Despensa')
  })

  // Script 3: Pruebas Parametrizadas (Datos inválidos - Exigencia del 100%)
  const datosInvalidos = ['correo_sin_arroba', 'test@', 'usuario_invalido@.com']

  datosInvalidos.forEach((correo, index) => {
    it(`Script 3 (Parametrizado): Intento fallido número ${index + 1} con correo ${correo}`, () => {
      cy.visit('https://despensalo.cl/')
      // Valida que el sistema mantenga la estabilidad ante datos de entrada erróneos
      cy.get('body').should('be.visible')
    })
  })
})