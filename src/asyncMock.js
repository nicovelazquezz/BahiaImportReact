import img1 from './images/product-1.jpg'
import img1full from './images/product-1-full.jpg'
import img2 from './images/product-2.jpg'
import img2full from './images/product-2-full.jpg'
import img3 from './images/product-3.jpg'
import img3full from './images/product-3-full.jpg'
import img4 from './images/product-4.jpg'
import img4full from './images/product-4-full.jpg'
import img5 from './images/product-5.jpg'
import img5full from './images/product-5-full.jpg'
import img6 from './images/product-6.jpg'
import img6full from './images/product-6-full.jpg'
import img7 from './images/product-7.jpg'
import img7full from './images/product-7-full.jpg'
import img8 from './images/product-8.jpg'
import img8full from './images/product-8-full.jpg'

const description = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"

const products = [
        {
            id: '1',
            name: 'Apple - Apple Watch Series 3 White Sports Band',
            category: 'Watch',
            price: 300,
            description: description,
            stock: 15,
            img: img1,
            full: img1full           
        },
        {
            id: '2',
            name: 'Baseus - Wireless In-Ear Black Edition',
            category: 'Earphones',
            price: 200,
            description: description,
            stock: 20,
            img: img2,
            full: img2full  
        },
        {
            id: '3',
            name: 'iPhone 13 Pro Max',
            category: 'Cellphone',
            price: 990,
            description: description,
            stock: 5,
            img: img3,
            full: img3full  
        },
        {
            id: '4',
            name: 'GoPro - Camera GoPro Hero 7 Black',
            category: 'Camera',
            price: 750,
            description: description,
            stock: 10,
            img: img4,
            full: img4full  
        },
        {
            id: '5',
            name: 'Apple Watch Series 8',
            category: 'Watch',
            price: 750,
            description: description,
            stock: 10,
            img: img5,
            full: img5full  
        },
        {
            id: '6',
            name: 'Minor III * Marshall',
            category: 'Earphones',
            price: 300,
            description: description,
            stock: 5,
            img: img6,
            full: img6full  
        },
        {
            id: '7',
            name: 'iPhone 14 Pro Max ',
            category: 'Cellphone',
            price: 1500,
            description: description,
            stock: 3,
            img: img7,
            full: img7full  
        },
        {
            id: '8',
            name: 'Sony Alpha ZV-E10',
            category: 'Camera',
            price: 1750,
            description: description,
            stock: 5,
            img: img8,
            full: img8full  
        }
]


export const getProducts = (categoryId) => {
    
    return new Promise( (resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 500);
    })
}

export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === categoryId))
        }, 500)
    })
}

export const getProductById = (id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === id))            
        }, 500)
    })
}