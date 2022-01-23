export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyCEn11qm6rGzCjbo51xxmR-fYj7HtuN1eI",
    authDomain: "stockcontroller-45498.firebaseapp.com",
    projectId: "stockcontroller-45498",
    storageBucket: "stockcontroller-45498.appspot.com",
    messagingSenderId: "434465998259",
    appId: "1:434465998259:web:7d1ef7d252383387dab7c6",
    measurementId: "G-SHV3LQ6L3M"
  },

  orderData: {
    address: {
      title: 'LDC JTI',
      name: 'COF',
      flatNumber: 115,
      street: 'Rodovia BR',
      locality: 'KM'
    },
    grandTotal: 7,
    products: [
      {
        images: ['apple.jpg'],
        name: 'Tanque',
        offer: 10,
        salePrice: 2.7,
        regularPrice: 3,
        units: 10
      },
      {
        images: ['biryani.jpg'],
        name: 'Armazém',
        offer: 20,
        salePrice: 12,
        regularPrice: 15,
        units: 5
      }
    ],
    status: 'Fechado',
    delivery_status: 'Aberto',
    createdAt: 'Julho 28, 2021 3:49 PM'
  }
  
}