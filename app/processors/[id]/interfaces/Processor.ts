interface Processor {
  name: string;
  brand: string;
  price: number;
  target: string;
  specifications: {
    speed: number;
    cores: number;
    logicalProcessors: number;
  };
}

export default Processor;
