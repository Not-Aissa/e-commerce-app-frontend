interface GraphicsCard {
  name: string;
  brand: string;
  subBrand: string;
  price: number;
  target: string;
  specifications: {
    vram: string;
    ports: string[];
  };
}

export default GraphicsCard;
