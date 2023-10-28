using Data.Services.Contracts;
using Models.DB;
using Models.Dto;

namespace Data.Services.Implementation
{
    public class PurchaseService : BaseService, IPurchaseService
    {
        public async Task<bool> Add(PurchasesDto dto)
        {
            var model = Mapper.Map<Purchases>(dto);
            UnitOfWork.Purchases.Add(model);

            var product = await UnitOfWork.Products.Get(dto.ProductId);

            if (product is null) throw new Exception("Product not found");

            product.Quantity += dto.Quantity;

            return await UnitOfWork.SaveChangesAsync();
        }


        public List<PurchasesDto> GetAll()
        {
            var list = UnitOfWork.Purchases.GetAll();

            return Mapper.Map<List<PurchasesDto>>(list);
        }
    }
}
