import prismaClient from "../../prisma";

interface CreateRequest {
  name: string;
}

class CreateCategoryService {
  async execute({ name }: CreateRequest) {
    if (name === "") {
      throw new Error("Invalid Name");
    }

    const category = await prismaClient.category.create({
      data: {
        name: name,
      },
      select: {
        id: true,
        name: true,
      },
    });

    return category;
  }
}
export { CreateCategoryService };
