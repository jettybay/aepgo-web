export interface CarouselSlide {
  src: string;
  alt: string;
  title: string;
  subtitle: string;
}

/** Shared transform params so every remote image is served at one optimised size. */
const UNSPLASH_PARAMS = "auto=format&fit=crop&w=1200&q=70";

export const inventoryGallery: CarouselSlide[] = [
  {
    src: `https://images.unsplash.com/photo-1582284540020-8acbe03f4924?${UNSPLASH_PARAMS}`,
    alt: "Red tomatoes on a brown wooden table, photo by engin akyurt",
    title: "Tomatoes",
    subtitle: "Grade A · Kano Hub",
  },
  {
    src: `https://images.unsplash.com/photo-1601648764658-cf37e8c89b70?${UNSPLASH_PARAMS}`,
    alt: "Orange, red and green bell peppers stacked at a market, photo by Nick Fewings",
    title: "Peppers",
    subtitle: "Grade A · Kaduna Hub",
  },
  {
    src: `https://images.unsplash.com/photo-1683355739329-cea18ba93f02?${UNSPLASH_PARAMS}`,
    alt: "A pile of red onions sitting next to each other, photo from Unsplash",
    title: "Onions",
    subtitle: "Grade B · Lagos Hub",
  },
];
