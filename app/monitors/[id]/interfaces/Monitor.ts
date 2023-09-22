interface Monitor {
  name: string;
  brand: string;
  price: number;
  target: string;
  specifications: {
    resolution: string;
    delay: number;
    ports: string[];
    displayType: string;
    refreshRate: number;
  };
}

export default Monitor;
