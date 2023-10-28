using Data.Services.Contracts;
using Models.DB;
using Models.Dto;

namespace Data.Services.Implementation
{
    public class ProductService : BaseService, IProductService
    {
        public async Task<long> Add(ProductDto dto)
        {

            if (dto.Quantity is null) dto.Quantity = 0;

            var model = Mapper.Map<Products>(dto);

            UnitOfWork.Products.Add(model);
            await UnitOfWork.SaveChangesAsync();

            return model.Id;
        }

        public async Task<bool> Delete(long id)
        {
            var prod = await UnitOfWork.Products.Get(id);
            UnitOfWork.Products.Delete(prod);
            return await UnitOfWork.SaveChangesAsync();
        }

        public List<ProductDto> GetAll()
        {
            var pro = UnitOfWork.Products.GetAll();
            return Mapper.Map<List<ProductDto>>(pro);
        }

        public Products Get(long id)
        {
            throw new NotImplementedException();
        }

        public async Task<bool> Update(ProductDto dto)
        {
            var model = Mapper.Map<Products>(dto);
            UnitOfWork.Products.Update(model);

            return await UnitOfWork.SaveChangesAsync();
        }
    }
}
