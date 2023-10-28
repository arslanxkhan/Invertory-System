using Models.DB;
using Models.Dto;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Data.Services.Contracts
{
    public interface IProductService : ICurdService<Products, ProductDto, long>
    {
    }
}
