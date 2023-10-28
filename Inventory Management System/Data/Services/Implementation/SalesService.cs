using Data.Services.Contracts;
using Models.DB;
using Models.Dto;

namespace Data.Services.Implementation
{
    public class SalesService : BaseService, ISalesService
    {
        public async Task<bool> Sale(SalesDto dto)
        {
            var model = Mapper.Map<Sales>(dto);
            UnitOfWork.Sales.Add(model);

            var purchase = await UnitOfWork.Products.Get(dto.ProductId);

            if (purchase is not null)
                purchase.Quantity -= dto.Quantity;

            return await UnitOfWork.SaveChangesAsync();
        }


        public List<SalesDto> GetSales()
        {
            return Mapper.Map<List<SalesDto>>(UnitOfWork.Sales.GetAll());
        }


    }
}
