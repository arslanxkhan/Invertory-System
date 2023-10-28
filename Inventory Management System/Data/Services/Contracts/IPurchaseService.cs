using Models.Dto;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Data.Services.Contracts
{
    public interface IPurchaseService
    {
        Task<bool> Add(PurchasesDto dto);
        List<PurchasesDto> GetAll();

    }
}
