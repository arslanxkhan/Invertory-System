using Models.DB;

namespace Data.Services.DataService
{
    public interface IUnitOfWork
    {

        public IRepository<Products, long> Products { get; set; }
        public IRepository<Sales, long> Sales { get; set; }
        public IRepository<Purchases, long> Purchases { get; set; }

        Task<bool> SaveChangesAsync();
    }
}
