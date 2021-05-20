export function getPlantInformation() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          name: 'Monstera',
          light: 9,
          water: 6,
          toxic: true,
          air: 9,
          repot: '2 years'
        })
      }, 1500)
    })
  }