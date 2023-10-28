using Database;
using Models.DB;

namespace Data.Services.DataService
{
    public class UnitOfWork : IUnitOfWork
    {
        private readonly DBContext dBContext;


        public UnitOfWork(DBContext dB)
        {
            this.dBContext = dB;
        }

        public IRepository<Products, long> Products { get; set; }
        public IRepository<Sales, long> Sales { get ; set ; }
        public IRepository<Purchases, long> Purchases { get ; set ; }

        public async Task<bool> SaveChangesAsync()
        {
            return await dBContext.SaveChangesAsync() > 0;
        }
    }
}
