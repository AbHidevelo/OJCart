const products = [
    {
       title: "iPhone 9",
      description: "An apple mobile which is nothing like apple",
      price: 549,
      discountPercentage: 12.96,
      rating: Number(4.69),
      stock: 94,
      brand: "Apple",
      category: "smartphones",
      thumbnail: "https://cdn.dummyjson.com/product-images/1/thumbnail.jpg",
      images:  "https://cdn.dummyjson.com/product-images/1/1.jpg", 
       numReview : 2,
    },
    {
      title: "iPhone X",
      description: "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
      price: 899,
      discountPercentage: 17.94,
      rating: Number(4.44),
      stock: 34,
      brand: "Apple",
      category: "smartphones",
      thumbnail: "https://cdn.dummyjson.com/product-images/2/thumbnail.jpg",
      images:  "https://cdn.dummyjson.com/product-images/2/1.jpg", 
   numReview : 2,
    },
    {
      title: "Samsung Universe 9",
      description: "Samsung's new variant which goes beyond Galaxy to the Universe",
      price: 1249,
      discountPercentage: 15.46,
      rating: Number(4.09),
      stock: 36,
      brand: "Samsung",
      category: "smartphones",
      thumbnail: "https://cdn.dummyjson.com/product-images/3/thumbnail.jpg",
      images:  "https://cdn.dummyjson.com/product-images/3/1.jpg", 
   numReview : 2,
    },
    {
      title: "OPPOF19",
      description: "OPPO F19 is officially announced on April 2021.",
      price: 280,
      discountPercentage: 17.91,
      rating: Number(4.3),
      stock: 123,
      brand: "OPPO",
      category: "smartphones",
      thumbnail: "https://cdn.dummyjson.com/product-images/4/thumbnail.jpg",
      images:  "https://cdn.dummyjson.com/product-images/4/1.jpg", 
     numReview : 2,
    },
    {
      title: "Huawei P30",
      description: "Huawei’s re-badged P30 Pro New Edition was officially unveiled yesterday in Germany and now the device has made its way to the UK.",
      price: 499,
      discountPercentage: 10.58,
      rating: Number(4.09),
      stock: 32,
      brand: "Huawei",
      category: "smartphones",
      thumbnail: "https://cdn.dummyjson.com/product-images/5/thumbnail.jpg",
      images:  "https://cdn.dummyjson.com/product-images/5/1.jpg", 
   numReview : 2,
    },
    {
      title: "MacBook Pro",
      description: "MacBook Pro 2021 with mini-LED display may launch between September, November",
      price: 1749,
      discountPercentage: 11.02,
      rating: Number(4.57),
      stock: 83,
      brand: "Apple",
      category: "laptops",
      thumbnail: "https://cdn.dummyjson.com/product-images/6/thumbnail.png",
      images:  "https://cdn.dummyjson.com/product-images/6/1.png", 
   numReview : 2,
    },
    {
      title: "Samsung Galaxy Book",
      description: "Samsung Galaxy Book S (2020) Laptop With Intel Lakefield Chip, 8GB of RAM Launched",
      price: 1499,
      discountPercentage: 4.15,
      rating: Number(4.25),
      stock: 50,
      brand: "Samsung",
      category: "laptops",
      thumbnail: "https://cdn.dummyjson.com/product-images/7/thumbnail.jpg",
      images:  "https://cdn.dummyjson.com/product-images/7/1.jpg", 
     numReview : 2,
    },
    {
      title: "Microsoft Surface Laptop 4",
      description: "Style and speed. Stand out on HD v_ideo calls backed by Studio Mics. Capture _ideas on the vibrant touchscreen.",
      price: 1499,
      discountPercentage: 10.23,
      rating: Number(4.43),
      stock: 68,
      brand: "Microsoft Surface",
      category: "laptops",
      thumbnail: "https://cdn.dummyjson.com/product-images/8/thumbnail.jpg",
      images:  "https://cdn.dummyjson.com/product-images/8/1.jpg", 
     numReview : 2,
    },
    {
      title: "Infinix INBOOK",
      description: "Infinix Inbook X1 Ci3 10th 8GB 256GB 14 Win10 Grey – 1 Year Warranty",
      price: 1099,
      discountPercentage: 11.83,
      rating: Number(4.54),
      stock: 96,
      brand: "Infinix",
      category: "laptops",
      thumbnail: "https://cdn.dummyjson.com/product-images/9/thumbnail.jpg",
      images:  "https://cdn.dummyjson.com/product-images/9/1.jpg", 
     numReview : 2,
    },
    {
      
      title: "HP Pavilion 15-DK1056WM",
      description: "HP Pavilion 15-DK1056WM Gaming Laptop 10th Gen Core i5, 8GB, 256GB SSD, GTX 1650 4GB, Windows 10",
      price: 1099,
      discountPercentage: 6.18,
      rating: Number(4.43),
      stock: 89,
      brand: "HP Pavilion",
      category: "laptops",
      thumbnail: "https://cdn.dummyjson.com/product-images/10/thumbnail.jpeg",
      images:  "https://cdn.dummyjson.com/product-images/10/1.jpg", 
     numReview : 2,
    },
    {
      
      title: "perfume Oil", 
      description: "Mega Discount, Impression of Acqua Di Gio by GiorgioArmani concentrated attar perfume Oil",
      price: 13,
      discountPercentage: 8.4,
      rating: Number(4.26),
      stock: 65,
      brand: "Impression of Acqua Di Gio",
      category: "fragrances",
      thumbnail: "https://cdn.dummyjson.com/product-images/11/thumbnail.jpg",
      images:  "https://cdn.dummyjson.com/product-images/11/1.jpg", 
     numReview : 2,
    },
    {
      
      title: "Brown Perfume",
      description: "Royal_Mirage Sport Brown Perfume for Men & Women - 120ml",
      price: 40,
      discountPercentage: 15.66,
      rating: Number(4),
      stock: 52,
      brand: "Royal_Mirage",
      category: "fragrances",
      thumbnail: "https://cdn.dummyjson.com/product-images/12/thumbnail.jpg",
      images:  "https://cdn.dummyjson.com/product-images/12/1.jpg", 
     numReview : 2,
    },
    {
      
      title: "Fog Scent Xpressio Perfume",
      description: "Product details of Best Fog Scent Xpressio Perfume 100ml For Men cool long lasting perfumes for Men",
      price: 13,
      discountPercentage: 8.14,
      rating: Number(4.59),
      stock: 61,
      brand: "Fog Scent Xpressio",
      category: "fragrances",
      thumbnail: "https://cdn.dummyjson.com/product-images/13/thumbnail.webp",
      images:  "https://cdn.dummyjson.com/product-images/13/1.jpg", 
     numReview : 2,
    },
    {
      
      title: "Non-Alcoholic Concentrated Perfume Oil",
      description: "Original Al Munakh® by Mahal Al Musk | Our Impression of Climate | 6ml Non-Alcoholic Concentrated Perfume Oil",
      price: 120,
      discountPercentage: 15.6,
      rating: Number(4.21),
      stock: 114,
      brand: "Al Munakh",
      category: "fragrances",
      thumbnail: "https://cdn.dummyjson.com/product-images/14/thumbnail.jpg",
      images:  "https://cdn.dummyjson.com/product-images/14/1.jpg", 
     numReview : 2,
    },
    {
      
      title: "Eau De Perfume Spray",
      description: "Genuine  Al-Rehab spray perfume from UAE/Saudi Arabia/Yemen High Quality",
      price: 30,
      discountPercentage: 10.99,
      rating: Number(4.7),
      stock: 105,
      brand: "Lord - Al-Rehab",
      category: "fragrances",
      thumbnail: "https://cdn.dummyjson.com/product-images/15/thumbnail.jpg",
      images:  "https://cdn.dummyjson.com/product-images/15/1.jpg", 
     numReview : 2,
    },
    {
      
      title: "Hyaluronic Ac_id Serum",
      description: "L'OrÃ©al Paris introduces Hyaluron Expert Replumping Serum formulated with 1.5% Hyaluronic Ac_id",
      price: 19,
      discountPercentage: 13.31,
      rating: Number(4.83),
      stock: 110,
      brand: "L'Oreal Paris",
      category: "skincare",
      thumbnail: "https://cdn.dummyjson.com/product-images/16/thumbnail.jpg",
      images:  "https://cdn.dummyjson.com/product-images/16/1.png", 
       numReview : 2,    
    },
    {
      
      title: "Tree Oil 30ml",
      description: "Tea tree oil contains a number of compounds, including terpinen-4-ol, that have been shown to kill certain bacteria,",
      price: 12,
      discountPercentage: 4.09,
      rating: Number(4.52),
      stock: 78,
      brand: "Hemani Tea",
      category: "skincare",
      thumbnail: "https://cdn.dummyjson.com/product-images/17/thumbnail.jpg",
      images:  "https://cdn.dummyjson.com/product-images/17/1.jpg", 
     numReview : 2,
    },
    {
      
      title: "Oil Free Moisturizer 100ml",
      description: "Dermive Oil Free Moisturizer with SPF 20 is specifically formulated with ceram_ides, hyaluronic ac_id & sunscreen.",
      price: 40,
      discountPercentage: 13.1,
      rating: Number(4.56),
      stock: 88,
      brand: "Dermive",
      category: "skincare",
      thumbnail: "https://cdn.dummyjson.com/product-images/18/thumbnail.jpg",
      images:  "https://cdn.dummyjson.com/product-images/18/1.jpg", 
     numReview : 2,
    },
    {
      
      title: "Skin Beauty Serum.",
      description: "Product name: rorec collagen hyaluronic ac_id white face serum riceNet weight: 15 m",
      price: 46,
      discountPercentage: 10.68,
      rating: Number(4.42),
      stock: 54,
      brand: "ROREC White Rice",
      category: "skincare",
      thumbnail: "https://cdn.dummyjson.com/product-images/19/thumbnail.jpg",
      images:  "https://cdn.dummyjson.com/product-images/19/1.jpg", 
     numReview : 2,
    },
    {
      
      title: "Freckle Treatment Cream- 15gm",
      description: "Fair & Clear is Pakistan's only pure Freckle cream which helpsfade Freckles, Darkspots and pigments. Mercury level is 0%, so there are no s_ide effects.",
      price: 70,
      discountPercentage: 16.99,
      rating: Number(4.06),
      stock: 140,
      brand: "Fair & Clear",
      category: "skincare",
      thumbnail: "https://cdn.dummyjson.com/product-images/20/thumbnail.jpg",
      images:  "https://cdn.dummyjson.com/product-images/20/1.jpg", 
     numReview : 2,
    },
    {
      
      title: "- Daal Masoor 500 grams",
      description: "Fine quality Branded Product Keep in a cool and dry place",
      price: 20,
      discountPercentage: 4.81,
      rating: Number(4.44),
      stock: 133,
      brand: "Saaf & Khaas",
      category: "groceries",
      thumbnail: "https://cdn.dummyjson.com/product-images/21/thumbnail.png",
      images:  "https://cdn.dummyjson.com/product-images/21/1.png", 
     numReview : 2,
    },
    {
      
      title: "Elbow Macaroni - 400 gm",
      description: "Product details of Bake Parlor Big Elbow Macaroni - 400 gm",
      price: 14,
      discountPercentage: 15.58,
      rating: Number(4.57),
      stock: 146,
      brand: "Bake Parlor Big",
      category: "groceries",
      thumbnail: "https://cdn.dummyjson.com/product-images/22/thumbnail.jpg",
      images:  "https://cdn.dummyjson.com/product-images/22/1.jpg", 
     numReview : 2,
    },
    {
      
      title: "Orange Essence Food Flavou",
      description: "Specifications of Orange Essence Food Flavour For Cakes and Baking Food Item",
      price: 14,
      discountPercentage: 8.04,
      rating: Number(4.85),
      stock: 26,
      brand: "Baking Food Items",
      category: "groceries",
      thumbnail: "https://cdn.dummyjson.com/product-images/23/thumbnail.jpg",
      images:  "https://cdn.dummyjson.com/product-images/23/1.jpg", 
     numReview : 2,
    },
    {
      
      title: "cereals muesli fruit nuts",
      description: "original fauji cereal muesli 250gm box pack original fauji cereals muesli fruit nuts flakes breakfast cereal break fast faujicereals cerels cerel foji fouji",
      price: 46,
      discountPercentage: 16.8,
      rating: Number(4.94),
      stock: 113,
      brand: "fauji",
      category: "groceries",
      thumbnail: "https://cdn.dummyjson.com/product-images/24/thumbnail.jpg",
      images:  "https://cdn.dummyjson.com/product-images/24/1.jpg", 
     numReview : 2,
    },
    {
      
      title: "Gulab Powder 50 Gram",
      description: "Dry Rose Flower Powder Gulab Powder 50 Gram • Treats Wounds",
      price: 70,
      discountPercentage: 13.58,
      rating: Number(4.87),
      stock: 47,
      brand: "Dry Rose",
      category: "groceries",
      thumbnail: "https://cdn.dummyjson.com/product-images/25/thumbnail.jpg",
      images:  "https://cdn.dummyjson.com/product-images/25/1.png", 
     numReview : 2,
    },
    {
      
      title: "Plant Hanger For Home",
      description: "Boho Decor Plant Hanger For Home Wall Decoration Macrame Wall Hanging Shelf",
      price: 41,
      discountPercentage: 17.86,
      rating: Number(4.08),
      stock: 131,
      brand: "Boho Decor",
      category: "home-decoration",
      thumbnail: "https://cdn.dummyjson.com/product-images/26/thumbnail.jpg",
      images:  "https://cdn.dummyjson.com/product-images/26/1.jpg", 
     numReview : 2,
    },
    {
      
      title: "Flying Wooden Bird",
      description: "Package Include 6 Birds with Adhesive Tape Shape: 3D Shaped Wooden Birds Material: Wooden MDF, Laminated 3.5mm",
      price: 51,
      discountPercentage: 15.58,
      rating: Number(4.41),
      stock: 17,
      brand: "Flying Wooden",
      category: "home-decoration",
      thumbnail: "https://cdn.dummyjson.com/product-images/27/thumbnail.webp",
      images:  "https://cdn.dummyjson.com/product-images/27/1.jpg", 
     numReview : 2,
    },
    {
      
      title: "3D Embellishment Art Lamp",
      description: "3D led lamp sticker Wall sticker 3d wall art light on/off button  cell operated (included)",
      price: 20,
      discountPercentage: 16.49,
      rating: Number(4.82),
      stock: 54,
      brand: "LED Lights",
      category: "home-decoration",
      thumbnail: "https://cdn.dummyjson.com/product-images/28/thumbnail.jpg",
      images:  "https://cdn.dummyjson.com/product-images/28/1.jpg", 
     numReview : 2,
    },
    {
      
      title: "Handcraft Chinese style",
      description: "Handcraft Chinese style art luxury palace hotel villa mansion home decor ceramic vase with brass fruit plate",
      price: 60,
      discountPercentage: 15.34,
      rating: Number(4.44),
      stock: 7,
      brand: "luxury palace",
      category: "home-decoration",
      thumbnail: "https://cdn.dummyjson.com/product-images/29/thumbnail.webp",
      images:  "https://cdn.dummyjson.com/product-images/29/1.jpg", 
     numReview : 2,
    },
    {
      
      title: "Key Holder",
      description: "Attractive DesignMetallic materialFour key hooksReliable & DurablePremium Quality",
      price: 30,
      discountPercentage: 2.92,
      rating: Number(4.92),
      stock: 54,
      brand: "Golden",
      category: "home-decoration",
      thumbnail: "https://cdn.dummyjson.com/product-images/30/thumbnail.jpg",
      images:  "https://cdn.dummyjson.com/product-images/30/1.jpg", 
     numReview : 2,
    },
    {
      
      title: "Mornadi Velvet Bed",
      description: "Mornadi Velvet Bed Base with Headboard Slats Support Classic Style Bedroom Furniture Bed Set",
      price: 40,
      discountPercentage: 17,
      rating: Number(4.16),
      stock: 140,
      brand: "Furniture Bed Set",
      category: "furniture",
      thumbnail: "https://cdn.dummyjson.com/product-images/31/thumbnail.jpg",
      images:  "https://cdn.dummyjson.com/product-images/31/1.jpg", 
     numReview : 2,
    },
    {
      
      title: "Sofa for Coffe Cafe",
      description: "Ratttan Outdoor furniture Set Waterproof  Rattan Sofa for Coffe Cafe",
      price: 50,
      discountPercentage: 15.59,
      rating: Number(4.74),
      stock: 30,
      brand: "Ratttan Outdoor",
      category: "furniture",
      thumbnail: "https://cdn.dummyjson.com/product-images/32/thumbnail.jpg",
      images:  "https://cdn.dummyjson.com/product-images/32/1.jpg", 
     numReview : 2,
    },
    {
      
      title: "3 Tier Corner Shelves",
      description: "3 Tier Corner Shelves | 3 PCs Wall Mount Kitchen Shelf | Floating Bedroom Shelf",
      price: 700,
      discountPercentage: 17,
      rating: Number(4.31),
      stock: 106,
      brand: "Kitchen Shelf",
      category: "furniture",
      thumbnail: "https://cdn.dummyjson.com/product-images/33/thumbnail.jpg",
      images:  "https://cdn.dummyjson.com/product-images/33/1.jpg", 
     numReview : 2,
    },
    {
      
      title: "Plastic Table",
      description: "V\ufeffery good quality plastic table for multi purpose now in reasonable price",
      price: 50,
      discountPercentage: 4,
      rating: Number(4.01),
      stock: 136,
      brand: "Multi Purpose",
      category: "furniture",
      thumbnail: "https://cdn.dummyjson.com/product-images/34/thumbnail.jpg",
      images:  "https://cdn.dummyjson.com/product-images/34/1.jpg", 
     numReview : 2,
    },
    {
      
      title: "3 DOOR PORTABLE",
      description: "Material: Stainless Steel and Fabric  Item Size: 110 cm x 45 cm x 175 cm Package Contents: 1 Storage Wardrobe",
      price: 41,
      discountPercentage: 7.98,
      rating: Number(4.06),
      stock: 68,
      brand: "AmnaMart",
      category: "furniture",
      thumbnail: "https://cdn.dummyjson.com/product-images/35/thumbnail.jpg",
      images:  "https://cdn.dummyjson.com/product-images/35/1.jpg", 
     numReview : 2,
    },
    {
      
      title: "Sleeve Shirt Womens",
      description: "Cotton Sol_id Color Professional Wear Sleeve Shirt Womens Work Blouses Wholesale Clothing Casual Plain Custom Top OEM Customized",
      price: 90,
      discountPercentage: 10.89,
      rating: Number(4.26),
      stock: 39,
      brand: "Professional Wear",
      category: "tops",
      thumbnail: "https://cdn.dummyjson.com/product-images/36/thumbnail.jpg",
      images:  "https://cdn.dummyjson.com/product-images/36/1.jpg", 
     numReview : 2,
    },
    {
      
      title: "ank Tops for Womens/Girls",
      description: "PACK OF 3 CAMISOLES ,VERY COMFORTABLE SOFT COTTON STUFF, COMFORTABLE IN ALL FOUR SEASONS",
      price: 50,
      discountPercentage: 12.05,
      rating: Number(4.52),
      stock: 107,
      brand: "Soft Cotton",
      category: "tops",
      thumbnail: "https://cdn.dummyjson.com/product-images/37/thumbnail.jpg",
      images:  "https://cdn.dummyjson.com/product-images/37/1.jpg", 
     numReview : 2,
    },
    {
      
      title: "sublimation plain k_ids tank",
      description: "sublimation plain k_ids tank tops wholesale",
      price: 100,
      discountPercentage: 11.12,
      rating: Number(4.8),
      stock: 20,
      brand: "Soft Cotton",
      category: "tops",
      thumbnail: "https://cdn.dummyjson.com/product-images/38/thumbnail.jpg",
      images:  "https://cdn.dummyjson.com/product-images/38/1.png", 
     numReview : 2,
    },
    {
      
      title: "Women Sweaters Wool",
      description: "2021 Custom Winter Fall Zebra Knit Crop Top Women Sweaters Wool Mohair Cos Customize Crew Neck Women' S Crop Top Sweater",
      price: 600,
      discountPercentage: 17.2,
      rating: Number(4.55),
      stock: 55,
      brand: "Top Sweater",
      category: "tops",
      thumbnail: "https://cdn.dummyjson.com/product-images/39/thumbnail.jpg",
      images:  "https://cdn.dummyjson.com/product-images/39/1.jpg", 
     numReview : 2,
    },
    {
      
      title: "women winter clothes",
      description: "women winter clothes thick fleece hoodie top with sweat pantjogger women sweatsuit set joggers pants two piece pants set",
      price: 57,
      discountPercentage: 13.39,
      rating: Number(4.91),
      stock: 84,
      brand: "Top Sweater",
      category: "tops",
      thumbnail: "https://cdn.dummyjson.com/product-images/40/thumbnail.jpg",
      images:  "https://cdn.dummyjson.com/product-images/40/1.jpg", 
     numReview : 2,
    },
    {
      
      title: "NIGHT SUIT",
      description: "NIGHT SUIT RED MICKY MOUSE..  For Girls. Fantastic Suits.",
      price: 55,
      discountPercentage: 15.05,
      rating: Number(4.65),
      stock: 21,
      brand: "RED MICKY MOUSE..",
      category: "womens-dresses",
      thumbnail: "https://cdn.dummyjson.com/product-images/41/thumbnail.webp",
      images:  "https://cdn.dummyjson.com/product-images/41/1.jpg", 
     numReview : 2,
    },
    {
      
      title: "Stiched Kurta plus trouser",
      description: "FABRIC: LILEIN CHEST: 21 LENGHT: 37 TROUSER: (38) :ARABIC LILEIN",
      price: 80,
      discountPercentage: 15.37,
      rating: Number(4.05),
      stock: 148,
      brand: "Digital Printed",
      category: "womens-dresses",
      thumbnail: "https://cdn.dummyjson.com/product-images/42/thumbnail.jpg",
      images:  "https://cdn.dummyjson.com/product-images/42/1.png", 
     numReview : 2,
    },
    {
      
      title: "frock gold printed",
      description: "Ghazi fabric long frock gold printed ready to wear stitched collection (G992)",
      price: 600,
      discountPercentage: 15.55,
      rating: Number(4.31),
      stock: 150,
      brand: "Ghazi Fabric",
      category: "womens-dresses",
      thumbnail: "https://cdn.dummyjson.com/product-images/43/thumbnail.jpg",
      images:  "https://cdn.dummyjson.com/product-images/43/1.jpg", 
     numReview : 2,
    },
    {
      
      title: "Ladies Multicolored Dress",
      description: "This classy shirt for women gives you a gorgeous look on everyday wear and specially for semi-casual wears.",
      price: 79,
      discountPercentage: 16.88,
      rating: Number(4.03),
      stock: 2,
      brand: "Ghazi Fabric",
      category: "womens-dresses",
      thumbnail: "https://cdn.dummyjson.com/product-images/44/thumbnail.jpg",
      images:  "https://cdn.dummyjson.com/product-images/44/1.jpg", 
     numReview : 2,
    },
    {
      
      title: "Malai Maxi Dress",
      description: "Ready to wear, Unique design according to modern standard fashion, Best fitting ,Imported stuff",
      price: 50,
      discountPercentage: 5.07,
      rating: Number(4.67),
      stock: 96,
      brand: "IELGY",
      category: "womens-dresses",
      thumbnail: "https://cdn.dummyjson.com/product-images/45/thumbnail.jpg",
      images:  "https://cdn.dummyjson.com/product-images/45/1.jpg", 
     numReview : 2,
    },
    {
      
      title: "women's shoes",
      description: "Close: Lace, Style with bottom: Increased ins_ide, Sole Material: Rubber",
      price: 40,
      discountPercentage: 16.96,
      rating: Number(4.14),
      stock: 72,
      brand: "IELGY fashion",
      category: "womens-shoes",
      thumbnail: "https://cdn.dummyjson.com/product-images/46/thumbnail.jpg",
      images:  "https://cdn.dummyjson.com/product-images/46/1.webp", 
     numReview : 2,
    },
    {
      
      title: "Sneaker shoes",
      description: "Synthetic Leather Casual Sneaker shoes for Women/girls Sneakers For Women",
      price: 120,
      discountPercentage: 10.37,
      rating: Number(4.19),
      stock: 50,
      brand: "Synthetic Leather",
      category: "womens-shoes",
      thumbnail: "https://cdn.dummyjson.com/product-images/47/thumbnail.jpeg",
      images:  "https://cdn.dummyjson.com/product-images/47/1.jpg", 
     numReview : 2,
    },
    {
      
      title: "Women Strip Heel",
      description: "Features: Flip-flops, M_id Heel, Comfortable, Striped Heel, Antisk_id, Striped",
      price: 40,
      discountPercentage: 10.83,
      rating: Number(4.02),
      stock: 25,
      brand: "Sandals Flip Flops",
      category: "womens-shoes",
      thumbnail: "https://cdn.dummyjson.com/product-images/48/thumbnail.jpg",
      images:  "https://cdn.dummyjson.com/product-images/48/1.jpg", 
     numReview : 2,
    },
    {
      
      title: "Chappals & Shoe Ladies Metallic",
      description: "Womens Chappals & Shoe Ladies Metallic Tong Thong Sandal Flat Summer 2020 Maasai Sandals",
      price: 23,
      discountPercentage: 2.62,
      rating: Number(4.72),
      stock: 0,
      brand: "Maasai Sandals",
      category: "womens-shoes",
      thumbnail: "https://cdn.dummyjson.com/product-images/49/thumbnail.jpg",
      images:  "https://cdn.dummyjson.com/product-images/49/1.jpg", 
     numReview : 2,
    },
    {
      
      title: "Women Shoes",
      description: "2020 New Arrivals Genuine Leather Fashion Trend Platform Summer Women Shoes",
      price: 36,
      discountPercentage: 16.87,
      rating: Number(4.33),
      stock: 46,
      brand: "Arrivals Genuine",
      category: "womens-shoes",
      thumbnail: "https://cdn.dummyjson.com/product-images/50/thumbnail.jpg",
      images:  "https://cdn.dummyjson.com/product-images/50/1.jpeg", 
     numReview : 2,
    }
 
]
  export default products