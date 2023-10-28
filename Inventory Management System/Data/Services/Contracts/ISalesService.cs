using Models.DB;
using Models.Dto;

namespace Data.Services.Contracts
{
    public interface ISalesService
    {
        Task<bool> Sale(SalesDto dto);

        List<SalesDto> GetSales();
    }
}
