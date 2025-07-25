export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
  images?: string[]; // Additional images
  video?: string; // Video file
  rating?: number;
  stock?: number;
}

export const products: Product[] = [
  // Bedroom
  {
    id: 1,
    name: 'Braya Hydraulic Lift Up Storage Upholstered Platform Bed',
    price: 1200,
    image: '/src/assets/Furniture/Bedroom/Bed 1/Bed.webp',
    images: [
      '/src/assets/Furniture/Bedroom/Bed 1/Bed.webp',
      '/src/assets/Furniture/Bedroom/Bed 1/Bed2.webp',
      '/src/assets/Furniture/Bedroom/Bed 1/Bed3.webp',
      '/src/assets/Furniture/Bedroom/Bed 1/Bed4.webp',
      
    ],
    video: 'https://assets.wfcdn.com/dm/video/6820bae2-917c-491a-a27d-60a84711e285/bed_olpz1201.mp4',
    category: 'bedroom',
    description: 'Full of sleek modern style, this upholstered platform bed features a frame that lifts hydraulically to reveal storage compartments for seasonal clothes and other items you wish to tuck away. Crafted from solid and engineered wood, it rests flush against the floor and is wrapped in the fabric in a hue of your choice. A horizontally grooved headboard with a subtle wingback design completes the look. Multiple center slats help support your mattress (sold separately) no box spring is needed.',
    rating: 4.8,
    stock: 15
  },
  {
    id: 2,
    name: 'Candler Velvet Upholstered Platform Bed with Wingback Headboard and Wooden Slats',
    price: 700,
    image: '/src/assets/Furniture/Bedroom/Bed 2/Bed.webp',
    images: [
      '/src/assets/Furniture/Bedroom/Bed 2/Bed.webp',
      '/src/assets/Furniture/Bedroom/Bed 2/Bed2.webp',
      '/src/assets/Furniture/Bedroom/Bed 2/Bed3.webp',
      '/src/assets/Furniture/Bedroom/Bed 2/Bed4.webp',
      '/src/assets/Furniture/Bedroom/Bed 2/Bed5.webp',
      '/src/assets/Furniture/Bedroom/Bed 2/Bed6.webp'
    ],
    category: 'bedroom',
    description: 'This bed is designed with simple lines to create the peaceful, warm feel you want in your bedroom. You can freely create the bedroom style you want. It also has a wingback headboard, which adds visual interest to the overall simple yet grand style without being too crowded. This bed has sturdy wooden slats and a center support leg to increase stability, and it does not require a box spring. With it, you can enjoy a luxurious sleep.',
    rating: 4.7,
    stock: 8
  },
  {
    id: 3,
    name: 'Juanetta Hydraulic Lift Up Storage Upholstered Platform Bed',
    price: 500,
    image: '/src/assets/Furniture/Bedroom/Bed 3/Bed.webp',
    images: [
      '/src/assets/Furniture/Bedroom/Bed 3/Bed.webp',
      '/src/assets/Furniture/Bedroom/Bed 3/Bed2.webp',
      '/src/assets/Furniture/Bedroom/Bed 3/Bed3.webp',
      '/src/assets/Furniture/Bedroom/Bed 3/Bed4.webp',
      '/src/assets/Furniture/Bedroom/Bed 3/Bed5.webp'

    ],
    video: 'https://secure.img1-fg.wfcdn.com/dm/video/557cde68-cf6e-416f-8a5e-b5999f3bd2a1/%E6%B0%94%E5%8A%A8%E5%BA%8A-wf.mp4',
    category: 'bedroom',
    description: 'Full of sleek modern style, this upholstered platform bed features a frame that lifts hydraulically to reveal storage compartments for seasonal clothes and other items you wish to tuck away. Crafted from solid and engineered wood, it rests flush against the floor and is wrapped in the fabric in a hue of your choice. A horizontally grooved headboard with a subtle wingback design completes the look. Multiple centre slats help support your mattress (sold separately) – no box spring is needed.',
    rating: 4.6,
    stock: 12
  },
  {
    id: 4,
    name: 'Elison Platform Bed with Fabric Upholstered Headboard and Wooden Slats',
    price: 350,
    image: '/src/assets/Furniture/Bedroom/Bed 4/Bed.webp',
    images:[
      '/src/assets/Furniture/Bedroom/Bed 4/Bed.webp',
      '/src/assets/Furniture/Bedroom/Bed 4/Bed2.webp',
      '/src/assets/Furniture/Bedroom/Bed 4/Bed3.webp',
      '/src/assets/Furniture/Bedroom/Bed 4/Bed4.webp',
      '/src/assets/Furniture/Bedroom/Bed 4/Bed5.webp',
      '/src/assets/Furniture/Bedroom/Bed 4/Bed6.webp'
    ],
    category: 'bedroom',
    description: 'Experience comfort and style with this sleek and sturdy platform bed has chic colors to choose from beige, black, gray, and navy blue. Soft and stylish on the outside, yet strong and sturdy on the inside, the framework is made entirely of durable steel and the sturdy wooden slats provide a solid foundation for your mattress, which you can depend on for the long haul. The durable nylon or velvet fabric adds a touch of elegance to your bedroom décor. No box spring is needed just place your mattress directly on the platform bed and get ready for sweet dreams.',
    rating: 4.5,
    stock: 12
  },
  {
    id: 5,
    name: 'Upholstered Bed Frame with 3 Drawers, Bed with Storage Headboard and Charging Station',
    price: 899,
    image: '/src/assets/Furniture/Bedroom/Bed 5/Bed.webp',
    images: [
      '/src/assets/Furniture/Bedroom/Bed 5/Bed.webp',
      '/src/assets/Furniture/Bedroom/Bed 5/Bed2.webp',
      '/src/assets/Furniture/Bedroom/Bed 5/Bed3.webp',
      '/src/assets/Furniture/Bedroom/Bed 5/Bed4.webp',
      '/src/assets/Furniture/Bedroom/Bed 5/Bed5.webp',
      
    ],
    video: 'https://secure.img1-fg.wfcdn.com/dm/video/e56f10e3-7171-4964-9dd4-6ded47a14c7d/aomo1041818.mp4',
    category: 'bedroom',
    description: 'The combination of the linen fabric and the maple wood frame gives this upholstered platform bed with drawers a modern and classic design style, adding a unique artistic touch to the bedroom. The headboard is filled with a highly resilient foam that is soft and light on the skin for extra comfort.',
    rating: 4.4,
    stock: 7
  },
  {
    id: 6,
    name: "Antioch Bed Frame with 2 Underbed Drawers & 2 Bedside Drawers, Modern Bed with Charging Station & LED Light",
    image: "/src/assets/Furniture/Bedroom/Bed 6/Bed2.webp",
    images: [
      "/src/assets/Furniture/Bedroom/Bed 6/Bed2.webp",
      "/src/assets/Furniture/Bedroom/Bed 6/Bed3.webp",
      "/src/assets/Furniture/Bedroom/Bed 6/Bed4.webp",
      "/src/assets/Furniture/Bedroom/Bed 6/Bed7.webp",
      "/src/assets/Furniture/Bedroom/Bed 6/Bed8.webp"
    ],
    price: 650,
    category: "bedroom",
    description: "Want a bed that combines style, function, and clever storage? This bed frame will fit your needs perfectly! This platform bed frame has a 2-tier Bookcase headboard with 2 Bedside Drawers, providing privacy storage while stylishly maximizing space utilization greatly increase storage space. 2 AC outlets and 2 USB power strips built into the headboard are convenient for you to charge your Phone and Pad. The bed frame supports LED lights on both the headboard and footboard, offering 20 static colors and 22 dynamic modes. Customize your preferred ambiance through remote control for a personalized experience. The wood grain on the bed adds personality and warmth to your room, enhancing its overall character.",
    rating: 4.2,
    stock: 9
  },
  {
    id: 7,
    name: "Silvester Modern Upholstered Platform Storage Bed with Wooden Slats, no box spring needed",
    image: '/src/assets/Furniture/Bedroom/Bed 7/Bed.webp',
    images: [
      '/src/assets/Furniture/Bedroom/Bed 7/Bed.webp',
      '/src/assets/Furniture/Bedroom/Bed 7/Bed2.webp',
      '/src/assets/Furniture/Bedroom/Bed 7/Bed3.webp',
      '/src/assets/Furniture/Bedroom/Bed 7/Bed4.webp',
      '/src/assets/Furniture/Bedroom/Bed 7/Bed5.webp',
      '/src/assets/Furniture/Bedroom/Bed 7/Bed6.webp'
    ],
    price: 350,
    category: "bedroom",
    description: "This platform bed not only anchors your sleeping space, but it provides you with ample storage for clothes, linens, and more. It has a frame constructed from solid and engineered wood along with stainless steel. Wrapped in gray-toned polyester, this bed features a rectangular headboard that's generously padded for ample support as you relax with your favorite book. Sleek button tufting rounds out this modern design. Four built-in drawers, two on either side, let you keep your bedroom organized and clutter-free. A slat kit eliminates the need for a box spring, so all that's left to get is a mattress of your choice (sold separately).",
    rating: 4.5,
    stock: 4
  },
  
  // Living Room
  {
    id: 8,
    name: 'Mavretta Faux Leather Sectional',
    price: 500,
    image: '/src/assets/Furniture/Living Room/Living 1/Living.webp',
    images: [
      '/src/assets/Furniture/Living Room/Living 1/Living.webp',
      '/src/assets/Furniture/Living Room/Living 1/Living2.webp',
      '/src/assets/Furniture/Living Room/Living 1/Living3.webp',
      '/src/assets/Furniture/Living Room/Living 1/Living4.webp',
      '/src/assets/Furniture/Living Room/Living 1/Living5.webp',
      '/src/assets/Furniture/Living Room/Living 1/Living6.webp'
    ],
    category: 'living-room',
    description: 'Tie your living room or family room together with this sofa and chaise set. Crafted with an engineered wood frame, this sofa is made with faux leather upholstery over foam filling and hand-tied springs. It features tufted back cushions with square armrests and a loose back. Block feet lift this sofa off the ground, while two toss pillows provide additional cushioning for maximum plushness. Lounge on the chaise after a long day, or bring friends over and seat four people as you watch a movie. At 103" wide, this set is ideal for generously sized spaces.',
    rating: 4.4,
    stock: 3
  },
  {
    id: 9,
    name: 'Lorraine TV Stand for TVs up to 55" with Electric Fireplace Included',
    price: 339,
    image: '/src/assets/Furniture/Living Room/Living 2/Living.webp',
    images: [
      '/src/assets/Furniture/Living Room/Living 2/Living.webp',
      '/src/assets/Furniture/Living Room/Living 2/Living2.webp',
      '/src/assets/Furniture/Living Room/Living 2/Living3.webp',
      '/src/assets/Furniture/Living Room/Living 2/Living5.webp',
      '/src/assets/Furniture/Living Room/Living 2/Living6.webp'
    ],
    video:'https://assets.wfcdn.com/dm/video/a3606501-9771-4b3e-b34c-bca61450413f/how-to%20assembly%20guide.mp4',
    category: 'living-room',
    description: 'This TV stand has a charming, rustic aesthetic and creates a cozy environment. Enjoy movie night by the fireplace insert. Each of the two cabinets opens to store media players, games, books, and other equipment, while the three open shelves give you a place to display your favorite decorative objects. We love how the weathered look of the wood and sliding barn doors add a farmhouse feel to your living room. Plus, a cable management cutout organizes your cords. Fits TVs up to 55".',
    rating: 4.3,
    stock: 10
  },
  {
    id: 10,
    name: 'Fidel Solid Wood Tripod Table Lamp (Set of 2)',
    price: 50,
    image: '/src/assets/Furniture/Living Room/Living 3/Living.webp',
    images: [
      '/src/assets/Furniture/Living Room/Living 3/Living.webp',
      '/src/assets/Furniture/Living Room/Living 3/Living2.webp',
      '/src/assets/Furniture/Living Room/Living 3/Living3.webp',
      '/src/assets/Furniture/Living Room/Living 3/Living4.webp',
      '/src/assets/Furniture/Living Room/Living 3/Living5.webp'
    ],
    category: 'living-room',
    description: 'This 2-piece table lamp set brings a modern vibe with just the right amount of brightness to your living room or bedroom. Each lamp showcases a sleek tripod design crafted from solid and engineered wood with a light brown finish. We love how the compact design is ideal for adding warmth to a small space or on your desk in the office. Both are topped with a linen drum shade for a versatile look that complements a variety of decor styles. Plus, this set aims to illuminate your space with 60W max bulbs, sold separately.',
    rating: 4.6,
    stock: 0
  },
  {
    id: 11,
    name: 'Boney 2- Piece 29" Wide Tufted Faux Leather Barrel Club Chair',
    price: 350,
    image: '/src/assets/Furniture/Living Room/Living 4/Living.webp',
    images:[
      '/src/assets/Furniture/Living Room/Living 4/Living.webp',
      '/src/assets/Furniture/Living Room/Living 4/Living2.webp',
      '/src/assets/Furniture/Living Room/Living 4/Living3.webp',
      '/src/assets/Furniture/Living Room/Living 4/Living4.webp',
      '/src/assets/Furniture/Living Room/Living 4/Living5.webp'
    ],
    video: 'https://secure.img1-fg.wfcdn.com/dm/video/42834f15-a813-45bf-bd35-5093ac69c666/knwl2718.mp4', 
    category: 'living-room',
    description: 'This pair of barrel club chairs offers a contemporary take on a classic style. We love the play of the clean lines with the traditional details – like the deep diamond tufting and the nailhead trim. Plus, they are upholstered in faux leather that is stain-resistant and available in an array of neutral hues to match or complement your design scheme. These handsome chairs boast solid wood frames and rounded backs and arms, along with removable foam-filled seat cushions for easy vacuuming. Partner them with an accent table to create an inviting conversation area.',
    rating: 4.6,
    stock: 12
  },
  {
    id:12,
    name: 'Vozelle Black Marble Round Coffee Table,Simple Modern Center Cocktail Table for Living Room office,No Need Assembly',
    price:550,
    image:'/src/assets/Furniture/Living Room/Living 5/Living.webp',
    images:[
      '/src/assets/Furniture/Living Room/Living 5/Living.webp',
      '/src/assets/Furniture/Living Room/Living 5/Living2.webp',
      '/src/assets/Furniture/Living Room/Living 5/Living3.webp',
      '/src/assets/Furniture/Living Room/Living 5/Living4.webp',
      '/src/assets/Furniture/Living Room/Living 5/Living5.webp'

    ],
    video: 'https://secure.img1-fg.wfcdn.com/dm/video/2aaa5498-998d-4eb4-aa26-05c954084020/jlli1469.mp4',
    category:'living-room',
    description: 'With a simple, elegant design, this round fiberglass coffee table is a standout choice for your living room setup. It has a faux marble look in a dynamic hue of your choice to bring a classical vibe to your space. This table strikes a drum silhouette with recessed edges to help protect the contents on top. The sizable surface is a great place to keep a spread of magazines or a stack of coasters for your favorite beverages.',
    rating:4.5,
    stock:5


  },
  {
    id:13,
    name:'Allura Wall Bathroom Cabinet',
    price:150,
    image:'/src/assets/Furniture/Living Room/Living 6/Living.webp',
    images:[
      '/src/assets/Furniture/Living Room/Living 6/Living.webp',
      '/src/assets/Furniture/Living Room/Living 6/Living2.webp',
      '/src/assets/Furniture/Living Room/Living 6/Living3.webp',
      '/src/assets/Furniture/Living Room/Living 6/Living4.webp',
      '/src/assets/Furniture/Living Room/Living 6/Living5.webp'
    ],
    category:'living-room',
    description: 'This 26" tall wall-mounted cabinet offers space-saving storage in your bathroom or laundry room with a simple and traditional style. Crafted from engineered wood, this cabinet features clean lines and is available in neutral finishes, blending seamlessly with any aesthetic. Double cabinet doors open up to a pair of adjustable shelves, ideal for storing toiletries or medicine. Mounted securely to the wall, this storage cabinet is complete with shaker-style panel doors and brushed nickel hardware that complements a variety of home décor. Designed with a sturdy support rail, this medicine cabinet sits flush against the wall and can hold up to 50 lbs.',
    rating: 4.6,
    stock: 8

  },

  // Dining Room
  {
    id: 14,
    name: 'Zaneta 6 - Person Extendable Four Leg Dining Set',
    price: 1000,
    image: '/src/assets/Furniture/Dining Room/Dining 1/Dining.webp',
    images: [
      '/src/assets/Furniture/Dining Room/Dining 1/Dining.webp',
      '/src/assets/Furniture/Dining Room/Dining 1/Dining2.webp',
      '/src/assets/Furniture/Dining Room/Dining 1/Dining3.webp',
      '/src/assets/Furniture/Dining Room/Dining 1/Dining4.webp',
      '/src/assets/Furniture/Dining Room/Dining 1/Dining5.webp',
      '/src/assets/Furniture/Dining Room/Dining 1/Dining6.webp'
    ],
    category: 'dining-room',
    description: 'This dining table set creates a gathering space with plenty of room and a modern look. It includes a long dining table, four dining chairs, and a two-person bench, all in a natural smoky walnut tone. The dining table is crafted from engineered wood with flared legs and crossbar supports. Each chair is crafted from solid wood with ladder backs and seats upholstered in a contrasting light polyester fabric. We love that this dining table has space for up to six people when fully expanded, so it\'s great for lively meals with friends and family.',
    rating: 4.6,
    stock: 5
  },
  {
    id: 15,
    name: 'Credenza Storage Cabinet With Doors, Sideboard Buffet Cabinet With Adjustable Shelves For Living Room, Dining Room (Set of 2)',
    price: 300,
    image: '/src/assets/Furniture/Dining Room/Dining 2/Dining.webp',
    images: [
      '/src/assets/Furniture/Dining Room/Dining 2/Dining.webp',
      '/src/assets/Furniture/Dining Room/Dining 2/Dining2.webp',
      '/src/assets/Furniture/Dining Room/Dining 2/Dining3.webp',
      '/src/assets/Furniture/Dining Room/Dining 2/Dining4.webp',
      '/src/assets/Furniture/Dining Room/Dining 2/Dining5.webp',
      '/src/assets/Furniture/Dining Room/Dining 2/Dining6.webp'
    ],
    category: 'dining-room',
    description: 'This multi-functional storage set features 2 buffet cabinets, offering a total of 4 louvered doors and 8 storage compartments with 4 adjustable shelves. Its generous capacity allows for the accommodation of various height items, ranging from coffee beans to coffee makers. You can customize the sideboard doors by choosing to place solid-colored doors in the center or on the sides. Furthermore, the cabinets can be positioned together or separately, making them an ideal choice for any kitchen, dining room, or living room.',
    rating: 4.7,
    stock: 10
  },
  {
    id: 16,
    name: '46" Round Pedestal Dining Table',
    price: 650,
    image: '/src/assets/Furniture/Dining Room/Dining 3/Dining.webp',
    images: [
      '/src/assets/Furniture/Dining Room/Dining 3/Dining.webp',
      '/src/assets/Furniture/Dining Room/Dining 3/Dining2.webp',
      '/src/assets/Furniture/Dining Room/Dining 3/Dining4.webp',
      '/src/assets/Furniture/Dining Room/Dining 3/Dining5.webp',
      '/src/assets/Furniture/Dining Room/Dining 3/Dining6.webp'
    ],
    video: 'https://secure.img1-fg.wfcdn.com/dm/video/869a1295-a789-53d7-12d7-4fe9d327144f/225199.mp4',
    category: 'dining-room',
    description: 'This is a natural style ideal for today\'s dining spaces. The simple design can be paired perfectly with various styles of dining chairs. It is also a great console table or display table under your stairs. This comfortably seats 4 or even 5 guests. The pedestal base allows for maximum legroom and more comfort! The high-grade manufactured wood is filled with rich grain paper, it offers a warm and inviting nature that welcomes a spot for casual daily dining, ideal for the laid-back eat-in kitchen or a modern dining room.',
    rating: 4.6,
    stock: 6
  },
  {
    id: 17,
    name: 'Rowley 5 - Light Dimmable Classic / Traditional Chandelier',
    price: 310,
    image: '/src/assets/Furniture/Dining Room/Dining 4/Dining.webp',
    images: [
      '/src/assets/Furniture/Dining Room/Dining 4/Dining.webp',
      '/src/assets/Furniture/Dining Room/Dining 4/Dining2.webp',
      '/src/assets/Furniture/Dining Room/Dining 4/Dining3.webp',
      '/src/assets/Furniture/Dining Room/Dining 4/Dining4.webp'
    ],
    video:'https://assets.wfcdn.com/dm/video/01ae7744-7a20-4344-827b-a41cbcf23d91/gx15667.mp4',
    category: 'dining-room',
    description: 'Add timeless charm to your entryway or dining space with this 5-light chandelier. Crafted from metal in the finish of your choice, it features clean lines and gently arched arms that cradle classic candlestick sockets. Each light is softened by a white linen drum shade, casting a warm, ambient glow. The chandelier is dimmer-compatible and damp-rated for added versatility, and it installs easily with a height-adjustable downrod and a sloped-ceiling–adaptable canopy.',
    rating: 4.6,
    stock: 8
  },

  // Office
  {
    id: 18,
    name: 'Ergonomic LED Gaming Chair with Massage Lumbar Pillow',
    price: 160,
    image: '/src/assets/Furniture/Office/Office 1/Office.webp',
    images:[
      '/src/assets/Furniture/Office/Office 1/Office.webp',
      '/src/assets/Furniture/Office/Office 1/Office2.webp',
      '/src/assets/Furniture/Office/Office 1/Office3.webp',
      '/src/assets/Furniture/Office/Office 1/Office4.webp',
      '/src/assets/Furniture/Office/Office 1/Office5.webp'

    ],
    video:'https://secure.img1-fg.wfcdn.com/dm/video/1a3abbee-48c9-41f8-8720-6afb145e5d40/skuf62361-1.mp4',
    category: 'office',
    description: 'This reclining gaming chair with LED lights creates an immersive gaming atmosphere for your gaming experience. The adjustable massage lumbar pillow helps relieve fatigue after a long day. Designed with ergonomics in mind, it offers adjustable armrests, seat height, headrest, and a 90-135° tilt range for the perfect seating position, ensuring both gaming style and comfort needs.',
    rating: 4.5,
    stock: 20
  },
  {
    id: 19,
    name: 'Doyno Tall 5 Shelf Bookcase - Set of 2, Storage and Display Bookshelves for Home Office and Living Room',
    price: 410,
    image: '/src/assets/Furniture/Office/Office 2/Office.webp',
    images: [
      '/src/assets/Furniture/Office/Office 2/Office.webp',
      '/src/assets/Furniture/Office/Office 2/Office2.webp',
      '/src/assets/Furniture/Office/Office 2/Office3.webp',
      '/src/assets/Furniture/Office/Office 2/Office4.webp'
      
    ],
    video:'https://assets.wfcdn.com/dm/video/ff135a0d-0f19-d6ee-41ee-55830e11fccb/373376.mp4',
    category: 'office',
    description: 'Your very own library, all in one spot. Arriving as a 2-piece set, this freestanding bookcase is a clean-lined, classic way to organize your space. Crafted from engineered wood, it comes in a finish of your choice to work with your preferred style and color palette. Five drawers give you a spot to keep books, framed photos, and various decorative objects. Place these bookcases together or against opposing walls depending on your room’s dimensions and overall setup. For additional stability, we highly recommend using wall anchors (sold separately).',
    rating: 4.5,
    stock: 15
  },
  {
    id: 20,
    name: 'Annalissa Metal Base Writing Desk',
    price: 1400,
    image: '/src/assets/Furniture/Office/Office 3/Office.webp',
    images:[
      '/src/assets/Furniture/Office/Office 3/Office.webp',
      '/src/assets/Furniture/Office/Office 3/Office2.webp',
      '/src/assets/Furniture/Office/Office 3/Office3.webp',
      '/src/assets/Furniture/Office/Office 3/Office4.webp',
      '/src/assets/Furniture/Office/Office 3/Office5.webp',
      
    ],
    video:'https://assets.wfcdn.com/dm/video/34ea032a-bafc-4e48-abbb-cdc5e688df89/stss3375.mp4',
    category: 'office',
    description: 'Tackle your to-do list in style with this classic desk. Featuring a surface crafted from poplar solids with acacia veneers founded on a scrolling metal trestle base, this piece strikes a mixed material look with classic appeal, so it’s perfect for styles from classic to industrial. Two drawers and a fold-out keyboard tray round out this piece with some handy storage for your office essentials. This well-apportioned desk is perfect for giving you room to work.',
    rating: 4.8,
    stock: 5
  },
  {
    id: 21,
    name: 'Ergonomic Saddle Seat Adjustable Pneumatic Hydraulic Drafting Swivel Rolling Stool Chair for Medical Hygienic SPA Massage Salon Home and Office',
    price: 190,
    image: '/src/assets/Furniture/Office/Office 4/Office.webp',
    images:[
      '/src/assets/Furniture/Office/Office 4/Office.webp',
      '/src/assets/Furniture/Office/Office 4/Office2.webp',
      '/src/assets/Furniture/Office/Office 4/Office3.webp',
      '/src/assets/Furniture/Office/Office 4/Office4.webp',
      '/src/assets/Furniture/Office/Office 4/Office5.webp',
      '/src/assets/Furniture/Office/Office 4/Office6.webp'
      
    ],
    category: 'office',
    description: 'Ergonomic Saddle Seat Adjustable Pneumatic Hydraulic Drafting Swivel Rolling Stool',
    rating: 4.9,
    stock: 0
  },

  // Kitchen
  {
    id: 22,
    name: '29.875" 6.6 cu. ft. Smart Freestanding Electric Range with Convection Oven PB965BPTS',
    price: 1950,
    image: '/src/assets/Furniture/Kitchen/Kitchen 1/Kitchen.webp',
    images:[
      '/src/assets/Furniture/Kitchen/Kitchen 1/Kitchen.webp',
      '/src/assets/Furniture/Kitchen/Kitchen 1/Kitchen2.webp',
      '/src/assets/Furniture/Kitchen/Kitchen 1/Kitchen3.webp',
      '/src/assets/Furniture/Kitchen/Kitchen 1/Kitchen4.webp'
      
    ],
    category: 'kitchen',
    description: 'Built on the belief that modern life needs modern solutions, GE Profile Appliances are designed to make daily life simpler by incorporating Smart Home technology and cutting-edge features in every appliance. GE Profile’s sleek design and quality engineering will give your kitchen the most up-to-date look and the best innovative performance you’ve been looking for.',
    rating: 4.6,
    stock: 5
  },
  {
    id: 23,
    name: 'Salerno 33-inch Freestanding Side-by-side Refrigerator in Stainless Steel, 15.6 cu.ft.',
    price: 930,
    image: '/src/assets/Furniture/Kitchen/Kitchen 2/Kitchen.webp',
    images:[
      '/src/assets/Furniture/Kitchen/Kitchen 2/Kitchen.webp',
      '/src/assets/Furniture/Kitchen/Kitchen 2/Kitchen2.webp',
      '/src/assets/Furniture/Kitchen/Kitchen 2/Kitchen3.webp',
      '/src/assets/Furniture/Kitchen/Kitchen 2/Kitchen4.webp',
      '/src/assets/Furniture/Kitchen/Kitchen 2/Kitchen5.webp'
      
      
    ],
    video:'https://assets.wfcdn.com/dm/video/ddb401ea-0b98-4093-9378-7c314eefc4c8/ffrbi1805-33sb_features_video.mp4',
    category: 'kitchen',
    description: 'White Glove Delivery Options Available at Check-Out! - The Forno 33” Salerno 15.6 Cu.Ft. capacity side-by-side frost-free refrigerator comes equipped with the latest technology, including a temperature control system that adjusts temperatures to keep food and beverages. A simple LED touch panel allows for easy access and control of all features. The fresh food section has a 9.54 cu. ft. capacity with three adjustable glass shelves for organizing and storing items, as well as 2 crisper drawers and 3 door bins for additional storage. ',
    rating: 4.3,
    stock: 5
  },
  {
    id: 24,
    name: 'Granitestone Non-Stick Aluminum Frying Pan with Stay Cool Handles, Oven & Dishwasher Safe',
    price: 18,
    image: '/src/assets/Furniture/Kitchen/Kitchen 3/Kitchen.webp',
    images:[
      '/src/assets/Furniture/Kitchen/Kitchen 3/Kitchen.webp',
      '/src/assets/Furniture/Kitchen/Kitchen 3/Kitchen2.webp',
      '/src/assets/Furniture/Kitchen/Kitchen 3/Kitchen3.webp',
      '/src/assets/Furniture/Kitchen/Kitchen 3/Kitchen4.webp',
      '/src/assets/Furniture/Kitchen/Kitchen 3/Kitchen5.webp',
      
    ],
    video:'https://secure.img1-fg.wfcdn.com/dm/video/e7931ab4-6b3c-8d52-9d13-85f7d3c90ab0/119972.mp4',
    category: 'kitchen',
    description: 'A granite stone pan is the best pan you will ever use for cooking, frying, and even baking. Pressed from a solid aluminum disc and then coated 3-time durable granite rock finish which makes for superior cooking that just won’t stick. And with a 500-degree oven-rated pan, baking with Granite Rock is easy. Its PFOA free, dishwater safe, and no or little butter or oil is needed for even the stickiest cooking.',
    rating: 4.7
  },
  {
    id: 25,
    name: 'Miyabi Birchwood SG2 9-inch Slicing Knife',
    price: 335,
    image: '/src/assets/Furniture/Kitchen/Kitchen 4/Kitchen2.webp',
    images:[
      '/src/assets/Furniture/Kitchen/Kitchen 4/Kitchen2.webp',
      '/src/assets/Furniture/Kitchen/Kitchen 4/Kitchen.webp'

    ],
    category: 'kitchen',
    description: 'Top-of-the-line Miyabi Birchwood is a work of culinary art. Both blade and handle are crafted from the most precious materials, which shape their striking appearance. More than meets the eye, the potent core of SG2 micro-carbide powder steel is protected by 100 layers of steel. Miyabi’s innovative, ice-hardening process locks in the long-lasting sharpness of the Cryodur blades. Beneath its beautiful exterior, the flower Damascus pattern provides added durability. The scalpel-like blade is complemented by an equally striking Karelian (Masur) Birch handle. A prized material for knife handles, Karelian Birch is also the only wood ever used in a Faberge egg. Exquisite and ergonomic, Miyabi Birchwood knives feel as good as they look. Handcrafted in Seki, Japan.',
    rating: 5
  },

  // Sofa Collection
  {
    id: 26,
    name: '78.74" Modern Sectional Sofa, 2-Seater Chenille Sofa with 2 Pillows, U-Shape Foam Sofa No Assembly Required',
    price: 520,
    image: '/src/assets/Furniture/Sofa/Sofa 1/Sofa.webp',
    images:[
      '/src/assets/Furniture/Sofa/Sofa 1/Sofa.webp',
      '/src/assets/Furniture/Sofa/Sofa 1/Sofa2.webp',
      '/src/assets/Furniture/Sofa/Sofa 1/Sofa3.webp',
      '/src/assets/Furniture/Sofa/Sofa 1/Sofa4.webp',
      '/src/assets/Furniture/Sofa/Sofa 1/Sofa5.webp',
      '/src/assets/Furniture/Sofa/Sofa 1/Sofa6.webp'
    ],
    category: 'sofa',
    description: 'Cloud Sofa: Redefining Everyday Comfort Enhance your living space with our Cloud Sofa, a perfect blend of luxury, comfort, style, and convenience. Wrapped in soft chenille fabric and filled with high-resilience 32D/60 compressed foam, this sofa offers a medium-soft seat that’s perfect for unwinding. With its spacious armrests and generously sized seating area, it provides plenty of room to stretch out, making it an ideal choice for any comfort-focused living space. Whether in the living room, bedroom, or play area, this compression sofa adapts to your needs effortlessly.',
    rating: 4.6,
    stock: 2
  },
  {
    id: 27,
    name: '77.2" Upholstered Sleeper Sofa Couch',
    price: 400,
    image: '/src/assets/Furniture/Sofa/Sofa 2/Sofa.webp',
    images:[
      '/src/assets/Furniture/Sofa/Sofa 2/Sofa.webp',
      '/src/assets/Furniture/Sofa/Sofa 2/Sofa2.webp',
      '/src/assets/Furniture/Sofa/Sofa 2/Sofa3.webp',
      '/src/assets/Furniture/Sofa/Sofa 2/Sofa4.webp',
      '/src/assets/Furniture/Sofa/Sofa 2/Sofa5.webp',
      '/src/assets/Furniture/Sofa/Sofa 2/Sofa6.webp'
    ],
    category: 'sofa',
    description: 'Our modern convertible sleeper sofa that will elevate your living space with its versatility, style and functionality. With its cozy cushions, it’s perfect for laughing. The pull-out sofa bed makes it easy to turn a sofa into an additional sofa bed, offering superior convenience and comfort. Upholstered in a solid color UV-resistant cotton fabric and made of solid wood frame, this sofa bed is both durable and long-lasting. The black plastic legs add a sleek touch to the modern design, while the under-seat storage is perfect for stashing blankets or extra pillows.',
    rating: 4.1,
    stock: 1
  },
  {
    id: 28,
    name: 'Degnan 76.4" Upholstered Sofa Chaise',
    price: 320,
    image: '/src/assets/Furniture/Sofa/Sofa 3/Sofa.webp',
    images:[
      '/src/assets/Furniture/Sofa/Sofa 3/Sofa.webp',
      '/src/assets/Furniture/Sofa/Sofa 3/Sofa2.webp',
      '/src/assets/Furniture/Sofa/Sofa 3/Sofa3.webp',
      '/src/assets/Furniture/Sofa/Sofa 3/Sofa4.webp',
      '/src/assets/Furniture/Sofa/Sofa 3/Sofa5.webp',
      '/src/assets/Furniture/Sofa/Sofa 3/Sofa6.webp'
    ],
    category: 'sofa',
    description: 'This upholstered sofa combines a low-profile silhouette with clean lines for a mid-century look in your living room. Wrapped in a cotton blend fabric, it features square arms and multiple cushion seats for a relaxed feel. The solid wood frame and coil spring seat construction provide a supportive seating experience. Plus, the fabric is stain-, scratch-, and fade-resistant, making it a practical choice for busy households. With seating for three, this sofa and ottoman set is a versatile addition to your space.',
    rating: 4.4,
    stock: 3
  },
  {
    id: 29,
    name: 'Novogratz Brittany 81.5" Round Arm Convertible Sofa',
    price: 250,
    image: '/src/assets/Furniture/Sofa/Sofa 4/Sofa.webp',
    images:[
      '/src/assets/Furniture/Sofa/Sofa 4/Sofa.webp',
      '/src/assets/Furniture/Sofa/Sofa 4/Sofa2.webp',
      '/src/assets/Furniture/Sofa/Sofa 4/Sofa6.webp',
      '/src/assets/Furniture/Sofa/Sofa 4/Sofa3.webp',
      '/src/assets/Furniture/Sofa/Sofa 4/Sofa4.webp',
      '/src/assets/Furniture/Sofa/Sofa 4/Sofa5.webp'
    ],
    category: 'sofa',
    description: 'Personal style is expressive and transformative--nowhere is that more noticeable than inside your home. For Mid-Century Modern enthusiasts, the Novogratz Brittany Futon is game-changing multifunctional furniture that will set any living room, home office, or guest room apart. Combining the benefits of a couch and a bed, our convertible sofa design delivers a versatile solution for sitting, lounging, and sleeping needs with a foldable split-back that transforms the futon into a sleeper bed for flexible seating.',
    rating: 4.3
  }
];


export const categories = [
  { id: 'all', name: 'All', active: true },
  { id: 'bedroom', name: 'Bedroom' },
  { id: 'living-room', name: 'Living Room' },
  { id: 'dining-room', name: 'Dining Room' },
  { id: 'office', name: 'Office' },
  { id: 'kitchen', name: 'Kitchen' },
  { id: 'sofa', name: 'Sofa' }
];
