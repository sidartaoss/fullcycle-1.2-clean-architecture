import ProductFactory from "../../../domain/product/factory/product.factory";
import UpdateProductUseCase from "./update.product.usecase";

const product = ProductFactory.create(
    "a",
    "Product 1",
    29.9
);

const input = {
    id: product.id,
    name: "Product Updated",
    price: 49.9
}

const MockRepository = () => {
    return {
        find: jest.fn().mockReturnValue(Promise.resolve(product)),
        findAll: jest.fn(),
        create: jest.fn(),
        update: jest.fn()
    }
};

describe("Update product use case unit tests", () => {

    it("should update a product", async () => {

        const productRepository = MockRepository();
        const updateProductUseCase = new UpdateProductUseCase(productRepository);

        const output = await updateProductUseCase.execute(input);

        expect(output).toEqual(input);

    });

    it("should throw an error when name is missing", async () => {
        const productRepository = MockRepository();
        const updateProductUseCase = new UpdateProductUseCase(productRepository);

        input.name = "";

        await expect(updateProductUseCase.execute(input))
            .rejects
            .toThrow("Name is required.");

    })

    it("should throw an error when price is equal to zero", async () => {
        const productRepository = MockRepository();
        const updateProductUseCase = new UpdateProductUseCase(productRepository);

        input.name = "Product Updated"
        input.price = 0.0;

        await expect(updateProductUseCase.execute(input))
            .rejects
            .toThrow("Price must be greater than zero.");

    })

    it("should throw an error when price is lower than zero", async () => {
        const productRepository = MockRepository();
        const updateProductUseCase = new UpdateProductUseCase(productRepository);

        input.price = -1.9;

        await expect(updateProductUseCase.execute(input))
            .rejects
            .toThrow("Price must be greater than zero.");

    })

});