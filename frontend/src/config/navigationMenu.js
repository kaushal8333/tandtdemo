export const navigation = {
    categories: [
      {
        id: 'skincare',
        name: 'Skincare',
        featured: [
          {
            name: 'New Arrivals',
            href: '/',
            imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-category-01.jpg',
            imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
          },
          {
            name: 'Basic Tees',
            href: '/',
            imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-category-02.jpg',
            imageAlt: 'Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.',
          },
        ],
        sections: [
          {
            id: 'cleanser',
            name: 'Cleanser',
            items: [
              { name: 'Cleanser', id:"cleanser", href: `{skincare/cleanser}` },
              // { name: 'Dresses', id:"women_dress", href: '#' },
            //   { name: 'Women Jeans', id: 'women_jeans' },
            //   { name: 'Lengha Choli', id: 'lengha_choli' },
            //   { name: 'Sweaters', id: 'sweater' },
            //   { name: 'T-Shirts', id: 't-shirt' },
            //   { name: 'Jackets', id: 'jacket' },
            //   { name: 'Gouns', id: 'gouns' },
            //   { name: 'Sarees', id: 'saree' },
            //   { name: 'Kurtas', id: 'kurtas' },
            ],
          },
          {
            id: 'moisturizer',
            name: 'Moisturizer',
             items: [
              { name: 'Moisturizer', id:"moisturizer", href: `{skincare/moisturizer}` },
            //   { name: 'Watches', id: 'watch' },
            //   { name: 'Wallets', id: 'wallet' },
            //   { name: 'Bags', id: 'bag' },
            //   { name: 'Sunglasses', id: 'sunglasse' },
            //   { name: 'Hats', id: 'hat' },
            //   { name: 'Belts', id: 'belt' },
            ],
          },
          {
            id: 'serum',
            name: 'Serum',
            items: [
              { name: 'Serum', id:"serum", href: `{skincare/serum}` },
            //   { name: 'Full Nelson', id: '#' },
            //   { name: 'My Way', id: '#' },
            //   { name: 'Re-Arranged', id: '#' },
            //   { name: 'Counterfeit', id: '#' },
            //   { name: 'Significant Other', id: '#' },
            ],
          },
        ],
      },
      {
        id: 'bathbodyhygiene',
        name: 'Bath, Body & Hygiene',
        featured: [
          {
            name: 'New Arrivals',
            id: '#',
            imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-04-detail-product-shot-01.jpg',
            imageAlt: 'Drawstring top with elastic loop closure and textured interior padding.',
          },
          {
            name: 'Artwork Tees',
            id: '#',
            imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-06.jpg',
            imageAlt:
              'Three shirts in gray, white, and blue arranged on table with same line drawing of hands and shapes overlapping on front of shirt.',
          },
        ],
        sections: [
          {
            id: 'bathshower',
            name: 'Bath & Shower',
            items: [
              
            //   { name: 'Mens Kurtas', id: 'mens_kurta' },
            //   { name: 'Shirt', id: 'shirt' },
            //   { name: 'Men Jeans', id: 'men_jeans' },
            //   { name: 'Sweaters', id: '#' },
            //   { name: 'T-Shirts', id: 't-shirt' },
            //   { name: 'Jackets', id: '#' },
            //   { name: 'Activewear', id: '#' },
              
            ],
          },
          {
            id: 'beardmoustache',
            name: 'Beard & Moustache',
            items: [
            //   { name: 'Watches', id: '#' },
            //   { name: 'Wallets', id: '#' },
            //   { name: 'Bags', id: '#' },
            //   { name: 'Sunglasses', id: '#' },
            //   { name: 'Hats', id: '#' },
            //   { name: 'Belts', id: '#' },
            ],
          },
          {
            id: 'brands',
            name: 'Brands',
            items: [
              { name: 'Re-Arranged', id: '#' },
              { name: 'Counterfeit', id: '#' },
              { name: 'Full Nelson', id: '#' },
              { name: 'My Way', id: '#' },
            ],
          },
        ],
      },
    ],
    pages: [
      { name: 'About', id: '/' },
    //   { name: 'Contact', id: '/' },
    ],
  }