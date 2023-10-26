import prismaClient from "../../prisma";

interface ProductRequest {
  name: string;
  price: string;
  banner: string;
  description: string;
  category_id: string;
}

class CreateProductService {
  async execute({
    name,
    price,
    description,
    category_id,
    banner,
  }: ProductRequest) {
    const product = await prismaClient.product.create({
      data: {
        name: name,
        price: price,
        description: description,
        category_id: category_id,
        banner: banner,
      },
    });

    return product;
  }
}

export { CreateProductService };
