const projects = [
  {
    id: "1",
    title: "Wooden Shelf",
    imageUrl:
      "https://images.unsplash.com/photo-1601647998802-5c86158216f6?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

    description: "Build a simple wooden shelf for your home.",
    materials: [
      {
        id: "1",
        description: "Wooden boards",
      },
      {
        id: "2",
        description: "Screws",
      },
      {
        id: "3",
        description: "Drill",
      },
    ],
    duration: "1 day",
    complexity: "Intermediate",
    steps: [
      {
        id: "1",
        description: "Measure and cut wooden boards to desired size.",
      },
      { id: "2", description: "Assemble the frame using screws and a drill." },
      { id: "3", description: "Attach shelves to the frame." },
      { id: "4", description: "Sand the shelf to smooth out rough edges." },
      { id: "5", description: "Paint or stain the shelf as desired." },
    ],
    isFavorite: false,
  },
  {
    id: "2",
    title: "Succulent Terrarium",
    imageUrl:
      "https://images.unsplash.com/photo-1608718117453-659477c7a1a9?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Create a beautiful terrarium for your succulent plants.",
    materials: [
      {
        id: "1",
        description: "Glass container",
      },
      {
        id: "2",
        description: "Succulent plants",
      },
      {
        id: "3",
        description: "Potting soil",
      },
      {
        id: "4",
        description: "Decorative stones",
      },
    ],
    duration: "2 hours",
    complexity: "Beginner",
    steps: [
      {
        id: "1",
        description:
          "Fill the bottom of the container with a layer of decorative stones.",
      },
      {
        id: "2",
        description: "Add a layer of potting soil on top of the stones.",
      },
      {
        id: "3",
        description:
          "Plant the succulents in the soil, arranging them as desired.",
      },
      { id: "4", description: "Add more decorative stones around the plants." },
      {
        id: "5",
        description:
          "Water the plants lightly and place the terrarium in a sunny spot.",
      },
    ],
    isFavorite: false,
  },
  {
    id: "3",
    title: "Wall Art",
    imageUrl:
      "https://images.unsplash.com/photo-1595414440701-da000c40df9c?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Create a unique piece of wall art using recycled materials.",
    materials: [
      {
        id: "1",
        description: "Cardboard",
      },
      {
        id: "2",
        description: "Paint",
      },
      {
        id: "3",
        description: "Glue",
      },
      {
        id: "4",
        description: "Scissors",
      },
    ],
    duration: "3 hours",
    complexity: "Beginner",
    steps: [
      {
        id: "1",
        description:
          "Cut cardboard into desired shapes (e.g., circles, triangles).",
      },
      {
        id: "2",
        description: "Paint each cardboard piece in different colors.",
      },
      {
        id: "3",
        description:
          "Arrange and glue the painted cardboard pieces onto a larger cardboard backing.",
      },
      { id: "4", description: "Allow the glue to dry completely." },
      { id: "5", description: "Hang the finished wall art on your wall." },
    ],
    isFavorite: false,
  },
  {
    id: "4",
    title: "Wooden Plant Stand",
    imageUrl:
      "https://images.unsplash.com/photo-1630330630857-bc5cf2763a5f?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Craft a stylish wooden plant stand to showcase your indoor plants.",
    materials: [
      {
        id: "1",
        description: "Wooden dowels",
      },
      {
        id: "2",
        description: "Wood glue",
      },
      {
        id: "3",
        description: "Wood stain",
      },
      {
        id: "4",
        description: "Paintbrush",
      },
    ],
    duration: "4 hours",
    complexity: "Intermediate",
    steps: [
      {
        id: "1",
        description:
          "Cut wooden dowels to various lengths for the frame and shelves.",
      },
      {
        id: "2",
        description: "Assemble the frame using wood glue, ensuring stability.",
      },
      {
        id: "3",
        description:
          "Attach shelves to the frame, allowing space for pots of different sizes.",
      },
      {
        id: "4",
        description:
          "Stain or paint the plant stand to enhance its aesthetic appeal.",
      },
      {
        id: "5",
        description:
          "Allow the stand to dry completely before placing plants on it.",
      },
    ],
    isFavorite: false,
  },
  {
    id: "5",
    title: "Hanging Macramé Planter",
    imageUrl:
      "https://images.unsplash.com/photo-1616897407035-9148edf7dfc4?q=80&w=2864&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Create a trendy macramé planter to hang your favorite indoor plants.",
    materials: [
      {
        id: "1",
        description: "Macramé cord",
      },
      {
        id: "2",
        description: "Wooden ring",
      },
      {
        id: "3",
        description: "Plant pot",
      },
      {
        id: "4",
        description: "Scissors",
      },
    ],
    duration: "3 hours",
    complexity: "Intermediate",
    steps: [
      {
        id: "1",
        description:
          "Cut macramé cord into equal-length strands, depending on desired length.",
      },
      {
        id: "2",
        description:
          "Attach the strands to the wooden ring using various knotting techniques.",
      },
      {
        id: "3",
        description:
          "Place the plant pot inside the macramé holder, ensuring stability.",
      },
      {
        id: "4",
        description:
          "Adjust the knots and strands to achieve the desired appearance.",
      },
      {
        id: "5",
        description:
          "Hang the macramé planter in a suitable location and enjoy!",
      },
    ],
    isFavorite: false,
  },
  {
    id: "6",
    title: "Concrete Planters",
    imageUrl:
      "https://images.unsplash.com/photo-1505421951074-14b54f431c7f?q=80&w=2876&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Craft modern concrete planters to display your favorite succulents or cacti.",
    materials: [
      {
        id: "1",
        description: "Concrete mix",
      },
      {
        id: "2",
        description: "Plastic molds",
      },
      {
        id: "3",
        description: "Release agent",
      },
      {
        id: "4",
        description: "Sandpaper",
      },
    ],
    duration: "2 days",
    complexity: "Advanced",
    steps: [
      {
        id: "1",
        description:
          "Prepare the concrete mix according to package instructions.",
      },
      {
        id: "2",
        description:
          "Pour the concrete mix into the plastic molds, ensuring even distribution.",
      },
      {
        id: "3",
        description:
          "Allow the concrete to set for 24 hours, then remove from molds.",
      },
      {
        id: "4",
        description:
          "Sand the edges of the planters to smooth out rough surfaces.",
      },
      {
        id: "5",
        description:
          "Place plants inside the concrete planters and display them indoors or outdoors.",
      },
    ],
    isFavorite: false,
  },
  {
    id: "7",
    title: "Rope Coasters",
    imageUrl:
      "https://images.unsplash.com/photo-1713990685958-c9af7ee0dd14?q=80&w=2847&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Make rustic rope coasters to protect your tabletops from hot and cold drinks.",
    materials: [
      {
        id: "1",
        description: "Rope",
      },
      {
        id: "2",
        description: "Hot glue gun",
      },
      {
        id: "3",
        description: "Cork sheet",
      },
      {
        id: "4",
        description: "Scissors",
      },
    ],
    duration: "1 hour",
    complexity: "Beginner",
    steps: [
      {
        id: "1",
        description:
          "Cut the rope into equal-length segments, depending on desired coaster size.",
      },
      {
        id: "2",
        description:
          "Coil the rope tightly, gluing it together as you go using the hot glue gun.",
      },
      {
        id: "3",
        description:
          "Continue coiling until you reach the desired coaster diameter.",
      },
      {
        id: "4",
        description: "Glue the end of the rope to secure the coil in place.",
      },
      {
        id: "5",
        description:
          "Cut cork sheets into circles slightly smaller than the coaster diameter and glue them to the bottom of the rope coil.",
      },
    ],
    isFavorite: false,
  },
  {
    id: "8",
    title: "Terracotta Pot Painting",
    imageUrl:
      "https://images.unsplash.com/photo-1613563967994-faa3a4e08455?q=80&w=3088&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Personalize plain terracotta pots with colorful designs.",
    materials: [
      {
        id: "1",
        description: "Terracotta pots",
      },
      {
        id: "2",
        description: "Acrylic paint",
      },
      {
        id: "3",
        description: "Paintbrushes",
      },
      {
        id: "4",
        description: "Sealer",
      },
    ],
    duration: "2 hours",
    complexity: "Beginner",
    steps: [
      {
        id: "1",
        description: "Clean the terracotta pots to remove any dirt or debris.",
      },
      {
        id: "2",
        description:
          "Paint the pots with a base coat of acrylic paint in a solid color.",
      },
      {
        id: "3",
        description:
          "Use smaller brushes to add intricate designs or patterns to the pots.",
      },
      {
        id: "4",
        description:
          "Allow the paint to dry completely before applying a coat of sealer.",
      },
      {
        id: "5",
        description:
          "Place plants inside the painted pots and display them around your home or garden.",
      },
    ],
    isFavorite: false,
  },
  {
    id: "9",
    title: "Beeswax Wrap",
    imageUrl:
      "https://images.unsplash.com/photo-1632142334452-7efccdbf9a1d?q=80&w=3088&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Make eco-friendly beeswax wraps to use as an alternative to plastic cling wrap.",
    materials: [
      {
        id: "1",
        description: "Cotton fabric",
      },
      {
        id: "2",
        description: "Beeswax pellets",
      },
      {
        id: "3",
        description: "Parchment paper",
      },
      {
        id: "4",
        description: "Iron",
      },
    ],
    duration: "1 hour",
    complexity: "Advanced",
    steps: [
      {
        id: "1",
        description:
          "Cut cotton fabric into squares or rectangles of various sizes.",
      },
      {
        id: "2",
        description: "Sprinkle beeswax pellets evenly over the fabric.",
      },
      {
        id: "3",
        description:
          "Cover the fabric with parchment paper and iron on a low heat setting until the beeswax melts and saturates the fabric.",
      },
      {
        id: "4",
        description:
          "Remove the parchment paper and allow the wraps to cool and harden.",
      },
      {
        id: "5",
        description:
          "Use the beeswax wraps to cover bowls, wrap sandwiches, or store food items.",
      },
    ],
    isFavorite: false,
  },
  {
    id: "10",
    title: "Floating Shelves",
    imageUrl:
      "https://images.unsplash.com/photo-1556910602-38f53e68e15d?q=80&w=2825&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Build sleek floating shelves to display decorative items or books.",
    materials: [
      {
        id: "1",
        description: "Wood boards",
      },
      {
        id: "2",
        description: "Floating shelf brackets",
      },
      {
        id: "3",
        description: "Screws",
      },
      {
        id: "4",
        description: "Drill",
      },
    ],
    duration: "1 day",
    complexity: "Intermediate",
    steps: [
      {
        id: "1",
        description: "Cut wood boards to desired shelf lengths using a saw.",
      },
      {
        id: "2",
        description:
          "Install floating shelf brackets onto the wall, ensuring they are level.",
      },
      {
        id: "3",
        description:
          "Attach the wood boards to the brackets using screws and a drill.",
      },
      {
        id: "4",
        description: "Check the shelves for stability and adjust as needed.",
      },
      {
        id: "5",
        description:
          "Decorate the shelves with plants, books, or other decorative items.",
      },
    ],
    isFavorite: false,
  },
  {
    id: "11",
    title: "Concrete Candle Holders",
    imageUrl:
      "https://images.unsplash.com/photo-1510028735437-476418ee352d?q=80&w=3024&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Craft minimalist concrete candle holders to add a modern touch to your home decor.",
    materials: [
      {
        id: "1",
        description: "Concrete mix",
      },
      {
        id: "2",
        description: "Disposable cups",
      },
      {
        id: "3",
        description: "Candle wicks",
      },
      {
        id: "4",
        description: "Cooking spray",
      },
    ],
    duration: "2 days",
    complexity: "Intermediate",
    steps: [
      {
        id: "1",
        description:
          "Mix concrete according to package instructions in disposable cups.",
      },
      {
        id: "2",
        description: "Spray cooking spray inside smaller cups to act as molds.",
      },
      {
        id: "3",
        description:
          "Pour concrete mix into molds, ensuring the wick is centered.",
      },
      {
        id: "4",
        description:
          "Allow concrete to cure for 24 hours before removing from molds.",
      },
      {
        id: "5",
        description:
          "Trim wicks and place candles in holders for a modern, industrial look.",
      },
    ],
    isFavorite: false,
  },
  {
    id: "12",
    title: "Herb Garden",
    imageUrl:
      "https://images.unsplash.com/photo-1688176971147-80c37d48977f?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Create a small herb garden to grow fresh herbs for cooking.",
    materials: [
      {
        id: "1",
        description: "Planter box",
      },
      {
        id: "2",
        description: "Potting soil",
      },
      {
        id: "3",
        description: "Herb seeds",
      },
      {
        id: "4",
        description: "Watering can",
      },
    ],
    duration: "1 week",
    complexity: "Beginner",
    steps: [
      {
        id: "1",
        description:
          "Fill the planter box with potting soil, leaving some space at the top.",
      },
      {
        id: "2",
        description:
          "Plant herb seeds according to package instructions, spacing them evenly.",
      },
      {
        id: "3",
        description: "Water the soil thoroughly, ensuring it is evenly moist.",
      },
      {
        id: "4",
        description:
          "Place the planter box in a sunny location, ensuring the herbs receive adequate sunlight.",
      },
      {
        id: "5",
        description:
          "Monitor the herbs' growth and water as needed until ready for harvest.",
      },
    ],
    isFavorite: false,
  },
  {
    id: "13",
    title: "Bird Feeder",
    imageUrl:
      "https://images.unsplash.com/photo-1590238752072-9f2749ff669c?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Construct a bird feeder to attract birds to your garden or balcony.",
    materials: [
      {
        id: "1",
        description: "Wooden planks",
      },
      {
        id: "2",
        description: "Screws",
      },
      {
        id: "3",
        description: "Birdseed",
      },
      {
        id: "4",
        description: "Drill",
      },
    ],
    duration: "2 hours",
    complexity: "Beginner",
    steps: [
      {
        id: "1",
        description:
          "Cut wooden planks to desired dimensions for the feeder base, sides, and roof.",
      },
      {
        id: "2",
        description:
          "Assemble the feeder using screws, ensuring it is sturdy and secure.",
      },
      {
        id: "3",
        description:
          "Drill holes for the birdseed and perches, according to bird feeder design.",
      },
      {
        id: "4",
        description:
          "Fill the feeder with birdseed and hang it in a suitable location.",
      },
      {
        id: "5",
        description:
          "Regularly refill the feeder and enjoy watching the visiting birds.",
      },
    ],
    isFavorite: false,
  },
  {
    id: "14",
    title: "Mason Jar Lanterns",
    imageUrl:
      "https://images.unsplash.com/photo-1496193574520-069d8f5c945e?q=80&w=2864&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Make decorative lanterns using mason jars and tea lights.",
    materials: [
      {
        id: "1",
        description: "Mason jars",
      },
      {
        id: "2",
        description: "Tea lights",
      },
      {
        id: "3",
        description: "Twine",
      },
      {
        id: "4",
        description: "Decorative stones",
      },
    ],
    duration: "1 hour",
    complexity: "Beginner",
    steps: [
      {
        id: "1",
        description:
          "Wrap twine around the mouth of each mason jar, securing it with a knot.",
      },
      {
        id: "2",
        description:
          "Place decorative stones at the bottom of each jar for stability.",
      },
      {
        id: "3",
        description:
          "Insert a tea light into each jar, ensuring it sits securely on the stones.",
      },
      {
        id: "4",
        description:
          "Light the tea lights and hang the lanterns in desired locations.",
      },
      {
        id: "5",
        description:
          "Enjoy the cozy ambiance created by the flickering candlelight.",
      },
    ],
    isFavorite: false,
  },
  {
    id: "15",
    title: "DIY Fruit Crate Shelves",
    imageUrl:
      "https://images.unsplash.com/photo-1598962099619-528a224cb625?q=80&w=2951&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Repurpose old fruit crates into rustic shelves for storage or display.",
    materials: [
      {
        id: "1",
        description: "Fruit crates",
      },
      {
        id: "2",
        description: "Screws",
      },
      {
        id: "3",
        description: "Twine",
      },
      {
        id: "4",
        description: "Wall anchors",
      },
      {
        id: "5",
        description: "Paint or stain",
      },
    ],
    duration: "2 hours",
    complexity: "Advanced",
    steps: [
      {
        id: "1",
        description:
          "Arrange fruit crates in desired configuration for shelving unit.",
      },
      {
        id: "2",
        description:
          "Secure crates together using screws, ensuring they are stable and aligned.",
      },
      {
        id: "3",
        description:
          "Attach shelving unit to the wall using wall anchors for added support.",
      },
      {
        id: "4",
        description:
          "Paint or stain the crates to enhance their appearance and protect the wood.",
      },
      {
        id: "5",
        description:
          "Use shelves for storing books, displaying decor items, or organizing household essentials.",
      },
    ],
    isFavorite: false,
  },
];

export default projects;
