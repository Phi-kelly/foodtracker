export class FoodService {
    getProducts() {
        return [
            {
                imageUrl: 'http://loremflickr.com/150/150/food?random = 1',
                productName: 'Product 1',
                releaseDate: 'Dec 21, 2016',
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit Sit numquam porro commodi iure aliquam. Deleniti libero nesciunt necessitatibus repellat eius nobis ad, molestiae vero fuga vel, nulla tempora.",
                rating: 4,
                numOfReviews: 2
            },
            {
                imageUrl: 'http://loremflickr.com/150/150/food?random = 2',
                productName: 'Product 2',
                releaseDate: 'May 1, 2014',
                description: ' Lorem ipsum dolor sit amet consectetur adipisicing elit Sit numquam porro commodi iure aliquam. Deleniti libero nesciunt necessitatibus repellat eius nobis ad, molestiae vero fuga vel, nulla tempora.',
                rating: 2,
                numOfReviews: 4
            },
            {
                imageUrl: 'http://loremflickr.com/150/150/food?random = 3',
                productName: 'Product 3',
                releaseDate: 'JAN 31, 2015',
                description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit Sit numquam porro commodi iure aliquam. Deleniti libero nesciunt necessitatibus repellat eius nobis ad, molestiae vero fuga vel, nulla tempora.',
                rating: 1,
                numOfReviews: 6
            }];
    }
}
