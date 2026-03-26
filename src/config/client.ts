export const client = {
  // Business Details
  name: "Surrey Brickwork and Landscapes",
  tagline: "Landscaping | Gardens | Patios | Driveways",
  description: "Professional landscaper services in Guildford.",
  category: "Landscaper",
  yearEstablished: "",

  // Contact
  phone: "07512 782020",
  email: "",
  website: "",

  // Location
  address: "Guildford",
  city: "Guildford",
  county: "",
  postcode: "",
  basedIn: "Guildford",

  // People
  founderName: "",
  founderSurname: "",
  founderRole: "Director",

  // Social
  facebook: "",
  instagram: "",
  linkedin: "",
  twitter: "",

  // Reviews
  googleRating: "5",
  reviewCount: "2",

  // Services
  services: [
    { title: "Landscaping", description: "Complete garden transformations with expert hard and soft landscaping.", icon: "tree" },
    { title: "Garden Maintenance", description: "Regular garden care, lawn mowing, hedge trimming and seasonal tidy-ups.", icon: "shovel" },
    { title: "Fencing & Decking", description: "Quality timber fencing, gates, decking and outdoor structures.", icon: "wall" },
    { title: "Paving & Patios", description: "Professional patio and pathway installations in natural stone and block.", icon: "flower" },
  ],

  // DO NOT CHANGE — template defaults (desktop 16:9 + mobile 9:16 frames)
  cinematic: {
    frameCount: 181,
    frameDir: "/frames/",
    framePrefix: "frame_",
    frameExtension: ".jpg",
    framePadding: 4,
    scrollLength: "500vh",
    mobileFrameCount: 181,
    mobileFrameDir: "/frames-mobile/",
    scrubSpeed: 0.5,
    heroStillImage: "/images/hero-still.jpg",
    heroStillImageMobile: "/images/hero-still-mobile.jpg",
  },

  // DO NOT CHANGE — template defaults
  beforeAfter: {
    beforeImage: "/images/before.jpg",
    afterImage: "/images/after.jpg",
    beforeLabel: "Current Garden",
    afterLabel: "Our Vision",
  },

  // DO NOT CHANGE — template defaults
  transformations: [
    { before: "/images/before.jpg", after: "/images/after.jpg", label: "Complete Garden Renovation" },
    { before: "/images/patio-before.jpg", after: "/images/patio-after.jpg", label: "Patio Installation" },
    { before: "/images/front-before.jpg", after: "/images/front-after.jpg", label: "Front Garden" },
    { before: "/images/lawn-before.jpg", after: "/images/lawn-after.jpg", label: "Lawn Restoration" },
    { before: "/images/fence-before.jpg", after: "/images/fence-after.jpg", label: "New Fencing" },
    { before: "/images/deck-before.jpg", after: "/images/deck-after.jpg", label: "Decking & Furniture" },
    { before: "/images/path-before.jpg", after: "/images/path-after.jpg", label: "Garden Path" },
    { before: "/images/border-before.jpg", after: "/images/border-after.jpg", label: "Planting Borders" },
    { before: "/images/drive-before.jpg", after: "/images/drive-after.jpg", label: "Driveway" },
  ] as { before: string; after: string; label: string }[],

  // Reviews — placeholder
  reviews: [
    { name: "Sappho Wong", rating: 5, text: "Ross is a very responsible person and is fast response.  He and his team did an excellent brickworks and landscaping to my garden.  He helped paving the edge and levelling the area with a nice patio in limestone. He also clean up the mess after the work.", date: "7 months ago" },
    { name: "Adrian Legassick", rating: 5, text: "Ross and Liam did a fantastic job of laying a concrete shed base. The work was completed on time: the base is perfect. The site was left clean and the price was exactly what was quoted. It was refreshing dealing with builders who do everything they say they will and on time. Great work!.", date: "7 months ago" },
    { name: "Jackie Travis", rating: 5, text: "Outstanding Work by Ross - Highly Recommended!  Ross recently completed a major project on our home, which involved helping relocate our front door from the side of the house to the front. He did all the building work necessary for our door company to fit the new door in its new space. He also transformed our front yard with a beautiful new patio and reduced the size of the lawn to create a more modern and low-maintenance landscape.  From start to finish, Ross demonstrated exceptional skill and professionalism. The new front entry has completely transformed the look of our home and added significant curb appeal.  The landscaping work Ross did is equally impressive. The patio is expertly laid out, and the design fits seamlessly with the overall aesthetic of our property.  Ross was punctual, and kept the work area tidy. We couldn't be happier with the final result, and I would highly recommend Ross to anyone looking for a skilled and reliable builder. He exceeded our expectations in every way!", date: "a year ago", badge: "Local Guide" },
  ] as { name: string; rating: number; text: string; date: string; badge?: string }[],

  // SEO
  seo: {
    title: "Surrey Brickwork and Landscapes | Landscaper in Guildford",
    description: "Professional landscaper in Guildford. 5.0-star rated on Google. Call for a free quote.",
  },
};
