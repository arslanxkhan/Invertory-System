using Microsoft.EntityFrameworkCore;
using Models.DB;

namespace Database
{
    public class DBContext : DbContext
    {
        public DBContext(DbContextOptions<DBContext> opt) : base(opt)
        {
        }


        public DbSet<Products> Products { get; set; }

        public DbSet<Sales> Sales { get; set; }

        public DbSet<Purchases> Purchases { get; set; }
    }
}
