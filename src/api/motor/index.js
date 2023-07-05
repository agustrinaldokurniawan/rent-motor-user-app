const listMotorDummy = [
  {
    image: [
      'https://www.yamaha-motor.co.id/uploads/products/new_product_model_image/2023060516583049219M97463.png',
      'https://www.yamaha-motor.co.id/uploads/products/new_product_model_image/2023060516583425162T13079.png',
      'https://www.yamaha-motor.co.id/uploads/products/new_product_model_image/2023060516584214065E66680.png',
      'https://www.yamaha-motor.co.id/uploads/products/new_product_model_image/2023060516584561388V75174.png'
    ],
    name: 'XMAX 250 Connected',
    transmision: 'Automatic',
    cc: '250',
    price: '250000',
    duration: 'hari',
    rating: '5'
  },
  {
    image: [
      'https://www.yamaha-motor.co.id/uploads/products/new_product_model_image/2023060516584561388V75174.png',
      'https://www.yamaha-motor.co.id/uploads/products/new_product_model_image/2023060516584561388V75174.png'
    ],
    name: 'All New Aerox155 Connected',
    transmision: 'Automatic',
    cc: '155',
    price: '200000',
    duration: 'hari',
    rating: '0'
  },
  {
    image: [
      'https://www.yamaha-motor.co.id/uploads/products/new_product_model_image/2022011817052662403P22289.png',

    ],
    name: 'R15M WGP 60th',
    transmision: 'Manual',
    cc: '155',
    price: '250000',
    duration: 'hari',
    rating: '4.5'
  },
  {
    image: [
      'https://www.yamaha-motor.co.id/uploads/products/new_product_model_image/2022060814240675868F74791.png'
    ],
    name: 'YZ125X',
    transmision: 'Manual',
    cc: '125',
    price: '150000',
    duration: 'hari',
    rating: '4'
  }
]
export const listMotorApi = (props) => {
  const { keyword } = props || {}
  const listMotor = listMotorDummy.filter((item) => keyword ? JSON.stringify(item).toLocaleLowerCase().includes(keyword) : item)
  return { listMotor }
}